'use client';

import { AnimatePresence, motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useTheme } from '@/lib/theme-context';

const TOTAL_PAGES = 29;

const SECTIONS = [
  { label: 'Academic Cover', startPage: 1 },
  { label: 'Monograph Cover', startPage: 2 },
  { label: 'Statement', startPage: 3 },
  { label: 'Contents', startPage: 4 },
  { label: 'Degree Installations', startPage: 5 },
  { label: 'Academic Life Studies', startPage: 9 },
  { label: '★ Selected Sculptures (p. 13-20)', startPage: 13, highlight: true },
  { label: 'Terracotta & Carving', startPage: 21 },
  { label: 'Bengali Folk Craft', startPage: 23 },
  { label: 'Academic Conclusion', startPage: 29 },
];

export function PortfolioReader() {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);
  const [spreadMode, setSpreadMode] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [thumbnailsOpen, setThumbnailsOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const isDark = theme === 'studio';

  const goToPage = useCallback((targetPage: number) => {
    const clamped = Math.max(1, Math.min(TOTAL_PAGES, targetPage));
    setDirection(clamped >= currentPage ? 1 : -1);
    setCurrentPage(clamped);
  }, [currentPage]);

  const nextPage = useCallback(() => {
    const step = spreadMode ? 2 : 1;
    if (currentPage + step <= TOTAL_PAGES) {
      goToPage(currentPage + step);
    } else if (currentPage < TOTAL_PAGES) {
      goToPage(TOTAL_PAGES);
    }
  }, [currentPage, spreadMode, goToPage]);

  const prevPage = useCallback(() => {
    const step = spreadMode ? 2 : 1;
    if (currentPage - step >= 1) {
      goToPage(currentPage - step);
    } else if (currentPage > 1) {
      goToPage(1);
    }
  }, [currentPage, spreadMode, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPage();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToPage(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToPage(TOTAL_PAGES);
      } else if (e.key === 'Escape') {
        if (thumbnailsOpen) setThumbnailsOpen(false);
        if (zoom !== 1) setZoom(1);
      } else if (e.key === '+' || e.key === '=') {
        setZoom((z) => Math.min(2, z + 0.25));
      } else if (e.key === '-') {
        setZoom((z) => Math.max(0.75, z - 0.25));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage, goToPage, thumbnailsOpen, zoom]);

  // Scroll filmstrip into view when page changes
  useEffect(() => {
    if (thumbnailsOpen && filmstripRef.current) {
      const activeThumb = filmstripRef.current.querySelector(
        `[data-page="${currentPage}"]`
      ) as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [currentPage, thumbnailsOpen]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const getPageUrl = (pageNumber: number) => {
    const padded = String(pageNumber).padStart(2, '0');
    return `/media/portfolio-pages/portfolio-page-${padded}.png`;
  };

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.98,
      rotateY: dir > 0 ? 8 : -8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.3 },
        rotateY: { duration: 0.4 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.98,
      rotateY: dir > 0 ? -8 : 8,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const facingPage = spreadMode && currentPage < TOTAL_PAGES ? currentPage + 1 : null;

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden border transition-colors duration-500 select-none ${
        isDark
          ? 'bg-[#0a0a0c] border-white/10 text-neutral-100 shadow-2xl shadow-black/80'
          : 'bg-[#f7f6f2] border-black/10 text-neutral-900 shadow-xl'
      }`}
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4 border-b border-line/50 bg-paper/70 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <div>
            <h2 className="text-xs md:text-sm font-semibold tracking-tight uppercase font-mono text-ink">
              Academic &amp; Studio Monograph
            </h2>
            <p className="caption text-[0.7rem] text-mute">
              Borshon Mondol &middot; Jagannath University (2023&ndash;2026)
            </p>
          </div>
        </div>

        {/* Quick Section Navigator Pills */}
        <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto max-w-xl py-1 no-scrollbar">
          {SECTIONS.map((sec) => {
            const isCurrent =
              currentPage >= sec.startPage &&
              (SECTIONS[SECTIONS.indexOf(sec) + 1]?.startPage
                ? currentPage < SECTIONS[SECTIONS.indexOf(sec) + 1].startPage
                : true);

            return (
              <button
                key={sec.label}
                type="button"
                onClick={() => goToPage(sec.startPage)}
                className={`px-2.5 py-1 text-[0.68rem] rounded-full transition-all duration-200 shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-ink text-paper font-semibold shadow-xs'
                    : sec.highlight
                      ? 'bg-accent/15 text-accent border border-accent/40 hover:bg-accent/25'
                      : 'bg-paper-warm/60 text-ink-soft hover:bg-paper-warm hover:text-ink'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <a
            href="/documents/portfolio.pdf"
            download="Borshon-Mondol-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-xs px-3 py-1.5 rounded-full bg-paper border border-line/80 text-ink hover:bg-paper-warm transition-colors inline-flex items-center gap-1.5 shadow-2xs cursor-pointer"
            title="Download full 29-page high-resolution vector PDF"
          >
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">Download PDF</span>
          </a>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-full border border-line/60 bg-paper/80 hover:bg-paper-warm text-ink-soft hover:text-ink transition-colors cursor-pointer"
            aria-label="Toggle Fullscreen"
            title="Fullscreen"
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
              {isFullscreen ? (
                <>
                  <polyline points="4 14 10 14 10 20" />
                  <polyline points="20 10 14 10 14 4" />
                  <line x1="14" y1="10" x2="21" y2="3" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </>
              ) : (
                <>
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative min-h-[50vh] md:min-h-[72vh] flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {/* Navigation Arrow Left */}
        <button
          type="button"
          onClick={prevPage}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className={`absolute left-3 md:left-6 z-30 p-3 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer ${
            currentPage === 1
              ? 'opacity-30 pointer-events-none border-line/30 bg-transparent text-mute'
              : 'border-line/70 bg-paper/90 text-ink hover:scale-105 hover:bg-ink hover:text-paper shadow-md'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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

        {/* Central Display Area with Animated Pages */}
        <div
          className="relative w-full max-w-5xl flex items-center justify-center transition-transform duration-300"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`${currentPage}-${spreadMode}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`relative flex items-center justify-center gap-2 md:gap-4 w-full ${
                spreadMode ? 'max-w-5xl' : 'max-w-4xl'
              }`}
            >
              {/* Left Page (or Single Page) */}
              <div className="relative flex-1 aspect-[1.414/1] rounded-lg overflow-hidden border border-line/70 bg-paper shadow-xl">
                <Image
                  src={getPageUrl(currentPage)}
                  alt={`Portfolio Page ${currentPage}`}
                  fill
                  priority
                  sizes="(min-width: 64rem) 65vw, 100vw"
                  className="object-contain select-none pointer-events-none"
                />

                {/* Page Number Stamp */}
                <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-black/60 text-white text-[0.625rem] font-mono backdrop-blur-xs">
                  P. {currentPage}
                </div>
              </div>

              {/* Right Page (Only in Spread Mode) */}
              {facingPage ? (
                <div className="relative flex-1 aspect-[1.414/1] rounded-lg overflow-hidden border border-line/70 bg-paper shadow-xl hidden md:block">
                  <Image
                    src={getPageUrl(facingPage)}
                    alt={`Portfolio Page ${facingPage}`}
                    fill
                    priority
                    sizes="(min-width: 64rem) 65vw, 100vw"
                    className="object-contain select-none pointer-events-none"
                  />
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-[0.625rem] font-mono backdrop-blur-xs">
                    P. {facingPage}
                  </div>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          onClick={nextPage}
          disabled={currentPage >= TOTAL_PAGES}
          aria-label="Next Page"
          className={`absolute right-3 md:right-6 z-30 p-3 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer ${
            currentPage >= TOTAL_PAGES
              ? 'opacity-30 pointer-events-none border-line/30 bg-transparent text-mute'
              : 'border-line/70 bg-paper/90 text-ink hover:scale-105 hover:bg-ink hover:text-paper shadow-md'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
      </div>

      {/* Bottom Floating Control Dock */}
      <div className="px-4 py-3 md:px-6 md:py-3.5 border-t border-line/50 bg-paper/85 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
        {/* Page counter & direct jump */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-mute">Page</span>
          <input
            type="number"
            min={1}
            max={TOTAL_PAGES}
            value={currentPage}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val)) goToPage(val);
            }}
            className="w-12 px-1.5 py-1 text-center font-bold text-ink rounded bg-paper-warm/50 border border-line/80 focus:outline-hidden focus:ring-1 focus:ring-accent"
          />
          <span className="text-mute">of {TOTAL_PAGES}</span>
          {spreadMode && facingPage ? (
            <span className="text-accent hidden sm:inline">&bull; Spread: {currentPage}&ndash;{facingPage}</span>
          ) : null}
        </div>

        {/* Zoom & Spread View toggles */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Spread View toggle on desktop */}
          <button
            type="button"
            onClick={() => setSpreadMode(!spreadMode)}
            className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs label border cursor-pointer transition-colors ${
              spreadMode
                ? 'bg-ink text-paper border-ink font-semibold'
                : 'bg-paper text-ink-soft border-line/70 hover:bg-paper-warm hover:text-ink'
            }`}
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
              <rect x="3" y="4" width="8" height="16" rx="1" />
              <rect x="13" y="4" width="8" height="16" rx="1" />
            </svg>
            <span>{spreadMode ? 'Spread (2-Up)' : 'Single (1-Up)'}</span>
          </button>

          {/* Zoom Out */}
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.75, z - 0.25))}
            className="p-1.5 rounded-full border border-line/70 bg-paper hover:bg-paper-warm text-ink-soft hover:text-ink transition-colors cursor-pointer"
            title="Zoom Out"
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
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          <span className="caption text-xs font-mono w-10 text-center text-mute">
            {Math.round(zoom * 100)}%
          </span>

          {/* Zoom In */}
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(2, z + 0.25))}
            className="p-1.5 rounded-full border border-line/70 bg-paper hover:bg-paper-warm text-ink-soft hover:text-ink transition-colors cursor-pointer"
            title="Zoom In"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          {/* Thumbnails Drawer button */}
          <button
            type="button"
            onClick={() => setThumbnailsOpen(!thumbnailsOpen)}
            className={`px-3 py-1.5 rounded-full text-xs label border cursor-pointer transition-colors inline-flex items-center gap-1.5 ${
              thumbnailsOpen
                ? 'bg-ink text-paper border-ink font-semibold'
                : 'bg-paper text-ink-soft border-line/70 hover:bg-paper-warm hover:text-ink'
            }`}
          >
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
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>Thumbnails</span>
          </button>
        </div>
      </div>

      {/* Expandable Filmstrip Thumbnails Drawer */}
      <AnimatePresence>
        {thumbnailsOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-line/60 bg-paper-warm/50 overflow-hidden"
          >
            <div
              ref={filmstripRef}
              className="flex items-center gap-3 p-4 overflow-x-auto no-scrollbar scroll-smooth"
            >
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((num) => {
                const isActive =
                  num === currentPage || (spreadMode && num === facingPage);

                return (
                  <button
                    key={num}
                    data-page={num}
                    type="button"
                    onClick={() => goToPage(num)}
                    className={`group relative shrink-0 aspect-[1.414/1] w-24 md:w-32 rounded border overflow-hidden transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'ring-2 ring-accent border-accent scale-105 shadow-md'
                        : 'border-line/70 hover:border-ink hover:scale-102 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={getPageUrl(num)}
                      alt={`Page ${num} thumbnail`}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                    <div
                      className={`absolute bottom-0 inset-x-0 py-0.5 text-center text-[0.6rem] font-mono transition-colors ${
                        isActive
                          ? 'bg-accent text-paper font-bold'
                          : 'bg-black/60 text-white group-hover:bg-black/80'
                      }`}
                    >
                      P. {num}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
