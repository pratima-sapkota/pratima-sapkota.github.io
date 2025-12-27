export interface CTFAchievement {
  id: string;
  competition: string;
  organizer: string;
  rank: string;
  period: string;
  categories: string[];
  highlights?: string[];
}

export const ctfAchievements: CTFAchievement[] = [
  {
    id: 'fsu-fall-2024',
    competition: 'FSU Graduate CTF',
    organizer: 'Florida State University',
    rank: '#4',
    period: 'Fall 2024',
    categories: ['Web Exploitation', 'Binary Exploitation', 'Cryptography', 'Forensics', 'Reverse Engineering'],
    highlights: [
      'Graduate-level competition',
      'Demonstrated vulnerability exploitation skills',
    ],
  },
  {
    id: 'fsu-spring-2025',
    competition: 'FSU Graduate CTF',
    organizer: 'Florida State University',
    rank: '#5',
    period: 'Spring 2025',
    categories: ['Web Exploitation', 'Binary Exploitation', 'Cryptography', 'Forensics', 'Network Security'],
    highlights: [
      'Consistent top performer',
      'Advanced reverse engineering challenges',
    ],
  },
];

export const ctfPlatforms = [
  {
    name: 'picoCTF',
    status: 'Active',
    categories: ['Web Exploitation', 'Binary Exploitation', 'Forensics', 'Cryptanalysis'],
  },
];

export const securitySkills = [
  'Vulnerability Exploitation',
  'Reverse Engineering',
  'Cryptography',
  'Network Security',
  'Web Security (XSS, SQLi, CSRF)',
  'Binary Analysis',
  'Forensics',
];
