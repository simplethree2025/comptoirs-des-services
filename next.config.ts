import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    domains: [],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['next'],
  },
};

export default nextConfig;
