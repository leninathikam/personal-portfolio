"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubIcon } from "./icons";
import SectionHeading from "./section-heading";
import { siteConfig } from "@/lib/data";

interface GitHubRepo {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  fork: boolean;
  updated_at: string;
  topics: string[];
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface Stats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: { name: string; count: number }[];
  recentRepos: GitHubRepo[];
  followers: number;
}

const GITHUB_USERNAME = "leninathikam";

const languageColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89e051",
};

function LanguageBar({ languages }: { languages: { name: string; count: number }[] }) {
  const total = languages.reduce((sum, l) => sum + l.count, 0);
  if (total === 0) return null;

  return (
    <div>
      <div className="flex h-2 overflow-hidden rounded-full bg-surface-elevated">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="h-full transition-all"
            style={{
              width: `${(lang.count / total) * 100}%`,
              backgroundColor: languageColors[lang.name] || "#8b8b8b",
            }}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: languageColors[lang.name] || "#8b8b8b" }}
            />
            <span className="text-xs text-text-secondary">
              {lang.name}{" "}
              <span className="text-text-tertiary">
                {((lang.count / total) * 100).toFixed(1)}%
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          setLoading(false);
          return;
        }

        const user: GitHubUser = await userRes.json();
        const repos: GitHubRepo[] = await reposRes.json();

        const ownRepos = repos.filter((r) => !r.fork);

        const totalStars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const totalForks = ownRepos.reduce((sum, r) => sum + r.forks_count, 0);

        const langMap = new Map<string, number>();
        for (const repo of ownRepos) {
          if (repo.language) {
            langMap.set(repo.language, (langMap.get(repo.language) || 0) + 1);
          }
        }
        const topLanguages = Array.from(langMap.entries())
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 6);

        const recentRepos = ownRepos
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 4);

        setStats({
          totalRepos: ownRepos.length,
          totalStars,
          totalForks,
          topLanguages,
          recentRepos,
          followers: user.followers,
        });
      } catch {
        // Silently fail — stats section just won't render
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section id="github" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="GitHub" />
          <div className="grid gap-4 sm:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-24 animate-pulse rounded-xl border border-border bg-surface"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!stats) return null;

  const statCards = [
    { label: "Repositories", value: stats.totalRepos },
    { label: "Stars Earned", value: stats.totalStars },
    { label: "Forks", value: stats.totalForks },
    { label: "Followers", value: stats.followers },
  ];

  return (
    <section id="github" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="GitHub"
          subtitle="Open-source projects and contributions."
        />

        {/* Stats row */}
        <div className="grid gap-4 sm:grid-cols-4">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-surface p-5 text-center"
            >
              <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-text-tertiary">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          {/* Language breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border border-border bg-surface p-6 lg:col-span-2"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              Top Languages
            </h3>
            <LanguageBar languages={stats.topLanguages} />
          </motion.div>

          {/* Recent repos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              Recently Updated
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {stats.recentRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-hover"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-text-primary group-hover:text-accent">
                      {repo.name}
                    </p>
                    {repo.stargazers_count > 0 && (
                      <span className="flex-shrink-0 text-xs text-text-tertiary">
                        &#9733; {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                  {repo.description && (
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-secondary">
                      {repo.description}
                    </p>
                  )}
                  {repo.language && (
                    <div className="mt-3 flex items-center gap-1.5">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{
                          backgroundColor: languageColors[repo.language] || "#8b8b8b",
                        }}
                      />
                      <span className="text-xs text-text-tertiary">{repo.language}</span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* View on GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
          >
            <GitHubIcon width={16} height={16} />
            View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
