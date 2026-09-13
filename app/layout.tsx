import type { Metadata } from 'next';
import { Bodoni_Moda, Inter } from 'next/font/google';

import { getSite } from '@/lib/content';
import { ThemeProvider } from '@/lib/theme-context';

import './globals.css';

// One high-contrast display face for titles, one neutral grotesque for body.
// Type is the only ornament in this design, so both are loaded as variable fonts
// and exposed as CSS variables that globals.css consumes.
const display = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-loaded',
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-loaded',
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    title: { default: site.title, template: `%s — ${site.title}` },
    description: site.description,
    metadataBase: new URL(site.url),
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
    },
    openGraph: {
      title: site.title,
      description: site.description,
      url: site.url,
      type: 'website',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
