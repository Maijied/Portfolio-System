import type { Metadata } from 'next';

import './print.css';

export const metadata: Metadata = {
  // These routes are build artefacts, not pages for visitors.
  robots: { index: false, follow: false },
};

/**
 * Print routes deliberately have no navigation, no footer, no smooth scroll, and
 * no page transition. They are rendered to PDF by scripts/build-pdfs.ts.
 */
export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="print-root">{children}</div>;
}
