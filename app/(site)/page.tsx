import Link from 'next/link';

import { CinematicReveal } from '@/components/CinematicReveal';
import { Hero3D } from '@/components/Hero3D';
import { MagneticElement } from '@/components/MagneticElement';
import { ProjectCard } from '@/components/ProjectCard';
import { TextReveal } from '@/components/TextReveal';
import { getArtist, getProjects } from '@/lib/content';

const DISCIPLINES = [
  { label: 'Sculpture & Armatures', note: 'Heavy-gauge armature & life modelling' },
  { label: 'Animal Morphology', note: 'Anatomical muscle & skeletal fidelity' },
  { label: 'Bengali Folk Craft', note: 'Terracotta, pidi & kula traditions' },
  { label: 'Suspended Kinetics', note: 'Liquid motion & physical duration' },
];

export default async function HomePage() {
  const [artist, projects] = await Promise.all([getArtist(), getProjects()]);
  const selected = projects.slice(0, 4);

  return (
    <>
      {/* Landing view with interactive 3D Hero Project Showcase */}
      <section className="gutter relative min-h-[85vh] pb-16 pt-8 md:min-h-[92vh] md:pt-16 flex flex-col justify-between">
        {/* Interactive 3D Floating Project Carousel */}
        <div className="absolute inset-x-0 top-[10%] mx-auto h-[55vh] md:h-[68vh] w-full max-w-5xl z-10 pointer-events-auto">
          <Hero3D className="h-full w-full" />
        </div>

        <div className="relative z-20 pointer-events-none">
          <p className="label text-accent font-mono text-xs tracking-widest uppercase">
            {artist.title} &middot; {artist.location}
          </p>
          <TextReveal
            as="h1"
            text={artist.name}
            className="optical-hang mt-4 text-display leading-[0.82] font-display text-ink"
          />
        </div>

        <div className="editorial-grid relative z-20 mt-20 md:mt-36 pointer-events-none">
          <div className="col-span-4 md:col-span-6 md:col-start-7 bg-paper/60 backdrop-blur-xs p-4 rounded-lg pointer-events-auto border border-line/30">
            <p className="text-lead text-ink-soft leading-relaxed font-light">
              {artist.statementShort}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <MagneticElement strength={0.2}>
                <Link
                  href="/work"
                  className="label text-xs text-paper bg-ink hover:bg-ink/85 px-4 py-2 rounded-full transition-all inline-flex items-center gap-1.5"
                >
                  <span>Explore All Works</span>
                  <span>&rarr;</span>
                </Link>
              </MagneticElement>
              <Link href="/about" className="label link-underline text-xs text-mute hover:text-ink">
                Studio Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines & Practice Horizontal Strip */}
      <section className="gutter rule-top pt-12 pb-12 bg-paper-warm/25">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {DISCIPLINES.map((d, i) => (
            <CinematicReveal
              key={d.label}
              variant="fade-up"
              delay={i * 0.06}
              className="border-l border-line/60 pl-4"
            >
              <span className="label text-accent font-mono text-[0.65rem]">0{i + 1}</span>
              <p className="font-display text-base text-ink mt-1 font-medium">{d.label}</p>
              <p className="caption text-mute text-xs mt-0.5">{d.note}</p>
            </CinematicReveal>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="gutter rule-top pt-16 md:pt-24">
        <div className="editorial-grid mb-12">
          <div className="col-span-4 md:col-span-4">
            <p className="label text-accent font-mono text-xs">Curated Portfolio</p>
            <h2 className="font-display text-h2 mt-2 text-ink">Selected Works</h2>
          </div>
          <div className="col-span-4 md:col-span-5 md:col-start-8 flex flex-col justify-end">
            <p className="caption text-ink-soft">
              Highlighting major degree projects, figurative sculptures, animal anatomical studies, and heritage craft works.
            </p>
          </div>
        </div>

        <div className="editorial-grid mt-12 md:mt-20">
          {selected.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              priority={index < 2}
            />
          ))}
        </div>

        <div className="mt-20 md:mt-28 flex items-center justify-between border-t border-line/40 pt-8">
          <span className="caption text-mute">
            Displaying 4 of {projects.length} archived studio projects
          </span>
          <MagneticElement strength={0.3}>
            <Link
              href="/work"
              className="label text-xs text-paper bg-ink hover:bg-ink/80 px-6 py-3 rounded-full transition-all inline-flex items-center gap-2"
            >
              <span>View All {projects.length} Works</span>
              <span>&rarr;</span>
            </Link>
          </MagneticElement>
        </div>
      </section>

      {/* Statement pull section with large typography */}
      <CinematicReveal
        as="section"
        variant="fade-up"
        className="gutter mt-32 md:mt-52 mb-16"
      >
        <div className="editorial-grid border-l-2 border-accent pl-6 md:pl-12 py-4">
          <span className="label text-accent font-mono text-xs uppercase tracking-widest col-span-4 md:col-span-12">
            Material Manifest
          </span>
          <h2 className="col-span-4 text-h2 md:text-h1 font-display text-ink mt-4 md:col-span-11 leading-[1.05]">
            &ldquo;{artist.statementLong[artist.statementLong.length - 1]}&rdquo;
          </h2>
          <div className="col-span-4 mt-8 md:col-span-4">
            <Link href="/about" className="label link-underline text-ink">
              Read the Full Artist Statement &rarr;
            </Link>
          </div>
        </div>
      </CinematicReveal>
    </>
  );
}
