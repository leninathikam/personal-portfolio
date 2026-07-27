"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Database, Rocket } from "lucide-react";
import SectionHeading from "./section-heading";

const focusAreas = [
  {
    icon: Bot,
    title: "LLM Agents & RAG",
    description:
      "RAG systems with secure architectures, multi-agent workflows using CrewAI and LangChain, and LLM evaluation with LangSmith and Ragas.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "End-to-end supervised learning: feature engineering, model selection, hyperparameter tuning, and testing with ensemble methods.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "ETL pipelines, SQL optimization, and automated reporting that reduced manual work and improved data freshness for stakeholders.",
  },
  {
    icon: Rocket,
    title: "Deployment & MLOps",
    description:
      "FastAPI and Streamlit apps, Docker containers, AWS (EC2, Lambda, SageMaker), and Hugging Face Spaces deployments with CI/CD.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About" />

        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              I recently completed my MS in Data Science at Michigan Tech, where
              I built production AI systems — RAG pipelines, multi-agent
              workflows, and ML models with testing and deployment baked in.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              As a Research Assistant, I focused on Secure RAG architectures and
              adversarial LLM defense. As a Teaching Assistant, I guided 70+
              students through ML, neural networks, and transformer concepts.
              Before grad school, I earned a B.Tech in CS (AI) from Parul
              University and interned as a Data Scientist and Data Analyst,
              improving forecasting accuracy by 15% and contributing to a 12%
              boost in student retention through data-driven insights.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Actively seeking full-time{" "}
              <span className="font-medium text-text-primary">
                Data Scientist
              </span>
              ,{" "}
              <span className="font-medium text-text-primary">
                ML Engineer
              </span>
              , or{" "}
              <span className="font-medium text-text-primary">
                AI Engineer
              </span>{" "}
              roles — open to relocating anywhere in the US.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                Quick Facts
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  ["Education", "MS Data Science, Michigan Tech"],
                  ["Focus", "LLM Agents, RAG, Production ML"],
                  ["Projects", "8+ end-to-end ML/AI systems"],
                  ["Experience", "Research + 2 industry internships"],
                  ["Location", "Open to relocate (US)"],
                  ["Status", "MS Graduated, Apr 2026"],
                ].map(([label, value]) => (
                  <li key={label} className="flex justify-between gap-4">
                    <span className="text-sm text-text-tertiary">{label}</span>
                    <span className="text-right text-sm font-medium text-text-primary">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-hover"
            >
              <area.icon
                size={20}
                className="mb-3 text-accent"
                strokeWidth={1.5}
              />
              <h3 className="text-sm font-semibold text-text-primary">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
