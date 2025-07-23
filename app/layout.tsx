// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaurav Kumar | Portfolio",
  description: "AI + Mobile Developer | SaaS Builder | Solution Architect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <header className="w-full bg-gray-100 py-4 px-6 shadow-md flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            Gaurav Kumar
          </Link>
          <nav className="space-x-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

        <footer className="text-center text-sm text-gray-500 py-6 border-t">
          © {new Date().getFullYear()} Gaurav Kumar — All rights reserved.
        </footer>
      </body>
    </html>
  );
}
