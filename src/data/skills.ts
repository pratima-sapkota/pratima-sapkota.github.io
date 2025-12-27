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
      { name: 'REST APIs', level: 95, category: 'backend', years: 5 },
      { name: 'Celery', level: 85, category: 'backend', years: 4 },
      { name: 'Redis', level: 85, category: 'backend', years: 4 },
    ],
  },
  {
    name: 'frontend',
    icon: '< />',
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
    ],
  },
  {
    name: 'cloud',
    icon: '~~~',
    skills: [
      { name: 'GCP', level: 80, category: 'cloud', years: 3 },
      { name: 'Firebase', level: 85, category: 'cloud', years: 3 },
      { name: 'DigitalOcean', level: 80, category: 'cloud', years: 3 },
      { name: 'Docker', level: 75, category: 'cloud', years: 2 },
      { name: 'CI/CD', level: 85, category: 'cloud', years: 3 },
    ],
  },
  {
    name: 'ai_ml',
    icon: '@ @',
    skills: [
      { name: 'RLHF', level: 85, category: 'ai_ml', years: 2 },
      { name: 'RAG', level: 85, category: 'ai_ml', years: 1 },
      { name: 'OpenCV', level: 80, category: 'ai_ml', years: 2 },
      { name: 'Keras/TensorFlow', level: 75, category: 'ai_ml', years: 2 },
      { name: 'YOLO', level: 75, category: 'ai_ml', years: 1 },
      { name: 'Prompt Engineering', level: 85, category: 'ai_ml', years: 2 },
      { name: 'Vector Embeddings', level: 80, category: 'ai_ml', years: 1 },
    ],
  },
  {
    name: 'security',
    icon: '( )',
    skills: [
      { name: 'JWT/OAuth 2.0', level: 90, category: 'security', years: 4 },
      { name: 'RBAC', level: 90, category: 'security', years: 4 },
      { name: 'CTF Challenges', level: 75, category: 'security', years: 1 },
      { name: 'Web Security', level: 80, category: 'security', years: 3 },
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
