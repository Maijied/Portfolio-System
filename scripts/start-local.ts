/**
 * Start Next.js dev server for local preview.
 * Kills stale servers on ports 3000 and 4319 before starting.
 *
 * Usage: npm run local
 */

import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

import { killPort } from './kill-port.ts';

const root = resolve(import.meta.dirname, '..');
const port = 3000;
const host = '127.0.0.1';
const base = `http://${host}:${port}`;

killPort(3000);
killPort(4319);

console.log('Starting local dev server…\n');
console.log(`  Website          ${base}`);
console.log(`  Proposal (print) ${base}/print/proposal/`);
console.log(`  CV (print)       ${base}/print/cv/\n`);

const child = spawn('npx', ['next', 'dev', '-p', String(port), '-H', host], {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

process.on('SIGINT', () => {
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  child.kill('SIGTERM');
});
