import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://bigdev.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Big.dev — Full Stack Developer",
    template: "%s | Big.dev",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building clean, performant web applications end-to-end.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Developer", "Portfolio"],
  authors: [{ name: "Gritsada Leeyao", url: baseUrl }],
  creator: "Gritsada Leeyao",
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Big.dev — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
    siteName: "Big.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big.dev — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
