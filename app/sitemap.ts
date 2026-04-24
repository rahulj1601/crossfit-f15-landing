import type { MetadataRoute } from 'next';
import { listBlogPosts, listLandingPages } from '../lib/mdx';

const BASE_URL = 'https://www.f15trainingcentr.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, pages] = await Promise.all([listBlogPosts(), listLandingPages()]);
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/book`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((p) => ({
      url: `${BASE_URL}/blog/${p.frontmatter.slug}`,
      lastModified: new Date(p.frontmatter.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...pages.map((p) => ({
      url: `${BASE_URL}/${p.frontmatter.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}
