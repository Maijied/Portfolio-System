import type { Metadata } from 'next';
import Link from 'next/link';

import { PortfolioReader } from '@/components/PortfolioReader';
import { TextReveal } from '@/components/TextReveal';
import { getArtist } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Portfolio Monograph Reader',
  description:
    'Interactive 29-page academic monograph and sculptural portfolio of Borshon Mondol, Jagannath University.',
};

export default async function PortfolioPage() {
  const artist = await getArtist();

  return (
    <div className="gutter pb-20 pt-10 md:pt-16">
      {/* Header section */}
      <header className="editorial-grid mb-8 md:mb-12">
        <div className="col-span-4 md:col-span-8">
          <div className="flex items-center gap-2">
            <span className="label text-accent font-mono text-xs uppercase tracking-widest">
              Digital Monograph Archive
            </span>
            <span className="caption text-mute text-xs">&bull;</span>
            <span className="caption text-mute text-xs font-mono">29 Pages &bull; A4 Landscape</span>
          </div>
          <TextReveal
            as="h1"
            text="Portfolio Reader"
            className="optical-hang mt-3 text-h1 font-display"
          />
        </div>

        <div className="col-span-4 md:col-span-4 md:col-start-9 flex flex-col justify-end pt-3">
          <p className="caption text-ink-soft">
            Explore the complete 29-page monograph with animated page-flips, spread mode, section jumps, and high-resolution plate studies.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="/documents/portfolio.pdf"
              download="Borshon-Mondol-Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="label text-xs text-ink hover:text-accent underline underline-offset-4 flex items-center gap-1.5"
            >
              <span>Download PDF File (5.8 MB)</span>
              <span>&darr;</span>
            </a>
            <span className="text-mute text-xs">&bull;</span>
            <Link href="/work" className="label text-xs text-mute hover:text-ink">
              Browse by Works &rarr;
            </Link>
          </div>
        </div>
      </header>

      {/* Interactive Monograph Reader */}
      <div className="mt-6 md:mt-10">
        <PortfolioReader />
      </div>

      {/* Reader Guidance & Section Legend */}
      <div className="editorial-grid mt-12 pt-8 border-t border-line/40 text-xs text-ink-soft">
        <div className="col-span-4 md:col-span-4">
          <p className="font-semibold text-ink font-mono uppercase tracking-wider text-[0.7rem]">
            Navigation Keyboard Controls
          </p>
          <p className="caption text-mute mt-1.5 leading-relaxed">
            Use <kbd className="px-1.5 py-0.5 rounded bg-paper-warm border border-line text-ink font-mono">Left</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-paper-warm border border-line text-ink font-mono">Right</kbd> arrow keys or <kbd className="px-1.5 py-0.5 rounded bg-paper-warm border border-line text-ink font-mono">Space</kbd> to turn pages. Toggle <kbd className="px-1.5 py-0.5 rounded bg-paper-warm border border-line text-ink font-mono">Spread</kbd> for dual-page book view.
          </p>
        </div>

        <div className="col-span-4 md:col-span-4">
          <p className="font-semibold text-ink font-mono uppercase tracking-wider text-[0.7rem]">
            Selected Main Sculptures
          </p>
          <p className="caption text-mute mt-1.5 leading-relaxed">
            Pages 13&ndash;20 contain the core anatomical and relief sculptures: Sleeping Dog (p. 13), Cape Buffalo Head (p. 15), Female Torso (p. 17), and Bird Relief (p. 19).
          </p>
        </div>

        <div className="col-span-4 md:col-span-4">
          <p className="font-semibold text-ink font-mono uppercase tracking-wider text-[0.7rem]">
            Academic Accreditation
          </p>
          <p className="caption text-mute mt-1.5 leading-relaxed">
            Submitted in partial fulfilment of the BFA degree in 3D Art and Design, Faculty of Fine Arts, Jagannath University, under supervision of Prof. Mohammad Jahidul Hoque.
          </p>
        </div>
      </div>
    </div>
  );
}
