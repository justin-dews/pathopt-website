import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pathopt.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/case-studies',
    '/case-studies/homeworks-construction',
    '/services/strategic-guidance',
    '/services/operational-excellence',
    '/services/performance-marketing',
    '/industries/trades-home-services',
    '/industries/professional-services',
    '/industries/promotional-products',
    '/blog',
  ];

  // Blog posts
  const blogPosts = [
    '/blog/5-signs-your-business-needs-systems',
    '/blog/why-transparent-marketing-outperforms-agencies',
    '/blog/owners-guide-to-hiring-first-marketing-help',
    '/blog/stop-chasing-leads-start-building-pipeline',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/services/') ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
