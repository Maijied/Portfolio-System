import type { Metadata } from 'next';

import { TextReveal } from '@/components/TextReveal';
import { WorkGallery } from '@/components/WorkGallery';
import { getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects in digital sculpture, computational form, and spatial installation.',
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <section className="gutter pb-16 pt-12 md:pt-20">
      <header className="editorial-grid mb-12 md:mb-16">
        <div className="col-span-4 md:col-span-8">
          <p className="label text-mute">Portfolio Archive</p>
          <TextReveal
            as="h1"
            text="Selected Works"
            className="optical-hang mt-4 text-h1"
          />
        </div>
        <div className="col-span-4 md:col-span-4 md:col-start-9 flex flex-col justify-end pt-4">
          <p className="caption text-ink-soft">
            An ongoing exploration of figurative sculpture, anatomical volume, traditional craft, and contemporary form studies.
          </p>
        </div>
      </header>

      <WorkGallery projects={projects} />
    </section>
  );
}
