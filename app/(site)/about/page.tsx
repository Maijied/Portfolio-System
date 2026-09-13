import type { Metadata } from 'next';
import Link from 'next/link';

import { CinematicReveal } from '@/components/CinematicReveal';
import { CollaborationCTA } from '@/components/CollaborationCTA';
import { TextReveal } from '@/components/TextReveal';
import { getArtist } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Biography, artist statement, and studio philosophy of Borshon Mondol.',
};

const PRACTICE_AREAS = [
  {
    title: 'Sculptural Armatures & Modelling',
    description:
      'Heavy-gauge welded and wire armature engineering, figurative life clay modelling, dynamic tension balancing, and structural load studies.',
    tag: 'Structural Engineering',
  },
  {
    title: 'Anatomical Morphology',
    description:
      'Rigorous anatomical analysis of human and animal forms (e.g. Cape Buffalo head and life studies), focusing on skeletal mass, muscle flow, and tactile surface realism.',
    tag: 'Biological Form',
  },
  {
    title: 'Heritage Craft & Surface Folk Art',
    description:
      'Deep integration of traditional Bengali craft techniques—terracotta, alpana ornament, carved wood/bamboo, and ceremonial vessels—translated into contemporary sculptural objects.',
    tag: 'Material Heritage',
  },
  {
    title: 'Kinetic & Spatial Installations',
    description:
      'Large-scale spatial installations that arrest rapid kinetic events (such as paint flow and tensile fabric cages) into suspended sculptural moments.',
    tag: 'Spatial Narratives',
  },
];

export default async function AboutPage() {
  const artist = await getArtist();

  return (
    <div className="pb-16 pt-12 md:pt-20">
      <header className="gutter editorial-grid">
        <div className="col-span-4 md:col-span-8">
          <p className="label text-accent font-mono text-xs">Studio Practice</p>
          <TextReveal
            as="h1"
            text="About the Artist"
            className="optical-hang mt-4 text-h1 font-display"
          />
        </div>
      </header>

      {/* Statement first */}
      <CinematicReveal
        variant="fade-up"
        as="section"
        className="gutter editorial-grid mt-20 md:mt-32"
      >
        <div className="col-span-4 md:col-span-3">
          <p className="label text-mute">Artist statement</p>
        </div>
        <div className="col-span-4 space-y-6 md:col-span-7 md:col-start-5">
          {artist.statementLong.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={index === 0 ? 'text-lead text-ink font-light leading-relaxed' : 'text-ink-soft leading-relaxed'}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </CinematicReveal>

      {/* Areas of Practice */}
      <section className="gutter mt-28 md:mt-40">
        <div className="editorial-grid rule-top pt-8 mb-12">
          <div className="col-span-4 md:col-span-4">
            <p className="label text-accent font-mono text-xs">Methodology</p>
            <h2 className="font-display text-h2 mt-3">Areas of Practice</h2>
          </div>
          <div className="col-span-4 md:col-span-6 md:col-start-7 flex items-end">
            <p className="caption text-ink-soft">
              A studio philosophy grounded in physical observation, academic rigour, and experimental material processes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PRACTICE_AREAS.map((area, idx) => (
            <CinematicReveal
              key={area.title}
              variant="scale-fade"
              delay={idx * 0.08}
              className="p-8 rounded-xl border border-line bg-paper-warm/30 hover:border-line-dark transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="label text-[0.65rem] text-accent tracking-widest uppercase">
                  {area.tag}
                </span>
                <h3 className="font-display text-h3 mt-3 text-ink">{area.title}</h3>
                <p className="caption text-ink-soft mt-3 leading-relaxed">
                  {area.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-line/30 flex items-center justify-between text-xs text-mute">
                <span>0{idx + 1}</span>
                <span>Active Research</span>
              </div>
            </CinematicReveal>
          ))}
        </div>
      </section>

      {/* Biography */}
      <CinematicReveal
        variant="fade-up"
        as="section"
        className="gutter editorial-grid rule-top mt-28 pt-8 md:mt-40"
      >
        <div className="col-span-4 md:col-span-3">
          <p className="label text-mute">Biography</p>
        </div>
        <div className="col-span-4 space-y-6 md:col-span-7 md:col-start-5 text-ink-soft leading-relaxed">
          {artist.bioLong.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </CinematicReveal>

      {/* Education & Academic Framework */}
      <CinematicReveal
        variant="fade-up"
        as="section"
        className="gutter editorial-grid rule-top mt-28 pt-8 md:mt-40"
      >
        <div className="col-span-4 md:col-span-3">
          <p className="label text-mute">Academic Foundation</p>
        </div>
        <div className="col-span-4 md:col-span-7 md:col-start-5">
          <ul className="space-y-10">
            {artist.education.map((entry) => (
              <li key={`${entry.institution}-${entry.start}`} className="border-l-2 border-line pl-6">
                <p className="label text-accent font-mono text-xs">
                  {entry.start} – {entry.end}
                </p>
                <h2 className="mt-2 text-h3 font-display">{entry.degree}</h2>
                <p className="mt-1 text-ink font-medium">
                  {entry.institution}, {entry.location}
                </p>
                {entry.focus ? (
                  <p className="caption mt-3 text-ink-soft">
                    <strong>Focus:</strong> {entry.focus}
                  </p>
                ) : null}
                {entry.notes?.length ? (
                  <ul className="caption mt-2 list-disc pl-4 space-y-1 text-mute">
                    {entry.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href="/cv" className="label link-underline text-ink">
              View Complete Curriculum Vitae &rarr;
            </Link>
          </div>
        </div>
      </CinematicReveal>

      {/* Collaboration and Affiliation Banner */}
      <CollaborationCTA />
    </div>
  );
}
