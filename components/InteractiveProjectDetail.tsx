'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { CinematicReveal } from '@/components/CinematicReveal';
import { Figure } from '@/components/Figure';
import { Lightbox } from '@/components/Lightbox';
import { SculptureViewer } from '@/components/SculptureViewer';
import { featuredMedia } from '@/lib/content';
import type { Media, Project } from '@/lib/types';

type Props = {
  project: Project;
  neighbours?: { previous: Project; next: Project };
};

export function InteractiveProjectDetail({ project, neighbours }: Props) {
  const lead = featuredMedia(project);
  const gallery = project.media.filter((item) => item !== lead);

  // Flatten all media for unified lightbox navigation
  const allImages: Media[] = [
    ...(lead ? [lead] : []),
    ...gallery,
    ...project.sections.flatMap((s) => s.media ?? []),
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const openLightboxAt = (mediaItem: Media) => {
    const idx = allImages.findIndex((m) => m.src === mediaItem.src);
    setActiveMediaIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  const copyShareLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const prevMedia = neighbours ? featuredMedia(neighbours.previous) : undefined;
  const nextMedia = neighbours ? featuredMedia(neighbours.next) : undefined;

  return (
    <>
      <Lightbox
        media={allImages}
        currentIndex={activeMediaIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveMediaIndex(idx)}
      />

      {/* Share / Actions bar */}
      <div className="gutter mt-8 flex items-center justify-between border-b border-line/40 pb-4">
        <Link
          href="/work"
          className="label text-mute hover:text-ink transition-colors flex items-center gap-1.5"
        >
          &larr; Back to Works
        </Link>

        <button
          type="button"
          onClick={copyShareLink}
          className="label text-xs text-mute hover:text-ink px-3 py-1.5 rounded-full border border-line/60 bg-paper-warm/30 hover:bg-paper-warm transition-all cursor-pointer flex items-center gap-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          <span>{copied ? 'Link Copied' : 'Share Project'}</span>
        </button>
      </div>

      {/* Lead image presentation */}
      {project.media.length > 1 ? (
        <div className="relative group">
          <SculptureViewer media={project.media} />
          <div className="gutter mt-3 flex justify-end">
            <button
              type="button"
              onClick={() => openLightboxAt(project.media[0])}
              className="label text-xs text-mute hover:text-ink transition-colors flex items-center gap-1 cursor-pointer"
            >
              Expand Fullscreen &nearr;
            </button>
          </div>
        </div>
      ) : lead ? (
        <div
          className="mt-12 md:mt-20 cursor-zoom-in"
          onClick={() => openLightboxAt(lead)}
        >
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

      {/* Long Summary */}
      <CinematicReveal
        variant="fade-up"
        as="section"
        className="gutter editorial-grid mt-20 md:mt-32"
      >
        <div className="col-span-4 md:col-span-7 md:col-start-4">
          <p className="text-lead text-ink font-light leading-relaxed">
            {project.summaryLong}
          </p>
        </div>
      </CinematicReveal>

      {/* Case Study Sections with timeline step indicators */}
      {project.sections.map((section, index) => (
        <section key={section.heading} className="gutter mt-24 md:mt-40">
          <div className="editorial-grid rule-top pt-8">
            <CinematicReveal variant="wipe-right" className="col-span-4 md:col-span-3">
              <div className="flex items-center gap-2">
                <span className="label text-accent font-mono text-xs">
                  PHASE {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h2 className="mt-3 text-h3 font-display">{section.heading}</h2>
            </CinematicReveal>

            <CinematicReveal
              variant="fade-up"
              delay={0.1}
              className="col-span-4 space-y-6 md:col-span-7 md:col-start-5 text-ink-soft leading-relaxed"
            >
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </CinematicReveal>
          </div>

          {section.media?.length ? (
            <div className="editorial-grid mt-14">
              {section.media.map((media, mediaIndex) => (
                <div
                  key={media.src}
                  onClick={() => openLightboxAt(media)}
                  className={`cursor-zoom-in transition-transform duration-500 hover:scale-[1.01] ${
                    mediaIndex % 2 === 0
                      ? 'col-span-4 md:col-span-8 md:col-start-5'
                      : 'col-span-4 md:col-span-5 md:col-start-2'
                  }`}
                >
                  <Figure
                    media={media}
                    sizes="(min-width: 48rem) 60vw, 100vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ))}

      {/* Remaining Gallery images */}
      {gallery.length ? (
        <section className="gutter editorial-grid mt-24 md:mt-40">
          {gallery.map((media, index) => (
            <div
              key={media.src}
              onClick={() => openLightboxAt(media)}
              className={`cursor-zoom-in transition-transform duration-500 hover:scale-[1.01] ${
                index % 3 === 0
                  ? 'col-span-4 md:col-span-7'
                  : index % 3 === 1
                    ? 'col-span-4 md:col-span-4 md:col-start-9'
                    : 'col-span-4 md:col-span-6 md:col-start-4'
              }`}
            >
              <Figure
                media={media}
                sizes="(min-width: 48rem) 50vw, 100vw"
              />
            </div>
          ))}
        </section>
      ) : null}

      {/* Rich Adjacent Projects Navigation */}
      {neighbours ? (
        <nav
          aria-label="Adjacent projects"
          className="gutter rule-top mt-32 md:mt-48 pt-10"
        >
          <div className="flex items-center justify-between pb-6">
            <span className="label text-mute text-xs tracking-widest uppercase">
              Continue Exploring
            </span>
            <Link href="/work" className="label text-mute hover:text-ink text-xs">
              All Works &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Previous Project Card */}
            <Link
              href={`/work/${neighbours.previous.slug}`}
              className="group block p-5 rounded-lg border border-line/40 hover:border-line bg-paper-warm/20 hover:bg-paper-warm/50 transition-all duration-500"
            >
              <span className="label text-mute text-xs flex items-center gap-1.5">
                &larr; Previous Project
              </span>
              <div className="mt-4 flex items-center gap-5">
                {prevMedia ? (
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded border border-line/50">
                    <Image
                      src={prevMedia.src}
                      alt={neighbours.previous.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                ) : null}
                <div>
                  <p className="text-h3 font-display transition-opacity duration-300 group-hover:opacity-75">
                    {neighbours.previous.title}
                  </p>
                  <p className="caption text-mute mt-1">
                    {neighbours.previous.year} &middot; {neighbours.previous.discipline}
                  </p>
                </div>
              </div>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/work/${neighbours.next.slug}`}
              className="group block p-5 rounded-lg border border-line/40 hover:border-line bg-paper-warm/20 hover:bg-paper-warm/50 transition-all duration-500 text-right md:text-left"
            >
              <span className="label text-mute text-xs flex items-center justify-end md:justify-start gap-1.5">
                Next Project &rarr;
              </span>
              <div className="mt-4 flex items-center justify-end md:justify-start gap-5 flex-row-reverse md:flex-row">
                {nextMedia ? (
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded border border-line/50">
                    <Image
                      src={nextMedia.src}
                      alt={neighbours.next.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                ) : null}
                <div>
                  <p className="text-h3 font-display transition-opacity duration-300 group-hover:opacity-75">
                    {neighbours.next.title}
                  </p>
                  <p className="caption text-mute mt-1">
                    {neighbours.next.year} &middot; {neighbours.next.discipline}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      ) : null}
    </>
  );
}
