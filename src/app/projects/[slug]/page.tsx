import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, User } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";
import PrintButton from "./print-button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.summary,
  };
}

export default async function ProjectOnePager({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 print:py-0">
      <div className="mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-text-tertiary transition-colors hover:text-text-primary"
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </Link>
        <PrintButton slug={project.slug} />
      </div>

      <header className="border-b border-border pb-6 print:border-black">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent print:border print:border-black print:bg-transparent print:text-black">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-text-tertiary print:text-black">
            <User size={11} />
            {project.role}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text-primary print:text-black">
          {project.title}
        </h1>
        <p className="mt-2 text-base leading-relaxed text-text-secondary print:text-black">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-md bg-accent/5 px-2.5 py-1 text-xs font-medium text-text-secondary print:border print:border-black print:bg-transparent print:text-black"
            >
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 print:hidden">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
          >
            View source on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1.5 text-sm text-accent transition-colors hover:bg-accent/20"
            >
              <ExternalLink size={14} />
              Live demo
            </a>
          )}
        </div>

        <p className="mt-3 hidden text-xs text-black print:block">
          {project.github}
          {project.demo ? ` · ${project.demo}` : ""}
        </p>
      </header>

      <section className="mt-8 grid gap-6 sm:grid-cols-3">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary print:text-black">
            Problem
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary print:text-black">
            {project.problem}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary print:text-black">
            Solution
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary print:text-black">
            {project.solution}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary print:text-black">
            Results
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary print:text-black">
            {project.results}
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary print:text-black">
          Architecture
        </h2>
        <ol className="mt-3 space-y-2">
          {project.architecture.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-[10px] font-semibold text-accent print:border print:border-black print:bg-transparent print:text-black">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-text-secondary print:text-black">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary print:text-black">
          Tech Stack
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-text-secondary print:border-black print:text-black"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-10 border-t border-border pt-4 text-xs text-text-tertiary print:border-black print:text-black">
        {siteConfig.name} &middot; {siteConfig.email} &middot; {siteConfig.location}
      </footer>
    </main>
  );
}
