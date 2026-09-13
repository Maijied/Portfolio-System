'use client';

import Link from 'next/link';

import type { Artist } from '@/lib/types';

type Props = {
  artist: Artist;
  documents: { label: string; href: string; note: string }[];
};

export function Footer({ artist, documents }: Props) {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="gutter rule-top mt-32 pb-16 pt-16 md:mt-48 bg-paper-warm/30 border-t border-line/60">
      {/* Top Banner / Invitation to Work */}
      <div className="editorial-grid pb-14 border-b border-line/40">
        <div className="col-span-4 md:col-span-7">
          <span className="label text-accent font-mono text-xs tracking-widest uppercase">
            Inquiries &amp; Affiliations
          </span>
          <h2 className="font-display text-h2 mt-3 text-ink">
            Let&apos;s shape something together.
          </h2>
          <p className="caption mt-3 text-ink-soft max-w-xl">
            Open for sculpture commissions, academic &amp; institutional affiliations, collaborative studio projects, and exhibition invitations.
          </p>
        </div>

        <div className="col-span-4 md:col-span-5 flex flex-col justify-end gap-3 mt-6 md:mt-0">
          <div className="flex flex-wrap gap-2.5">
            <a
              href={`mailto:${artist.email}?subject=Sculpture%20Commission%20Inquiry`}
              className="label text-xs px-4 py-2 rounded-full bg-ink text-paper hover:bg-ink/80 transition-all inline-flex items-center gap-1.5"
            >
              <span>Commission Inquiry</span>
              <span>&rarr;</span>
            </a>
            <a
              href={`mailto:${artist.email}?subject=Work%20Type%20Invitation`}
              className="label text-xs px-4 py-2 rounded-full bg-paper border border-line/70 text-ink hover:border-ink transition-all inline-flex items-center gap-1.5"
            >
              <span>Work Invitation</span>
              <span>&rarr;</span>
            </a>
            <a
              href={`mailto:${artist.email}?subject=Studio%20Affiliation%20Inquiry`}
              className="label text-xs px-4 py-2 rounded-full bg-paper border border-line/70 text-ink hover:border-ink transition-all inline-flex items-center gap-1.5"
            >
              <span>Studio Affiliation</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="editorial-grid mt-14">
        <div className="col-span-4 md:col-span-5">
          <Link href="/" className="font-display text-h3 leading-none block text-ink hover:opacity-80 transition-opacity">
            {artist.name}
          </Link>
          <p className="caption mt-3 max-w-[34ch] text-ink-soft">
            {artist.title} &middot; {artist.location}
          </p>
          <p className="caption mt-1 text-mute">
            Jagannath University &middot; Fine Arts &amp; 3D Art
          </p>
        </div>

        <div className="col-span-2 md:col-span-2 md:col-start-7">
          <p className="label text-mute text-xs tracking-wider">Navigation</p>
          <ul className="mt-4 space-y-2 text-xs">
            <li>
              <Link href="/" className="label link-underline text-ink-soft hover:text-ink">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="label link-underline text-accent font-medium hover:text-ink flex items-center gap-1.5">
                <span>Portfolio Reader</span>
                <span className="text-[0.6rem] px-1.5 py-0.2 rounded bg-accent/15 font-mono">NEW</span>
              </Link>
            </li>
            <li>
              <Link href="/work" className="label link-underline text-ink-soft hover:text-ink">
                Selected Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="label link-underline text-ink-soft hover:text-ink">
                About &amp; Practice
              </Link>
            </li>
            <li>
              <Link href="/cv" className="label link-underline text-ink-soft hover:text-ink">
                Curriculum Vitae
              </Link>
            </li>
            <li>
              <Link href="/contact" className="label link-underline text-ink-soft hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-2">
          <p className="label text-mute text-xs tracking-wider">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-xs">
            {artist.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label link-underline text-ink-soft hover:text-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${artist.email}`}
                className="label link-underline text-ink-soft hover:text-ink"
              >
                Direct Email
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-4 md:col-span-3">
          <p className="label text-mute text-xs tracking-wider">Archive &amp; Documents</p>
          <ul className="mt-4 space-y-2.5 text-xs">
            <li>
              <Link
                href="/cv"
                className="label link-underline text-ink font-medium hover:text-accent flex items-center justify-between"
              >
                <span>Curriculum Vitae (Online)</span>
                <span className="caption text-mute text-[0.65rem]">&rarr;</span>
              </Link>
            </li>
            <li>
              <a
                href="/documents/cv.pdf"
                download="Borshon-Mondol-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="label link-underline text-ink-soft hover:text-ink flex items-center justify-between"
              >
                <span>CV Document (1-Page A4)</span>
                <span className="caption text-[0.625rem] px-1.5 py-0.5 rounded border border-line/70 font-mono text-mute">PDF</span>
              </a>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="label link-underline text-ink-soft hover:text-ink flex items-center justify-between"
              >
                <span>Interactive Monograph Reader</span>
                <span className="caption text-accent text-[0.625rem] font-mono">29 pp</span>
              </Link>
            </li>
            <li>
              <a
                href="/documents/portfolio.pdf"
                download="Borshon-Mondol-Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="label link-underline text-ink-soft hover:text-ink flex items-center justify-between"
              >
                <span>Full Portfolio (A4 Landscape)</span>
                <span className="caption text-[0.625rem] px-1.5 py-0.5 rounded border border-line/70 font-mono text-mute">PDF</span>
              </a>
            </li>
            <li>
              <a
                href="/documents/proposal.pdf"
                download="Borshon-Mondol-Proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="label link-underline text-ink-soft hover:text-ink flex items-center justify-between"
              >
                <span>Degree Proposal (3-Page A4)</span>
                <span className="caption text-[0.625rem] px-1.5 py-0.5 rounded border border-line/70 font-mono text-mute">PDF</span>
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <button
              type="button"
              onClick={scrollToTop}
              className="label text-xs text-mute hover:text-ink flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <span className="text-sm">&uarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="mt-16 pt-6 border-t border-line/30 flex flex-col md:flex-row items-center justify-between gap-4 text-mute text-xs">
        <p className="caption">
          &copy; {new Date().getFullYear()} {artist.name}. All works and sculptures remain the property of the artist.
        </p>
        <p className="caption">
          Dhaka, Bangladesh &middot; UTC+6
        </p>
      </div>
    </footer>
  );
}
