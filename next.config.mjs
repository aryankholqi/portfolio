/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  experimental: {
    // The root layout sits under app/[locale], so unmatched URLs need their own 404 page.
    globalNotFound: true,
  },
  // English is served at `/` without a visible prefix; Persian lives at `/fa`.
  async redirects() {
    return [{ source: '/en', destination: '/', permanent: true }];
  },
  async rewrites() {
    return { beforeFiles: [{ source: '/', destination: '/en' }] };
  },
};

export default nextConfig;
