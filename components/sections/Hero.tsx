"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { siteConfig } from "@/data/site";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
];

export default function Hero() {
  const role = useTypewriter({ words: roles });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {siteConfig.fullName}
        </h1>

        <p className="flex h-8 items-center gap-1 text-xl text-muted-foreground sm:text-2xl">
          <span>{role}</span>
          {!prefersReducedMotion && (
            <span
              className="inline-block h-6 w-0.5 animate-pulse bg-primary"
              aria-hidden="true"
            />
          )}
        </p>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          I build end-to-end web applications — from responsive UIs with React
          and Next.js to robust backends and APIs — focused on clean code and
          great user experience.
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            Get in Touch
          </a>
          <a
            href={siteConfig.resumePath}
            download
            className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>
      </motion.div>

      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          aria-hidden="true"
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
      )}
    </section>
  );
}
