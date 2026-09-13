'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import type { Media } from '@/lib/types';

type Props = {
  media: Media[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (index: number) => void;
};

export function Lightbox({
  media,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: Props) {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setIndex(currentIndex);
    setZoom(1);
  }, [currentIndex]);

  const currentItem = media[index] || media[0];

  const handleNext = useCallback(() => {
    setZoom(1);
    const nextIdx = (index + 1) % media.length;
    setIndex(nextIdx);
    onNavigate?.(nextIdx);
  }, [index, media.length, onNavigate]);

  const handlePrev = useCallback(() => {
    setZoom(1);
    const prevIdx = (index - 1 + media.length) % media.length;
    setIndex(prevIdx);
    onNavigate?.(prevIdx);
  }, [index, media.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', onKeyDown);
    // Lock scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md text-white select-none"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between p-6 md:p-8">
          <span className="label text-white/60 tracking-widest text-xs">
            {String(index + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}
          </span>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setZoom((z) => (z === 1 ? 1.75 : 1))}
              className="label text-white/75 hover:text-white px-3 py-1 border border-white/20 rounded-full transition-colors cursor-pointer text-xs"
            >
              {zoom === 1 ? 'Zoom +' : 'Zoom 1×'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center image container */}
        <div className="relative flex-1 flex items-center justify-center p-4 md:p-12 overflow-hidden">
          {media.length > 1 ? (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-20 p-3 text-white/60 hover:text-white transition-colors cursor-pointer rounded-full bg-white/5 hover:bg-white/10"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-20 p-3 text-white/60 hover:text-white transition-colors cursor-pointer rounded-full bg-white/5 hover:bg-white/10"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          ) : null}

          <motion.div
            key={currentItem.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: zoom }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[75vh] flex items-center justify-center transition-transform duration-300"
          >
            <div
              className="relative w-full h-full max-w-full max-h-full"
              style={{ aspectRatio: currentItem.aspect || 4 / 3 }}
            >
              <Image
                src={currentItem.src}
                alt={currentItem.alt || 'Project media'}
                fill
                sizes="(min-width: 64rem) 85vw, 100vw"
                className="object-contain pointer-events-none rounded shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <div className="p-6 md:p-8 text-center max-w-2xl mx-auto">
          {currentItem.caption ? (
            <p className="caption text-white/80">{currentItem.caption}</p>
          ) : (
            <p className="caption text-white/40">{currentItem.alt}</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
