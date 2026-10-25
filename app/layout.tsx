import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Ibrahim | Full Stack Developer",
    template: "%s | Muhammad Ibrahim",
  },
  description:
    "Full stack developer and software engineering student in Karachi building web and mobile apps with React, Node.js and Python, with LLM integration.",
  keywords: [
    "Muhammad Ibrahim",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Software Engineer Karachi",
  ],
  openGraph: {
    title: "Muhammad Ibrahim | Full Stack Developer",
    description:
      "Full stack developer and software engineering student in Karachi, building web apps and LLM-powered features.",
    url: siteUrl,
    siteName: "Muhammad Ibrahim",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ibrahim | Full Stack Developer",
    description:
      "Full stack developer and software engineering student in Karachi, building web apps and LLM-powered features.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Ibrahim",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
    alumniOf: "Sindh Madressatul Islam University",
    knowsAbout: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Python", "FastAPI", "LangChain", "REST APIs"],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${plexMono.variable} ${inter.variable} font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
