import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams(): BlogProps["params"][] {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default function BlogPost({ params }: BlogProps) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <article className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl mx-auto py-12 px-4">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <MDXRemote source={content} />
    </article>
  );
}
