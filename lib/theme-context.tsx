'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Theme = 'paper' | 'studio';

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'paper',
  toggle: () => {},
});

const STORAGE_KEY = 'borshon-theme';

/**
 * Reads the stored preference, falling back to system preference, falling back
 * to 'paper'. This runs synchronously so the initial render matches the DOM
 * attribute set by the inline script.
 */
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'paper';

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'paper' || stored === 'studio') return stored;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'studio';
  }

  return 'paper';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('paper');
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage/system preference after mount
  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  // Sync attribute and storage whenever theme changes
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'paper' ? 'studio' : 'paper'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
