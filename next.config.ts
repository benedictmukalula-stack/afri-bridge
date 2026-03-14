import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
<<<<<<< HEAD
  reactCompiler: true,
=======
  reactCompiler: false,

  // Turbopack configuration (default in Next.js 16)
  turbopack: {},

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Optimize for faster development
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Compress static files
  compress: true,
>>>>>>> e3720a4 (Fix AfriBridge production build and deployment issues)
};

export default nextConfig;
