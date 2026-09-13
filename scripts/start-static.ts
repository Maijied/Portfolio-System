/**
 * Serve the static export (out/) for PDF-parity preview.
 * Kills stale servers on ports 3000 and 4319 before starting.
 *
 * Usage: npm run local:static  (runs build first)
 */

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { killPort } from './kill-port.ts';

const root = resolve(import.meta.dirname, '..');
const exportDir = resolve(root, 'out');
const port = 3000;
const host = '127.0.0.1';
const base = `http://${host}:${port}`;

if (!existsSync(exportDir)) {
  console.error('out/ not found. Run `npm run build` first.');
  process.exit(1);
}

killPort(3000);
killPort(4319);

console.log('Serving static export…\n');
console.log(`  Website          ${base}`);
console.log(`  Proposal (print) ${base}/print/proposal/`);
console.log(`  CV (print)       ${base}/print/cv/\n`);

const child = spawn(
  'npx',
  ['serve', exportDir, '-l', String(port), '--no-clipboard'],
  {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env, HOST: host },
  },
);

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

process.on('SIGINT', () => {
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  child.kill('SIGTERM');
});
