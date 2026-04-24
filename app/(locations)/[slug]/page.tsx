import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getLandingPage, listLandingPages } from '../../../lib/mdx';

export async function generateStaticParams() {
  const pages = await listLandingPages();
  return pages.map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLandingPage(slug);
  if (!page) return {};
  return {
    title: page.frontmatter.title,
    description: page.frontmatter.description
  };
}

export default async function LocationPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const page = await getLandingPage(slug);
  if (!page) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {page.frontmatter.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: page.frontmatter.schema }}
        />
      )}
      <article className="prose prose-invert prose-zinc max-w-none prose-headings:font-semibold prose-a:text-orange-400">
        <MDXRemote source={page.body} />
      </article>
    </main>
  );
}
