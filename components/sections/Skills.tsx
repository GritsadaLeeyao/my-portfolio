"use client";

import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      <div className="mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
              What I work with
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tech Stack
            </h2>
          </div>

          {/* Skills by category */}
          <div className="flex flex-col gap-8">
            {skillCategories.map((cat) => (
              <div key={cat}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium shadow-sm"
                      >
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
