import Image from 'next/image';
import type { Artist, CvProjectEntry } from '@/lib/types';

/** Professional single-page fine arts CV. */
export function CvProfessional({
  artist,
  projectEntries,
}: {
  artist: Artist;
  projectEntries: CvProjectEntry[];
}) {
  const education = artist.education[0];
  const linkedin =
    artist.socials.find((s) => s.label.toLowerCase().includes('linkedin'))
      ?.href ?? 'https://www.linkedin.com/in/borshon-mondol-7ab4bb436/';
  const linkedinDisplay = linkedin
    .replace(/^https?:\/\/(www\.)?/, '')
    .replace(/\/$/, '');

  return (
    <div className="cv-pro">
      <header className="cv-pro-header no-break">
        <div className="cv-pro-identity">
          <div className="cv-pro-avatar-wrap">
            <Image
              src="/media/artist/borshon-avatar.jpg"
              alt={artist.name}
              width={76}
              height={76}
              className="cv-pro-avatar"
              priority
            />
          </div>
          <div className="cv-pro-title-group">
            <h1 className="cv-pro-name">{artist.name}</h1>
            <p className="cv-pro-title">{artist.title}</p>
            <p className="cv-pro-subtitle">
              Department of 3D Art and Design · Jagannath University · Dhaka
            </p>
          </div>
        </div>

        <div className="cv-pro-header-contact">
          <p className="cv-pro-email font-medium">{artist.email}</p>
          <p className="cv-pro-linkedin">{linkedinDisplay}</p>
          <p className="cv-pro-location text-mute">{artist.location}</p>
          <p className="cv-pro-id text-mute">
            Student ID: {artist.studentId ?? 'B210108011'}
          </p>
        </div>
      </header>

      <section className="cv-pro-section cv-pro-summary no-break">
        <h2 className="cv-pro-section-title">Summary</h2>
        <p className="cv-pro-summary-text">{artist.bioShort}</p>
      </section>

      <div className="cv-pro-columns">
        <div className="cv-pro-col cv-pro-col-main">
          <section className="cv-pro-section">
            <h2 className="cv-pro-section-title">
              Selected Studio Work &amp; Projects
            </h2>
            <ul className="cv-pro-projects">
              {projectEntries.map((entry) => (
                <li key={entry.slug} className="cv-pro-project">
                  <div className="cv-pro-project-head">
                    <p className="cv-pro-project-title">
                      {entry.title}
                      {entry.courseCode ? (
                        <span className="cv-pro-code">
                          {' '}
                          · Course {entry.courseCode}
                        </span>
                      ) : null}
                    </p>
                    <p className="cv-pro-project-meta">{entry.year}</p>
                  </div>
                  <p className="cv-pro-project-medium">
                    {entry.medium}
                    {entry.scale ? ` · ${entry.scale}` : ''}
                  </p>
                  <p className="cv-pro-project-detail">{entry.detail}</p>
                  {entry.secondaryDetail ? (
                    <p className="cv-pro-project-secondary">
                      {entry.secondaryDetail}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="cv-pro-col cv-pro-col-side">
          <section className="cv-pro-section no-break">
            <h2 className="cv-pro-section-title">Education</h2>
            {education ? (
              <div className="cv-pro-entry">
                <div className="cv-pro-entry-head">
                  <p className="font-semibold text-ink">{education.degree}</p>
                  <p className="cv-pro-meta">
                    {education.start} – {education.end}
                  </p>
                </div>
                <p className="cv-pro-institution">
                  {education.institution}, {education.location}
                </p>
                {education.focus ? (
                  <p className="cv-pro-detail">
                    <span className="text-mute">Focus:</span> {education.focus}
                  </p>
                ) : null}
                {education.thesis ? (
                  <p className="cv-pro-detail">
                    <span className="text-mute">Thesis project:</span>{' '}
                    {education.thesis}
                  </p>
                ) : null}
                {education.notes && education.notes.length > 0 ? (
                  <div className="mt-0.5">
                    {education.notes.map((note, idx) => (
                      <p key={idx} className="cv-pro-detail text-mute">
                        {note}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </section>

          {artist.exhibitions && artist.exhibitions.length > 0 ? (
            <section className="cv-pro-section no-break">
              <h2 className="cv-pro-section-title">Academic &amp; Studio Exhibitions</h2>
              <div className="cv-pro-exhibitions-stack">
                {artist.exhibitions.map((ex) => (
                  <div key={ex.title} className="cv-pro-exhibition-item">
                    <div className="cv-pro-entry-head">
                      <p className="font-semibold text-ink">{ex.title}</p>
                      <p className="cv-pro-meta">{ex.year}</p>
                    </div>
                    <p className="cv-pro-institution">
                      {ex.venue}, {ex.location}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="cv-pro-section no-break">
            <h2 className="cv-pro-section-title">Areas of Expertise</h2>
            <div className="cv-pro-skills-stack">
              {artist.skills.map((group) => (
                <div key={group.label} className="cv-pro-skill-group">
                  <p className="cv-pro-skill-label">{group.label}</p>
                  <p className="cv-pro-skill-items">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-pro-section no-break">
            <h2 className="cv-pro-section-title">Technical Proficiencies</h2>
            <div className="cv-pro-tech-grid">
              <div>
                <p className="cv-pro-skill-label">Materials &amp; Media</p>
                <p className="cv-pro-skill-items">
                  Studio clay, M-Seal epoxy putty, 8mm steel rod, GI wire, polymer gloss
                  glaze, heavy-body acrylics, MDF, composite plaster, terracotta
                </p>
              </div>
              <div className="mt-1">
                <p className="cv-pro-skill-label">Studio Equipment &amp; Practice</p>
                <p className="cv-pro-skill-items">
                  Armature welding, wire benders, sculpting turntables, wood lathe, chisels,
                  maquette scaling, photographic studio documentation
                </p>
              </div>
            </div>
          </section>

          <section className="cv-pro-section no-break">
            <h2 className="cv-pro-section-title">Languages &amp; Studio Contact</h2>
            <p className="cv-pro-detail">
              <span className="text-mute">Languages:</span>{' '}
              {artist.languages
                .map((l) => `${l.language} (${l.level})`)
                .join(' · ')}
            </p>
            <p className="cv-pro-detail mt-0.5">
              <span className="text-mute">Email:</span> {artist.email}
            </p>
            <p className="cv-pro-detail">
              <span className="text-mute">LinkedIn:</span> {linkedinDisplay}
            </p>
            <p className="cv-pro-detail">
              <span className="text-mute">Studio Location:</span> {artist.location}
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
