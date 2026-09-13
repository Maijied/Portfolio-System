import Link from 'next/link';

import { Hero3D } from '@/components/Hero3D';
import { ProjectCard } from '@/components/ProjectCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getArtist, getProjects } from '@/lib/content';

export default async function HomePage() {
  const [artist, projects] = await Promise.all([getArtist(), getProjects()]);
  const selected = projects.slice(0, 3);

  return (
    <>
      {/* Landing view. The name is set at display scale and allowed to collide
          with the 3D moment behind it; the overlap is the composition. */}
      <section className="gutter relative min-h-[78vh] pb-16 pt-8 md:min-h-[86vh] md:pt-16">
        <Hero3D className="pointer-events-none absolute inset-x-0 top-[6%] mx-auto h-[62vh] w-full max-w-4xl md:top-[8%]" />

        <div className="relative">
          <p className="label text-mute">{artist.title}</p>
          <h1 className="optical-hang mt-6 text-display leading-[0.82]">
            {artist.name}
          </h1>
        </div>

        <div className="editorial-grid relative mt-16 md:mt-32">
          <p className="col-span-4 text-lead md:col-span-6 md:col-start-7">
            {artist.statementShort}
          </p>
        </div>
      </section>

      {/* Selected work. */}
      <section className="gutter rule-top pt-8">
        <div className="editorial-grid">
          <div className="col-span-4 md:col-span-3">
            <p className="label text-mute">Selected work</p>
          </div>
          <p className="col-span-4 caption md:col-span-4 md:col-start-9">
            {projects.length} projects, {projects[projects.length - 1]?.year.slice(0, 4)}{' '}
            to present.
          </p>
        </div>

        <div className="editorial-grid mt-16 md:mt-24">
          {selected.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              priority={index === 0}
            />
          ))}
        </div>

        <ScrollReveal className="mt-20 md:mt-28">
          <Link href="/work" className="label link-underline">
            All work
          </Link>
        </ScrollReveal>
      </section>

      {/* Statement pull. Large type on its own, no image, as a breath between
          the work index and the footer. */}
      <ScrollReveal as="section" className="gutter mt-32 md:mt-56">
        <div className="editorial-grid">
          <h2 className="col-span-4 text-h1 md:col-span-9 md:col-start-2">
            {artist.statementLong[artist.statementLong.length - 1]}
          </h2>
          <div className="col-span-4 mt-10 md:col-span-3 md:col-start-2">
            <Link href="/about" className="label link-underline">
              Read the full statement
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
