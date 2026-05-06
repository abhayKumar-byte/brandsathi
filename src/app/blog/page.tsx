import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Sectionhead } from "@/components/Sectionhead";
import { getAllBlogPosts } from "@/lib/content/blog";

export default function BlogPage() {
  const publishedBlogEntries = getAllBlogPosts();

  return (
    <Container>
      <Sectionhead
        title="Our Blog"
        desc="We write about building startups and thoughts going on our mind."
      />
      <main className="mt-16">
        <ul className="grid gap-16 max-w-4xl mx-auto">
          {publishedBlogEntries.map((blogPostEntry, index) => (
            <li key={blogPostEntry.slug}>
              <Link href={`/blog/${blogPostEntry.slug}`}>
                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <Image
                    src={blogPostEntry.data.image.src}
                    alt={blogPostEntry.data.image.alt}
                    sizes="(max-width: 800px) 100vw, 800px"
                    width={800}
                    height={600}
                    priority={index <= 2}
                    className="w-full rounded-md object-cover object-center bg-white"
                  />
                  <div>
                    <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      {blogPostEntry.data.category}
                    </span>
                    <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                      {blogPostEntry.data.title}
                    </h2>
                    <div className="flex gap-2 mt-3">
                      <span className="text-gray-400">{blogPostEntry.data.author}</span>
                      <span className="text-gray-400">• </span>
                      <time className="text-gray-400" dateTime={blogPostEntry.data.publishDate.toISOString()}>
                        {blogPostEntry.data.publishDate.toDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  );
}
