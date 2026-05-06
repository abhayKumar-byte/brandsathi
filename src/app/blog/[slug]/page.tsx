import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BlogPostContent } from "@/components/BlogPostContent";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content/blog";
import { getSiteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogPosts().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getBlogPostBySlug(slug);
  if (!entry) return {};
  const url = `${getSiteUrl()}/blog/${slug}`;
  return {
    title: entry.data.title,
    description: entry.data.snippet,
    openGraph: {
      title: entry.data.title,
      description: entry.data.snippet,
      url,
      images: [{ url: entry.data.image.src, alt: entry.data.image.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const entry = getBlogPostBySlug(slug);
  if (!entry) notFound();

  return (
    <Container>
      <div className="mx-auto max-w-3xl mt-14">
        <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">{entry.data.category}</span>
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">{entry.data.title}</h1>
        <div className="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
          <span className="text-gray-400">{entry.data.author}</span>
          <span className="text-gray-400">•</span>
          <time className="text-gray-400" dateTime={entry.data.publishDate.toISOString()}>
            {entry.data.publishDate.toDateString()}
          </time>
          <span className="text-gray-400 hidden md:block">•</span>
          <div className="w-full md:w-auto flex flex-wrap gap-3">
            {entry.data.tags.map((tag) => (
              <span key={tag} className="text-sm text-gray-500">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <BlogPostContent post={entry} />

      <div className="text-center mt-8">
        <Link href="/blog" className="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">
          ← Back to Blog
        </Link>
      </div>
    </Container>
  );
}
