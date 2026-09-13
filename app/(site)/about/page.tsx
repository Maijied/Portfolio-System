import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { CinematicReveal } from '@/components/CinematicReveal';
import { CollaborationCTA } from '@/components/CollaborationCTA';
import { TextReveal } from '@/components/TextReveal';
import { getArtist } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About the Artist',
  description:
    'Studio practice, sculptural philosophy, and academic research of Borshon Mondol, BFA 3D Art & Design at Jagannath University.',
};

const PRACTICE_PILLARS = [
  {
    number: '01',
    title: 'Sculptural Armatures & Kinetic Arrest',
    tag: 'Structural Engineering',
    summary:
      'Heavy-gauge welded GI and steel armatures engineered to suspend dynamic fluid trajectories and tensile memory cages permanently in physical space.',
    sampleImg: '/media/frozen-liquidity/01.jpg',
    materials: 'Steel wire, tensile armatures, resin, composite glazes',
  },
  {
    number: '02',
    title: 'Anatomical Morphology & Life Studies',
    tag: 'Biological Form',
    summary:
      'Rigorous anatomical analysis of canine, bovine, and classical human forms; focusing on skeletal alignment, resting muscle flow, and tactile realism.',
    sampleImg: '/media/sleeping-dog/01.jpg',
    materials: 'Studio moist clay, armature bone structure, serrated passes',
  },
  {
    number: '03',
    title: 'Subtractive Carving & Terracotta Inlay',
    tag: 'Planar Geometry',
    summary:
      'Direct subtractive chisel carving into composite blocks embedded with fractured terracotta shards, wet-sanded to reveal rich mosaic planar faces.',
    sampleImg: '/media/terracotta-head/01.jpg',
    materials: 'Chiseled stone matrix, fired terracotta shards, lime binder',
  },
  {
    number: '04',
    title: 'Vernacular Bengali Folk Craft',
    tag: 'Heritage Synthesis',
    summary:
      'Reinterpreting traditional ritual seating panels (pidi) and winnowing trays (kula) through chalk gesso substrates and fine-line Alpana ornamentation.',
    sampleImg: '/media/painted-pidi/01.jpg',
    materials: 'Seasoned hardwood, woven bamboo, mineral pigments, lacquer',
  },
];

const STUDIO_PROCESS_SHOTS = [
  {
    src: '/media/cape-buffalo-head/01.jpg',
    title: 'Cranial Bone Architecture',
    caption: 'Cantilevered horn sweep & muscle striations in studio clay',
  },
  {
    src: '/media/female-torso/01.jpg',
    title: 'Classical Contrapposto',
    caption: 'Thoracic twist and volumetric balance study from direct observation',
  },
  {
    src: '/media/bird-relief/01.jpg',
    title: 'Botanical Bas-Relief',
    caption: 'Multi-tier undercutting and leaf venation textures in clay slab',
  },
  {
    src: '/media/tonal-life-studies/01.jpg',
    title: 'Analytical Life Drawing',
    caption: 'Monumental chiaroscuro anatomy on toned kraft paper (5 ft × 3.5 ft)',
  },
];

export default async function AboutPage() {
  const artist = await getArtist();

  return (
    <div className="pb-24 pt-10 md:pt-16">
      {/* 1. VIP Hero Section with Artist Portrait */}
      <section className="gutter">
        <div className="editorial-grid items-center gap-y-12">
          {/* Left Column: Editorial Headline & Credentials */}
          <div className="col-span-4 md:col-span-7">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="label text-accent font-mono text-xs uppercase tracking-widest">
                Academic Dossier &middot; Studio Profile
              </span>
            </div>

            <TextReveal
              as="h1"
              text={artist.name}
              className="optical-hang mt-4 text-display leading-[0.84] font-display text-ink"
            />

            <p className="mt-3 text-lg md:text-xl font-display text-ink-soft">
              {artist.title} &middot; Figurative Sculptor &amp; Material Researcher
            </p>

            {/* Institutional Credentials Badge */}
            <div className="mt-6 p-4 rounded-xl border border-line/70 bg-paper-warm/40 backdrop-blur-xs flex items-center gap-4 max-w-xl">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-paper p-1.5 border border-line/60 flex items-center justify-center shadow-2xs">
                <Image
                  src="/media/brand/jnu-logo.png"
                  alt="Jagannath University Crest"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-ink">Jagannath University &middot; Dhaka, Bangladesh</p>
                <p className="caption text-ink-soft mt-0.5">
                  Faculty of Fine Arts &bull; Department of 3D Art and Design &bull; BFA Candidate
                </p>
                <p className="caption text-mute mt-0.5 font-mono">
                  Student ID: 22070301037 &bull; Academic Session 2023&ndash;2026
                </p>
              </div>
            </div>

            <p className="mt-6 text-lead text-ink font-light leading-relaxed max-w-xl">
              {artist.bioShort}
            </p>

            {/* Quick VIP Action Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/portfolio"
                className="label text-xs text-paper bg-ink hover:bg-ink/85 px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-2 shadow-sm"
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <span>Interactive Monograph Reader</span>
                <span>&rarr;</span>
              </Link>

              <Link
                href="/cv"
                className="label text-xs text-ink bg-paper border border-line/80 hover:bg-paper-warm px-4 py-2.5 rounded-full transition-all inline-flex items-center gap-1.5"
              >
                <span>Curriculum Vitae</span>
              </Link>

              <a
                href="/documents/cv.pdf"
                download="Borshon-Mondol-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="label text-xs text-mute hover:text-ink px-3 py-2 transition-colors flex items-center gap-1"
              >
                <span>Download CV PDF &darr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Artist Portrait */}
          <div className="col-span-4 md:col-span-5 md:col-start-8">
            <CinematicReveal variant="scale-fade" delay={0.1}>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border-2 border-line/70 bg-paper-warm shadow-2xl">
                {/* Main Portrait Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/media/artist/borshon-portrait.jpg"
                    alt="Borshon Mondol — Sculptor & 3D Artist"
                    fill
                    priority
                    sizes="(min-width: 48rem) 40vw, 90vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle lighting vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Metadata Caption on Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="caption font-mono text-[0.68rem] tracking-wider text-accent uppercase">
                        Studio Portrait &middot; 2025
                      </span>
                      <span className="caption font-mono text-[0.65rem] text-white/70">
                        Dhaka &bull; UTC+6
                      </span>
                    </div>
                    <p className="mt-1 font-display text-base font-semibold tracking-tight text-white">
                      Borshon Mondol
                    </p>
                    <p className="caption text-[0.75rem] text-white/80">
                      Sculptor &amp; Spatial Designer &middot; Jagannath University
                    </p>
                  </div>
                </div>

                {/* Studio Information Footnote */}
                <div className="px-5 py-3.5 bg-paper/95 border-t border-line/50 flex items-center justify-between text-xs text-ink-soft">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink">
                      Active Studio Practice
                    </span>
                  </div>
                  <a
                    href={`mailto:${artist.email}`}
                    className="label text-[0.7rem] link-underline text-accent"
                  >
                    borshonm563@gmail.com
                  </a>
                </div>
              </div>
            </CinematicReveal>
          </div>
        </div>
      </section>

      {/* 2. Philosophical Manifesto with Prominent Pull Quote */}
      <section className="gutter mt-24 md:mt-36">
        <div className="editorial-grid rule-top pt-12">
          <div className="col-span-4 md:col-span-3">
            <span className="label text-accent font-mono text-xs uppercase tracking-widest">
              Philosophical Stance
            </span>
            <h2 className="font-display text-h3 mt-2 text-ink">Artist Manifesto</h2>
          </div>

          <div className="col-span-4 md:col-span-8 md:col-start-5 space-y-6">
            <blockquote className="border-l-2 border-accent pl-6 py-2">
              <p className="font-display text-xl md:text-2xl font-light text-ink leading-snug italic">
                &ldquo;My work begins with ordinary studio actions &mdash; a pour, a stitch, a fold &mdash; and asks what happens when that action is enlarged, suspended, and made permanent. Liquid motion and physical gesture are among the fastest signals we read visually; I borrow that instant and refuse to return it, turning flow into form.&rdquo;
              </p>
            </blockquote>

            <div className="columns-1 md:columns-2 gap-8 text-ink-soft leading-relaxed text-sm md:text-base space-y-4 pt-4">
              {artist.statementLong.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="break-inside-avoid">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Practice Pillars with Visual Artifacts */}
      <section className="gutter mt-28 md:mt-40">
        <div className="editorial-grid rule-top pt-8 mb-12">
          <div className="col-span-4 md:col-span-4">
            <p className="label text-accent font-mono text-xs uppercase tracking-widest">Methodological Core</p>
            <h2 className="font-display text-h2 mt-2 text-ink">Pillars of Practice</h2>
          </div>
          <div className="col-span-4 md:col-span-6 md:col-start-7 flex items-end">
            <p className="caption text-ink-soft">
              A studio philosophy grounded in physical observation, structural engineering, and living heritage craft traditions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PRACTICE_PILLARS.map((pillar, idx) => (
            <CinematicReveal
              key={pillar.title}
              variant="scale-fade"
              delay={idx * 0.08}
              className="p-6 md:p-8 rounded-2xl border border-line/60 bg-paper-warm/30 hover:border-line hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-line/40">
                  <span className="caption font-mono text-xs text-accent font-semibold">
                    {pillar.number} &middot; {pillar.tag}
                  </span>
                  <span className="caption font-mono text-[0.65rem] text-mute uppercase">
                    Active Research
                  </span>
                </div>

                <div className="mt-5 relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-line/40 bg-paper">
                  <Image
                    src={pillar.sampleImg}
                    alt={pillar.title}
                    fill
                    sizes="(min-width: 48rem) 40vw, 90vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <h3 className="font-display text-h3 mt-5 text-ink leading-tight">
                  {pillar.title}
                </h3>
                <p className="caption text-ink-soft mt-2.5 leading-relaxed text-xs md:text-sm">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/30 flex items-center justify-between text-xs text-mute font-mono">
                <span className="truncate max-w-[28ch]">{pillar.materials}</span>
                <span className="text-accent">&rarr;</span>
              </div>
            </CinematicReveal>
          ))}
        </div>
      </section>

      {/* 4. Studio In-Situ: Material Process Highlights */}
      <section className="gutter mt-28 md:mt-40">
        <div className="editorial-grid rule-top pt-8 mb-10">
          <div className="col-span-4 md:col-span-4">
            <p className="label text-accent font-mono text-xs uppercase tracking-widest">In-Situ Documentation</p>
            <h2 className="font-display text-h2 mt-2 text-ink">Studio Process</h2>
          </div>
          <div className="col-span-4 md:col-span-6 md:col-start-7 flex items-end">
            <p className="caption text-ink-soft">
              Direct physical evidence from the sculpture benches &mdash; analytical proportioning, moisture control, and armature engineering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STUDIO_PROCESS_SHOTS.map((shot, i) => (
            <CinematicReveal
              key={shot.src}
              variant="fade-up"
              delay={i * 0.07}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-line/60 bg-paper shadow-xs">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  sizes="(min-width: 48rem) 22vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="mt-3 font-display text-sm font-semibold text-ink">
                {shot.title}
              </h4>
              <p className="caption text-[0.72rem] text-mute mt-0.5 leading-snug">
                {shot.caption}
              </p>
            </CinematicReveal>
          ))}
        </div>
      </section>

      {/* 5. Academic Mentorship & Institutional Standing */}
      <section className="gutter mt-28 md:mt-40">
        <div className="editorial-grid rule-top pt-8">
          <div className="col-span-4 md:col-span-3">
            <p className="label text-accent font-mono text-xs uppercase tracking-widest">Pedagogy &amp; Mentorship</p>
            <h2 className="font-display text-h3 mt-2 text-ink">Academic Framework</h2>
          </div>

          <div className="col-span-4 md:col-span-8 md:col-start-5 space-y-8">
            <div className="p-6 md:p-8 rounded-2xl border border-line/70 bg-paper-warm/40">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="caption font-mono text-xs text-accent">September 2023 &ndash; Present</span>
                  <h3 className="font-display text-h2 mt-1 text-ink">
                    Bachelor of Fine Arts (BFA) &middot; 3D Art and Design
                  </h3>
                  <p className="font-medium text-ink-soft mt-1">
                    Faculty of Fine Arts &bull; Jagannath University, Dhaka
                  </p>
                </div>
                <span className="caption px-3 py-1 rounded-full bg-paper border border-line font-mono text-xs text-ink">
                  Candidate
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-line/40 text-xs">
                <div>
                  <p className="font-semibold text-ink font-mono uppercase tracking-wider text-[0.7rem]">
                    Academic Supervision
                  </p>
                  <p className="mt-1.5 font-display text-base text-ink">Mohammad Jahidul Hoque</p>
                  <p className="caption text-ink-soft">Assistant Professor, Department of 3D Art and Design</p>
                  <p className="caption text-mute mt-1">Faculty Advisor for Degree Installations &amp; Armature Research</p>
                </div>

                <div>
                  <p className="font-semibold text-ink font-mono uppercase tracking-wider text-[0.7rem]">
                    Core Curriculum Modules
                  </p>
                  <ul className="caption mt-1.5 space-y-1 text-ink-soft">
                    <li>&bull; FAS-3102 / 3103: Advanced Animal &amp; Human Life Modelling</li>
                    <li>&bull; FAS-4102: Kinetic Illusion Installations &amp; Structural Armatures</li>
                    <li>&bull; Subtractive Stone, Terracotta Inlay &amp; Ceramic Bas-Relief</li>
                    <li>&bull; Vernacular Craft: Alpana Folk Painting &amp; Substrate Preparation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exhibitions Timeline */}
            <div className="pt-6 border-t border-line/40">
              <p className="label text-mute text-xs font-mono uppercase tracking-wider mb-4">
                Exhibitions &amp; Departmental Showcases
              </p>
              <div className="space-y-4">
                {artist.exhibitions.map((ex) => (
                  <div
                    key={`${ex.title}-${ex.year}`}
                    className="flex flex-wrap items-baseline justify-between gap-4 p-4 rounded-xl border border-line/40 bg-paper hover:border-line/80 transition-colors"
                  >
                    <div>
                      <h4 className="font-display text-base font-semibold text-ink">{ex.title}</h4>
                      <p className="caption text-ink-soft mt-0.5">{ex.venue} &middot; {ex.location}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="caption px-2 py-0.5 rounded bg-paper-warm border border-line text-[0.68rem] text-ink-soft">
                        {ex.kind} Exhibition
                      </span>
                      <span className="caption font-mono text-xs text-mute">{ex.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Collaboration and Affiliation Banner */}
      <CollaborationCTA />
    </div>
  );
}
