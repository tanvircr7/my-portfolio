// app/research/[slug]/page.tsx
import { research } from '@/data/research'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '@/components/PageContainer' // (use the wrapper you made)

export const dynamic = 'force-dynamic' // optional: fine for dev/PPR

// Optional prebuild once all slugs are set:
// export function generateStaticParams() {
//   return research.map(r => ({ slug: r.slug }))
// }

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = research.find(r => r.slug === slug)

  if (!item) return <PageContainer>Research not found.</PageContainer>

  return (
    <PageContainer>
      <Link href="/" className="text-sm text-foreground/60 hover:text-foreground">
        ← Back to home
      </Link>

      <h1 className="mt-6 text-4xl font-semibold">{item.title}</h1>
      <p className="mt-2 text-foreground/70">{item.venue} — {item.year}</p>

      <div className="mt-8 aspect-[16/10] relative rounded-xl overflow-hidden border border-border bg-muted">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2 text-xs text-foreground/60">
        {item.tags.map(t => (
          <span key={t} className="px-2 py-0.5 rounded-full border border-border">{t}</span>
        ))}
      </div>

      <div className="mt-12 prose prose-invert max-w-none">
        {/* Replace with real writeup */}
        <p>
          Short abstract or summary about this research. Add goals, methods, results,
          and links to paper/notebook/demo as needed.
        </p>
      </div>
    </PageContainer>
  )
}
