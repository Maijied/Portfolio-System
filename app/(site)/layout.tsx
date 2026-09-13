import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { PageTransition } from '@/components/PageTransition';
import { SmoothScroll } from '@/components/SmoothScroll';
import { SubscribeModal } from '@/components/SubscribeModal';
import { getArtist, getDocuments, getNavigation } from '@/lib/content';

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [artist, navigation, documents] = await Promise.all([
    getArtist(),
    getNavigation(),
    getDocuments(),
  ]);

  return (
    <>
      <SmoothScroll />
      <a
        href="#main"
        className="label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav name={artist.name} items={navigation} />
      <PageTransition>
        <main id="main">{children}</main>
        <Footer artist={artist} documents={documents} />
      </PageTransition>
      <SubscribeModal />
    </>
  );
}
