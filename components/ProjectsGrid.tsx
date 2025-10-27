// components/ProjectsGrid.tsx
'use client'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const items = typeof limit === 'number' ? projects.slice(0, limit) : projects
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => <ProjectCard key={p.slug ?? p.title} p={p} />)}
    </div>
  )
}
