# Big.dev — Personal Portfolio

Personal portfolio website for Gritsada Leeyao (Big), Full Stack Developer.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animation:** Framer Motion
- **Theme:** next-themes (dark/light mode)
- **Deploy:** Vercel

## Features

- Hero section with CTA and resume download
- About, Skills, Projects, Contact sections
- Dark / Light mode toggle
- Smooth scroll navigation
- Fully responsive
- SEO meta tags + Open Graph

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
  layout.tsx      # Root layout, ThemeProvider, metadata
  page.tsx        # Assembles all sections
components/
  sections/       # Hero, About, Skills, Projects, Contact
  Navbar.tsx
  Footer.tsx
  ProjectCard.tsx
public/
  resume.pdf      # Downloadable resume
```

## Deploy

Push to GitHub → connect to [Vercel](https://vercel.com) → auto-deploy on every push.
