// components/ProjectCard.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'
import Tag from './Tag'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group rounded-2xl overflow-hidden border border-border bg-background/60 backdrop-blur-sm"
    >
      <Link href={`/projects/${p.slug}`} className="block">  {/* ← changed */}
        <div className="aspect-[16/10] relative">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="text-xl font-medium text-foreground">{p.title}</h3>
          <p className="mt-2 text-sm text-foreground/70">{p.description}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {p.tags.map((t) => <Tag key={t} label={t} />)}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
