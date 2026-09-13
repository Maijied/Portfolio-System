import type { Metadata } from 'next';

import { ScrollReveal } from '@/components/ScrollReveal';
import { getArtist, getDocuments } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Enquiries about exhibitions, commissions, and collaboration.',
};

export default async function ContactPage() {
  const [artist, documents] = await Promise.all([getArtist(), getDocuments()]);

  return (
    <div className="gutter pb-8 pt-12 md:pt-20">
      <header className="editorial-grid">
        <h1 className="optical-hang col-span-4 text-h1 md:col-span-8">
          Contact
        </h1>
      </header>

      {/* The email is set at display scale because it is the only action on the
          page. No form: a form would imply a backend the static site does not
          have, and would filter enquiries for no benefit. */}
      <ScrollReveal className="editorial-grid mt-20 md:mt-32">
        <div className="col-span-4 md:col-span-9">
          <p className="label text-mute">Enquiries</p>
          <a
            href={`mailto:${artist.email}`}
            className="optical-hang link-underline mt-5 block text-h2"
          >
            {artist.email}
          </a>
          <p className="mt-8 max-w-[52ch] text-lead">
            Available for exhibitions, commissions, and collaborative projects.
            For press, please include your deadline in the first message.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="editorial-grid rule-top mt-24 pt-6 md:mt-40"
      >
        <div className="col-span-4 md:col-span-3">
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

        <div className="col-span-4 md:col-span-4 md:col-start-5">
          <p className="label text-mute">Studio</p>
          <p className="mt-4">{artist.location}</p>
          {artist.phone ? <p className="caption mt-1">{artist.phone}</p> : null}
        </div>

        <div className="col-span-4 md:col-span-3 md:col-start-10">
          <p className="label text-mute">Documents</p>
          <ul className="mt-4 space-y-3">
            {documents.map((document) => (
              <li key={document.href}>
                <a href={document.href} className="link-underline">
                  {document.label}
                </a>
                <p className="caption">{document.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  );
}
