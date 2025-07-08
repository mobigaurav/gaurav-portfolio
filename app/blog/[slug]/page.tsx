import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<BlogPageProps["params"][]> {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content } = matter(source);

  return (
    <div className="prose max-w-2xl mx-auto dark:prose-invert">
      <MDXRemote source={content} />
    </div>
  );
}
