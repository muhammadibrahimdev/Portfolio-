export const experience = [
  {
    role: "MERN Stack & React Native Developer",
    company: "Sellkar.pk",
    period: "Internship",
    points: [
      "Built and shipped 20+ responsive storefront themes used by merchants",
      "Integrated REST APIs powering store deployment and product catalogs",
      "Worked across React, React Native, and Node.js in a shared codebase",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Saylani Mass IT Program",
    period: "Internship",
    points: [
      "Built backend APIs to digitize manual Donation, Qarza, and Zakat records",
      "Designed database schemas for high-volume record-keeping at Head Office scale",
      "Collaborated with a team to replace paper workflows with REST endpoints",
    ],
  },
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Native"],
  Backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth", "Socket.IO"],
  Database: ["MongoDB", "PostgreSQL"],
  DevOps: ["Git", "GitHub", "Docker", "CI/CD"],
  Deployment: ["Vercel", "Render", "MongoDB Atlas"],
  Learning: ["Advanced Node.js", "Redis", "System Design", "DSA"],
};

export const projects = [
  {
    slug: "classpilot",
    name: "ClassPilot",
    tagline: "Multi-tenant School Management SaaS Platform",
    description:
      "A role-based, multi-tenant platform for schools to manage classes, billing, and communication in one place.",
    details:
      "ClassPilot handles multiple schools on one deployment, each fully isolated. Auth uses short-lived JWTs with refresh-token rotation, Socket.IO powers live notifications, Stripe handles per-tenant subscriptions, and a PDF generation service produces report cards and invoices on demand.",
    stack: ["Node.js", "Express", "MongoDB", "Socket.IO", "Stripe", "JWT"],
    tags: { github: "#", demo: "#" },
    featured: true,
  },
  {
    slug: "sellkar-store-builder",
    name: "Sellkar Store Builder",
    tagline: "20+ theme storefront builder",
    description:
      "Theme engine and deployment pipeline letting merchants launch a branded storefront in minutes.",
    details:
      "Developed 20+ responsive storefront themes on a shared component system, integrated REST APIs for catalog and order management, and built the deployment pipeline that pushes a merchant's store live.",
    stack: ["React", "Node.js", "REST APIs", "Tailwind CSS"],
    tags: { github: "#", demo: "#" },
    featured: true,
  },
  {
    slug: "donation-management-system",
    name: "Donation Management System",
    tagline: "Digitizing Zakat & Qarza records",
    description:
      "Backend APIs replacing manual paper records for donations, Qarza, and Zakat at Saylani's Head Office.",
    details:
      "Designed the database schema and REST endpoints used to move high-volume manual record-keeping onto a searchable, auditable backend system.",
    stack: ["Node.js", "Express", "MongoDB", "REST APIs"],
    tags: { github: "#", demo: "#" },
    featured: false,
  },
];

export const roadmap = [
  { label: "Advanced Node.js", status: "in-progress" as const },
  { label: "PostgreSQL", status: "in-progress" as const },
  { label: "Docker", status: "in-progress" as const },
  { label: "Redis", status: "upcoming" as const },
  { label: "CI/CD", status: "upcoming" as const },
  { label: "AWS", status: "upcoming" as const },
  { label: "System Design", status: "in-progress" as const },
];

export const socials = {
  email: "mailto:ibrahim.engdev@gmail.com",
  emailDisplay: "ibrahim.engdev@gmail.com",
  phone: "+923302826165",
  phoneDisplay: "+92 330 2826165",
  whatsapp: "https://wa.me/923302826165",
  github: "https://github.com/ibrahim-engdev",
  githubDisplay: "github.com/ibrahim-engdev",
  linkedin: "https://www.linkedin.com/in/brahim-engdev/",
  linkedinDisplay: "linkedin.com/in/brahim-engdev",
  location: "Karachi, Pakistan",
};
