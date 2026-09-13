'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import type { Media } from '@/lib/types';

type Props = {
  media: Media[];
  className?: string;
};

export function SculptureViewer({ media, className = '' }: Props) {
  const [active, setActive] = useState(0);

  if (!media.length) return null;
  const current = media[active] || media[0];

  return (
    <section className={`gutter mt-12 md:mt-20 ${className}`} aria-label="Interactive multi-angle study">
      <div className="relative overflow-hidden rounded-lg bg-paper-warm/40 border border-line/50 p-4 md:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-line/40">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-ink animate-pulse" />
            <span className="label uppercase tracking-widest text-ink font-semibold">
              Multi-Angle Study
            </span>
          </div>
          <span className="caption text-mute">
            {active + 1} of {media.length} perspectives
          </span>
        </div>

        {/* Main Viewport */}
        <div className="relative mt-6 min-h-[360px] md:min-h-[580px] w-full flex items-center justify-center overflow-hidden rounded">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.015 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl"
              style={{ aspectRatio: current.aspect || 4 / 3 }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority
                sizes="(min-width: 64rem) 75vw, 100vw"
                className="object-contain drop-shadow-sm rounded"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Caption & Perspective description */}
        {current.caption ? (
          <motion.p
            key={`caption-${current.src}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="caption mt-5 text-center text-ink-soft italic max-w-2xl mx-auto"
          >
            {current.caption}
          </motion.p>
        ) : null}

        {/* Angle selector tabs */}
        {media.length > 1 ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {media.map((item, idx) => {
              const isSelected = idx === active;
              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-label transition-all duration-300 ${
                    isSelected
                      ? 'bg-ink text-paper shadow-sm'
                      : 'bg-paper text-mute hover:text-ink hover:bg-line/40 border border-line/60'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-paper' : 'bg-mute group-hover:bg-ink'}`} />
                  <span>
                    Plate {String(idx + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
