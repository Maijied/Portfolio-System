/**
 * Extract a still frame from a video file using Playwright.
 * Usage: node --experimental-strip-types scripts/extract-video-frame.ts <video> <output.jpg>
 */

import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

import { chromium } from 'playwright';

const videoPath = resolve(process.argv[2] ?? '');
const outputPath = resolve(process.argv[3] ?? '');

if (!videoPath || !outputPath) {
  console.error('Usage: extract-video-frame.ts <video> <output.jpg>');
  process.exit(1);
}

if (!existsSync(videoPath)) {
  console.error(`Video not found: ${videoPath}`);
  process.exit(1);
}

mkdirSync(dirname(outputPath), { recursive: true });

const htmlPath = resolve(dirname(outputPath), '.frame-extract.html');
writeFileSync(
  htmlPath,
  `<!DOCTYPE html><html><body style="margin:0;background:#000">
<video id="v" src="file://${videoPath}" muted playsinline></video>
<script>
  const v = document.getElementById('v');
  v.addEventListener('loadeddata', () => { v.currentTime = 2; });
  v.addEventListener('seeked', () => { document.title = 'ready'; });
</script></body></html>`,
);

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'load' });
  await page.waitForFunction(() => document.title === 'ready', null, {
    timeout: 30000,
  });
  const video = page.locator('video');
  await video.screenshot({ path: outputPath, type: 'jpeg', quality: 85 });
  console.log(`Wrote ${outputPath}`);
} finally {
  await browser.close();
}
