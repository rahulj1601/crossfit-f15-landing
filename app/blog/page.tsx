import Link from 'next/link';
import type { Metadata } from 'next';
import { listBlogPosts } from '../../lib/mdx';

export const metadata: Metadata = {
  title: 'Blog | F15 Training Centr',
  description: 'Training guides, CrossFit programming notes, and HYROX prep from F15 Training Centr Malta.'
};

export default async function BlogIndex() {
  const posts = await listBlogPosts();
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Training Journal</h1>
      <p className="mt-3 text-zinc-400">
        Weekly notes from the gym floor. CrossFit, HYROX, strength.
      </p>
      <ul className="mt-12 space-y-8">
        {posts.map((p) => (
          <li key={p.frontmatter.slug} className="border-b border-zinc-800 pb-8">
            <Link href={`/blog/${p.frontmatter.slug}`} className="group block">
              <h2 className="text-2xl font-semibold group-hover:text-orange-400 transition-colors">
                {p.frontmatter.title}
              </h2>
              <p className="mt-2 text-zinc-400">{p.frontmatter.description}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {new Date(p.frontmatter.date).toLocaleDateString('en-GB', { dateStyle: 'medium' })}
                {' · '}
                {p.readingMinutes} min read
              </p>
            </Link>
          </li>
        ))}
        {posts.length === 0 && (
          <li className="text-zinc-500">No posts yet. New articles ship weekly.</li>
        )}
      </ul>
    </main>
  );
}
