import FlowboardCaseStudy from './flowboard.mdx';
import PlaycreateCaseStudy from './playcreate.mdx';
import PlanthopperCaseStudy from './planthopper.mdx';

export const caseStudyComponentBySlug: Record<string, any> = {
  flowboard: FlowboardCaseStudy,
  playcreate: PlaycreateCaseStudy,
  'plant-hopper': PlanthopperCaseStudy,
};

export const caseStudyTitleBySlug: Record<string, string> = {
  flowboard: 'FlowBoard — My First Viral Open Source Project',
  playcreate: 'PlayCreate — This Got Us Flown Out to SF',
  'plant-hopper': 'Plant Hopper — Case Study',
};

export const caseStudyMetadataBySlug: Record<string, { 
  timeline: string; 
  team: Array<{ name: string; link: string }>;
  techStack: string;
  githubLink?: string;
  projectLink?: string;
  tableOfContents?: Array<{ label: string; id: string }>;
}> = {
  flowboard: {
    timeline: 'November 2025',
    team: [
      { name: 'James Li', link: 'https://jame.li' },
      { name: 'Daniel Pu', link: 'https://www.danielpu.dev/' },
      { name: 'Ferdinand Zhang', link: 'https://www.linkedin.com/in/ferdinand-simmons-zhang-39ba62297' },
    ],
    techStack: 'TypeScript, React, Vite, Python, Google Cloud Platform, Redis, Indexeddb, Gemini, TlDraw, Tailwind CSS',
    githubLink: 'https://github.com/austinjiann/FlowBoard',
    projectLink: 'https://flowboard.tech',
    tableOfContents: [
      { label: 'Overview', id: 'a-brief-overview' },
      { label: 'Inspiration', id: 'inspiration' },
      { label: 'How It Works', id: 'how-it-works-technically' },
      { label: 'Results', id: 'results' },
    ],
  },
  playcreate: {
    timeline: 'August 2025 - October 2025',
    team: [
      { name: 'Victor Guo', link: 'https://www.linkedin.com/in/victorg8182' },
      { name: 'David Liang', link: 'https://www.linkedin.com/in/david-liang-012357267' },
      { name: 'Muhammad Mamdani', link: 'https://www.linkedin.com/in/muhammadalimamdani' },
    ],
    techStack: 'React, TypeScript, TailWind CSS, Next.js, Node.js, PostgreSQL',
    projectLink: 'https://tryplaycreate.com',
    tableOfContents: [
      { label: 'Overview', id: 'overview' },
      { label: 'The Mission', id: 'the-mission' },
      { label: 'How It Works', id: 'how-it-works-technically' },
      { label: 'Virality', id: 'virality' },
      { label: 'Results', id: 'results' },
    ],
  },
  'plant-hopper': {
    timeline: 'TBD',
    team: [],
    techStack: 'TBD a',
  },
};

