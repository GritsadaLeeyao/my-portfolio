"use client";

import Reveal from "@/components/motion/Reveal";
import ProfileAvatar from "@/components/ProfileAvatar";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

const aboutTags = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
];

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-muted/50 px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex justify-center md:justify-start">
            <ProfileAvatar />
          </div>

          <div className="flex flex-col gap-4">
            <SectionHeader
              eyebrow="About Me"
              title={`Hi, I'm ${siteConfig.nickname}`}
              align="left"
            />
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m a {siteConfig.title} who enjoys building complete web
              products — from pixel-perfect UIs to APIs and databases. I love
              taking an idea and shipping it end-to-end.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I&apos;m not coding, I enjoy learning new technologies,
              contributing to open-source projects, and exploring the
              intersection of design and engineering.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
