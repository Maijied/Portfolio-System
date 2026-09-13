import Image from 'next/image';

import { Figure } from '@/components/Figure';
import { PrintFooter, PrintHeader, Sheet } from '@/components/print/Sheet';
import { featuredMedia, getCvArtist, getCvProjects, getProposal } from '@/lib/content';
import type { Project, Proposal } from '@/lib/types';

/**
 * The portfolio document, A4 landscape. Structure mirrors how the work is read
 * on the site: an opening formal academic cover, editorial title sheet, opening statement,
 * a contents list, one spread per project with case studies intact, and an academic conclusion.
 */
export default async function PrintPortfolio() {
  const [artist, projects, proposal] = await Promise.all([
    getCvArtist(),
    getCvProjects(),
    getProposal(),
  ]);
  const year = new Date().getFullYear();

  return (
    <div className="portfolio-print">
      {/* 01 — Formal Academic Submission Cover (Jagannath University) */}
      <Sheet orientation="landscape" className="portfolio-formal-cover">
        <div className="portfolio-formal-inner">
          <div className="portfolio-formal-header">
            <Image
              src="/media/brand/jnu-logo.png"
              alt="Jagannath University Logo"
              width={56}
              height={56}
              className="portfolio-formal-logo mx-auto mb-2"
              priority
            />
            <p className="portfolio-formal-university">Jagannath University</p>
            <p className="portfolio-formal-department">
              Faculty of Fine Arts &bull; Department of 3D Art and Design
            </p>
          </div>

          <div className="portfolio-formal-title-block">
            <h1 className="portfolio-formal-title">Academic Portfolio</h1>
            <p className="portfolio-formal-subtitle">
              Comprehensive Record of Studio Practice, Anatomical Life Studies &amp; Sculptural Fabrication (2023 &ndash; 2026)
            </p>
          </div>

          <div className="portfolio-formal-parties-grid">
            <div className="portfolio-formal-party-card">
              <p className="portfolio-formal-label">Submitted to</p>
              <p className="portfolio-formal-name">{proposal.submittedTo.name}</p>
              <p className="portfolio-formal-role">{proposal.submittedTo.title}</p>
              <p className="portfolio-formal-dept">{proposal.submittedTo.department}</p>
              <p className="portfolio-formal-inst">{proposal.submittedTo.institution}</p>
            </div>

            <div className="portfolio-formal-party-card">
              <p className="portfolio-formal-label">Submitted by</p>
              <p className="portfolio-formal-name">{proposal.submittedBy.name}</p>
              <p className="portfolio-formal-id">Student ID: {proposal.submittedBy.studentId}</p>
              <p className="portfolio-formal-dept">{proposal.submittedBy.department}</p>
              <p className="portfolio-formal-inst">{proposal.submittedBy.institution}</p>
            </div>
          </div>

          <div className="portfolio-formal-footer">
            <p className="caption text-mute">
              Academic Session: 2025 &ndash; 2026 &bull; Date of Submission: {proposal.date}
            </p>
          </div>
        </div>
      </Sheet>

      {/* 02 — Editorial Monograph Cover. */}
      <Sheet orientation="landscape" cover>
        <p className="label text-mute">Portfolio {year}</p>

        <div>
          <h1 className="optical-hang text-h1 leading-[0.85]">{artist.name}</h1>
          <p className="mt-4 text-lead">{artist.title}</p>
        </div>

        <div className="flex items-end justify-between gap-12">
          <p className="max-w-[62ch] text-body">{artist.bioShort}</p>
          <ul className="caption shrink-0 text-right leading-relaxed">
            <li>{artist.email}</li>
            {artist.phone ? <li>{artist.phone}</li> : null}
            <li>{artist.location}</li>
            {artist.socials.find((s) => s.label.toLowerCase().includes('linkedin')) ? (
              <li>
                {artist.socials
                  .find((s) => s.label.toLowerCase().includes('linkedin'))
                  ?.href.replace(/^https?:\/\/(www\.)?/, '')
                  .replace(/\/$/, '')}
              </li>
            ) : null}
          </ul>
        </div>
      </Sheet>

      {/* 03 — Statement, set in two columns so the sheet is not a wall of measure. */}
      <Sheet orientation="landscape">
        <PrintHeader left="Artist statement" right={artist.name} />
        <div className="columns-2 gap-12 [&>p]:mb-4">
          {artist.statementLong.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={index === 0 ? 'text-lead' : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <PrintFooter left="Statement" right={artist.website ?? artist.email} />
      </Sheet>

      {/* 04 — Contents. */}
      <Sheet orientation="landscape">
        <PrintHeader left="Contents" right={artist.name} />
        <ol className="grid grid-cols-2 gap-x-12 gap-y-2 my-auto">
          {projects.map((project, index) => (
            <li key={project.slug} className="no-break flex gap-3.5">
              <span className="label shrink-0 pt-0.5 text-mute">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[9.5pt] font-semibold tracking-tight leading-tight text-ink">{project.title}</h2>
                  <span className="caption shrink-0 text-[7.5pt] text-mute">{project.year}</span>
                </div>
                <p className="caption mt-0.5 text-[7.75pt] text-ink-soft italic">
                  {project.medium}
                </p>
                <p className="mt-0.5 text-ink-soft text-[7.75pt] leading-snug">
                  {project.summaryShort}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <PrintFooter
          left="Contents"
          right={`${projects.length} ${projects.length === 1 ? 'project' : 'projects'}`}
        />
      </Sheet>

      {projects.map((project, index) => (
        <ProjectSpread
          key={project.slug}
          project={project}
          number={index + 1}
          artistName={artist.name}
        />
      ))}

      {/* Back sheet — Academic Conclusion & Trajectory. */}
      <Sheet orientation="landscape" className="portfolio-conclusion-sheet">
        <PrintHeader left="Academic Conclusion &amp; Research Trajectory" right={artist.name} />

        <div className="grid grid-cols-12 gap-8 my-auto">
          <div className="col-span-6 flex flex-col justify-between space-y-4">
            <section className="print-section">
              <div className="print-section-label">
                <p className="label text-mute">01 &mdash; Methodological Synthesis</p>
                <h3 className="mt-1 text-h3 leading-tight">Material Memory &amp; Kinetic Form</h3>
              </div>
              <div className="print-section-body mt-2 space-y-2 text-[8.75pt] leading-relaxed text-ink-soft">
                <p>
                  This portfolio compiles four academic years (2023–2026) of focused studio practice in the Department of 3D Art and Design at Jagannath University. The research moves through a deliberate pedagogical trajectory: beginning with vernacular Bengali craft heritage (folk gesso on winnowing fans, ritual painted wooden pidi panels, and ceremonial vessels), advancing through rigorous classical and monumental life observation (academic chiaroscuro on toned kraft, full-figure watercolor studies, skeletal alignment, planar facial carving, and canine/bovine muscle studies), and culminating in contemporary spatial installation.
                </p>
                <p>
                  Across all works, the central investigation remains constant: testing how physical weight, material resistance, and temporal motion can be resolved into static three-dimensional form. In <em>The Frozen Liquidity</em>, this culminates in an engineered paradox where fluid velocity is arrested permanently through cantilevered steel and composite resin synthesis; while in <em>The Weave of Memory and the Inner Cage</em>, post-consumer textile fragments and helical wire armatures externalize the psychic architecture of emotional resilience and protective inner space.
                </p>
              </div>
            </section>

            <section className="print-section">
              <div className="print-section-label">
                <p className="label text-mute">02 &mdash; Forward Trajectory</p>
                <h3 className="mt-1 text-h3 leading-tight">Expanded Practice &amp; Digital Synthesis</h3>
              </div>
              <div className="print-section-body mt-2 space-y-2 text-[8.75pt] leading-relaxed text-ink-soft">
                <p>
                  Looking beyond undergraduate study, my practice expands toward architectural-scale kinetic sculpture and hybrid digital-physical fabrication. Ongoing investigations integrate parametric 3D modeling and computational topology optimization with traditional foundry casting, forged metal armatures, and specialized polymer finishes.
                </p>
                <p>
                  The objective is to realize public, site-specific sculptural installations that challenge viewer spatial perception and extend the narrative traditions of South Asian visual culture into contemporary global contexts.
                </p>
              </div>
            </section>
          </div>

          <div className="col-span-6 flex flex-col justify-between pl-6 border-l border-line/60">
            <div className="space-y-4">
              <div>
                <p className="label text-mute">Academic Record &amp; Declaration</p>
                <p className="mt-2 text-[8.75pt] leading-relaxed text-ink-soft">
                  This portfolio of selected studio works is submitted in partial fulfilment of the academic requirements for the Bachelor of Fine Arts (BFA) degree in the Department of 3D Art and Design, Faculty of Fine Arts, Jagannath University, Dhaka.
                </p>
                <p className="mt-1.5 text-[8.75pt] leading-relaxed text-ink-soft">
                  All sculptural studies, terracotta works, carved reliefs, and mixed-media installations documented herein represent original research, manual armature construction, and material execution completed under academic studio supervision.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-line/40 pt-3 text-[8.75pt]">
                <div>
                  <p className="label text-mute">Candidate</p>
                  <p className="font-medium text-ink mt-0.5">{artist.name}</p>
                  <p className="caption text-ink-soft">Student ID: {proposal.submittedBy.studentId}</p>
                  <p className="caption text-ink-soft">BFA, 3D Art and Design</p>
                </div>
                <div>
                  <p className="label text-mute">Academic Supervision</p>
                  <p className="font-medium text-ink mt-0.5">{proposal.submittedTo.name}</p>
                  <p className="caption text-ink-soft">{proposal.submittedTo.title}</p>
                  <p className="caption text-ink-soft">Department of 3D Art and Design</p>
                </div>
              </div>

              <div className="border-t border-line/40 pt-3">
                <p className="label text-mute">Institutional Affiliation</p>
                <p className="mt-1 text-[8.75pt] text-ink font-medium">Faculty of Fine Arts &bull; Jagannath University</p>
                <p className="caption text-ink-soft">Dhaka-1100, Bangladesh</p>
              </div>
            </div>

            <div className="border-t border-line/60 pt-3 mt-auto">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div>
                    <span className="label text-mute">Digital Portfolio &bull; </span>
                    <a
                      href="https://borshon.lorapok.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink font-medium text-[8.5pt] underline underline-offset-2 decoration-line/80"
                    >
                      borshon.lorapok.tech
                    </a>
                  </div>
                  <p className="caption text-ink-soft text-[7.5pt] max-w-[28ch]">
                    Scan QR code to directly visit the interactive digital archive and high-resolution gallery.
                  </p>
                  <div className="flex items-center gap-3 text-[7.5pt] text-ink-soft pt-0.5">
                    <span>{artist.email}</span>
                    <span>&bull;</span>
                    <span>
                      {artist.socials
                        .find((s) => s.label.toLowerCase().includes('linkedin'))
                        ?.href.replace(/^https?:\/\/(www\.)?/, '')}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col items-center p-1.5 bg-paper rounded border border-line/80 shadow-2xs">
                  <Image
                    src="/media/brand/digital-portfolio-qr.svg"
                    alt="QR code to visit digital portfolio at borshon.lorapok.tech"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                  <span className="label text-[5.5pt] text-mute mt-1 tracking-wider">Scan &bull; Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PrintFooter
          left="Jagannath University · Department of 3D Art and Design · Academic Portfolio"
          right={`Academic Session 2025–2026 · © ${year} Borshon Mondol`}
        />
      </Sheet>
    </div>
  );
}

function ProjectSpread({
  project,
  number,
  artistName,
}: {
  project: Project;
  number: number;
  artistName: string;
}) {
  const lead = featuredMedia(project);
  const gallery = project.media.filter((item) => item !== lead);
  const label = `${String(number).padStart(2, '0')} — ${project.title}`;

  return (
    <>
      {/* Opening spread: lead image at seven columns, metadata at four. If companion image exists, show side-by-side grid. */}
      <Sheet orientation="landscape">
        <PrintHeader left={label} right={artistName} />

        <div className="grid min-h-0 flex-1 grid-cols-12 gap-8">
          {gallery.length ? (
            <div
              className={`col-span-7 grid gap-3 min-h-0 ${
                gallery.length === 1
                  ? 'grid-cols-2'
                  : gallery.length === 2
                    ? 'grid-cols-3'
                    : 'grid-cols-2 grid-rows-2'
              }`}
            >
              {lead ? (
                <Figure
                  media={lead}
                  animate={false}
                  fit="fill"
                  showCaption={false}
                  className="h-full min-h-0"
                />
              ) : null}
              {gallery.slice(0, 3).map((media) => (
                <Figure
                  key={media.src}
                  media={media}
                  animate={false}
                  fit="fill"
                  showCaption={false}
                  className="h-full min-h-0"
                />
              ))}
            </div>
          ) : lead ? (
            <Figure
              media={lead}
              animate={false}
              fit="fill"
              showCaption={false}
              className="col-span-7 min-h-0"
            />
          ) : null}

          <div className="col-span-5 flex flex-col justify-between">
            <div>
              <p className="label text-mute">{project.year}</p>
              <h2 className="mt-2 text-h2 leading-none">{project.title}</h2>
              <p className="mt-4 text-[9.5pt] leading-relaxed text-ink-soft">{project.summaryLong}</p>
            </div>

            <dl className="space-y-2 pt-4 border-t border-line/40">
              <PrintMeta label="Medium" value={project.medium} />
              {project.scale ? (
                <PrintMeta label="Scale" value={project.scale} />
              ) : null}
              {project.role ? (
                <PrintMeta label="Role" value={project.role} />
              ) : null}
              <PrintMeta label="Tools" value={project.tools.join(', ')} />
            </dl>
          </div>
        </div>

        <PrintFooter
          left={
            gallery.length
              ? `${lead?.caption || project.title} (${gallery.length + 1} studio views)`
              : (lead?.caption || project.title)
          }
          right={project.year}
        />
      </Sheet>

      {/* Case study sheet. Exactly 1 sheet with 3 uniform sections. */}
      <Sheet orientation="landscape">
        <PrintHeader left={`${label} — Case study`} right={artistName} />

        <div className="flex flex-col justify-between flex-1 min-h-0">
          {project.sections.map((section, index) => (
            <section key={section.heading} className="print-section">
              <div className="print-section-label">
                <p className="label text-mute">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-h3 leading-tight">
                  {section.heading}
                </h3>
              </div>
              <div className="print-section-body space-y-1.5">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <PrintFooter left={`${project.title} — Case study`} right={project.year} />
      </Sheet>
    </>
  );
}

function PrintMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label text-mute">{label}</dt>
      <dd className="caption mt-1 text-ink">{value}</dd>
    </div>
  );
}
