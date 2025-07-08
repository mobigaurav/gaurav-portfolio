import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Feed } from "feed";
import { fileURLToPath } from "url";

// Required for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔧 Paths
const BLOG_DIR = path.join(__dirname, "../content/blog");
const PUBLIC_DIR = path.join(__dirname, "../public");

const SITE_URL = "https://your-deployed-site.com"; // Replace this
const AUTHOR = {
  name: "Gaurav Kumar",
  email: "mobigaurav@gmail.com",
  link: SITE_URL,
};

const feed = new Feed({
  title: "Gaurav's Blog",
  description: "AI, Mobile, SaaS and Architecture Insights",
  id: SITE_URL,
  link: SITE_URL,
  language: "en",
  favicon: `${SITE_URL}/favicon.ico`,
  copyright: `© ${new Date().getFullYear()} Gaurav`,
  updated: new Date(),
  generator: "Next.js RSS generator",
  author: AUTHOR,
});

const files = fs.readdirSync(BLOG_DIR);

files.forEach((filename) => {
  const filePath = path.join(BLOG_DIR, filename);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  const slug = filename.replace(/\\.mdx$/, "");
  feed.addItem({
    title: data.title || slug,
    id: `${SITE_URL}/blog/${slug}`,
    link: `${SITE_URL}/blog/${slug}`,
    description: data.description || content.slice(0, 140),
    date: new Date(data.date || Date.now()),
    author: [AUTHOR],
  });
});

fs.writeFileSync(path.join(PUBLIC_DIR, "rss.xml"), feed.rss2());
console.log("✅ RSS feed generated at /public/rss.xml");
