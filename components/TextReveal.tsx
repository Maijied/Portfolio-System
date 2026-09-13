'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  mode?: 'words' | 'chars';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
};

/**
 * High-end architectural typography reveal.
 * Animates text word-by-word or character-by-character with optical masking.
 */
export function TextReveal({
  text,
  className = '',
  delay = 0,
  mode = 'words',
  as = 'h1',
}: Props) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const items = mode === 'words' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: mode === 'words' ? 0.05 : 0.02,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Component
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.02 }}
    >
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-top"
          style={{ whiteSpace: mode === 'words' ? 'pre' : 'normal' }}
        >
          <motion.span variants={itemVariants} className="inline-block">
            {item}
          </motion.span>
          {mode === 'words' && index < items.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Component>
  );
}
