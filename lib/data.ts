export const experience = [
  {
    role: "MERN Stack Developer",
    company: "Technet Cloud",
    place: "Karachi, Pakistan",
    period: "Nov 2025 – May 2026",
    type: "Internship",
    points: [
      "Built 20+ responsive storefront themes for sellkar.pk that users can preview and deploy.",
      "Built mobile features for the Sellkar platform in React Native (Expo).",
      "Built mirageworks.co, a 25+ page business website.",
    ],
  },
];

export const education = [
  {
    title: "BS, Software Engineering",
    place: "Sindh Madressatul Islam University (SMIU)",
    period: "2024 – 2028",
  },
  {
    title: "Modern Web and App Development Course",
    place: "Saylani Mass IT Program (SMIT)",
    period: "2024 – 2025",
  },
  {
    title: "Generative AI Course",
    place: "freeCodeCamp.org",
    period: "2026",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  "Frontend Development": ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  "Backend Development": ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  "Generative AI & LLMs": [
    "RAG",
    "LLM Integration",
    "Prompt Engineering",
    "LangChain",
    "Embeddings",
    "Semantic Search",
  ],
  "Vector Search & Databases": ["ChromaDB", "FAISS", "MongoDB", "PostgreSQL", "MySQL"],
  "Mobile Development": ["Flutter", "Dart", "React Native (Expo)"],
  Tools: ["Git", "GitHub", "Claude", "Copilot"],
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "code" | "demo" | "apk" | "video";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: string;
  statusTone: "emerald" | "azure";
  kind: string;
  stack: string[];
  /** Files looked up in /public/projects/<slug>/. Missing files are skipped automatically. */
  images: string[];
  imageFit: "cover" | "contain";
  overview: string;
  problem: string;
  built: string[];
  planned?: string[];
  links: ProjectLink[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "classpilot",
    name: "ClassPilot",
    tagline: "Multi-tenant school management platform",
    summary:
      "One platform for many schools, with separate logins for admins, teachers and parents and each school's data kept apart.",
    status: "In development",
    statusTone: "azure",
    kind: "Web app · MERN",
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    images: ["1.png", "2.png", "3.png", "4.png"],
    imageFit: "cover",
    overview:
      "ClassPilot is a school management SaaS. Several schools run on one deployment, and each one only ever sees its own classes, teachers, students and parents. I am building it as my main backend project, so the focus is on authentication, access control and data isolation before the feature list grows.",
    problem:
      "Many schools track attendance, fees and results across separate registers and chat groups. A shared platform has to give every school its own space and give each person only the access their role allows.",
    built: [
      "Multi-role backend for Super Admin, School Admin, Teacher and Parent accounts.",
      "JWT authentication with bcrypt password hashing.",
      "Role-based access control (RBAC) on the API routes.",
      "Multi-tenant design that keeps each school's data separate.",
      "React frontend with Redux Toolkit for state management.",
    ],
    planned: [
      "Attendance marking for teachers, with absence alerts for parents.",
      "Monthly fee records and payment tracking.",
      "Results and report cards.",
      "Live notifications with Socket.IO.",
      "Automated tests and a public live demo.",
    ],
    links: [
      {
        label: "Source code",
        href: "https://github.com/muhammadibrahimdev/Class-Pilot",
        kind: "code",
      },
    ],
    note: "The planned features are not built yet. This page will be updated as each one ships.",
  },
  {
    slug: "ai-questions-answers-generator",
    name: "AI Questions & Answers Generator",
    tagline: "Turn an uploaded PDF into study questions",
    summary:
      "Upload a PDF and an LLM writes questions and answers from its content, served through FastAPI endpoints.",
    status: "Built · deploying next",
    statusTone: "emerald",
    kind: "Web app · Python",
    stack: ["Python", "FastAPI", "LangChain", "Groq LLM API", "PDF Processing"],
    images: ["qa1.jpg", "2.png", "3.png", "4.png"],
    imageFit: "cover",
    overview:
      "A small app that reads an uploaded PDF and uses a large language model to generate questions and answers from the text. It has FastAPI endpoints for file upload and content generation, plus a simple web interface to try it.",
    problem:
      "Writing practice questions from lecture notes or chapters takes time. This app drafts them from the document itself, so a student or teacher gets a starting set to review and edit.",
    built: [
      "PDF upload and text extraction.",
      "LLM question and answer generation using LangChain and the Groq API.",
      "FastAPI endpoints for file upload and content generation.",
      "A simple web interface to upload a file and read the results.",
    ],
        links: [{ label: "Visit ai-questions-answers-generator.vercel.app", href: "https://ai-questions-answers-generator.vercel.app/", kind: "demo" }],
   
  },
  {
    slug: "ai-multilingual-messenger",
    name: "AI Multilingual Messenger",
    tagline: "A chat app for people who don't share a language",
    summary:
      "A Flutter chat app with a Supabase backend and an AI translation workflow for simple, accessible messaging.",
    status: "In development",
    statusTone: "azure",
    kind: "Mobile app · Flutter",
    stack: ["Flutter", "Dart", "Supabase", "AI/LLM Integration"],
    images: ["1.png", "2.png", "3.png", "4.png"],
    imageFit: "contain",
    overview:
      "A mobile chat app that helps people talk across languages. The client is built with Flutter, Supabase provides the backend and data, and an AI translation workflow handles messages between languages.",
    problem:
      "People who speak different languages often fall back on copy-pasting into a translator. Translation built into the conversation keeps the chat simple.",
    built: [
      "Flutter chat client.",
      "Supabase for the backend and data.",
      "AI translation workflow, in design and early build.",
    ],
    planned: [
      "Android build (APK) for download.",
      "Short demo video and screenshots on this page.",
    ],
    links: [],
    note: "Still in progress, so there is no public build yet.",
  },
  {
    slug: "sellkar-storefronts",
    name: "Sellkar.pk Storefronts",
    tagline: "Storefront themes and mobile features",
    summary:
      "20+ responsive storefront themes and React Native features for an online store platform, built during my internship.",
    status: "Live",
    statusTone: "emerald",
    kind: "Work project · Technet Cloud",
    stack: ["React", "React Native (Expo)"],
    images: ["sellkar1.jpg", "2.png", "3.png", "4.png"],
    imageFit: "cover",
    overview:
      "Sellkar.pk is an online store platform built by Technet Cloud. During my internship (Nov 2025 – May 2026) I worked on the storefront themes that sellers choose from and on the mobile side of the platform.",
    problem:
      "A seller needs a storefront that looks right on any screen without designing one from scratch, so the platform offers ready-made themes they can preview and deploy.",
    built: [
      "20+ responsive storefront themes that users can preview and deploy.",
      "Mobile features for the platform, built in React Native with Expo.",
    ],
    links: [{ label: "Visit sellkar.pk", href: "https://sellkar.pk", kind: "demo" }],
    note: "This was team work for a company, so I describe only the parts I built.",
  },
];

export const socials = {
  email: "mailto:ibrahim.engdev@gmail.com",
  emailDisplay: "ibrahim.engdev@gmail.com",
  phone: "+923302826165",
  phoneDisplay: "+92 330 2826165",
  whatsapp: "https://wa.me/923302826165",
  github: "https://github.com/muhammadibrahimdev",
  githubDisplay: "github.com/muhammadibrahimdev",
  linkedin: "https://www.linkedin.com/in/muhammad-ibrahimdev/",
  linkedinDisplay: "linkedin.com/in/muhammad-ibrahimdev",
  location: "Karachi, Pakistan",
};

export const siteUrl = "https://muhammadibrahimdev.vercel.app";
