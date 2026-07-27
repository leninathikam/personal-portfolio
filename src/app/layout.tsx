import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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

const GA_ID = "G-X73LVN8XHW";

export const metadata: Metadata = {
  title: "Lenin Goud Athikam — AI/ML Engineer & Data Scientist",
  description:
    "AI/ML Engineer with an MS in Data Science from Michigan Tech. Building LLM agents, RAG pipelines, and production ML systems. View projects and resume.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Data Engineer",
    "LLM",
    "RAG",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Multi-Agent Systems",
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
      "Recent MS graduate building LLM agents, RAG pipelines, and production ML systems. Open to Data Science, ML Engineering, and AI Engineering roles.",
    siteName: "Lenin Goud Athikam",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lenin Goud Athikam — AI/ML Engineer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenin Goud Athikam — AI/ML Engineer & Data Scientist",
    description:
      "Recent MS graduate building LLM agents, RAG pipelines, and production ML systems.",
    images: ["/og-image.png"],
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
  jobTitle: "AI/ML Engineer & Data Scientist",
  description:
    "Recent MS graduate specializing in LLM agents, RAG pipelines, and production ML systems. Open to Data Science, ML Engineering, and AI Engineering roles.",
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
    "Multi-Agent Systems",
    "PyTorch",
    "TensorFlow",
    "SQL",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master of Science in Data Science",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Bachelor of Technology in Artificial Intelligence",
    },
  ],
};

const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
