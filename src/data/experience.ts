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
    id: 'turing',
    role: 'Software Engineer',
    company: 'Turing',
    location: 'Remote',
    period: 'Nov 2022 - Dec 2024',
    type: 'full-time',
    highlights: [
      'Architected Contractor Management System serving 10+ Fortune 500 clients',
      'Promoted to Team Lead within 1 month, managing 6-7 developers',
      'Engineered ETL pipeline processing 200,000+ contractor records daily',
      'Implemented OAuth 2.0 and Redis caching, reducing infra costs by 22%',
      'Increased sprint velocity by 38% with automated performance analytics',
      'Conducted RLHF to fine-tune large language models',
      'Solved 100+ algorithmic problems (medium to hard difficulty)',
      'Onboarded and mentored 15+ team members, reducing onboarding time by 40%',
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'BigQuery', 'Redis', 'Celery', 'TypeScript', 'React'],
  },
  {
    id: 'ulpu',
    role: 'Co-Founder & Full Stack Developer',
    company: 'ULPU Online Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Nov 2020 - Dec 2023',
    type: 'co-founder',
    highlights: [
      'Co-founded and built e-commerce platform from ground up',
      'Scaled to 500+ product listings and 1,000+ monthly orders',
      'Achieved 10% month-over-month sales growth',
      'Integrated eSewa and Khalti payment gateways',
      'Automated logistics with Celery/Redis, reducing release cycle to 3 hours',
      'Increased returning customer rate by 35%',
    ],
    technologies: ['Django', 'PostgreSQL', 'Celery', 'Redis', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3'],
    link: 'https://ulpuskins.com/',
  },
  {
    id: 'dispatch',
    role: 'Technical Lead',
    company: 'Dispatch',
    location: 'Kathmandu, Nepal',
    period: 'Nov 2021 - Oct 2022',
    type: 'lead',
    highlights: [
      'Led design of cloud-based Logistics Management System',
      'Implemented database-per-tenant multi-tenant SaaS architecture',
      'Built Flutter mobile app with real-time GPS tracking',
      'Reduced manual dispatch overhead by 70%',
      'Onboarded 6 enterprise clients, enabling 35,000+ deliveries',
      'Cut infrastructure costs by 30% through resource consolidation',
      'Reduced API latency by 15% through caching strategies',
    ],
    technologies: ['Django', 'Flutter', 'PostgreSQL', 'Firebase', 'Google Maps SDK', 'DigitalOcean', 'TypeScript', 'Redis'],
    link: 'https://bydispatch.com/',
  },
  {
    id: 'wiseyak',
    role: 'Software Engineer Intern',
    company: 'Wiseyak Inc.',
    location: 'Kathmandu, Nepal',
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
