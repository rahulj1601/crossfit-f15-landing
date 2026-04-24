import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const CONTENT_ROOT = join(process.cwd(), 'content');

export interface BlogFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  keywords: string;
  cover_image?: string;
}

export interface LandingFrontmatter {
  title: string;
  description: string;
  slug: string;
  location: string;
  service: string;
  schema?: string;
}

export interface MdxFile<T> {
  frontmatter: T;
  body: string;
  readingMinutes: number;
}

async function readMdxDir<T>(sub: 'blog' | 'pages'): Promise<MdxFile<T>[]> {
  const dir = join(CONTENT_ROOT, sub);
  let entries: string[] = [];
  try {
    entries = await readdir(dir);
  } catch {
    return [];
  }
  const files = entries.filter((f) => f.endsWith('.mdx'));
  const out: MdxFile<T>[] = [];
  for (const f of files) {
    const raw = await readFile(join(dir, f), 'utf-8');
    const parsed = matter(raw);
    out.push({
      frontmatter: parsed.data as T,
      body: parsed.content,
      readingMinutes: Math.ceil(readingTime(parsed.content).minutes)
    });
  }
  return out;
}

export async function listBlogPosts(): Promise<MdxFile<BlogFrontmatter>[]> {
  const posts = await readMdxDir<BlogFrontmatter>('blog');
  return posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export async function getBlogPost(slug: string): Promise<MdxFile<BlogFrontmatter> | null> {
  const posts = await readMdxDir<BlogFrontmatter>('blog');
  return posts.find((p) => p.frontmatter.slug === slug) ?? null;
}

export async function listLandingPages(): Promise<MdxFile<LandingFrontmatter>[]> {
  return readMdxDir<LandingFrontmatter>('pages');
}

export async function getLandingPage(slug: string): Promise<MdxFile<LandingFrontmatter> | null> {
  const pages = await readMdxDir<LandingFrontmatter>('pages');
  return pages.find((p) => p.frontmatter.slug === slug) ?? null;
}
