// app/projects/page.tsx
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
      <Header />
      <Section className="pt-28">  {/* some top space below header */}
        <h1 className="text-4xl md:text-5xl font-semibold">Projects</h1>
        <p className="mt-3 text-foreground/70 max-w-2xl">
          A selection of recent work and experiments.
        </p>
        <div className="mt-10">
          <ProjectsGrid />
        </div>
      </Section>
    </main>
  )
}
