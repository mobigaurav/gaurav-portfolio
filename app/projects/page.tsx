"use client";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    title: "PulseMind",
    description: "Mindful wellness app for iOS + watchOS with HealthKit, journaling, and breathing.",
    tech: ["SwiftUI", "HealthKit", "CoreData"],
    github: "https://github.com/mobigaurav/pulsemind",
  },
  {
    title: "Stock Predictor",
    description: "AI-powered stock trend prediction app using LSTM and AWS backend.",
    tech: ["Python", "SageMaker", "React Native"],
    github: "https://github.com/mobigaurav/ai-stock-predictor",
  },
  {
    title: "MyFood",
    description: "Food marketplace for home cooks using AWS + React Native.",
    tech: ["AWS", "React Native", "DynamoDB"],
    github: "https://github.com/mobigaurav/myfood-app",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.title} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-sm text-gray-700 mb-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.tech.map((t) => (
                <span key={t} className="bg-gray-100 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <Link href={proj.github} target="_blank" className="inline-flex items-center text-blue-600 hover:underline">
              <FaGithub className="mr-2" /> View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
