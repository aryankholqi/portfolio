export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  short: string;
  tags: string[];
  image: string;
  featured: boolean;
  /** Live site — makes the whole card a link. */
  url?: string;
  /** Source code, shown as a secondary link. */
  repo?: string;
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
    url: "https://abidarya.com",
  },
  {
    slug: "liquid-glass-cli",
    name: "Liquid Glass CLI",
    year: "2026",
    summary:
      "A React take on Apple’s iOS 26 Liquid Glass — real refraction, chromatic dispersion, and specular light on the web. Added shadcn style through a CLI, with a Figma plugin that turns glass designs into components.",
    short: "Liquid Glass component & CLI",
    tags: ["Nextj.js App Router", "TypeScript", "Tailwind CSS", "Node.js CLI", "Figma Plugin"],
    image: "/work/Liquid-glass-cli.webp",
    featured: true,
    url: "https://liquid-glass-showcase-red.vercel.app/",
    repo: "https://github.com/aryankholqi/liquid-glass-cli",
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
    url: "https://test-cshub.ir",
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
    url: "https://tahla.vercel.app",
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
    url: "https://rabeck.vercel.app",
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
    featured: false,
    url: "https://lynx-psi.vercel.app",
  },
];

export const stack = [
  {
    title: "Programming",
    items: ["JavaScript", "Python", "C++", "MATLAB", "HTML", "CSS", "LaTeX"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "CrewAI", "Pydantic", "Redux.js", "Zustand", "TanStack Query"],
  },
  {
    title: "UI & Styling",
    items: ["Tailwind CSS", "Material-UI", "Bootstrap", "Shadcn", "Framer Motion", "GSAP", "Three.js"],
  },
  {
    title: "APIs & Data",
    items: ["REST APIs", "GraphQL", "Axios", "WebSocket", "MongoDB"],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "npm", "Figma", "Progressive Web Apps (PWAs)", "MathJax"],
  },
  {
    title: "Languages",
    items: ["English — IELTS Academic 7", "German — A1", "Persian — Native"],
  },
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

export const education = [
  {
    period: "2020 — 2024",
    degree: "B.Sc in Computer Science · University of Mazandaran",
    grade: "GPA 17.32/20",
    details: [
      "Ranked 1st among 76 students in the department for 5 consecutive semesters (2nd – 6th semester); admitted 2nd among 76 in the 2020 cohort",
      "Coursework: Artificial Intelligence, Data Mining, Design and Analysis of Algorithms, Data Structures and Algorithms, Probability, Linear Algebra, Linear Optimization",
      "Teaching Assistant for Linear Optimization (Sep 2022 — Jan 2023), leading weekly problem-solving sessions for 30+ students",
    ],
    project: {
      title: "Final project: Filtered Approximate Nearest Neighbor Search over Vector Embeddings",
      bullets: [
        "Built an end-to-end benchmark pipeline on 200K+ text chunks from English Wikipedia, generating dense embeddings (BGE) and preserving real categorical metadata for filtered-search evaluation",
        "Implemented and benchmarked four ANN search strategies (brute-force, post-filtering, in-graph filtering, and an ACORN-inspired over-provisioned HNSW) using FAISS, evaluated across 1,000+ queries",
        "Discovered that standard HNSW-based filtering degrades sharply below 5% selectivity, and that semantically-clustered filters underperform random filters by up to 3x at comparable selectivity — showing selectivity alone does not predict filtered-search quality",
        "Showed that graph over-provisioning improves recall by up to 30 percentage points but plateaus on clustered filters, motivating predicate-aware graph construction as the next research direction",
      ],
    },
  },
  {
    period: "2017 — 2020",
    degree: "High School Diploma in Mathematics and Physics · Exemplary High School",
    grade: "GPA 18.40/20",
    details: [],
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

/** Interface copy: nav, headings, buttons, form states. */
export const ui = {
  meta: {
    title: 'Aryan Kholghi — Frontend developer',
    description:
      'Independent frontend work: product UI, design-system implementation, and performance on React and Next.js codebases.',
    ogDescription: 'Frontend developer building fast, accessible interfaces in Next.js.',
  },
  name: 'Aryan Kholghi',
  nav: {
    work: 'Work',
    about: 'About',
    now: 'Now',
    contact: 'Contact',
    available: 'Available for projects',
    availableShort: 'Available',
    language: 'Language',
    languages: { en: 'English', fa: 'Farsi' },
  },
  hero: {
    eyebrow: 'Frontend developer',
    title: 'I build fast, accessible interfaces in Next.js.',
    lead: 'Independent frontend work: product UI, design-system implementation, and performance on React and Next.js codebases. Currently taking on contract projects.',
    cta: 'See selected work',
    facts: [
      ['Based', 'Remote · UTC+3:30'],
      ['Focus', 'Next.js, TypeScript, React'],
      ['Since', '2023 — 4 shipped products'],
      ['Next opening', 'September 2026'],
    ],
  },
  work: {
    heading: 'Selected work',
    count: '{n} projects · 2023—2026',
    visit: 'Visit',
    source: 'Source',
    screenshot: 'screenshot',
    newTab: '(opens in a new tab)',
    codeFor: 'code for',
  },
  about: {
    heading: 'About',
    lead: 'I work with small product teams that need frontend depth without a full-time hire.',
    body: [
      'Most of my work starts where a design hands off and ends where the code ships: turning Figma into components that hold up, replacing accumulated CSS with a token system, and fixing the pages that got slow.',
      'I write TypeScript by default, test the parts that break, and care more about the interface being quick and legible than about which framework it was built with. Available for two- to twelve-week engagements.',
    ],
  },
  stackHeading: 'Stack',
  experienceHeading: 'Experience',
  educationHeading: 'Education',
  nowHeading: 'Now',
  contact: {
    heading: 'Contact',
    title: 'Have a frontend problem that needs shipping?',
    lead: 'Send a short brief — what it is, when it needs to be live. I reply within a day.',
    name: 'Your name',
    email: 'Email',
    message: 'What are you building?',
    send: 'Send brief',
    sending: 'Sending…',
    thanks: 'Thanks — your brief is in.',
    thanksNamed: 'Thanks, {name} — your brief is in.',
    replyBefore: 'I’ll read it and reply to',
    replyAfter: 'within a day. If it’s not in your inbox by then, check spam.',
    yourEmail: 'your email',
    again: 'Send another message',
    error: 'Something went wrong. Email me directly at',
    limited: 'Too many messages in a short time. Try again in a few minutes or email me at',
    links: { github: 'GitHub', linkedin: 'LinkedIn', resume: 'Résumé (PDF)', email: 'Email' },
  },
  footer: { credit: 'Aryan Kholghi — Frontend developer', built: 'Built with Next.js' },
};
