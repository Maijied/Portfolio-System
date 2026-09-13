/**
 * Renders the print routes from the static export to PDF.
 *
 * The documents are the website, paginated: each PDF is produced by printing a
 * real page from out/, so typography, spacing, and content cannot drift from
 * what visitors see.
 *
 * Usage:
 *   npm run build      # produces out/
 *   npm run pdfs       # produces public/documents/*.pdf
 *   npm run build:all  # both, in order
 *
 * Requires the Chromium build Playwright uses:
 *   npx playwright install chromium
 */

import { createReadStream, existsSync, readdirSync, readFileSync, unlinkSync } from 'node:fs';
import { mkdir, stat, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

import { PDFDocument } from 'pdf-lib';
import { chromium } from 'playwright';

import {
  buildRunningFooterTemplate,
  buildRunningHeaderTemplate,
  escapePdfHtml,
} from '../content/pdf-chrome.ts';
import { cvPdfFooter, proposalPdfFooter } from '../content/pdf-meta.ts';

const root = resolve(import.meta.dirname, '..');
const exportDir = join(root, 'out');
const outputDir = join(root, 'public', 'documents');
/** Preferred port; falls back to an ephemeral port when busy. */
const preferredPort = 4319;

type Document = {
  route: string;
  file: string;
  landscape: boolean;
  label: string;
  /** Playwright running footer template variant. */
  runningFooter?: 'proposal' | 'cv';
  /** Cover page prints without footer; body pages merge in afterwards. */
  splitCover?: boolean;
};

const pdfBodyMargin = {
  top: '28mm',
  right: '0',
  bottom: '22mm',
  left: '0',
} as const;

const proposalBodyMargin = {
  top: '22mm',
  right: '0',
  bottom: '20mm',
  left: '0',
} as const;

function buildProposalHeaderTemplate(name: string, title: string): string {
  return buildRunningHeaderTemplate(
    escapePdfHtml(`${title} — Project proposal`),
    escapePdfHtml(name),
  );
}

function buildProposalFooterTemplate(
  name: string,
  title: string,
  studentId: string,
): string {
  return buildRunningFooterTemplate(
    escapePdfHtml(`${name} — ${title}`),
    'BFA Project Proposal · Jagannath University',
    `ID: ${escapePdfHtml(studentId)} · Page <span class="pageNumber"></span>`,
  );
}

function buildCvHeaderTemplate(name: string): string {
  return buildRunningHeaderTemplate(
    escapePdfHtml('Curriculum vitae'),
    escapePdfHtml(name),
  );
}

function buildCvFooterTemplate(
  name: string,
  title: string,
  email: string,
): string {
  return buildRunningFooterTemplate(
    escapePdfHtml(`${name} — ${title}`),
    'Jagannath University · BFA 3D Art and Design',
    `${escapePdfHtml(email)} · Page <span class="pageNumber"></span>`,
  );
}

const documents: Document[] = [
  {
    route: '/print/portfolio/',
    file: 'portfolio.pdf',
    landscape: true,
    label: 'Portfolio',
  },
  {
    route: '/print/cv/',
    file: 'cv.pdf',
    landscape: false,
    label: 'CV',
  },
  {
    route: '/print/proposal/',
    file: 'proposal.pdf',
    landscape: false,
    label: 'Project proposal',
    runningFooter: 'proposal',
    splitCover: true,
  },
];

const mimeTypes: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

/**
 * Minimal static server for out/. Chromium refuses to load fonts and honour
 * relative asset paths reliably from file:// URLs, so the export is served over
 * HTTP for the duration of the run.
 */
function serve(directory: string, port: number): Promise<Server> {
  const server = createServer(async (request, response) => {
    const url = new URL(request.url ?? '/', `http://127.0.0.1:${port}`);
    const requested = normalize(decodeURIComponent(url.pathname));
    let target = join(directory, requested);

    if (!target.startsWith(directory)) {
      response.writeHead(403).end('Forbidden');
      return;
    }

    try {
      const info = await stat(target).catch(() => null);
      if (info?.isDirectory()) target = join(target, 'index.html');
      else if (!info && existsSync(`${target}.html`)) target = `${target}.html`;

      if (!existsSync(target)) {
        response.writeHead(404).end('Not found');
        return;
      }

      response.writeHead(200, {
        'Content-Type': mimeTypes[extname(target)] ?? 'application/octet-stream',
      });
      createReadStream(target).pipe(response);
    } catch {
      response.writeHead(500).end('Server error');
    }
  });

  return new Promise((resolvePromise, rejectPromise) => {
    server.once('error', rejectPromise);
    server.listen(port, '127.0.0.1', () => resolvePromise(server));
  });
}

async function mergeProposalPdf(coverPath: string, bodyPath: string, target: string) {
  const merged = await PDFDocument.create();
  const coverBytes = readFileSync(coverPath);
  const bodyBytes = readFileSync(bodyPath);
  const coverDoc = await PDFDocument.load(coverBytes);
  const bodyDoc = await PDFDocument.load(bodyBytes);
  const coverPages = await merged.copyPages(coverDoc, coverDoc.getPageIndices());
  const bodyPages = await merged.copyPages(bodyDoc, bodyDoc.getPageIndices());
  coverPages.forEach((page) => merged.addPage(page));
  bodyPages.forEach((page) => merged.addPage(page));
  const pdfBytes = await merged.save();
  await writeFile(target, pdfBytes);

  try {
    const files = readdirSync(outputDir);
    let maxV = 0;
    for (const file of files) {
      const match = file.match(/^proposal-v(\d+)\.pdf$/);
      if (match) {
        const v = parseInt(match[1], 10);
        if (v > maxV) maxV = v;
      }
    }
    const nextV = maxV + 1;
    const versionedTarget = join(outputDir, `proposal-v${nextV}.pdf`);
    await writeFile(versionedTarget, pdfBytes);
    console.log(`Versioned copy saved: proposal-v${nextV}.pdf`);
  } catch (err) {
    console.error('Failed to create versioned copy of proposal:', err);
  }

  unlinkSync(coverPath);
  unlinkSync(bodyPath);
}

async function listen(directory: string): Promise<{ server: Server; port: number }> {
  try {
    const server = await serve(directory, preferredPort);
    return { server, port: preferredPort };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!message.includes('EADDRINUSE')) throw error;
    const server = createServer();
    await new Promise<void>((resolvePromise, rejectPromise) => {
      server.once('error', rejectPromise);
      server.listen(0, '127.0.0.1', () => resolvePromise());
    });
    const port = (server.address() as AddressInfo).port;
    server.close();
    return { server: await serve(directory, port), port };
  }
}

async function main() {
  if (!existsSync(exportDir)) {
    throw new Error(
      'out/ not found. Run `npm run build` first, or use `npm run build:all`.',
    );
  }

  await mkdir(outputDir, { recursive: true });
  const { server, port } = await listen(exportDir);
  console.log(`Serving out/ on http://127.0.0.1:${port}`);

  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();

    for (const doc of documents) {
      const url = `http://127.0.0.1:${port}${doc.route}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);

      await page.evaluate(async () => {
        const images = Array.from(document.images);
        images.forEach((image) => {
          image.loading = 'eager';
        });
        await Promise.all(
          images.map((image) =>
            image.complete
              ? Promise.resolve()
              : new Promise<void>((done) => {
                  image.addEventListener('load', () => done(), { once: true });
                  image.addEventListener('error', () => done(), { once: true });
                }),
          ),
        );
      });

      const target = join(outputDir, doc.file);

      if (doc.splitCover) {
        const coverPath = `${target}.cover.pdf`;
        const bodyPath = `${target}.body.pdf`;
        const footerTemplate = buildProposalFooterTemplate(
          proposalPdfFooter.artistName,
          proposalPdfFooter.proposalTitle,
          proposalPdfFooter.studentId,
        );

        await page.pdf({
          path: coverPath,
          format: 'A4',
          landscape: doc.landscape,
          printBackground: true,
          preferCSSPageSize: false,
          pageRanges: '1-2',
          margin: { top: '0', right: '0', bottom: '0', left: '0' },
        });

        await page.pdf({
          path: bodyPath,
          format: 'A4',
          landscape: doc.landscape,
          printBackground: true,
          preferCSSPageSize: false,
          displayHeaderFooter: true,
          headerTemplate: buildProposalHeaderTemplate(
            proposalPdfFooter.artistName,
            proposalPdfFooter.proposalTitle,
          ),
          footerTemplate,
          pageRanges: '3-',
          margin: proposalBodyMargin,
        });

        await mergeProposalPdf(coverPath, bodyPath, target);
      } else if (doc.runningFooter) {
        const footerTemplate =
          doc.runningFooter === 'proposal'
            ? buildProposalFooterTemplate(
                proposalPdfFooter.artistName,
                proposalPdfFooter.proposalTitle,
                proposalPdfFooter.studentId,
              )
            : buildCvFooterTemplate(
                cvPdfFooter.artistName,
                cvPdfFooter.title,
                cvPdfFooter.email,
              );

        const headerTemplate =
          doc.runningFooter === 'proposal'
            ? buildProposalHeaderTemplate(
                proposalPdfFooter.artistName,
                proposalPdfFooter.proposalTitle,
              )
            : buildCvHeaderTemplate(cvPdfFooter.artistName);

        await page.pdf({
          path: target,
          format: 'A4',
          landscape: doc.landscape,
          printBackground: true,
          preferCSSPageSize: false,
          displayHeaderFooter: true,
          headerTemplate,
          footerTemplate,
          margin: pdfBodyMargin,
        });
      } else {
        await page.pdf({
          path: target,
          format: 'A4',
          landscape: doc.landscape,
          printBackground: true,
          margin: { top: '0', right: '0', bottom: '0', left: '0' },
          preferCSSPageSize: false,
        });

        if (doc.file === 'portfolio.pdf') {
          try {
            const files = readdirSync(outputDir);
            let maxV = 0;
            for (const file of files) {
              const match = file.match(/^portfolio-v(\d+)\.pdf$/);
              if (match) {
                const v = parseInt(match[1], 10);
                if (v > maxV) maxV = v;
              }
            }
            const nextV = maxV + 1;
            const versionedTarget = join(outputDir, `portfolio-v${nextV}.pdf`);
            await writeFile(versionedTarget, readFileSync(target));
            console.log(`Versioned copy saved: portfolio-v${nextV}.pdf`);
          } catch (err) {
            console.error('Failed to create versioned copy of portfolio:', err);
          }
        }

        if (doc.file === 'cv.pdf') {
          try {
            const files = readdirSync(outputDir);
            let maxV = 0;
            for (const file of files) {
              const match = file.match(/^cv-v(\d+)\.pdf$/);
              if (match) {
                const v = parseInt(match[1], 10);
                if (v > maxV) maxV = v;
              }
            }
            const nextV = maxV + 1;
            const versionedTarget = join(outputDir, `cv-v${nextV}.pdf`);
            await writeFile(versionedTarget, readFileSync(target));
            console.log(`Versioned copy saved: cv-v${nextV}.pdf`);
          } catch (err) {
            console.error('Failed to create versioned copy of CV:', err);
          }
        }
      }

      const { size } = await stat(target);
      console.log(
        `${doc.label.padEnd(18)} ${doc.file.padEnd(16)} ${(size / 1024).toFixed(
          0,
        )} kB`,
      );
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\nWrote ${documents.length} documents to public/documents/`);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`\nPDF build failed: ${message}`);
  if (message.includes("Executable doesn't exist")) {
    console.error('Install the browser with: npx playwright install chromium');
  }
  process.exitCode = 1;
});
