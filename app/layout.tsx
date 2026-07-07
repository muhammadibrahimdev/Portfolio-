import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://muhammadibrahim.dev"),
  title: {
    default: "Muhammad Ibrahim | Backend Developer",
    template: "%s | Muhammad Ibrahim",
  },
  description:
    "Backend developer and software engineering student building scalable APIs and systems with Node.js, Express, PostgreSQL, and MongoDB.",
  keywords: [
    "Muhammad Ibrahim",
    "Backend Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Software Engineer Karachi",
  ],
  openGraph: {
    title: "Muhammad Ibrahim | Backend Developer",
    description:
      "Backend developer and software engineering student building scalable APIs and systems.",
    url: "https://muhammadibrahim.dev",
    siteName: "Muhammad Ibrahim",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ibrahim | Backend Developer",
    description:
      "Backend developer and software engineering student building scalable APIs and systems.",
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
    jobTitle: "Backend Developer",
    url: "https://muhammadibrahim.dev",
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
    alumniOf: "Sindh Madressatul Islam University",
    knowsAbout: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "System Design"],
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
