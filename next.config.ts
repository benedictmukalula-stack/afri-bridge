import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Turbopack configuration (default in Next.js 16)
  turbopack: {},
};

export default nextConfig;
