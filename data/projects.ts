export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 16, Tailwind CSS, and shadcn/ui. Fully responsive with smooth scroll navigation and dark/light mode support.",
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
