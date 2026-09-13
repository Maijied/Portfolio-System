import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Figure } from '@/components/Figure';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SculptureViewer } from '@/components/SculptureViewer';
import {
  featuredMedia,
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

  const lead = featuredMedia(project);
  const neighbours = await getProjectNeighbours(slug);
  // The lead image opens the page, so the gallery below skips it.
  const gallery = project.media.filter((item) => item !== lead);

  return (
    <article className="pb-8 pt-12 md:pt-20">
      {/* Title block. Metadata sits in a narrow right column so the title can
          run wide without a rigid two-up header. */}
      <header className="gutter editorial-grid">
        <div className="col-span-4 md:col-span-8">
          <p className="label text-mute">{project.year}</p>
          <h1 className="optical-hang mt-5 text-h1">{project.title}</h1>
        </div>

        <dl className="col-span-4 space-y-5 md:col-span-3 md:col-start-10 md:pt-2">
          <Meta label="Medium" value={project.medium} />
          {project.role ? <Meta label="Role" value={project.role} /> : null}
          <Meta label="Tools" value={project.tools.join(', ')} />
        </dl>
      </header>

      {/* Lead image presentation: interactive multi-angle viewer for multi-plate studies, or full-bleed figure for single works. */}
      {project.media.length > 1 ? (
        <SculptureViewer media={project.media} />
      ) : lead ? (
        <div className="mt-12 md:mt-20">
          <Figure
            media={lead}
            priority
            showCaption={false}
            className="[&_figcaption]:gutter"
          />
          {lead.caption ? (
            <p className="gutter caption mt-3">{lead.caption}</p>
          ) : null}
        </div>
      ) : null}

      {/* Summary, indented to give the lead image room to breathe. */}
      <ScrollReveal as="section" className="gutter editorial-grid mt-20 md:mt-32">
        <p className="col-span-4 text-lead md:col-span-7 md:col-start-4">
          {project.summaryLong}
        </p>
      </ScrollReveal>

      {/* Case-study sections. Concept, process, material, outcome — each with its
          own images where they belong rather than pooled in a gallery. */}
      {project.sections.map((section, index) => (
        <section key={section.heading} className="gutter mt-24 md:mt-40">
          <div className="editorial-grid rule-top pt-6">
            <ScrollReveal className="col-span-4 md:col-span-3">
              <p className="label text-mute">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-4 text-h3">{section.heading}</h2>
            </ScrollReveal>

            <ScrollReveal
              className="col-span-4 space-y-5 md:col-span-7 md:col-start-5"
              delay={0.08}
            >
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </ScrollReveal>
          </div>

          {section.media?.length ? (
            <div className="editorial-grid mt-14">
              {section.media.map((media, mediaIndex) => (
                <Figure
                  key={media.src}
                  media={media}
                  sizes="(min-width: 48rem) 60vw, 100vw"
                  className={
                    mediaIndex % 2 === 0
                      ? 'col-span-4 md:col-span-8 md:col-start-5'
                      : 'col-span-4 md:col-span-5 md:col-start-2'
                  }
                />
              ))}
            </div>
          ) : null}
        </section>
      ))}

      {/* Remaining images. */}
      {gallery.length ? (
        <section className="gutter editorial-grid mt-24 md:mt-40">
          {gallery.map((media, index) => (
            <Figure
              key={media.src}
              media={media}
              sizes="(min-width: 48rem) 50vw, 100vw"
              className={
                index % 3 === 0
                  ? 'col-span-4 md:col-span-7'
                  : index % 3 === 1
                    ? 'col-span-4 md:col-span-4 md:col-start-9'
                    : 'col-span-4 md:col-span-6 md:col-start-4'
              }
            />
          ))}
        </section>
      ) : null}

      {/* Adjacent work. */}
      {neighbours ? (
        <nav
          aria-label="Adjacent projects"
          className="gutter rule-top mt-32 flex items-baseline justify-between gap-6 pt-6 md:mt-48"
        >
          <Link href={`/work/${neighbours.previous.slug}`} className="group">
            <span className="label text-mute">Previous</span>
            <p className="mt-2 text-h3 transition-opacity duration-500 group-hover:opacity-55">
              {neighbours.previous.title}
            </p>
          </Link>
          <Link
            href={`/work/${neighbours.next.slug}`}
            className="group text-right"
          >
            <span className="label text-mute">Next</span>
            <p className="mt-2 text-h3 transition-opacity duration-500 group-hover:opacity-55">
              {neighbours.next.title}
            </p>
          </Link>
        </nav>
      ) : null}
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
