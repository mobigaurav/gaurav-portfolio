import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import React, { JSX } from "react";

interface BlogParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default function BlogPost({ params }: BlogParams): JSX.Element {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content } = matter(source);

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={content} />
    </article>
  );
}
