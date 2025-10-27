// components/ResearchGrid.tsx
'use client'
import { research } from '@/data/research'
import ResearchCard from './ResearchCard'

export default function ResearchGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {research.map((item) => (
        <ResearchCard key={`${item.title}-${item.year}`} item={item} />
      ))}
    </div>
  )
}
