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
    const wideEnough = window.matchMedia('(min-width: 48rem)').matches;

    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const saveData = connection?.saveData === true;

    setEnabled(!reduced && wideEnough && !saveData);
  }, []);

  // The fallback always renders and the scene overlays it. That way a WebGL
  // context failure, a chunk that never arrives, or a slow load all degrade to a
  // complete composition rather than an empty box.
  return (
    <div className={`relative ${className}`}>
      <StaticFallback />
      {enabled ? (
        <div className="absolute inset-0">
          <HeroScene />
        </div>
      ) : null}
    </div>
  );
}

function StaticFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {/* Concentric rules standing in for the mass: same silhouette, no runtime. */}
      <div className="aspect-square w-[62%] rotate-45 border border-line" />
      <div className="absolute aspect-square w-[62%] border border-line" />
      <div className="absolute aspect-square w-[42%] rounded-full border border-line" />
    </div>
  );
}
