"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GitHubIcon } from "./icons";
import SectionHeading from "./section-heading";
import { projects, type Project } from "@/lib/data";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

function FeaturedCard({
  project,
  index,
  rank,
}: {
  project: Project;
  index: number;
  rank: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-hover"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          {/* Featured rank number */}
          <span className="hidden flex-shrink-0 font-mono text-5xl font-bold leading-none text-border sm:block">
            {String(rank).padStart(2, "0")}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                {project.category}
              </span>
              <span className="text-xs text-text-tertiary">Featured</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-text-primary">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {project.summary}
            </p>
          </div>
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Problem / Solution / Results"}
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 grid gap-4 border-t border-border pt-4 sm:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                    Problem
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                    Solution
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                    Results
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {project.results}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stack + Links */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repo for ${project.title}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
            >
              <GitHubIcon width={14} height={14} />
              <span>Code</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1.5 text-sm text-accent transition-colors hover:bg-accent/20"
              >
                <ExternalLink size={14} />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CompactCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-hover"
    >
      <span className="inline-block w-fit rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
        {project.category}
      </span>
      <h3 className="mt-3 text-base font-semibold text-text-primary">
        {project.title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-text-tertiary"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repo for ${project.title}`}
          className="inline-flex items-center gap-1.5 text-sm text-text-tertiary transition-colors hover:text-text-primary"
        >
          <GitHubIcon width={14} height={14} />
          <span>View source</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);
  const featured = filtered.filter((p) => p.featured);
  const other = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected work across LLM agents, machine learning, NLP, and data engineering."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-accent text-white"
                  : "border border-border bg-surface text-text-secondary hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div className="space-y-6">
            {featured.map((project, i) => (
              <FeaturedCard
                key={project.slug}
                project={project}
                index={i}
                rank={i + 1}
              />
            ))}
          </div>
        )}

        {/* Other projects */}
        {other.length > 0 && (
          <>
            <div className="mt-12 mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                More Projects
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((project, i) => (
                <CompactCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
