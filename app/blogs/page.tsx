import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Blog() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {files.map((file) => {
          const slug = file.replace(/\.mdx$/, "");
          return (
            <li key={slug}>
              <Link href={`/blog/${slug}`} className="text-blue-600 underline">
                {slug.replace(/-/g, " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
