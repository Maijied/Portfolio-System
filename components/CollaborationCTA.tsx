'use client';

import { motion } from 'framer-motion';

export function CollaborationCTA() {
  const email = 'borshonm563@gmail.com';

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="gutter mt-24 md:mt-36"
    >
      <div className="relative overflow-hidden rounded-2xl border border-line bg-paper-warm/40 p-8 md:p-14">
        {/* Subtle geometric background motif */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full border border-line/40 pointer-events-none" />
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 rounded-full border border-line/30 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <span className="label text-accent font-mono text-xs uppercase tracking-widest">
            Affiliations &amp; Commissions
          </span>
          <h2 className="font-display text-h2 mt-3 text-ink">
            Inviting collaborations, studio affiliations &amp; creative dialogue.
          </h2>
          <p className="caption mt-4 text-ink-soft text-base leading-relaxed">
            Whether you are curating an exhibition, commissioning custom sculptural work, or proposing an institutional residency or academic affiliation, feel welcome to get in touch directly.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href={`mailto:${email}?subject=Work%20Type%20Invitation`}
              className="px-5 py-3 rounded-full label text-xs bg-ink text-paper hover:bg-ink/80 transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Work Type Invitation</span>
              <span>&rarr;</span>
            </a>

            <a
              href={`mailto:${email}?subject=Studio%20Affiliation%20Inquiry`}
              className="px-5 py-3 rounded-full label text-xs bg-paper border border-line hover:border-ink text-ink transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Studio Affiliation</span>
              <span>&rarr;</span>
            </a>

            <a
              href={`mailto:${email}?subject=Sculpture%20Commission%20Inquiry`}
              className="px-5 py-3 rounded-full label text-xs bg-paper border border-line hover:border-ink text-ink transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Commission Inquiry</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
