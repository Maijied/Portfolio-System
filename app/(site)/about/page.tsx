import type { Metadata } from 'next';
import Link from 'next/link';

import { ScrollReveal } from '@/components/ScrollReveal';
import { getArtist } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Biography and artist statement.',
};

export default async function AboutPage() {
  const artist = await getArtist();

  return (
    <div className="gutter pb-8 pt-12 md:pt-20">
      <header className="editorial-grid">
        <h1 className="optical-hang col-span-4 text-h1 md:col-span-7">About</h1>
      </header>

      {/* Statement first. It is the reason to read the biography, not the other
          way round. */}
      <ScrollReveal as="section" className="editorial-grid mt-20 md:mt-32">
        <div className="col-span-4 md:col-span-3">
          <p className="label text-mute">Artist statement</p>
        </div>
        <div className="col-span-4 space-y-6 md:col-span-7 md:col-start-5">
          {artist.statementLong.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={index === 0 ? 'text-lead' : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="editorial-grid rule-top mt-24 pt-6 md:mt-40"
      >
        <div className="col-span-4 md:col-span-3">
          <p className="label text-mute">Biography</p>
        </div>
        <div className="col-span-4 space-y-6 md:col-span-7 md:col-start-5">
          {artist.bioLong.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="editorial-grid rule-top mt-24 pt-6 md:mt-40"
      >
        <div className="col-span-4 md:col-span-3">
          <p className="label text-mute">Education</p>
        </div>
        <div className="col-span-4 md:col-span-7 md:col-start-5">
          <ul className="space-y-10">
            {artist.education.map((entry) => (
              <li key={`${entry.institution}-${entry.start}`}>
                <p className="label text-mute">
                  {entry.start} – {entry.end}
                </p>
                <h2 className="mt-3 text-h3">{entry.degree}</h2>
                <p className="mt-2">
                  {entry.institution}, {entry.location}
                </p>
                {entry.focus ? (
                  <p className="caption mt-2">Focus: {entry.focus}</p>
                ) : null}
                {entry.thesis ? (
                  <p className="caption mt-1">Thesis: {entry.thesis}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-24 md:mt-32">
        <Link href="/cv" className="label link-underline">
          Full CV
        </Link>
      </ScrollReveal>
    </div>
  );
}
