'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { Media } from '@/lib/types';

type Props = {
  media: Media[];
  className?: string;
};

// Helper to determine anatomical perspective label from alt/caption/filename
function getPerspectiveLabel(item: Media, index: number): string {
  const text = `${item.caption || ''} ${item.alt || ''} ${item.src || ''}`.toLowerCase();
  if (text.includes('front') || text.includes('facial') || text.includes('cranial')) return 'Frontal View';
  if (text.includes('profile') || text.includes('lateral')) return 'Profile View';
  if (text.includes('three-quarter') || text.includes('3q') || text.includes('oblique')) return '3/4 Oblique';
  if (text.includes('back') || text.includes('dorsal') || text.includes('rear')) return 'Rear Elevation';
  if (text.includes('detail') || text.includes('relief') || text.includes('texture')) return 'Texture Detail';
  return `Angle 0${index + 1}`;
}

export function SculptureViewer({ media, className = '' }: Props) {
  const [active, setActive] = useState(0);
  const [isAutoOrbit, setIsAutoOrbit] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [direction, setDirection] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);

  const total = media.length;
  const current = media[active] || media[0];

  const setAngle = useCallback((newIndex: number) => {
    setDirection(newIndex >= active ? 1 : -1);
    setActive((newIndex + total) % total);
  }, [active, total]);

  const nextAngle = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prevAngle = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-orbit turntable effect
  useEffect(() => {
    if (!isAutoOrbit || total <= 1) return;
    const timer = setInterval(() => {
      nextAngle();
    }, 2800);
    return () => clearInterval(timer);
  }, [isAutoOrbit, total, nextAngle]);

  // Drag & Touch horizontal turntable scrubbing
  const dragStartX = useRef<number | null>(null);
  const dragThreshold = 40;

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > dragThreshold) {
      if (diff < 0) {
        nextAngle();
      } else {
        prevAngle();
      }
    }
    dragStartX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === 'ArrowRight') nextAngle();
      if (e.key === 'ArrowLeft') prevAngle();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextAngle, prevAngle]);

  if (!media.length) return null;

  return (
    <section
      className={`gutter mt-12 md:mt-20 ${className}`}
      aria-label="Interactive sculptural form inspection"
    >
      <div className="relative overflow-hidden rounded-2xl bg-paper-warm/40 border border-line/60 p-4 md:p-8 shadow-sm">
        {/* Header with Title & How to Watch Prompt */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line/40">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            <div>
              <span className="label text-xs uppercase tracking-widest text-ink font-semibold">
                Sculptural Form &amp; Spatial Inspection
              </span>
              <p className="caption text-[0.7rem] text-mute">
                Multi-angle photographic turntable &middot; Analytical studio passes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Auto-Turntable Button */}
            {total > 1 ? (
              <button
                type="button"
                onClick={() => setIsAutoOrbit(!isAutoOrbit)}
                className={`label text-xs px-3.5 py-1.5 rounded-full border transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                  isAutoOrbit
                    ? 'bg-ink text-paper border-ink shadow-xs'
                    : 'bg-paper text-ink border-line/70 hover:bg-paper-warm'
                }`}
                title="Automatically rotate through sculpture perspectives"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isAutoOrbit ? 'bg-accent animate-ping' : 'bg-mute'}`} />
                <span>{isAutoOrbit ? 'Turntable Active' : 'Auto Turntable (Orbit)'}</span>
              </button>
            ) : null}

            {/* High-detail zoom inspect */}
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className={`p-2 rounded-full border text-xs transition-colors cursor-pointer ${
                isZoomed
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-paper text-ink-soft border-line/60 hover:bg-paper-warm'
              }`}
              title={isZoomed ? 'Reset Zoom' : 'Inspect Surface Detail'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isZoomed ? (
                  <>
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </>
                ) : (
                  <>
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* User Interaction Guide Banner */}
        <div className="mt-3 flex items-center justify-between text-[0.7rem] text-mute px-1">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span>Drag or swipe horizontally across image to rotate &bull; Use arrow keys &larr; &rarr;</span>
          </div>
          <span className="font-mono text-ink font-medium">
            Perspective {active + 1} of {total}
          </span>
        </div>

        {/* Main Viewport Stage with Drag & Turntable Scrubbing */}
        <div
          ref={viewportRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className="relative mt-4 min-h-[380px] md:min-h-[600px] w-full flex items-center justify-center overflow-hidden rounded-xl bg-paper/60 border border-line/40 cursor-ew-resize select-none touch-pan-y"
        >
          {/* Previous Angle Button */}
          {total > 1 ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevAngle();
              }}
              aria-label="Previous Angle"
              className="absolute left-3 md:left-6 z-20 p-2.5 rounded-full border border-line/70 bg-paper/90 text-ink backdrop-blur-md hover:scale-105 hover:bg-ink hover:text-paper shadow-sm transition-all cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          ) : null}

          {/* Sculpture Image Display */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.src}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40, scale: 0.98 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: isZoomed ? 1.35 : 1,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40, scale: 0.98, transition: { duration: 0.25 } }}
              className="relative w-full max-w-4xl transition-transform duration-300"
              style={{ aspectRatio: current.aspect || 4 / 3 }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority
                sizes="(min-width: 64rem) 80vw, 100vw"
                className="object-contain drop-shadow-md rounded pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Angle Button */}
          {total > 1 ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextAngle();
              }}
              aria-label="Next Angle"
              className="absolute right-3 md:right-6 z-20 p-2.5 rounded-full border border-line/70 bg-paper/90 text-ink backdrop-blur-md hover:scale-105 hover:bg-ink hover:text-paper shadow-sm transition-all cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ) : null}

          {/* Floating Angle Badge */}
          <div className="absolute bottom-3 left-3 z-10 px-3 py-1 rounded-full bg-black/70 text-white text-[0.68rem] font-mono backdrop-blur-xs shadow-xs pointer-events-none">
            {getPerspectiveLabel(current, active)} &bull; Plate {String(active + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Caption description */}
        {current.caption ? (
          <motion.p
            key={`caption-${current.src}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="caption mt-4 text-center text-ink-soft italic max-w-2xl mx-auto text-xs md:text-sm"
          >
            {current.caption}
          </motion.p>
        ) : null}

        {/* Descriptive Perspective Selector Tabs */}
        {total > 1 ? (
          <div className="mt-6 pt-4 border-t border-line/40 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {media.map((item, idx) => {
              const isSelected = idx === active;
              const label = getPerspectiveLabel(item, idx);

              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setAngle(idx)}
                  className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs label transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-ink text-paper shadow-sm font-medium'
                      : 'bg-paper text-mute hover:text-ink hover:bg-paper-warm border border-line/60'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isSelected ? 'bg-accent' : 'bg-mute group-hover:bg-ink'
                    }`}
                  />
                  <span>{label}</span>
                  <span className="opacity-50 text-[0.65rem] font-mono">0{idx + 1}</span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
