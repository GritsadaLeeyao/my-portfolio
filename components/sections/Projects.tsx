"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 15, Tailwind CSS, and shadcn/ui. Fully responsive with smooth scroll navigation and dark/light mode support.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/GritsadaLeeyao",
    demo: "#",
  },
  {
    title: "Project Two",
    description:
      "A full-stack web application with user authentication, real-time updates, and a clean dashboard interface.",
    tech: ["React", "Node.js", "REST API", "Tailwind CSS"],
    github: "https://github.com/GritsadaLeeyao",
  },
  {
    title: "Project Three",
    description:
      "An e-commerce UI with product listings, cart management, and a checkout flow. Focused on performance and accessibility.",
    tech: ["React", "TypeScript", "CSS Modules"],
    github: "https://github.com/GritsadaLeeyao",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center justify-center bg-muted/50 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
              Things I&apos;ve built
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Projects
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center">
            <a
              href="https://github.com/GritsadaLeeyao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground underline underline-offset-4"
            >
              View more on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
