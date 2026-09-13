'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const components = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  figure: motion.figure,
  header: motion.header,
  article: motion.article,
};

type Props = {
  children: ReactNode;
  /** Seconds. Use small offsets to stagger siblings without a parent variant. */
  delay?: number;
  /** Vertical travel in pixels. Kept small; large travel reads as a slideshow. */
  distance?: number;
  className?: string;
  as?: keyof typeof components;
};

/**
 * Entrance reveal tied to the viewport. Motion here is continuity, not
 * decoration: elements arrive from slightly below and settle, so a scroll feels
 * like it is uncovering a page rather than triggering effects.
 */
export function ScrollReveal({
  children,
  delay = 0,
  distance = 24,
  className,
  as = 'div',
}: Props) {
  const reduced = useReducedMotion();
  const Component = components[as];

  if (reduced) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.02 }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
