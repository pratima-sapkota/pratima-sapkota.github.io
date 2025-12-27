export interface Volunteering {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'organizing' | 'mentoring' | 'marketing' | 'community';
  highlights: string[];
}

export const volunteering: Volunteering[] = [
  {
    id: 'yomari-code-camp',
    role: 'Code Camp Organizer',
    organization: 'LOCUS Engineering Society',
    location: 'Lalitpur, Nepal',
    period: 'Feb 2017 & Feb 2020',
    type: 'organizing',
    highlights: [
      'Organized Yomari Code Camp coding bootcamp sponsored by LIS Nepal across two editions',
      'Facilitated hands-on programming workshops for aspiring software engineers',
      'Engaged 100+ participants in intensive coding training sessions',
    ],
  },
  {
    id: 'naamii-ai-winter',
    role: 'Marketing Volunteer & Participant',
    organization: 'NAAMII',
    location: 'Kathmandu, Nepal',
    period: 'Dec 2019',
    type: 'marketing',
    highlights: [
      'Promoted Second AI Winter School through digital and traditional channels',
      'Coordinated outreach campaigns to increase event visibility and enrollment',
      'Provided logistical support and facilitated participant engagement',
    ],
  },
  {
    id: 'locus-volunteer',
    role: 'Event Volunteer',
    organization: 'LOCUS Engineering Society',
    location: 'Lalitpur, Nepal',
    period: 'Feb 2016',
    type: 'community',
    highlights: [
      'Supported technical events, workshops, and community-building activities',
      'Contributed to engineering student community initiatives',
    ],
  },
];
