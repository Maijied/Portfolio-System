/**
 * Renders each PDF page to PNG via Playwright print CSS for visual QA.
 * Usage: npm run build && node --experimental-strip-types scripts/verify-pdfs.ts
 */

import { createReadStream, existsSync, mkdirSync } from 'node:fs';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { extname, join, normalize, resolve } from 'node:path';
import { stat } from 'node:fs/promises';

import { chromium, type Page } from 'playwright';

const root = resolve(import.meta.dirname, '..');
const exportDir = join(root, 'out');
const outputDir = join(root, '.qa', 'pdf-pages');

const routes = [
  { route: '/print/proposal/', label: 'proposal', widthMm: 210, heightMm: 297 },
  { route: '/print/cv/', label: 'cv', widthMm: 210, heightMm: 297 },
  {
    route: '/print/portfolio/',
    label: 'portfolio',
    widthMm: 297,
    heightMm: 210,
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
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function mmToPx(mm: number): number {
  return Math.round(mm * (96 / 25.4));
}

function serve(directory: string, port: number) {
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

  return new Promise<{ server: ReturnType<typeof createServer>; port: number }>(
    (resolvePromise, rejectPromise) => {
      server.once('error', rejectPromise);
      server.listen(port, '127.0.0.1', () => {
        const address = server.address() as AddressInfo;
        resolvePromise({ server, port: address.port });
      });
    },
  );
}

async function capturePages(
  page: Page,
  label: string,
  widthPx: number,
  heightPx: number,
) {
  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const pageCount = Math.max(1, Math.ceil(totalHeight / heightPx));
  console.log(`${label}: ${pageCount} page(s)`);

  await page.setViewportSize({ width: widthPx, height: heightPx });

  for (let i = 0; i < pageCount; i++) {
    await page.evaluate(
      ([y, h]) => {
        document.documentElement.style.height = `${h}px`;
        document.body.style.height = `${h}px`;
        window.scrollTo(0, y);
      },
      [i * heightPx, heightPx],
    );

    const file = join(
      outputDir,
      `${label}-page-${String(i + 1).padStart(2, '0')}.png`,
    );
    await page.screenshot({ path: file, fullPage: false });
  }
}

async function main() {
  if (!existsSync(exportDir)) {
    throw new Error('out/ not found. Run `npm run build` first.');
  }

  mkdirSync(outputDir, { recursive: true });
  const { server, port } = await serve(exportDir, 0);
  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();
    await page.emulateMedia({ media: 'print' });

    for (const doc of routes) {
      const url = `http://127.0.0.1:${port}${doc.route}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await capturePages(
        page,
        doc.label,
        mmToPx(doc.widthMm),
        mmToPx(doc.heightMm),
      );
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\nWrote screenshots to ${outputDir}/`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
