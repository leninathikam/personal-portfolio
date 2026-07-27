"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { siteConfig } from "@/lib/data";

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-text-tertiary transition-colors hover:border-border-hover hover:text-text-primary"
          aria-label="Back to top"
        >
          <ArrowUp size={12} />
          Back to top
        </button>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-tertiary transition-colors hover:text-text-primary"
          >
            <GitHubIcon width={16} height={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-tertiary transition-colors hover:text-text-primary"
          >
            <LinkedInIcon width={16} height={16} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-text-tertiary transition-colors hover:text-text-primary"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-text-tertiary">
          &copy; {CURRENT_YEAR} {siteConfig.name}. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
