import { execSync } from 'node:child_process';

/** Stop any process listening on a TCP port. No-op when nothing is bound. */
export function killPort(port: number): void {
  try {
    execSync(`fuser -k ${port}/tcp`, { stdio: 'ignore' });
  } catch {
    // Port was free or fuser unavailable — safe to continue.
  }
}
