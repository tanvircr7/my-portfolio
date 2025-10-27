// components/ExperienceCard.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Experience } from '@/data/experience'
import Tag from './Tag'

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group rounded-2xl overflow-hidden border border-border bg-background"
    >
      <Link href={item.href} className="block">
        <div className="aspect-[16/10] relative">
          <Image src={item.image} alt={item.company} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-medium text-foreground">{item.company}</h3>
          <p className="mt-1 text-foreground/80">{item.role}</p>
          <p className="text-sm text-foreground/60">{item.period}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {item.tags.map((t) => <Tag key={t} label={t} />)}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
