import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="gutter flex min-h-screen flex-col justify-center pb-20">
      <p className="label text-mute">404</p>
      <h1 className="optical-hang mt-6 text-h1">Not here.</h1>
      <Link href="/" className="label link-underline mt-12 self-start">
        Return to index
      </Link>
    </main>
  );
}
