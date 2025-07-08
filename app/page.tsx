"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="text-center max-w-2xl mx-auto">
      <div className="flex justify-center mb-6">
        <Image
          src="/profile.jpg" // Place your image inside /public
          alt="Gaurav Kumar"
          width={120}
          height={120}
          className="rounded-full border shadow-md"
        />
      </div>

      <h1 className="text-4xl font-bold mb-2">Hi, I'm Gaurav Kumar</h1>
      <p className="text-gray-700 mb-6">
        Solution Architect & AI + Mobile Developer. I build intelligent apps blending Swift, Kotlin, React, React Native, Python, and AWS.
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <a href="/resume.pdf" target="_blank">
          <Button>Download Resume</Button>
        </a>
        <a href="https://www.linkedin.com/in/gauravmobile/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">LinkedIn</Button>
        </a>
      </div>
    </section>
  );
}
