'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealType = 'wipe-up' | 'wipe-right' | 'curtain' | 'fade-up' | 'scale-fade';

type Props = {
  children: ReactNode;
  variant?: RevealType;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'header' | 'figure';
};

const variants = {
  'wipe-up': {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  'wipe-right': {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  'curtain': {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  'fade-up': {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  'scale-fade': {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
};

const components = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  header: motion.header,
  figure: motion.figure,
};

export function CinematicReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.85,
  className,
  as = 'div',
}: Props) {
  const reduced = useReducedMotion();
  const Component = components[as];

  if (reduced) {
    return <Component className={className}>{children}</Component>;
  }

  const selectedVariant = variants[variant] || variants['fade-up'];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.02 }}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  );
}
