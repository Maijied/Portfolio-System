import type { Metadata } from 'next';

import { CvBody } from '@/components/CvBody';
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
    <div className="gutter pb-8 pt-12 md:pt-20">
      <header className="editorial-grid">
        <div className="col-span-4 md:col-span-7">
          <h1 className="optical-hang text-h1">CV</h1>
          <p className="label mt-6 text-mute">
            {artist.name} — {artist.title}
          </p>
        </div>

        <div className="col-span-4 md:col-span-3 md:col-start-10 md:pt-3">
          <ul className="space-y-1">
            <li>
              <a href={`mailto:${artist.email}`} className="link-underline">
                {artist.email}
              </a>
            </li>
            {artist.phone ? <li className="caption">{artist.phone}</li> : null}
            <li className="caption">{artist.location}</li>
          </ul>
          {download ? (
            <a
              href={download.href}
              className="label link-underline mt-6 inline-block"
            >
              Download PDF
            </a>
          ) : null}
        </div>
      </header>

      <div className="mt-20 md:mt-32">
        <CvBody artist={artist} projects={projects} />
      </div>
    </div>
  );
}
