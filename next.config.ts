import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      // Redirect old static HTML pages to new routes
      { source: "/how-it-works.html", destination: "/how-it-works", permanent: true },
      { source: "/what-is-mining-race.html", destination: "/inside-mining-race", permanent: true },
      { source: "/cores-racing.html", destination: "/products/mining-cores", permanent: true },
      { source: "/blogs/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
