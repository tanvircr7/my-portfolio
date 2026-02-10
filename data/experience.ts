// data/experience.ts
export type Experience = {
  company: string
  role: string
  period: string
  href: string
  image: string
  tags: string[]
}

export const experience: Experience[] = [
  {
    company: 'UALR Tech Launch',
    role: 'AI Engineer',
    period: 'Summer 2025',
    href: '#',
    image: '/images/ualr.jpg',
    tags: ['UALR Chatbot', 'RAG', 'AI Product'],
  },
  {
    company: 'Georgia Tech & Emory University',
    role: 'Madabhushi Lab, Research Intern',
    period: '2025 — Present',
    href: '#',
    image: '/images/gt-emory.jpg',
    tags: ['Python', 'LLMs', 'Computer Vision', 'AI4Science'],
  },
  {
    company: 'UALR Graduate School',
    role: 'Graduate Assistant',
    period: '2024 — Present',
    href: '#',
    image: '/images/ualr.jpg',
    tags: ['MSCS', 'Trojan'],
  },
  {
    company: 'Tecpen',
    role: 'Frontend Engineer',
    period: '2023 — 2024',
    href: '#',
    image: '/images/tecpen.jpeg',
    tags: ['React Native', 'Expo', 'React'],
  },
]
