'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/**
 * Route transition. A paper-coloured panel wipes up over the outgoing page and
 * away from the incoming one, which keeps the two views feeling like sheets in a
 * single document rather than separate loads.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname}>
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-50 bg-ink"
          initial={{ scaleY: 1, originY: 0 }}
          animate={{ scaleY: 0, originY: 0 }}
          exit={{ scaleY: 1, originY: 1 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
