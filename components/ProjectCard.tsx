'use client';

import Link from 'next/link';

import { Figure } from '@/components/Figure';
import { ScrollReveal } from '@/components/ScrollReveal';
import { featuredMedia } from '@/lib/content';
import type { Project } from '@/lib/types';

/**
 * Column spans for the work index, cycling every four projects.
 * Creates an intentional architectural monograph rhythm.
 */
const layouts = [
  'col-span-4 md:col-span-7',
  'col-span-4 md:col-span-4 md:col-start-9',
  'col-span-4 md:col-span-5 md:col-start-3',
  'col-span-4 md:col-span-6 md:col-start-7',
];

const PDF_PAGE_MAP: Record<string, number> = {
  'sleeping-dog': 13,
  'cape-buffalo-head': 15,
  'female-torso': 17,
  'bird-relief': 19,
};

type Props = {
  project: Project;
  index: number;
  priority?: boolean;
};

export function ProjectCard({ project, index, priority = false }: Props) {
  const media = featuredMedia(project);
  const pdfPage = PDF_PAGE_MAP[project.slug];

  return (
    <ScrollReveal
      as="article"
      className={`${layouts[index % layouts.length]} mt-12 first:mt-0 md:mt-28`}
      delay={(index % 2) * 0.06}
    >
      <Link href={`/work/${project.slug}`} className="group block focus:outline-none">
        {media ? (
          <div className="relative overflow-hidden rounded-xl border border-line/50 bg-paper-warm/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-line group-hover:shadow-xl group-hover:scale-[1.015]">
            <Figure
              media={media}
              showCaption={false}
              priority={priority}
              sizes="(min-width: 48rem) 55vw, 100vw"
              className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            />
            {/* Badges bar */}
            <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
              <span className="label text-[0.625rem] tracking-widest px-2.5 py-1 rounded-full bg-paper/90 text-ink backdrop-blur-md border border-line/60 transition-colors group-hover:bg-ink group-hover:text-paper shadow-2xs">
                {project.discipline}
              </span>

              {pdfPage ? (
                <span className="caption text-[0.625rem] font-mono px-2 py-0.5 rounded-full bg-black/65 text-accent backdrop-blur-md border border-accent/30 shadow-2xs">
                  PDF P. {pdfPage}
                </span>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="mt-4 flex items-baseline justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="caption text-[0.7rem] font-mono text-mute">
              {String(index + 1).padStart(2, '0')}.
            </span>
            <h3 className="text-h3 flex items-center gap-2 transition-all duration-400 group-hover:opacity-75 group-hover:translate-x-1 text-ink">
              <span>{project.title}</span>
              <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-label text-mute font-mono">
                &rarr;
              </span>
            </h3>
          </div>
          <span className="label shrink-0 text-mute font-mono text-xs">{project.year}</span>
        </div>

        <p className="caption mt-1 text-[0.8rem] text-accent font-mono italic">
          {project.medium}
        </p>

        <p className="caption mt-2 max-w-[46ch] text-ink-soft group-hover:text-ink transition-colors duration-300 text-xs md:text-sm leading-relaxed">
          {project.summaryShort}
        </p>
      </Link>
    </ScrollReveal>
  );
}
