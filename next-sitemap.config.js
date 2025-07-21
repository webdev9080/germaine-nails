/** @type {import('next-sitemap').IConfig} */
const { createClient } = require('@sanity/client');

const sanity = createClient({
  projectId: '0k4zazrm',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN, // Vérifie bien que c'est défini
});

module.exports = {
  siteUrl: 'https://germaine-nails-tg.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // ✅ Un seul sitemap.xml (évite sitemap-0.xml)
  sitemapSize: 5000,

  exclude: [
    '/sign-in',
    '/sign-up',
    '/dashboard',
    '/settings',
    '/unauthorized',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/sign-in',
          '/sign-up',
          '/dashboard',
          '/settings',
          '/unauthorized',
        ],
      },
    ],
  },

  transform: async (config, path) => {
    // ✅ Appliquer changefreq et priority aux pages statiques
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async () => {
    try {
      const posts = await sanity.fetch(
        `*[_type == "post"]{ "slug": slug.current, _updatedAt }`
      );

      return posts
        .filter((p) => p.slug)
        .map((p) => ({
          loc: `/blog/${p.slug}`,
          changefreq: 'weekly',
          priority: 0.9,
          lastmod: new Date(p._updatedAt).toISOString(),
        }));
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des blogs :', error);
      return [];
    }
  },
};