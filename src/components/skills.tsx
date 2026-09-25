"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { skillCategories } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export const TECH_FILTER_EVENT = "portfolio:tech-filter";

function selectSkill(skill: string) {
  trackEvent("skill_click", { skill });
  window.dispatchEvent(new CustomEvent(TECH_FILTER_EVENT, { detail: skill }));
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to build, train, and deploy AI systems. Click any skill to see the projects that use it."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => selectSkill(skill)}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
