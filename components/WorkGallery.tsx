'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { ProjectCard } from '@/components/ProjectCard';
import type { Project } from '@/lib/types';

export function WorkGallery({ projects }: { projects: Project[] }) {
  const [activeDiscipline, setActiveDiscipline] = useState<string>('All');

  const disciplines = ['All', ...Array.from(new Set(projects.map((p) => p.discipline))).sort()];

  const filteredProjects =
    activeDiscipline === 'All'
      ? projects
      : projects.filter((p) => p.discipline === activeDiscipline);

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-line/50 pb-6">
        <div className="flex flex-wrap items-center gap-2 md:gap-4" role="tablist">
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
                <span className="ml-1.5 opacity-60 text-[0.65rem]">({count})</span>
              </button>
            );
          })}
        </div>

        <span className="label text-mute text-xs">
          Showing {filteredProjects.length} of {projects.length} Works
        </span>
      </div>

      {/* Projects Grid */}
      <div className="editorial-grid mt-16 md:mt-24">
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
