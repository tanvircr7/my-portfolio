// app/projects/page.tsx
import Link from 'next/link'
import Header from '@/components/Header'
import ProjectsGrid from '@/components/ProjectsGrid'
import Section from '@/components/Section'

export const metadata = {
  title: 'Projects — Mohammad Tanvir Hasan',
  description: 'Selected work and experiments.',
}

export default function ProjectsPage() {
  return (
    <main>
      <Header limit />
      <Section className="pt-28">
        <h1 className="text-4xl md:text-5xl font-semibold">Projects</h1>

        {/* spacer */}
        <div className="mt-6" />          

        <Link
          href="/"
          className="text-sm text-foreground/60 hover:text-foreground"
        >
          ← Back to Home
        </Link>

        <div className="mt-10">
          <ProjectsGrid />
        </div>
      </Section>
    </main>
  )
}
