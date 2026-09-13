import type { Artist, CvProjectEntry, Project } from '@/lib/types';

/**
 * CV body shared by the /cv page and /print/cv route.
 * `document` mode uses a tighter academic order for PDF output.
 * `compact` mode fits all studio work on a single page.
 */
export function CvBody({
  artist,
  projects = [],
  projectEntries = [],
  mode = 'site',
}: {
  artist: Artist;
  projects?: Project[];
  projectEntries?: CvProjectEntry[];
  mode?: 'site' | 'document' | 'compact';
}) {
  const isDocument = mode === 'document' || mode === 'compact';
  const isCompact = mode === 'compact';

  return (
    <div className="cv-body">
      <CvRow label="Profile" compact={isCompact}>
        <p>{artist.bioShort}</p>
      </CvRow>

      {!isDocument ? (
        <CvRow label="Artist statement">
          <p>{artist.statementShort}</p>
        </CvRow>
      ) : null}

      <CvRow label="Education" compact={isCompact}>
        <ul className={isCompact ? 'space-y-2' : 'space-y-5'}>
          {artist.education.map((entry) => (
            <li key={`${entry.institution}-${entry.start}`}>
              <Entry
                primary={entry.degree}
                secondary={`${entry.institution}, ${entry.location}`}
                meta={`${entry.start} – ${entry.end}`}
                compact={isCompact}
              />
              {!isCompact && entry.focus ? (
                <p className="caption mt-1">Focus: {entry.focus}</p>
              ) : null}
              {entry.thesis ? (
                <p className="caption mt-1">Thesis: {entry.thesis}</p>
              ) : null}
              {!isCompact && entry.notes?.length ? (
                <ul className="caption mt-1 list-disc pl-4">
                  {entry.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </CvRow>

      {isCompact && projectEntries.length > 0 ? (
        <CvRow label="Selected studio work" compact>
          <ul className="cv-compact-projects">
            {projectEntries.map((entry) => (
              <li key={entry.slug} className="cv-compact-project">
                <span className="font-medium">{entry.title}</span>
                <span className="text-mute"> · </span>
                <span>{entry.medium}</span>
                <span className="text-mute"> · </span>
                <span className="whitespace-nowrap">
                  {entry.year}
                  {entry.courseCode ? ` (Course Code ${entry.courseCode})` : ''}
                </span>
              </li>
            ))}
          </ul>
        </CvRow>
      ) : null}

      {!isCompact && projects.length > 0 ? (
        <CvRow label={isDocument ? 'Current project' : 'Selected projects'}>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.slug}>
                <Entry
                  primary={project.title}
                  secondary={project.medium}
                  meta={project.year}
                />
                <p className="caption mt-1">{project.summaryShort}</p>
              </li>
            ))}
          </ul>
        </CvRow>
      ) : null}

      {artist.exhibitions.length > 0 ? (
        <CvRow label="Exhibitions" compact={isCompact}>
          <ul className={isCompact ? 'space-y-1' : 'space-y-3'}>
            {artist.exhibitions.map((exhibition) => (
              <li key={`${exhibition.title}-${exhibition.year}`}>
                <Entry
                  primary={exhibition.title}
                  secondary={`${exhibition.venue}, ${exhibition.location} — ${exhibition.kind}`}
                  meta={exhibition.year}
                  compact={isCompact}
                />
              </li>
            ))}
          </ul>
        </CvRow>
      ) : null}

      {artist.awards.length > 0 ? (
        <CvRow label="Awards" compact={isCompact}>
          <ul className={isCompact ? 'space-y-1' : 'space-y-3'}>
            {artist.awards.map((award) => (
              <li key={`${award.title}-${award.year}`}>
                <Entry
                  primary={award.title}
                  secondary={award.awarder}
                  meta={award.year}
                  compact={isCompact}
                />
                {award.note ? (
                  <p className="caption mt-1">{award.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </CvRow>
      ) : null}

      <CvRow label="Skills" compact={isCompact}>
        <div className={isCompact ? 'space-y-1.5' : 'space-y-4'}>
          {artist.skills.map((group) => (
            <div key={group.label} className="border-b border-line/30 pb-3 last:border-0">
              <p className="label text-mute text-xs">{group.label}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="label text-[0.65rem] tracking-wider px-2.5 py-1 rounded-full bg-paper-warm/80 border border-line/50 text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CvRow>

      {artist.workshops.length > 0 ? (
        <CvRow label="Workshops" compact={isCompact}>
          <ul className={isCompact ? 'space-y-1' : 'space-y-3'}>
            {artist.workshops.map((workshop) => (
              <li key={`${workshop.title}-${workshop.year}`}>
                <Entry
                  primary={workshop.title}
                  secondary={`${workshop.host} — ${workshop.role}`}
                  meta={workshop.year}
                  compact={isCompact}
                />
              </li>
            ))}
          </ul>
        </CvRow>
      ) : null}

      <CvRow label="Languages" compact={isCompact}>
        <p>
          {artist.languages
            .map((entry) => `${entry.language} (${entry.level})`)
            .join(', ')}
        </p>
      </CvRow>

      {isDocument && artist.socials.length > 0 ? (
        <CvRow label="Online" compact={isCompact}>
          <ul className={isCompact ? 'space-y-0.5' : 'space-y-1'}>
            {artist.socials.map((social) => (
              <li key={social.href} className={isCompact ? 'caption' : undefined}>
                <span className="caption">{social.label}</span>
                {' — '}
                {social.href.replace(/^https?:\/\//, '')}
              </li>
            ))}
          </ul>
        </CvRow>
      ) : null}

      {artist.references.length > 0 ? (
        <CvRow label="References" compact={isCompact}>
          <ul className={isCompact ? 'space-y-1' : 'space-y-3'}>
            {artist.references.map((reference) => (
              <li key={reference.name}>
                <Entry
                  primary={reference.name}
                  secondary={`${reference.title}, ${reference.organisation}`}
                  meta={reference.email ?? ''}
                  compact={isCompact}
                />
              </li>
            ))}
          </ul>
        </CvRow>
      ) : null}

      {!isCompact ? (
        <div className="pt-12 pb-4 border-b border-line/50 flex items-center justify-between text-mute text-xs">
          <span className="label tracking-widest">End of Curriculum Vitae</span>
          <span className="caption">All details verified &middot; Jagannath University</span>
        </div>
      ) : null}
    </div>
  );
}

function CvRow({
  label,
  children,
  compact = false,
}: {
  label: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`cv-row rule-top${compact ? ' cv-row--compact' : ''}`}>
      <h2 className="label cv-row-label text-mute">{label}</h2>
      <div className="cv-row-content">{children}</div>
    </section>
  );
}

function Entry({
  primary,
  secondary,
  meta,
  compact = false,
}: {
  primary: string;
  secondary: string;
  meta: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <p className="cv-compact-entry">
        <span className="font-medium">{primary}</span>
        {meta ? (
          <>
            <span className="text-mute"> · </span>
            <span className="caption whitespace-nowrap">{meta}</span>
          </>
        ) : null}
        <span className="text-mute"> — </span>
        <span className="caption">{secondary}</span>
      </p>
    );
  }

  return (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-medium">{primary}</p>
        {meta ? (
          <span className="caption shrink-0 whitespace-nowrap">{meta}</span>
        ) : null}
      </div>
      <p className="caption mt-0.5">{secondary}</p>
    </>
  );
}
