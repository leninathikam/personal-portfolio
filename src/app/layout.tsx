import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lenin Goud Athikam — AI/ML Engineer & Data Scientist",
  description:
    "AI/ML Engineer with an MS in Data Science from Michigan Tech. Building LLM agents, RAG pipelines, and production ML systems. View projects and resume.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "LLM",
    "RAG",
    "Python",
    "PyTorch",
    "TensorFlow",
  ],
  authors: [{ name: "Lenin Goud Athikam" }],
  creator: "Lenin Goud Athikam",
  metadataBase: new URL("https://leningoud.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leningoud.netlify.app",
    title: "Lenin Goud Athikam — AI/ML Engineer & Data Scientist",
    description:
      "AI/ML Engineer with an MS in Data Science. Building LLM agents, RAG pipelines, and production ML systems.",
    siteName: "Lenin Goud Athikam",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenin Goud Athikam — AI/ML Engineer & Data Scientist",
    description:
      "AI/ML Engineer with an MS in Data Science. Building LLM agents, RAG pipelines, and production ML systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lenin Goud Athikam",
  url: "https://leningoud.netlify.app",
  jobTitle: "AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in LLM agents, RAG pipelines, and production ML systems.",
  email: "lathikam@mtu.edu",
  sameAs: [
    "https://github.com/leninathikam",
    "https://www.linkedin.com/in/athikam-lenin",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Michigan Technological University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Parul University",
    },
  ],
  knowsAbout: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Python",
    "LLM Agents",
    "RAG Pipelines",
    "PyTorch",
    "TensorFlow",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
