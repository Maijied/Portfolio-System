import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { InteractiveProjectDetail } from '@/components/InteractiveProjectDetail';
import { TextReveal } from '@/components/TextReveal';
import {
  getProject,
  getProjectNeighbours,
  getProjectSlugs,
} from '@/lib/content';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summaryShort };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const neighbours = await getProjectNeighbours(slug);

  return (
    <article className="pb-16 pt-12 md:pt-20">
      {/* Title block */}
      <header className="gutter editorial-grid">
        <div className="col-span-4 md:col-span-8">
          <p className="label text-accent font-mono">{project.year} &middot; {project.discipline}</p>
          <TextReveal
            as="h1"
            text={project.title}
            className="optical-hang mt-4 text-h1 font-display"
          />
        </div>

        <dl className="col-span-4 space-y-5 md:col-span-3 md:col-start-10 md:pt-4">
          <Meta label="Medium" value={project.medium} />
          {project.role ? <Meta label="Role" value={project.role} /> : null}
          <Meta label="Tools & Materials" value={project.tools.join(', ')} />
        </dl>
      </header>

      {/* Interactive Detail Body with Lightbox, Timeline, and Adjacent Work */}
      <InteractiveProjectDetail project={project} neighbours={neighbours} />
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label text-mute">{label}</dt>
      <dd className="caption mt-2 text-ink">{value}</dd>
    </div>
  );
}
