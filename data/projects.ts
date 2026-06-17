export interface Project {
  title: string;
  repo: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
  language: string;
  stars?: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    repo: "my-portfolio",
    description:
      "Personal portfolio with smooth scroll navigation, dark/light mode, Framer Motion animations, and a contact form API — deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/GritsadaLeeyao/my-portfolio",
    demo: "https://bigdev.vercel.app",
    language: "TypeScript",
    featured: true,
  },
  {
    title: "User Management API",
    repo: "user-api",
    description:
      "RESTful API for user CRUD operations built with Java 21. Structured for clean separation of concerns and scalable backend patterns.",
    tech: ["Java 21", "REST API", "Maven"],
    github: "https://github.com/GritsadaLeeyao/user-api",
    language: "Java",
  },
  {
    title: "Toy Robot Simulator",
    repo: "toy-robot",
    description:
      "Console app that moves a robot on a 5×5 table via PLACE, MOVE, LEFT, RIGHT, and REPORT commands — with clean architecture and full test coverage.",
    tech: ["Java 17", "JUnit", "Clean Architecture"],
    github: "https://github.com/GritsadaLeeyao/toy-robot",
    language: "Java",
  },
  {
    title: "Omnifood Landing Page",
    repo: "Omnifood",
    description:
      "Responsive landing page for a healthy meal delivery brand. Focused on layout, typography, and modern CSS techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/GritsadaLeeyao/Omnifood",
    language: "HTML",
  },
];
