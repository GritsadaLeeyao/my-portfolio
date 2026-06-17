"use client";

import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { skills, skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="What I work with"
            title="Tech Stack"
            description="Technologies and tools I use to build reliable, user-focused applications."
          />

          <div className="flex flex-col gap-8">
            {skillCategories.map((cat, catIndex) => (
              <Reveal key={cat} delay={catIndex * 0.05}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-muted/50"
                      >
                        <span aria-hidden="true">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
