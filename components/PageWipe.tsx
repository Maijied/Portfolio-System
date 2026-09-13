'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Full-screen architectural page wipe transition.
 * Wipes up over outgoing route and reveals incoming route.
 */
export function PageWipe() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 bg-ink"
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        exit={{ scaleY: 1, originY: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 bg-accent/15"
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        exit={{ scaleY: 1, originY: 1 }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
