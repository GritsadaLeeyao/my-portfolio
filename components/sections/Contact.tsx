"use client";

import { type FormEvent, useEffect, useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { socialLinks } from "@/data/site";

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
} as const;

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Get in touch"
            title="Contact"
            description="I'm open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!"
          />

          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <Reveal delay={0.05} className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Find me on
              </p>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.label];
                const isExternal = link.label !== "Email";
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{link.label}</p>
                      <p className="text-sm font-medium">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
                noValidate
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Send a message
                </p>

                {/* Honeypot — hidden from users, visible to bots */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  />
                </div>

                <div aria-live="polite" aria-atomic="true">
                  {status === "success" && (
                    <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-3 py-2 text-sm text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Message sent! I&apos;ll get back to you soon.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Something went wrong. Please try again.
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
