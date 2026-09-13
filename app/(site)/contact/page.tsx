import type { Metadata } from 'next';

import { CinematicReveal } from '@/components/CinematicReveal';
import { TextReveal } from '@/components/TextReveal';
import { getArtist, getDocuments } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Direct contact, commission inquiries, and studio affiliations with Borshon Mondol.',
};

const INQUIRY_TYPES = [
  {
    title: 'Sculpture Commission',
    subject: 'Sculpture%20Commission%20Inquiry',
    description:
      'Inquire about original figurative sculpture, life studies, architectural reliefs, or custom material experiments.',
    action: 'Commission Inquiry',
  },
  {
    title: 'Work Type Invitation',
    subject: 'Work%20Type%20Invitation',
    description:
      'Invitations for studio residencies, institutional projects, workshops, and project contracts.',
    action: 'Send Invitation',
  },
  {
    title: 'Studio Affiliation',
    subject: 'Studio%20Affiliation%20Inquiry',
    description:
      'Academic affiliations, studio collaborations, and interdisciplinary research partnerships.',
    action: 'Propose Affiliation',
  },
  {
    title: 'Exhibitions & Curatorial',
    subject: 'Exhibition%20Proposal',
    description:
      'Gallery proposals, museum curatorial requests, and catalogue inclusion.',
    action: 'Curatorial Proposal',
  },
];

export default async function ContactPage() {
  const [artist, documents] = await Promise.all([getArtist(), getDocuments()]);

  return (
    <div className="gutter pb-16 pt-12 md:pt-20">
      <header className="editorial-grid">
        <div className="col-span-4 md:col-span-8">
          <p className="label text-accent font-mono text-xs">Direct Channel</p>
          <TextReveal
            as="h1"
            text="Get in Touch"
            className="optical-hang mt-4 text-h1 font-display"
          />
          <p className="mt-4 text-lead text-ink-soft max-w-2xl">
            Available for commissions, exhibitions, institutional affiliations, and collaborative studio investigations.
          </p>
        </div>
      </header>

      {/* Primary Email Banner */}
      <CinematicReveal
        variant="fade-up"
        className="mt-16 md:mt-24 p-8 md:p-12 rounded-2xl border border-line bg-paper-warm/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <span className="label text-mute text-xs tracking-wider uppercase">Direct Studio Email</span>
          <a
            href={`mailto:${artist.email}`}
            className="font-display text-h2 md:text-h1 mt-2 block text-ink hover:opacity-75 transition-opacity"
          >
            {artist.email}
          </a>
          <p className="caption mt-2 text-ink-soft">
            Typically responds within 24–48 hours for studio inquiries.
          </p>
        </div>

        <a
          href={`mailto:${artist.email}`}
          className="px-6 py-3.5 rounded-full label text-xs bg-ink text-paper hover:bg-ink/85 transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 shadow-sm"
        >
          <span>Compose Email</span>
          <span>&rarr;</span>
        </a>
      </CinematicReveal>

      {/* Structured Inquiry Cards */}
      <section className="mt-20 md:mt-28">
        <div className="rule-top pt-6 mb-10 flex items-baseline justify-between">
          <p className="label text-mute text-xs uppercase tracking-widest">
            Structured Inquiries
          </p>
          <span className="caption text-mute">Select your inquiry type for pre-formatted dispatch</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INQUIRY_TYPES.map((inq, idx) => (
            <CinematicReveal
              key={inq.title}
              variant="scale-fade"
              delay={idx * 0.07}
              className="p-8 rounded-xl border border-line bg-paper-warm/20 hover:border-line-dark hover:bg-paper-warm/50 transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-h3 text-ink">{inq.title}</h3>
                <p className="caption text-ink-soft mt-3 leading-relaxed">
                  {inq.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-line/40 flex items-center justify-between">
                <span className="label text-xs text-mute">Direct mailto</span>
                <a
                  href={`mailto:${artist.email}?subject=${inq.subject}`}
                  className="label text-xs text-ink hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <span>{inq.action}</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </CinematicReveal>
          ))}
        </div>
      </section>

      {/* Location & Studio Details */}
      <section className="editorial-grid rule-top mt-24 pt-10 md:mt-36">
        <div className="col-span-4 md:col-span-4">
          <p className="label text-mute text-xs tracking-widest uppercase">Studio Location</p>
          <p className="font-display text-h3 mt-3 text-ink">Dhaka, Bangladesh</p>
          <p className="caption text-ink-soft mt-2">
            Department of 3D Art &amp; Design &middot; Faculty of Fine Arts<br />
            Jagannath University, Dhaka
          </p>
          <p className="label text-accent font-mono text-xs mt-3">Timezone: UTC+6 (BST)</p>
        </div>

        <div className="col-span-4 md:col-span-4 md:col-start-6 mt-8 md:mt-0">
          <p className="label text-mute text-xs tracking-widest uppercase">Professional Profiles</p>
          <ul className="mt-3 space-y-2">
            {artist.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label link-underline text-ink flex items-center gap-2"
                >
                  <span>{social.label} Profile</span>
                  <span className="text-mute text-xs">&nearr;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 md:col-span-3 md:col-start-10 mt-8 md:mt-0">
          <p className="label text-mute text-xs tracking-widest uppercase">Documentation</p>
          <ul className="mt-3 space-y-2">
            {documents.map((doc) => (
              <li key={doc.href}>
                <a
                  href={doc.href}
                  download
                  className="caption text-ink hover:text-accent transition-colors block"
                >
                  <span className="label font-medium">{doc.label}</span> &middot; {doc.note}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
