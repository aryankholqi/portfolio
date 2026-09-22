export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  short: string;
  tags: string[];
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "abidarya",
    name: "Abidarya",
    year: "2026",
    summary:
      "Showcase site for a cosmetics and personal-care brand. Product catalogue, category browsing, and detail pages built for a growing range.",
    short: "Cosmetics brand showcase",
    tags: [
      "Next.js App Router",
      "TypeScript",
      "Three.js",
      "React Query",
      "GSAP",
    ],
    image: "/work/Abidarya.webp",
    featured: true,
  },
  {
    slug: "lynx",
    name: "Lynx",
    year: "2024",
    summary:
      "A platform for building online business cards. Users fully customise their own card — photo, phone numbers, social links — and share it with anyone as a public link.",
    short: "Online business-card platform",
    tags: ["Next.js App Router", "TypeScript", "React Query", "GSAP"],
    image: "/work/Lynx.webp",
    featured: true,
  },
  {
    slug: "bank-test",
    name: "Bank test",
    year: "2025",
    summary:
      "Mock-exam and analytics platform for students preparing for Iran’s master’s and PhD entrance exams.",
    short: "Exam platform",
    tags: ["Next.js App Router", "TypeScript", "MathJax"],
    image: "/work/Banktest.webp",
    featured: false,
  },
  {
    slug: "tahla",
    name: "Tahla",
    year: "2025",
    summary:
      "Online store for gold and jewellery. Product catalogue, category browsing, and detail pages.",
    short: "Gold & jewellery store",
    tags: ["Next.js App Router", "TypeScript", "Shadcn"],
    image: "/work/Tahla.webp",
    featured: false,
  },
  {
    slug: "rabeck",
    name: "Rabeck",
    year: "2026",
    summary:
      "Showcase site for the Rabeck team — all of their services and completed work in one place.",
    short: "Agency showcase",
    tags: ["Next.js App Router", "TypeScript", "Three.js"],
    image: "/work/Rabeck.webp",
    featured: false,
  },
];

export const stack = [
  {
    title: "Core",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "JavaScript"],
  },
  {
    title: "Styling",
    items: ["Tailwind", "CSS Modules", "Design tokens", "Radix primitives"],
  },
  { title: "Data", items: ["React Query", "tRPC", "Zod", "MongoDB"] },
  { title: "Tooling", items: ["Playwright", "Vitest", "Turborepo", "Vercel"] },
];

export const experience = [
  {
    period: "2024 — now",
    role: "Frontend developer · Rabeck Studio",
    mode: "Remote",
    bullets: [
      "Engineered a real-time online test platform (CSHub) for graduate/PhD entrance exam prep, integrating MathJax for complex math rendering; onboarded 6,000+ students, and sustained 800+ concurrent users during peak exam periods",
      "Built a large-scale e-commerce platform (Tahla) for a gold and jewelry retailer with dozens of pages, architecting modular, reusable components that maintained a 95+ Google Lighthouse performance score across the entire site",
      "Developed the full-stack architecture for a music concert website (Farhang Gostar Saba), including all Next.js API routes and a MongoDB database from scratch, enabling users to stream and favorite songs, with IP-based rate limiting (50 req/min) to ensure stability under high traffic",
      "Delivered a delivery-logistics platform (Zoodline) using react-leaflet for interactive origin/destination selection, cost calculation, and delivery-time estimation, now used by partner stores and generating 300+ daily deliveries across Tehran",
      "Integrated Three.js for interactive 3D product visualization on a cosmetics B2B/B2C showcase site (Abidarya), optimizing render scale and scene lighting to achieve accurate shadows while maintaining strong mobile performance",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Frontend developer · Saminray ICT",
    mode: "Full-time",
    bullets: [
      "Developed a comprehensive psychology-assessment platform featuring multiple test types (personality, emotional intelligence, marriage compatibility, and DISC), prioritizing a highly intuitive and engaging test-taking user experience",
      "Built Daricard, a bill-payment and telecom-recharge platform, integrating APIs from multiple providers (Hamrah-e Avval, Irancell, Rightel, electricity, gas, and water utilities) with identity-verification-based user registration; implemented per-user rate limiting via the Token Bucket algorithm to prevent request abuse",
      "Engineered an administrative dashboard for the Ministry of Defense, enabling live monitoring of CCTV camera feeds across all organizational units in real time using WebSockets",
    ],
  },
];

export const now = [
  "Rebuilding Rabeck’s website on the App Router",
  "Working on a set of new features for Bank Test",
];

export const links = {
  email: "aryankholqi@gmail.com",
  github: "https://github.com/aryankholqi",
  linkedin: "https://linkedin.com/in/aryan-kholghi",
  resume: "https://coral-odette-80.tiiny.site",
};
