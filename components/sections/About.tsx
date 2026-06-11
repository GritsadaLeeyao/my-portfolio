"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-muted/50 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          {/* Avatar placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="h-56 w-56 rounded-2xl bg-muted border border-border flex items-center justify-center text-6xl select-none">
              👨‍💻
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hi, I&apos;m Big 👋
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Full Stack Developer who enjoys building complete
              web products — from pixel-perfect UIs to APIs and databases.
              I love taking an idea and shipping it end-to-end.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, I enjoy learning new technologies,
              contributing to open-source projects, and exploring the
              intersection of design and engineering.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
