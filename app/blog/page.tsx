"use client";

import Link from "next/link";
import { FaMedium } from "react-icons/fa";

const blogs = [
  {
    title: "Building PulseMind: Wellness App for iOS + watchOS",
    excerpt: "How I built PulseMind using SwiftUI, HealthKit, and a mindful design approach.",
    url: "https://medium.com/@yourusername/pulsemind-post",
  },
  {
    title: "Scaling an AI Stock Predictor App",
    excerpt: "Lessons from building and deploying a production-ready ML pipeline on AWS.",
    url: "https://medium.com/@yourusername/stock-predictor-post",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="grid grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <div key={blog.title} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-700 mb-3">{blog.excerpt}</p>
            <Link href={blog.url} target="_blank" className="inline-flex items-center text-green-600 hover:underline">
              <FaMedium className="mr-2" /> Read on Medium
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}


