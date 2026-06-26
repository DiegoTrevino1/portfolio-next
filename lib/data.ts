export const NAME = 'Diego Trevino';
export const EMAIL = 'diegotrevino247@gmail.com';
export const GITHUB_URL = 'https://github.com/DiegoTrevino1';
export const LINKEDIN_URL = 'https://linkedin.com/in/DiegoTrevino';

export const NAV_ITEMS = [
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'resume',     label: 'Resume' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]['id'];

export const SKILL_GROUPS = [
  { label: 'languages',        items: ['Python', 'JavaScript (ES6)', 'TypeScript', 'Java', 'SQL', 'HTML5', 'CSS'] },
  { label: 'frontend',         items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { label: 'backend',          items: ['Node.js', 'Express', 'Spring Boot', 'JWT Auth', 'REST APIs'] },
  { label: 'databases & tools',items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'Azure', 'Linux'] },
];

export const RESUME_DOCS = [
  { title: 'Resume',       desc: 'One-page overview of my education, experience, and skills.', href: '/DiegoResume.pdf' },
  { title: 'Cover Letter', desc: 'A short letter introducing myself for a specific role.',       href: '#' },
];

export const PROJECTS = [
  {
    title: 'Bitwise',
    desc: "Full-stack educational web app for CWU's Computer Architecture course. Students master cache memory mapping through interactive game modes with AI-generated hints — 20+ users, 95% showed measurable progress.",
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Claude AI', 'Vercel'],
    repo: 'https://github.com/DiegoTrevino1',
    demo: '#',
  },
  {
    title: 'Valley Web Design',
    desc: 'Freelance web design business serving Yakima Valley small businesses with bilingual (English/Spanish) marketing sites. Founded and own the full process end-to-end.',
    tags: ['TypeScript', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/DiegoTrevino1',
    demo: '#',
  },
  {
    title: 'Emergency Dispatch System',
    desc: 'Real-time emergency vehicle tracking system with call logging, unit routing, and a responsive frontend. Designed the full system architecture as lead developer.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML5 / CSS'],
    repo: 'https://github.com/DiegoTrevino1',
    demo: '#',
  },
];

export const EXPERIENCE = [
  {
    date: 'Jan 2026 — Present',
    role: 'AI Trainer',
    org: 'Handshake',
    points: [
      'Develop and evaluate domain-specific prompts to assess the performance of large language models (LLMs).',
      'Analyze LLM outputs for scientific accuracy, clarity, and depth in specialized subfields.',
      'Contribute to improving AI understanding of complex concepts through iterative annotation and feedback.',
    ],
    tags: ['LLMs', 'Prompt Engineering', 'Data Annotation'],
  },
  {
    date: 'Jan 2025 — Jun 2025',
    role: 'Teaching Assistant — Algorithm Analysis',
    org: 'Central Washington University',
    points: [
      'Supported upper-division CS instruction, holding office hours and assisting students with time complexity, graph algorithms, and dynamic programming.',
    ],
    tags: ['Algorithms', 'Dynamic Programming', 'Graph Theory'],
  },
];
