import type { Metadata } from 'next';

import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects in digital sculpture, computational form, and spatial installation.',
};

export default async function WorkPage() {
  const projects = await getProjects();

  const disciplines = [...new Set(projects.map((p) => p.discipline))].sort();

  return (
    <section className="gutter pb-8 pt-12 md:pt-20">
      <header className="editorial-grid">
        <h1 className="optical-hang col-span-4 text-h1 md:col-span-7">Work</h1>
        <div className="col-span-4 md:col-span-4 md:col-start-9">
          <p className="label text-mute">Disciplines</p>
          <p className="caption mt-3">{disciplines.join(' / ')}</p>
        </div>
      </header>

      <div className="editorial-grid mt-20 md:mt-32">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            priority={index < 2}
          />
        ))}
      </div>
    </section>
  );
}
