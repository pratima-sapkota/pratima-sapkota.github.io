export interface Project {
  id: string;
  name: string;
  description: string;
  period: string;
  status: 'live' | 'completed' | 'archived' | 'learning';
  highlights: string[];
  technologies: string[];
  metrics?: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'collegetown',
    name: 'CollegeTown',
    description: 'Social networking platform for college students with AI-powered features',
    period: 'Jan 2025 - Present',
    status: 'live',
    highlights: [
      'Cross-platform app (iOS/Android/Web) with Flutter + FastAPI',
      'RAG-powered chatbot using pgvector for semantic search',
      'Real-time chat with Firebase, end-to-end encryption',
      'Event discovery with location-based search',
      'Automated web crawlers indexing university content',
      'Published on Google Play Store and Apple App Store',
    ],
    technologies: ['Flutter', 'FastAPI', 'PostgreSQL', 'pgvector', 'Firebase', 'OpenAI API', 'RAG', 'Pydantic'],
    metrics: ['3,000+ active users', 'Live on web and mobile'],
    link: 'https://collegetown.ai/',
  },
  {
    id: 'shoplifting-detection',
    name: 'Shoplifting Detection System',
    description: 'Computer vision surveillance solution using deep learning',
    period: '2019 - 2020',
    status: 'completed',
    highlights: [
      'End-to-end CV system for retail threat detection',
      'Processed 200,000+ training images',
      'CNN architecture for object detection and classification',
      'YOLO for real-time person/product identification',
      'RNN for sequential behavior analysis',
      'Face recognition for cross-camera tracking',
    ],
    technologies: ['Python', 'OpenCV', 'Keras', 'TensorFlow', 'YOLO', 'NumPy', 'Pandas', 'scikit-learn'],
    metrics: ["Bachelor's Thesis", '4-person team'],
  },
  {
    id: 'letfutsal',
    name: 'LetFutsal',
    description: 'Futsal booking management system with payment integration',
    period: '2021',
    status: 'learning',
    highlights: [
      'Dual-platform: customer mobile app + vendor dashboard',
      'Real-time slot availability synchronization',
      'eSewa payment gateway integration',
      'Booking conflict prevention with server-side validation',
      'Group match coordination via sharing',
    ],
    technologies: ['Flutter', 'Django REST Framework', 'PostgreSQL', 'eSewa API', 'Provider'],
  },
  {
    id: 'vendor-saas',
    name: 'Vendor Management SaaS',
    description: 'Multi-vendor e-commerce platform with logistics integration',
    period: '2021',
    status: 'archived',
    highlights: [
      'Multi-tenant shared-schema architecture',
      'Wildcard SSL with dynamic subdomain routing',
      '4 customizable responsive themes',
      'Integrated with Dispatch logistics system',
      'Role-based vendor admin dashboard',
    ],
    technologies: ['Django', 'PostgreSQL', 'Bootstrap', 'jQuery', 'REST APIs'],
    metrics: ['Pilot vendor with 50+ products', '2-person team'],
  },
];
