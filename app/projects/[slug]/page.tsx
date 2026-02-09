// app/projects/[slug]/page.tsx
import PageContainer from '@/components/PageContainer'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContentSection from '@/components/ContentSection'
import { projectContent } from '@/content'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()

  const Content = projectContent[slug]

  return (
    <PageContainer>
      <Link href="/projects" className="text-sm text-foreground/60 hover:text-foreground">
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-4xl font-semibold">{project.title}</h1>
      <p className="mt-2 text-foreground/70">{project.description}</p>

      <div className="mt-8 aspect-[16/10] relative rounded-xl overflow-hidden border border-border bg-muted">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2 text-xs text-foreground/60">
        {project.tags.map(t => (
          <span key={t} className="px-2 py-0.5 rounded-full border border-border">
            {t}
          </span>
        ))}
      </div>

      {Content && (
        <ContentSection>
          <Content />
        </ContentSection>
      )}
    </PageContainer>
  )
}
