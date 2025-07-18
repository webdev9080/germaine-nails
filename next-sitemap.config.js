/** @type {import('next-sitemap').IConfig} */
const { createClient } = require('@sanity/client')

const sanity = createClient({
  projectId: '0k4zazrm',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN, // Assure-toi que cette variable est définie dans ton environnement
})

module.exports = {
  siteUrl: 'https://germaine-nails.dedyn.io',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,

  exclude: [
    '/sign-in',
    '/sign-up',
    '/dashboard',
    '/settings',
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
        ],
      },
    ],
  },

  additionalPaths: async () => {
    try {
      const posts = await sanity.fetch(`*[_type == "post"]{ "slug": slug.current }`);
      return posts
        .filter((p) => p.slug)
        .map((p) => ({
          loc: `/blog/${p.slug}`,
          changefreq: 'weekly',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        }));
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des blogs :', error);
      return [];
    }
  },
};