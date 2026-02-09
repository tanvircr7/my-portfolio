// data/projects.tsx
export type Project = {
  title: string
  slug: string
  description: string
  image: string
  tags: string[]
}

// keep only metadata here
export const projects: Project[] = [
  {
    title: 'UALR Chatbot',
    slug: 'ualr-chatbot',
    description: 'RAG-based chatbot for UALR graduate admissions FAQs',
    image: '/images/chatbot-rozetsky.jpg',
    tags: ['LLM', 'RAG', 'Information Retrieval'],
  },
  {
    title: 'Upliftt AI',
    slug: 'upliftt-ai',
    description: 'Flutter app with AI-powered features',
    image: '/images/marcos-sarmento-upliftt.jpg',
    tags: ['LLM', 'Context Engineering', 'Flutter'],
  },
  {
    title: 'Turfhub',
    slug: 'turfhub',
    description: 'Built on React Native Expo at Tecpen',
    image: '/images/mika-wegelius-soccer.jpg',
    tags: ['React Native', 'Expo', 'TypeScript'],
  },
]
