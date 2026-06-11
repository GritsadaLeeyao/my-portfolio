"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Greeting */}
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Gritsada Leeyao
        </h1>

        {/* Role */}
        <p className="text-xl text-muted-foreground sm:text-2xl">
          Full Stack Developer
        </p>

        {/* Short tagline */}
        <p className="max-w-xl text-base text-muted-foreground">
          I build end-to-end web applications — from responsive UIs with
          React and Next.js to robust backends and APIs — focused on
          clean code and great user experience.
        </p>

        {/* CTA buttons */}
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-80"
          >
            ดูผลงาน
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            ติดต่อ
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <svg
          className="h-6 w-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
