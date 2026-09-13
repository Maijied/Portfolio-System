'use client';

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useTheme } from '@/lib/theme-context';

type Props = {
  name: string;
  items: { label: string; href: string }[];
};

export function Nav({ name, items }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 24);
    });
  }, [scrollY]);

  return (
    <>
      {/* Precision reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-ink origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-md border-b border-line/60 shadow-2xs py-3.5 md:py-4'
            : 'bg-paper/70 backdrop-blur-sm py-5 md:py-6'
        }`}
      >
        <div className="gutter flex items-center justify-between">
          <Link href="/" className="label link-underline group flex items-center gap-2">
            <motion.span
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {name}
            </motion.span>
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <nav className="hidden gap-8 md:flex" aria-label="Primary">
              {items.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-active={isActive}
                    className="label link-underline relative transition-colors duration-300"
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-ink"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'paper' ? 'studio' : 'paper'} theme`}
              className="p-1.5 text-ink/75 hover:text-ink transition-colors cursor-pointer rounded-full focus-visible:outline-1"
              title={theme === 'paper' ? 'Studio Mode' : 'Paper Mode'}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 30, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'paper' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                )}
              </motion.div>
            </button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="label md:hidden cursor-pointer"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              id="mobile-nav"
              aria-label="Primary"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="gutter rule-top flex flex-col gap-5 py-8 md:hidden overflow-hidden"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 + 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-h3 leading-none block py-1"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
