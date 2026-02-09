import { research } from '@/data/research'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '@/components/PageContainer'
import ContentSection from '@/components/ContentSection'
import { notFound } from 'next/navigation'
import { researchContent } from '@/content'

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = research.find(r => r.slug === slug)
  if (!item) notFound()

  const Content = researchContent[slug]

  return (
    <PageContainer>
      <Link href="/" className="text-sm text-foreground/60 hover:text-foreground">
        ← Back to Home
      </Link>

      <h1 className="mt-6 text-4xl font-semibold">{item.title}</h1>
      <p className="mt-2 text-foreground/70">
        {item.venue} — {item.year}
      </p>

      <div className="mt-8 aspect-[16/10] relative rounded-xl overflow-hidden border border-border bg-muted">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2 text-xs text-foreground/60">
        {item.tags.map(t => (
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
