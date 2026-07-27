"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import SectionHeading from "./section-heading";
import { siteConfig } from "@/lib/data";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    isSvg: false,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "athikam-lenin",
    href: siteConfig.linkedin,
    isSvg: true,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "leninathikam",
    href: siteConfig.github,
    isSvg: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
    isSvg: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Looking for full-time opportunities in Data Science, ML Engineering, and AI Engineering. Let's connect."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {contactLinks.map((link) => {
              const inner = (
                <>
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    {link.isSvg ? (
                      <link.icon width={18} height={18} className="text-accent" />
                    ) : (
                      <link.icon size={18} className="text-accent" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary">{link.label}</p>
                    <p className="text-sm font-medium text-text-primary">
                      {link.value}
                    </p>
                  </div>
                </>
              );
              const className = "flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-hover";

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <div key={link.label} className={className}>
                  {inner}
                </div>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-4 rounded-xl border border-border bg-surface p-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-text-tertiary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullname"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-text-tertiary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-accent"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-text-tertiary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-accent"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
