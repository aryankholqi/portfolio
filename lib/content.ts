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
    slug: 'abidarya',
    name: 'Abidarya',
    year: '2026',
    summary:
      'Showcase site for a cosmetics and personal-care brand. Product catalogue, category browsing, and detail pages built for a growing range.',
    short: 'Cosmetics brand showcase',
    tags: ['Next.js App Router', 'TypeScript', 'Three.js', 'React Query', 'GSAP'],
    image: '/work/Abidarya.webp',
    featured: true,
  },
  {
    slug: 'lynx',
    name: 'Lynx',
    year: '2024',
    summary:
      'A platform for building online business cards. Users fully customise their own card — photo, phone numbers, social links — and share it with anyone as a public link.',
    short: 'Online business-card platform',
    tags: ['Next.js App Router', 'TypeScript', 'React Query', 'GSAP'],
    image: '/work/lynx.jpg',
    featured: true,
  },
  {
    slug: 'bank-test',
    name: 'Bank test',
    year: '2025',
    summary:
      'Mock-exam and analytics platform for students preparing for Iran’s master’s and PhD entrance exams.',
    short: 'Exam platform',
    tags: ['Next.js App Router', 'TypeScript', 'MathJax'],
    image: '/work/bank-test.jpg',
    featured: false,
  },
  {
    slug: 'tahla',
    name: 'Tahla',
    year: '2025',
    summary: 'Online store for gold and jewellery. Product catalogue, category browsing, and detail pages.',
    short: 'Gold & jewellery store',
    tags: ['Next.js App Router', 'TypeScript', 'Shadcn'],
    image: '/work/tahla.jpg',
    featured: false,
  },
  {
    slug: 'rabeck',
    name: 'Rabeck',
    year: '2026',
    summary: 'Showcase site for the Rabeck team — all of their services and completed work in one place.',
    short: 'Agency showcase',
    tags: ['Next.js App Router', 'TypeScript', 'Three.js'],
    image: '/work/rabeck.jpg',
    featured: false,
  },
];

export const stack = [
  { title: 'Core', items: ['Next.js (App Router)', 'React 19', 'TypeScript', 'JavaScript'] },
  { title: 'Styling', items: ['Tailwind', 'CSS Modules', 'Design tokens', 'Radix primitives'] },
  { title: 'Data', items: ['React Query', 'tRPC', 'Zod', 'Prisma'] },
  { title: 'Tooling', items: ['Playwright', 'Vitest', 'Turborepo', 'Vercel'] },
];

export const experience = [
  {
    period: '2024 — now',
    role: 'Frontend developer · Rabeck Studio',
    mode: 'Remote',
    bullets: [
      'Architected and delivered multiple Next.js applications leveraging SSR, SSG, ISR, Server Components, and Streaming to optimize rendering strategies per product requirement.',
      "Built and maintained a reusable component library aligned with the company's Design Language System (DLS), significantly reducing cross-project duplication.",
      'Collaborated closely with backend engineers on API design, resolving integration challenges and aligning on contract-first development practices.',
      'Collaborated on building reusable UI component systems following consistent design patterns, improving delivery speed across projects.',
    ],
  },
  {
    period: '2023 — 2024',
    role: 'Frontend developer · Saminray ICT',
    mode: 'Full-time',
    bullets: [
      'Developed and maintained multiple admin panels, handling complex data tables, dynamic forms, and role-based access control.',
      'Leveraged React Hooks, Context API, and Redux Toolkit to manage global and local application state efficiently.',
      'Worked with Zustand and React Query for lightweight state management and server-state synchronization in high-frequency data views.',
      'Contributed to performance optimizations including code-splitting, lazy loading, and memoisation techniques.',
    ],
  },
];

export const now = [
  'Rebuilding Rabeck’s website on the App Router',
  'Writing a short series on making server components measurable.',
];

export const links = {
  email: 'aryankholqi@gmail.com',
  github: 'https://github.com/aryankholqi',
  linkedin: 'https://linkedin.com/in/aryan-kholqi-261480260',
  resume: 'https://aryankholghi-resume.tiiny.site/',
};
