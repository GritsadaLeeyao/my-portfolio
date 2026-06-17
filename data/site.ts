export const siteConfig = {
  name: "Big.dev",
  fullName: "Gritsada Leeyao",
  nickname: "Big",
  title: "Full Stack Developer",
  url: "https://bigdev.vercel.app",
  email: "gritsada723@gmail.com",
  github: {
    username: "GritsadaLeeyao",
    url: "https://github.com/GritsadaLeeyao",
  },
  linkedin: {
    username: "gritsada-leeyao",
    url: "https://www.linkedin.com/in/gritsada-leeyao-003729205/",
  },
  resumePath: "/resume.pdf",
  profileImage: "/profile.jpg",
} as const;

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    value: siteConfig.github.username,
    href: siteConfig.github.url,
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedin.username,
    href: siteConfig.linkedin.url,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
] as const;
