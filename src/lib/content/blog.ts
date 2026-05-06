import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { blogFrontmatterSchema, type BlogFrontmatter } from "./schemas";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
  slug: string;
  data: BlogFrontmatter;
  content: string;
  extension: "md" | "mdx";
};

function listBlogFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  const now = new Date();

  for (const filename of listBlogFiles()) {
    const fullPath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const parsed = blogFrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      console.warn(`Skipping invalid blog frontmatter: ${filename}`, parsed.error.flatten());
      continue;
    }
    if (parsed.data.draft || parsed.data.publishDate >= now) continue;

    const slug = filename.replace(/\.mdx?$/, "");
    const extension = filename.endsWith(".mdx") ? "mdx" : "md";
    posts.push({ slug, data: parsed.data, content, extension });
  }

  posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  return posts;
}

export function getBlogSlugs(): string[] {
  return getAllBlogPosts().map((p) => p.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}
