import type { NextConfig } from "next";

// El portfolio es una página estática (public/index.html). Next solo la sirve.
const nextConfig: NextConfig = {
  async rewrites() {
    return { beforeFiles: [{ source: "/", destination: "/index.html" }], afterFiles: [], fallback: [] };
  },
  async redirects() {
    return [
      { source: "/es", destination: "/", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
