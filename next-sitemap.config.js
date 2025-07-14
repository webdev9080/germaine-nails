/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://germaine-nails-tg.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,

  // Exclure les routes privées ou protégées par Clerk
  exclude: [
    '/sign-in',
    '/sign-up',
    '/dashboard',
    '/api/*',
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
          '/api/',
        ],
      },
    ],

  },
}