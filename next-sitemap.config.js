module.exports = {
  siteUrl: "https://priyanshu-kumar-singh-portfolio.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://priyanshu-kumar-singh-portfolio.vercel.app/sitemap.xml",
    ],
  },
};
