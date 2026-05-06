import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import type { BlogPost } from "@/lib/content/blog";
import { MdxButton } from "@/components/mdx/MdxButton";

const mdxComponents = { Button: MdxButton };

type Props = { post: BlogPost };

export function BlogPostContent({ post }: Props) {
  if (post.extension === "mdx") {
    return (
      <div className="prose prose-lg max-w-none mx-auto mt-6">
        <MDXRemote
          source={post.content.trim()}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none mx-auto mt-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
    </div>
  );
}
