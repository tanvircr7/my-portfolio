// data/research.tsx
import { ReactNode } from 'react'

export type Research = {
  title: string
  slug: string
  venue: string
  year: string
  image: string
  tags: string[]
}

export const research: Research[] = [
  {
    title: 'LLM Inference',
    slug: 'llm-inference',
    venue: 'Ongoing research',
    year: '2026',
    image: '/images/marco-bianchetti-RL.jpg',
    tags: ['RL', 'LLM', 'Agents'],
  },
  {
    title: 'AI in Biomedical Applications',
    slug: 'ai-in-biomed',
    venue: 'Internship at Emory & GT',
    year: '2026',
    image: '/images/google-deepmind-dna.jpg',
    tags: ['Agentic AI', 'Oncology', 'AI4Science'],
  },
  {
    title: 'Agents and Metastable Failures',
    slug: 'agent-systems',
    venue: 'Ongoing MS Thesis',
    year: '2026',
    image: '/images/piret-ilver-benchmark.jpg',
    tags: ['Multi-Agent', 'Evaluation', 'Benchmarks'],
  },
]
