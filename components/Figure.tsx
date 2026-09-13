'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import type { Media } from '@/lib/types';

type Props = {
  media: Media;
  className?: string;
  /** Hide the caption when the surrounding layout supplies its own. */
  showCaption?: boolean;
  /** Above-the-fold images should not be lazy loaded. */
  priority?: boolean;
  sizes?: string;
  /**
   * Set false on print routes. The reveal is viewport-triggered, so in a paged
   * medium anything below the first screen would never un-mask.
   */
  animate?: boolean;
  /**
   * 'aspect' sizes the box from the media's own ratio. 'fill' makes it fill the
   * parent instead, which is how fixed-height print sheets control their images.
   */
  fit?: 'aspect' | 'fill';
};

/**
 * Image with a mask wipe reveal.
 *
 * Falls back to a labelled placeholder at the correct aspect ratio when the file
 * is absent, so the layout is real before the artist's media arrives and
 * dropping a file into public/media is the only step needed.
 */
export function Figure({
  media,
  className = '',
  showCaption = true,
  priority = false,
  sizes = '100vw',
  animate = true,
  fit = 'aspect',
}: Props) {
  const [missing, setMissing] = useState(false);
  const image = useRef<HTMLImageElement>(null);
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced || !animate;

  // onError alone is not enough: the request can fail before React hydrates, in
  // which case the synthetic event never fires and the broken image stays on the
  // page. A finished load with no intrinsic width means the file is absent.
  useEffect(() => {
    const element = image.current;
    if (element?.complete && element.naturalWidth === 0) setMissing(true);
  }, []);

  const reveal = reduced
    ? {}
    : {
        initial: { clipPath: 'inset(100% 0% 0% 0%)' },
        whileInView: { clipPath: 'inset(0% 0% 0% 0%)' },
        viewport: { once: true, margin: '0px 0px -10% 0px' },
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as const },
      };

  return (
    <figure className={className}>
      <motion.div
        className={`relative overflow-hidden bg-paper-warm ${
          fit === 'fill' ? 'h-full w-full' : ''
        }`}
        style={fit === 'aspect' ? { aspectRatio: media.aspect } : undefined}
        {...reveal}
      >
        {missing ? (
          <Placeholder media={media} />
        ) : (
          <motion.img
            ref={image}
            src={media.src}
            alt={media.alt}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setMissing(true)}
            className="absolute inset-0 h-full w-full object-cover"
            initial={reduced ? undefined : { scale: 1.06 }}
            whileInView={reduced ? undefined : { scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </motion.div>

      {showCaption && media.caption ? (
        <figcaption className="caption mt-3 max-w-[42ch]">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Placeholder({ media }: { media: Media }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between border border-line p-4"
      role="img"
      aria-label={`${media.alt} (image pending)`}
    >
      <span className="label text-mute">Image pending</span>
      <div className="flex items-end justify-between gap-4">
        <span className="caption max-w-[28ch] text-ink-soft">{media.alt}</span>
        <span className="caption shrink-0 font-mono">{media.src}</span>
      </div>
    </div>
  );
}
