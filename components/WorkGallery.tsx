'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { ProjectCard } from '@/components/ProjectCard';
import type { Project } from '@/lib/types';

const PRIORITIZED_SLUGS = [
  'sleeping-dog',       // PDF Page 13
  'cape-buffalo-head',  // PDF Page 15
  'female-torso',       // PDF Page 17
  'bird-relief',        // PDF Page 19
];

export function WorkGallery({ projects }: { projects: Project[] }) {
  const [activeDiscipline, setActiveDiscipline] = useState<string>('All');

  // Prioritize PDF pages 13, 15, 17, 19 at the top of the gallery
  const orderedProjects = [...projects].sort((a, b) => {
    const aIdx = PRIORITIZED_SLUGS.indexOf(a.slug);
    const bIdx = PRIORITIZED_SLUGS.indexOf(b.slug);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return b.order - a.order;
  });

  const disciplines = ['All', ...Array.from(new Set(projects.map((p) => p.discipline))).sort()];

  const filteredProjects =
    activeDiscipline === 'All'
      ? orderedProjects
      : orderedProjects.filter((p) => p.discipline === activeDiscipline);

  return (
    <div>
      {/* Filter Bar & Monograph Reader Quick Link */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line/50 pb-6">
        <div className="flex flex-wrap items-center gap-2 md:gap-3" role="tablist">
          {disciplines.map((discipline) => {
            const isActive = activeDiscipline === discipline;
            const count =
              discipline === 'All'
                ? projects.length
                : projects.filter((p) => p.discipline === discipline).length;

            return (
              <button
                key={discipline}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveDiscipline(discipline)}
                className={`relative px-4 py-2 label text-xs cursor-pointer transition-colors duration-300 rounded-full ${
                  isActive ? 'text-ink font-semibold' : 'text-mute hover:text-ink'
                }`}
              >
                {isActive ? (
                  <motion.div
                    layoutId="discipline-pill"
                    className="absolute inset-0 bg-line/40 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
                <span>{discipline}</span>
                <span className="ml-1.5 opacity-60 text-[0.65rem] font-mono">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/portfolio"
            className="label text-xs text-ink px-3 py-1.5 rounded-full border border-line/70 bg-paper-warm/40 hover:bg-paper-warm transition-colors inline-flex items-center gap-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
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
            <span>Monograph Reader (29p)</span>
            <span>&rarr;</span>
          </Link>
          <span className="label text-mute text-xs hidden sm:inline">
            {filteredProjects.length} Studio Works
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="editorial-grid mt-12 md:mt-20">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            priority={index < 2}
          />
        ))}
      </div>
    </div>
  );
}
