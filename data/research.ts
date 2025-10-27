// data/research.ts
export type Research = {
  title: string
  slug: string            // ← new
  venue: string
  year: string
  href: string            // ← keep; derive from slug
  image: string
  tags: string[]
}

export const research: Research[] = [
  {
    title: 'Agentic AI',
    slug: 'agentic-ai',                         // ← add
    venue: 'Onogoing MS Thesis',
    year: '2025',
    href: '/research/agentic-ai',               // ← points to detail route
    image: '/images/marco-bianchetti-RL.jpg',        // ensure the file exists
    tags: ['RL', 'LLM', 'Agents'],
  },
  {
    title: 'AI in Biomedical Applications',
    slug: 'ai-in-biomed',
    venue: 'Internship at Emory & GT',
    year: '2025',
    href: '/research/ai-in-biomed',
    image: '/images/google-deepmind-dna.jpg',
    tags: ['Agentic AI', 'Oncology', 'AI4Science'],
  },
  {
    title: 'Agent Evals and Benchmarks',
    slug: 'agent-evals-benchmarks',
    venue: 'Ongoing MS Thesis',
    year: '2025',
    href: '/research/agent-evals-benchmarks',
    image: '/images/piret-ilver-benchmark.jpg',
    tags: ['Multi-Agent', 'Evaluation', 'Benchmarks'],
  },
]
