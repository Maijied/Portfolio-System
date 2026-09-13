/** @type {import('next').NextConfig} */

// The site currently ships as a fully static export so it can be hosted
// anywhere. See docs/roadmap.md for the migration to a server target once the
// admin panel lands.
const nextConfig = {
  output: 'export',
  // A lockfile exists in the parent directory; pin the root so Next.js does not
  // infer it and widen the build trace.
  outputFileTracingRoot: import.meta.dirname,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
