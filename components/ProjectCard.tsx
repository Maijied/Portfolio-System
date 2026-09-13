'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Figure } from '@/components/Figure';
import { ScrollReveal } from '@/components/ScrollReveal';
import { featuredMedia } from '@/lib/content';
import type { Project } from '@/lib/types';

/**
 * Column spans for the work index, cycling every four projects. This is what
 * breaks the grid: no two consecutive entries share a width or an alignment, so
 * the index reads as a spread rather than a card wall.
 */
const layouts = [
  'col-span-4 md:col-span-7',
  'col-span-4 md:col-span-4 md:col-start-9',
  'col-span-4 md:col-span-5 md:col-start-3',
  'col-span-4 md:col-span-6 md:col-start-7',
];

type Props = {
  project: Project;
  index: number;
  priority?: boolean;
};

export function ProjectCard({ project, index, priority = false }: Props) {
  const media = featuredMedia(project);

  return (
    <ScrollReveal
      as="article"
      className={`${layouts[index % layouts.length]} mt-16 first:mt-0 md:mt-32`}
      delay={(index % 2) * 0.08}
    >
      <Link href={`/work/${project.slug}`} className="group block focus:outline-none">
        {media ? (
          <div className="relative overflow-hidden rounded border border-line/40 bg-paper-warm/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-line group-hover:shadow-xl group-hover:scale-[1.018]">
            <Figure
              media={media}
              showCaption={false}
              priority={priority}
              sizes="(min-width: 48rem) 55vw, 100vw"
              className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
            {/* Discipline badge chip */}
            <div className="absolute top-3 left-3 z-10">
              <span className="label text-[0.625rem] tracking-widest px-2 py-1 rounded-full bg-paper/85 text-ink backdrop-blur-md border border-line/50 transition-colors group-hover:bg-ink group-hover:text-paper">
                {project.discipline}
              </span>
            </div>
          </div>
        ) : null}

        <div className="mt-5 flex items-baseline justify-between gap-6">
          <h3 className="text-h3 flex items-center gap-2 transition-all duration-500 group-hover:opacity-75 group-hover:translate-x-1">
            <span>{project.title}</span>
            <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-label text-mute font-mono">
              &rarr;
            </span>
          </h3>
          <span className="label shrink-0 text-mute">{project.year}</span>
        </div>

        <p className="caption mt-2 max-w-[46ch] text-ink-soft group-hover:text-ink transition-colors duration-300">
          {project.summaryShort}
        </p>
      </Link>
    </ScrollReveal>
  );
}
