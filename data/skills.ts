export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "TypeScript", category: "Frontend", icon: "🔷" },
  { name: "JavaScript", category: "Frontend", icon: "🟨" },
  { name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
  { name: "HTML / CSS", category: "Frontend", icon: "🌐" },
  // Backend
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "Express.js", category: "Backend", icon: "🚂" },
  { name: "REST APIs", category: "Backend", icon: "🔗" },
  { name: "PostgreSQL", category: "Backend", icon: "🐘" },
  { name: "Prisma", category: "Backend", icon: "💎" },
  // Tools
  { name: "Git & GitHub", category: "Tools", icon: "🐙" },
  { name: "Docker", category: "Tools", icon: "🐳" },
  { name: "Figma", category: "Tools", icon: "🖼️" },
  { name: "Vercel", category: "Tools", icon: "🚀" },
];

export const skillCategories: Skill["category"][] = [
  "Frontend",
  "Backend",
  "Tools",
];
