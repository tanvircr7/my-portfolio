// components/ExperienceGrid.tsx
'use client'
import { experience } from '@/data/experience'
import ExperienceCard from './ExperienceCard'

export default function ExperienceGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {experience.map((item) => (
        <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
      ))}
    </div>
  )
}
