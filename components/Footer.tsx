import Link from 'next/link';

import type { Artist } from '@/lib/types';

type Props = {
  artist: Artist;
  documents: { label: string; href: string; note: string }[];
};

export function Footer({ artist, documents }: Props) {
  return (
    <footer className="gutter rule-top mt-32 pb-10 pt-12 md:mt-48">
      <div className="editorial-grid">
        <div className="col-span-4 md:col-span-5">
          <p className="font-display text-h3 leading-none">{artist.name}</p>
          <p className="caption mt-3 max-w-[34ch]">{artist.bioShort}</p>
        </div>

        <div className="col-span-2 md:col-span-2 md:col-start-7">
          <p className="label text-mute">Contact</p>
          <ul className="mt-4 space-y-1">
            <li>
              <a href={`mailto:${artist.email}`} className="link-underline">
                {artist.email}
              </a>
            </li>
            {artist.phone ? <li className="text-mute">{artist.phone}</li> : null}
            <li className="text-mute">{artist.location}</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-2">
          <p className="label text-mute">Elsewhere</p>
          <ul className="mt-4 space-y-1">
            {artist.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 md:col-span-2">
          <p className="label text-mute">Documents</p>
          <ul className="mt-4 space-y-1">
            {documents.map((document) => (
              <li key={document.href}>
                <Link href={document.href} className="link-underline">
                  {document.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="caption mt-16">
        &copy; {new Date().getFullYear()} {artist.name}. All work shown remains
        the property of the artist.
      </p>
    </footer>
  );
}
