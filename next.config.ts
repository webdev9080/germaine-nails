import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true, // ✅ Active la compression Brotli/Gzip

  images: {
    formats: ["image/avif", "image/webp"], // ✅ Images optimisées
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours (fallback si pas de cache headers)
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      // ✅ Cache agressif pour les JS/CSS compilés (1 an)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ✅ Cache long pour les images (1 an)
      {
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ✅ Cache modéré pour les pages ISR
      {
        source: "/(blog|shop|prestations|partenariat)(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=59",
          },
        ],
      },
      // ✅ Cache faible pour API (1 min)
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60, stale-while-revalidate=59",
          },
        ],
      },
      // ✅ Manifest, robots, sitemap (1 jour)
      {
        source: "/(manifest.json|robots.txt|sitemap.*\\.xml)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default withPWA(nextConfig);