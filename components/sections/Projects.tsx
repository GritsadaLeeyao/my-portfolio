"use client";

import { ArrowUpRight, FolderGit2 } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const featured = projects.find((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-muted/50 px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <Reveal className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Open Source"
            title="Projects"
            description="Selected work from my public GitHub repositories — from full-stack web apps to backend APIs and algorithm practice."
          />

          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-border bg-card/80 px-6 py-4 text-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-foreground">
                    {projects.length}
                  </strong>{" "}
                  public repos
                </span>
              </div>
              <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
              <div className="flex flex-wrap justify-center gap-2">
                {[...new Set(projects.map((p) => p.language))].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {featured && (
            <Reveal delay={0.1}>
              <ProjectCard project={featured} featured />
            </Reveal>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <Reveal key={project.repo} delay={0.12 + i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="text-center">
            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              View all repositories on GitHub
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
