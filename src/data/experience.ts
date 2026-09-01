export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'co-founder' | 'internship' | 'lead';
  highlights: string[];
  technologies: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    id: 'hintas',
    role: 'Co-Founder',
    company: 'Hintas',
    location: 'Hybrid',
    period: 'Feb 2026 - Aug 2026',
    type: 'co-founder',
    highlights: [
      'Co-founded Hintas to map a business’s workflows from its documentation so AI agents can drive the software autonomously instead of guessing at endpoints',
      'Designed and built the microservices platform behind Traefik that provisions, deploys and maintains a per-tenant MCP container, running 8 production MCP servers',
      'Isolated every MCP server behind its own OAuth 2.0 flow so tenant credentials never touch the platform',
      'Automated tenant onboarding on Docker with TLS issuance and zero-downtime release cutovers',
      'Built an open-source benchmark tool that runs Claude Code through 169 prompts against Slack, Notion and Gmail, pushing Slack task success from 23% to 77% and Gmail from 50% to 71%',
      'Engineered a RAG pipeline that embeds customer documentation with Voyage into a per-tenant knowledge base, so natural-language tool calls resolve correctly across company-specific terminology',
    ],
    technologies: ['Python', 'FastAPI', 'MCP', 'Docker', 'Traefik', 'OAuth 2.0', 'RAG', 'Voyage', 'pgvector'],
  },
  {
    id: 'turing',
    role: 'Software Engineer',
    company: 'Turing',
    location: 'Remote',
    period: 'Nov 2022 - Sep 2025',
    type: 'full-time',
    highlights: [
      'Built a Contractor Management System in Django, React and PostgreSQL serving 10+ Fortune 500 clients, consolidating onboarding, performance tracking, cross-client transfers and offboarding into one platform',
      'Set up a trigger-based Celery/Redis task queue on GCP to generate performance metrics across 200,000+ contractor records daily',
      'Audited the application for N+1 query problems and resolved them across multiple endpoints, improving response times throughout the app by 4x',
      'Promoted to Team Lead; managed a 6-person team and ran RLHF evaluations, contributing to fine-tuning cycles on a model that shipped publicly',
    ],
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Celery', 'Redis', 'GCP', 'TypeScript'],
  },
  {
    id: 'dispatch',
    role: 'Software Engineer',
    company: 'Dispatch',
    location: 'Hybrid',
    period: 'Nov 2021 - Dec 2022',
    type: 'full-time',
    highlights: [
      'Landed 6 enterprise clients and drove 35,000+ deliveries in 6 months by building a reusable Python integration framework with a shared adapter layer and config-driven mapping, instantiated per client to fit existing tooling',
      'Cut manual dispatch overhead by 70% by building Django REST APIs and a Flutter app (iOS/Android) with real-time GPS tracking, FCM notifications and digital proof-of-delivery',
      'Built the multi-tenant logistics SaaS on DigitalOcean end-to-end: database-per-tenant isolation, a central control DB and subdomain routing for tenant separation',
    ],
    technologies: ['Python', 'Django', 'Flutter', 'PostgreSQL', 'Firebase', 'DigitalOcean', 'REST APIs'],
    link: 'https://bydispatch.com/',
  },
  {
    id: 'ulpu',
    role: 'Co-Founder & Full Stack Developer',
    company: 'ULPU Online Pvt. Ltd.',
    location: 'Onsite',
    period: 'Jul 2020 - Nov 2021',
    type: 'co-founder',
    highlights: [
      'Architected a Django e-commerce platform end-to-end, growing it to 500+ product listings and 1,000+ monthly orders',
      'Automated order tracking, notifications and inventory sync with Celery and Redis, cutting release cycles from days to 3 hours',
    ],
    technologies: ['Django', 'PostgreSQL', 'Celery', 'Redis', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3'],
    link: 'https://ulpuskins.com/',
  },
  {
    id: 'wiseyak',
    role: 'Software Engineer Intern',
    company: 'Wiseyak Inc.',
    location: 'Remote',
    period: 'Apr 2020 - Jul 2020',
    type: 'internship',
    highlights: [
      'Developed backend for telemedicine platform',
      'Implemented JWT authentication with RBAC',
      'Built appointment scheduling with conflict detection',
      'Designed pharmacy inventory management system',
      'Reduced administrative data entry workload by 90%',
    ],
    technologies: ['Django', 'PostgreSQL', 'JWT', 'REST APIs'],
    link: 'https://sajilodoctor.com/',
  },
];
