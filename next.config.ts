import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true, // ✅ Compression Brotli/Gzip activée

  images: {
    formats: ["image/avif", "image/webp"], // ✅ Optimisation des images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // ✅ Cache fallback (30 jours)
  },

  eslint: {
    ignoreDuringBuilds: true, // ✅ Empêche l'échec du build à cause des erreurs ESLint
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
      // ✅ Cache modéré pour les pages ISR (1 heure)
      {
        source: "/(blog|shop)(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=59",
          },
        ],
      },
      // ✅ Cache faible pour les API (1 minute)
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
};

export default withPWA(nextConfig);