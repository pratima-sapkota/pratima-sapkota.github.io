export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  years?: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'languages',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 95, category: 'languages', years: 5 },
      { name: 'JavaScript', level: 90, category: 'languages', years: 5 },
      { name: 'TypeScript', level: 85, category: 'languages', years: 3 },
      { name: 'SQL', level: 90, category: 'languages', years: 5 },
      { name: 'Dart', level: 80, category: 'languages', years: 3 },
      { name: 'C/C++', level: 70, category: 'languages', years: 4 },
      { name: 'HTML5/CSS3', level: 90, category: 'languages', years: 5 },
    ],
  },
  {
    name: 'backend',
    icon: '> _',
    skills: [
      { name: 'Django', level: 95, category: 'backend', years: 5 },
      { name: 'FastAPI', level: 90, category: 'backend', years: 3 },
      { name: 'Flask', level: 80, category: 'backend', years: 3 },
      { name: 'Node.js', level: 70, category: 'backend', years: 2 },
      { name: 'REST APIs', level: 95, category: 'backend', years: 5 },
      { name: 'Celery', level: 85, category: 'backend', years: 4 },
      { name: 'Redis', level: 85, category: 'backend', years: 4 },
      { name: 'Pydantic', level: 85, category: 'backend', years: 3 },
      { name: 'async/await', level: 85, category: 'backend', years: 3 },
      { name: 'OpenAPI/Swagger', level: 80, category: 'backend', years: 3 },
    ],
  },
  {
    name: 'frontend',
    icon: '< / >',
    skills: [
      { name: 'React', level: 80, category: 'frontend', years: 3 },
      { name: 'Flutter', level: 85, category: 'frontend', years: 3 },
      { name: 'Bootstrap', level: 90, category: 'frontend', years: 5 },
    ],
  },
  {
    name: 'databases',
    icon: '[ ]',
    skills: [
      { name: 'PostgreSQL', level: 95, category: 'databases', years: 5 },
      { name: 'MySQL', level: 85, category: 'databases', years: 4 },
      { name: 'BigQuery', level: 80, category: 'databases', years: 2 },
      { name: 'Firebase', level: 85, category: 'databases', years: 3 },
      { name: 'Redis', level: 85, category: 'databases', years: 4 },
      { name: 'Supabase', level: 75, category: 'databases', years: 1 },
    ],
  },
  {
    name: 'cloud',
    icon: '~~~',
    skills: [
      { name: 'GCP', level: 80, category: 'cloud', years: 3 },
      { name: 'AWS', level: 75, category: 'cloud', years: 2 },
      { name: 'Firebase', level: 85, category: 'cloud', years: 3 },
      { name: 'DigitalOcean', level: 80, category: 'cloud', years: 3 },
      { name: 'Docker', level: 80, category: 'cloud', years: 3 },
      { name: 'Traefik', level: 75, category: 'cloud', years: 1 },
      { name: 'Vercel', level: 80, category: 'cloud', years: 2 },
      { name: 'CI/CD', level: 85, category: 'cloud', years: 3 },
    ],
  },
  {
    name: 'ai_ml',
    icon: '@ @',
    skills: [
      { name: 'RLHF', level: 85, category: 'ai_ml', years: 2 },
      { name: 'RAG', level: 90, category: 'ai_ml', years: 2 },
      { name: 'MCP', level: 85, category: 'ai_ml', years: 1 },
      { name: 'Model Fine-Tuning', level: 80, category: 'ai_ml', years: 2 },
      { name: 'OpenCV', level: 80, category: 'ai_ml', years: 2 },
      { name: 'Keras/TensorFlow', level: 75, category: 'ai_ml', years: 2 },
      { name: 'YOLO', level: 75, category: 'ai_ml', years: 1 },
      { name: 'Prompt Engineering', level: 85, category: 'ai_ml', years: 2 },
      { name: 'Vector Embeddings', level: 85, category: 'ai_ml', years: 2 },
    ],
  },
  {
    name: 'security',
    icon: '( )',
    skills: [
      { name: 'JWT/OAuth 2.0', level: 90, category: 'security', years: 4 },
      { name: 'RBAC', level: 90, category: 'security', years: 4 },
      { name: 'Web Security (XSS, SQLi, CSRF)', level: 80, category: 'security', years: 3 },
      { name: 'Vulnerability Exploitation', level: 75, category: 'security', years: 1 },
      { name: 'Reverse Engineering', level: 75, category: 'security', years: 1 },
      { name: 'Cryptography', level: 70, category: 'security', years: 1 },
      { name: 'Network Security', level: 70, category: 'security', years: 1 },
      { name: 'Binary Analysis', level: 70, category: 'security', years: 1 },
      { name: 'Forensics', level: 70, category: 'security', years: 1 },
    ],
  },
  {
    name: 'payments',
    icon: '$ $',
    skills: [
      { name: 'Stripe (Subscriptions, Webhooks, Billing)', level: 75, category: 'payments', years: 1 },
    ],
  },
];

export const specialties = [
  'Multi-Tenant SaaS Architecture',
  'Database Design & Normalization',
  'ETL Pipeline Engineering',
  'REST API Development',
  'AI-Enhanced Automation',
  'Agentic Software Development',
];
