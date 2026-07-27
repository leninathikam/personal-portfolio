"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          subtitle="Professional roles where I delivered data-driven impact."
        />

        <div className="relative space-y-8 pl-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background" />

              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-accent">{exp.company}</p>
                  </div>
                  <span className="mt-1 whitespace-nowrap text-sm text-text-tertiary sm:mt-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm leading-relaxed text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-tertiary" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-text-tertiary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
