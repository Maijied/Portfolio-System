'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Three.js is by far the heaviest thing on the site, so it is only fetched once
// we have decided the visitor should actually see it.
const HeroScene = dynamic(() => import('@/components/hero/HeroScene'), {
  ssr: false,
});

/**
 * The single 3D moment on the landing view. It loads only when the visitor has
 * not asked for reduced motion, is not on a small screen, and the browser
 * reports a workable connection. Everyone else gets the static fallback, which
 * is a complete composition rather than an apology.
 */
export function Hero3D({ className = '' }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const saveData = connection?.saveData === true;

    setEnabled(!reduced && !saveData);
  }, []);

  // The fallback always renders and the scene overlays it. That way a WebGL
  // context failure, a chunk that never arrives, or a slow load all degrade to a
  // complete composition rather than an empty box.
  return (
    <div className={`relative ${className}`}>
      {enabled ? (
        <div className="absolute inset-0 z-10">
          <HeroScene />
        </div>
      ) : (
        <StaticFallback />
      )}
    </div>
  );
}

function StaticFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Architectural layered cards preview */}
      <div className="relative w-64 h-80 border border-line/60 bg-paper-warm/40 rotate-[-6deg] shadow-lg backdrop-blur-xs transition-transform" />
      <div className="absolute w-64 h-80 border border-line bg-paper shadow-2xl rotate-[4deg] flex flex-col justify-end p-6">
        <span className="label text-mute text-xs">Selected Works</span>
        <span className="font-display text-h3 text-ink mt-1">Sculpture & Form</span>
      </div>
    </div>
  );
}
