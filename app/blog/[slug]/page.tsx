import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, listBlogPosts } from '../../../lib/mdx';

export async function generateStaticParams() {
  const posts = await listBlogPosts();
  return posts.map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: post.frontmatter.keywords,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date
    }
  };
}

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    author: { '@type': 'Organization', name: 'F15 Training Centr' }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header>
        <h1 className="text-4xl font-bold tracking-tight">{post.frontmatter.title}</h1>
        <p className="mt-3 text-sm text-zinc-500">
          {new Date(post.frontmatter.date).toLocaleDateString('en-GB', { dateStyle: 'medium' })}
          {' · '}
          {post.readingMinutes} min read
        </p>
      </header>
      <article className="prose prose-invert prose-zinc mt-10 max-w-none prose-headings:font-semibold prose-a:text-orange-400">
        <MDXRemote source={post.body} />
      </article>
    </main>
  );
}
