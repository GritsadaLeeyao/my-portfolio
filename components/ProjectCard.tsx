import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import type { Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const languageStyles: Record<
  string,
  { gradient: string; accent: string; label: string }
> = {
  TypeScript: {
    gradient: "from-[#3178c6]/20 via-[#3178c6]/5 to-transparent",
    accent: "text-[#3178c6]",
    label: "TS",
  },
  Java: {
    gradient: "from-[#b07219]/25 via-[#b07219]/5 to-transparent",
    accent: "text-[#b07219]",
    label: "Java",
  },
  HTML: {
    gradient: "from-[#e34c26]/20 via-[#e34c26]/5 to-transparent",
    accent: "text-[#e34c26]",
    label: "HTML",
  },
};

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const style = languageStyles[project.language] ?? languageStyles.TypeScript;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        featured && "lg:flex-row lg:items-stretch"
      )}
    >
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden bg-muted",
          featured ? "h-48 lg:h-auto lg:w-2/5" : "h-40"
        )}
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br", style.gradient)} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[length:20px_20px] opacity-[0.03]" />

        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 400px"
                : "(max-width: 640px) 100vw, 320px"
            }
            className="relative z-10 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span
              className={cn(
                "font-mono text-3xl font-bold tracking-tight",
                style.accent
              )}
            >
              {style.label}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {project.repo}
            </span>
          </div>
        )}

        {project.featured && (
          <span className="absolute left-4 top-4 z-20 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
            Featured
          </span>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-3 p-5",
          featured && "lg:justify-center lg:p-8"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              className={cn(
                "font-semibold tracking-tight",
                featured ? "text-xl sm:text-2xl" : "text-lg"
              )}
            >
              {project.title}
            </h3>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">
              {siteConfig.github.username}/{project.repo}
            </p>
          </div>
          {(project.stars ?? 0) > 0 && (
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-current" aria-hidden="true" />
              {project.stars}
            </span>
          )}
        </div>

        <p
          className={cn(
            "flex-1 leading-relaxed text-muted-foreground",
            featured ? "text-sm sm:text-base" : "text-sm"
          )}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <GithubIcon className="h-4 w-4" />
            Source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
