"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  Play,
  TrendingUp,
  User,
  Bot,
  MessageSquare,
  BarChart3,
  Database,
  FileText,
  X,
} from "lucide-react";
import { GitHubIcon } from "./icons";
import SectionHeading from "./section-heading";
import { projects, type Project } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";
import { TECH_FILTER_EVENT } from "./skills";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const categoryIcons: Record<string, typeof Bot> = {
  "LLM Agents": Bot,
  NLP: MessageSquare,
  "Machine Learning": BarChart3,
  "Data Engineering": Database,
};

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function projectMatchesTech(project: Project, tech: string) {
  const needle = normalize(tech);
  return project.stack.some((s) => {
    const hay = normalize(s);
    return hay.includes(needle) || needle.includes(hay);
  });
}

function CategoryBanner({ category }: { category: string }) {
  const Icon = categoryIcons[category] ?? Bot;
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-accent/15 via-surface to-accent/5">
      <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-text-tertiary/30" />
        <span className="h-2 w-2 rounded-full bg-text-tertiary/30" />
        <span className="h-2 w-2 rounded-full bg-text-tertiary/30" />
      </div>
      <div className="flex h-20 items-center justify-center">
        <Icon size={32} className="text-accent/70" strokeWidth={1.5} />
      </div>
    </div>
  );
}

function MetricsRow({ metrics }: { metrics: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {metrics.map((metric) => (
        <span
          key={metric}
          className="inline-flex items-center gap-1 rounded-md bg-accent/5 px-2 py-1 text-xs font-medium text-text-secondary"
        >
          <TrendingUp size={11} className="text-accent" />
          {metric}
        </span>
      ))}
    </div>
  );
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
        Architecture
      </h4>
      <ol className="mt-2 space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-[10px] font-semibold text-accent">
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-text-secondary">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function VideoWalkthrough({ title, videoUrl }: { title: string; videoUrl?: string }) {
  const embedUrl = videoUrl ? getYouTubeEmbedUrl(videoUrl) : null;

  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
        Video Walkthrough
      </h4>
      <div className="mt-2 overflow-hidden rounded-lg border border-border bg-background">
        {embedUrl ? (
          <div className="aspect-video w-full">
            <iframe
              src={embedUrl}
              title={`${title} — video walkthrough`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : videoUrl ? (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex aspect-video w-full flex-col items-center justify-center gap-2 text-text-secondary transition-colors hover:text-accent"
          >
            <Play size={22} />
            <span className="text-xs">Watch walkthrough</span>
          </a>
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 text-text-tertiary">
            <Play size={22} />
            <span className="text-xs">Video walkthrough coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
}

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
      <CategoryBanner category={project.category} />
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
              <span className="inline-flex items-center gap-1 text-xs text-text-tertiary">
                <User size={11} />
                {project.role}
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-text-primary">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {project.summary}
            </p>
            <MetricsRow metrics={project.metrics} />
          </div>
        </div>

        {/* Expandable details */}
        <button
          onClick={() => {
            setExpanded(!expanded);
            if (!expanded) trackEvent("project_expand", { project: project.slug });
          }}
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

              <div className="mt-4 grid gap-6 border-t border-border pt-4 sm:grid-cols-2">
                <ArchitectureFlow steps={project.architecture} />
                <VideoWalkthrough title={project.title} videoUrl={project.videoUrl} />
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

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`/projects/${project.slug}`}
              aria-label={`One-pager for ${project.title}`}
              onClick={() => trackEvent("project_one_pager_click", { project: project.slug })}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
            >
              <FileText size={14} />
              <span>One-pager</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repo for ${project.title}`}
              onClick={() => trackEvent("project_github_click", { project: project.slug })}
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
                onClick={() => trackEvent("project_demo_click", { project: project.slug })}
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
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-hover"
    >
      <CategoryBanner category={project.category} />
      <div className="flex flex-1 flex-col p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-block w-fit rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
          {project.category}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-text-tertiary">
          <User size={11} />
          {project.role}
        </span>
      </div>
      <h3 className="mt-3 text-base font-semibold text-text-primary">
        {project.title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.summary}
      </p>
      <MetricsRow metrics={project.metrics} />
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

      <button
        onClick={() => {
          setExpanded(!expanded);
          if (!expanded) trackEvent("project_expand", { project: project.slug });
        }}
        className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Architecture & video"}
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
            <div className="mt-4 space-y-6 border-t border-border pt-4">
              <ArchitectureFlow steps={project.architecture} />
              <VideoWalkthrough title={project.title} videoUrl={project.videoUrl} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex items-center gap-4 pt-3 border-t border-border">
        <a
          href={`/projects/${project.slug}`}
          aria-label={`One-pager for ${project.title}`}
          onClick={() => trackEvent("project_one_pager_click", { project: project.slug })}
          className="inline-flex items-center gap-1.5 text-sm text-text-tertiary transition-colors hover:text-text-primary"
        >
          <FileText size={14} />
          <span>One-pager</span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repo for ${project.title}`}
          onClick={() => trackEvent("project_github_click", { project: project.slug })}
          className="inline-flex items-center gap-1.5 text-sm text-text-tertiary transition-colors hover:text-text-primary"
        >
          <GitHubIcon width={14} height={14} />
          <span>View source</span>
        </a>
      </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [techFilter, setTechFilter] = useState<string | null>(null);

  useEffect(() => {
    function onTechFilter(e: Event) {
      const tech = (e as CustomEvent<string>).detail;
      setFilter("All");
      setTechFilter(tech);
    }
    window.addEventListener(TECH_FILTER_EVENT, onTechFilter);
    return () => window.removeEventListener(TECH_FILTER_EVENT, onTechFilter);
  }, []);

  const filtered = projects
    .filter((p) => filter === "All" || p.category === filter)
    .filter((p) => !techFilter || projectMatchesTech(p, techFilter));
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
        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setTechFilter(null);
              }}
              className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                filter === cat && !techFilter
                  ? "bg-accent text-white"
                  : "border border-border bg-surface text-text-secondary hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {techFilter && (
          <div className="mb-10 flex items-center gap-2">
            <span className="text-sm text-text-tertiary">Filtered by skill:</span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
              {techFilter}
              <button
                onClick={() => setTechFilter(null)}
                aria-label="Clear skill filter"
                className="text-accent/70 hover:text-accent"
              >
                <X size={13} />
              </button>
            </span>
          </div>
        )}
        {!techFilter && <div className="mb-10" />}

        {filtered.length === 0 && (
          <p className="text-sm text-text-tertiary">
            No projects use this skill yet — check back as more work is added.
          </p>
        )}

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
