/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://germaine-nails-tg.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,

  // ✅ Exclusion uniquement des pages privées
  exclude: [
    '/sign-in',
    '/sign-up',
    '/dashboard',
    '/settings',
  ],

  // ✅ Robots.txt : toutes les API sont accessibles
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Googlebot peut tout crawler sauf les pages privées ci-dessus
        disallow: [
          '/sign-in',
          '/sign-up',
          '/dashboard',
          '/settings',
        ],
      },
    ],
  },

  // ✅ Ajout automatique des blogs dynamiques
  additionalPaths: async () => {
    const extraPaths = [];

    try {
      const res = await fetch('https://germaine-nails-tg.vercel.app/api/blogs');
      const blogs = await res.json();

      blogs.forEach((blog) => {
        extraPaths.push({
          loc: `/blog/${blog.slug}`,
          changefreq: 'weekly',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        });
      });
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des blogs pour le sitemap :', error);
    }

    return extraPaths;
  },
};