// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a static site in /out for Netlify Drop/static hosting
  output: 'export',
  images: {
    // Allow next/image without remote loader during static export
    unoptimized: true,
  },
  trailingSlash: true, // safer paths for static hosting
};

module.exports = nextConfig;
