"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./section-heading";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education & Certifications" />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              <GraduationCap size={14} />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h4 className="text-base font-semibold text-text-primary">
                      {edu.degree}
                    </h4>
                    <span className="whitespace-nowrap text-sm text-text-tertiary">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent">
                    {edu.institution}
                    <span className="text-text-tertiary">
                      {" "}
                      &middot; {edu.location}
                    </span>
                  </p>
                  {edu.details && (
                    <p className="mt-2 text-sm text-text-secondary">
                      {edu.details}
                    </p>
                  )}
                  {edu.coursework && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-text-tertiary"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              <Award size={14} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <h4 className="text-base font-semibold text-text-primary">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-sm text-accent">
                    {cert.issuer}
                    <span className="text-text-tertiary">
                      {" "}
                      &middot; {cert.date}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {cert.courses}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
