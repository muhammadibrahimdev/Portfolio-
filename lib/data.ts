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
    slug: "ai-questions-answers-generator",
    name: "AI Questions & Answers Generator",
    tagline: "Turn an uploaded PDF into study questions",
    summary:
      "Upload a PDF and an LLM generates questions and answers from its content using FastAPI.",
    status: "Built · deploying next",
    statusTone: "emerald",
    kind: "Web app · Python",
    stack: ["Python", "FastAPI", "LangChain", "Groq LLM API", "PDF Processing"],
    images: ["qa1.jpg", "2.png", "3.png", "4.png"],
    imageFit: "cover",
    overview:
      "An application that extracts text from uploaded PDFs and uses an LLM to generate questions and answers.",
    problem:
      "Creating practice questions from lecture notes takes time. This application automates the initial question-generation process.",
    built: [
      "PDF upload and text extraction.",
      "LLM-powered question and answer generation.",
      "FastAPI endpoints for file upload and content generation.",
      "Web interface to upload documents and view generated results.",
    ],
    links: [
      {
        label: "Visit AI Questions & Answers Generator",
        href: "https://ai-questions-answers-generator.vercel.app/",
        kind: "demo",
      },
    ],
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
    stack: ["React", "Next.js", "React Native (Expo)"],
    images: ["sellkar1.jpg", "sellkar2.jpg", "sellkar3.jpg", "4.png"],
    imageFit: "cover",
    overview:
      "Sellkar.pk is an online store platform built by Technet Cloud. During my internship, I worked on storefront themes and mobile application features.",
    problem:
      "Sellers need ready-made storefronts that look professional across different devices without building their own websites.",
    built: [
      "20+ responsive storefront themes that users can preview and deploy.",
      "Mobile application features using React Native and Expo.",
    ],
    links: [
      {
        label: "Visit Sellkar.pk",
        href: "https://sellkar.pk",
        kind: "demo",
      },
    ],
    note: "Team project. I describe only the components I personally developed.",
  },
  {
    slug: "mirageworks-website",
    name: "Mirage Works",
    tagline: "A professional multi-page corporate website",
    summary:
      "Designed and developed a 25+ page business website showcasing corporate services, financial solutions, ERP implementation, and business process outsourcing.",
    status: "Live",
    statusTone: "emerald",
    kind: "Work project · Technet Cloud",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    images: ["mirage1.jpg","mirage2.jpg","mirage3.jpg"],
    imageFit: "cover",
    overview:
      "Mirage Works is a corporate business website built to establish the company's online presence and showcase its professional services. The website presents financial management, accounting, ERP implementation, and business process outsourcing solutions through a multi-page experience.",
    problem:
      "Businesses need a professional online presence to communicate their services, establish credibility, and convert visitors into potential clients.",
    built: [
      "Developed a 25+ page corporate website.",
      "Built responsive layouts for desktop, tablet, and mobile devices.",
      "Created structured pages to showcase business services and solutions.",
      "Implemented service sections covering accounting, financial management, ERP solutions, and business process outsourcing.",
      "Developed navigation, calls to action, and contact sections to improve user experience and client engagement.",
      "Organized business information into a clear and accessible website structure.",
    ],
    links: [
      {
        label: "Visit Mirage Works",
        href: "https://www.mirageworks.co/",
        kind: "demo",
      },
    ],
    note: "Developed during my internship at Technet Cloud.",
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
