// data/projects.ts
export type Project = {
  title: string
  slug: string
  description: string
  href: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'UALR Chatbot',
    slug: 'ualr-chatbot',
    description: 'RAG-based chatbot for UALR graduate admissions FAQs',
    href: '/projects/ualr-chatbot',
    image: '/images/chatbot-rozetsky.jpg',
    tags: ['LLM', 'RAG', 'Information Retrieval'],
  },
  {
    title: 'Upliftt AI',
    slug: 'upliftt-ai',
    description: 'Flutter app with AI-powered features',
    href: '/projects/upliftt-ai',
    image: '/images/marcos-sarmento-upliftt.jpg',
    tags: ['LLM', 'Context Engineering', 'Flutter'],
  },
  {
    title: 'Turfhub',
    slug: 'turfhub',
    description: 'Built on React Native Expo at Tecpen',
    href: '/projects/turfhub',
    image: '/images/mika-wegelius-soccer.jpg',
    tags: ['React Native', 'Expo', 'TypeScript'],
  },
  // add more here
]

