import type { Metadata } from 'next';

import { CvBody } from '@/components/CvBody';
import { PrintButton } from '@/components/PrintButton';
import { TextReveal } from '@/components/TextReveal';
import { getArtist, getDocuments, getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Education, projects, exhibitions, awards, and technical skills.',
};

export default async function CvPage() {
  const [artist, projects, documents] = await Promise.all([
    getArtist(),
    getProjects(),
    getDocuments(),
  ]);
  const download = documents.find((document) => document.label === 'CV');

  return (
    <div className="gutter pb-16 pt-12 md:pt-20">
      <header className="editorial-grid">
        <div className="col-span-4 md:col-span-7">
          <p className="label text-accent font-mono">Curriculum Vitae</p>
          <TextReveal as="h1" text={artist.name} className="optical-hang mt-4 text-h1" />
          <p className="caption mt-3 text-ink-soft">
            {artist.title} &middot; {artist.location}
          </p>
        </div>

        <div className="col-span-4 md:col-span-4 md:col-start-9 md:pt-4 flex flex-col justify-between">
          <ul className="space-y-1.5">
            <li>
              <a href={`mailto:${artist.email}`} className="link-underline caption text-ink">
                {artist.email}
              </a>
            </li>
            <li className="caption text-mute">{artist.location}</li>
            <li className="caption text-mute">Available for commissions &amp; affiliations</li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {download ? (
              <a
                href={download.href}
                download="Borshon-Mondol-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="label text-xs text-paper bg-ink hover:bg-ink/85 px-4 py-2 rounded-full transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download CV (PDF)</span>
              </a>
            ) : null}
            <PrintButton />
          </div>
        </div>
      </header>

      <div className="mt-16 md:mt-24">
        <CvBody artist={artist} projects={projects} />
      </div>
    </div>
  );
}
