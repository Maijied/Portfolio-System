'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'borshon-newsletter-dismissed';

export function SubscribeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if dismissed recently (30 days)
    const dismissedAt = localStorage.getItem(STORAGE_KEY);
    if (dismissedAt) {
      const timeSince = Date.now() - parseInt(dismissedAt, 10);
      if (timeSince < 30 * 24 * 60 * 60 * 1000) {
        return;
      }
    }

    // Trigger pop-up after 35s of browsing
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 35000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setTimeout(() => {
      setIsOpen(false);
    }, 2400);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscribe-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-xl border border-line bg-paper p-6 md:p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Close dialog"
              className="absolute top-4 right-4 p-2 text-mute hover:text-ink transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <span className="label text-accent font-mono text-xs uppercase tracking-widest">
              Studio Dispatch
            </span>
            <h2 id="subscribe-title" className="font-display text-h3 mt-2 text-ink">
              Follow New Work
            </h2>
            <p className="caption mt-2.5 text-ink-soft">
              Occasional dispatches covering newly completed sculptures, exhibition showcases, and material research. No spam.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-lg bg-paper-warm/70 border border-line text-center"
              >
                <p className="font-medium text-ink text-sm">You&apos;re subscribed.</p>
                <p className="caption text-mute mt-1">Thank you for following Borshon&apos;s studio practice.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-line bg-paper-warm/30 text-ink placeholder:text-mute focus:outline-none focus:border-ink transition-colors"
                />
                <div className="flex items-center justify-between gap-3 mt-1">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-5 label text-xs text-paper bg-ink hover:bg-ink/85 rounded-lg transition-all cursor-pointer text-center"
                  >
                    Subscribe &rarr;
                  </button>
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="py-2.5 px-4 label text-xs text-mute hover:text-ink transition-colors cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
