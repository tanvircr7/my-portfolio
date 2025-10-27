// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter} from "lucide-react"

import Header from '@/components/Header'
import Section from '@/components/Section'
import ProjectsGrid from '@/components/ProjectsGrid'
import Image from 'next/image'
import ExperienceCard from '@/components/ExperienceCard'
import ExperienceGrid from '@/components/ExperienceGrid'
import ResearchGrid from '@/components/ResearchGrid'

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <Section 
        fullWidth
        className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-transparent"
      >
        {/* Background image layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-leonardo-iribe.jpg"       // <-- ensure this file exists
            alt="Background"
            fill
            priority
            className="object-cover brightness-[0.45]"  // tweak darkness as needed
          />
        </div>

        {/* OPTIONAL: extra overlay for contrast */}
        {/* <div className="absolute inset-0 z-0 bg-black/30" /> */}

        {/* NEW: bottom fade into page background */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32
                    bg-gradient-to-b from-transparent to-background z-10"
        />

        {/* (Optional) a super subtle hairline divider */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10 z-10" />


        {/* Foreground content */}
        <div className="relative z-20 text-center max-w-2xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-white"
          >
            Tanvir Hasan
          </motion.h1>
          <p
            className="mt-4 text-lg bg-radial-gradient text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% 50%, #e5e7eb 45%, transparent 100%)',
            }}
          >
            SWE - AI
            <br />
            Intern - Georgia Tech & Emory
            <br />
            MS - UALR
          </p>
        </div>

        {/* Credit badge */}
        <a
          href="https://unsplash.com/photos/a-single-red-firework-exploding-in-the-night-sky-yn78c3wXlLc"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1 rounded-full
                    border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs
                    text-foreground/70 hover:text-foreground hover:bg-background/80"
          aria-label="Photo credit on Unsplash (opens in a new tab)"
        >
          Photo: <span className="underline underline-offset-2">Unsplash</span>
        </a>


        <motion.span
          className="absolute bottom-8 text-sm text-neutral-300"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          scroll
        </motion.span>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
        <div className="mt-8">
          <ExperienceGrid />
        </div>
      </Section>

      {/* WORK */}
      <Section id="work">
        <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
        <div className="mt-10">
          <a href="/projects" className="inline-block px-4 py-2 border border-border rounded-full hover:bg-muted">
            View all projects →
          </a>
        </div>
        <div className="mt-8">
          <ProjectsGrid limit={3} />
        </div>
      </Section>

      {/* RESEARCH */}
      <Section id="research">
        <h2 className="text-3xl md:text-4xl font-semibold">Research</h2>
        <div className="mt-8">
          <ResearchGrid />
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="text-neutral-300 space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold">About</h2>

        <p>
          A software engineer and student researcher currently pursuing an{' '}
          <strong>M.S. in Computer Science</strong> at{' '}
          <a
            href="https://ualr.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            UA Little Rock
          </a>
          .
        </p>

        <p>
          <em>Research Co-advisers:</em>{' '}
          <a
            href="https://ualr.edu/computerscience/faculty-and-staff/mariofanna-milanova/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Prof. Milanova, 
          </a>
          <> </>
          <a
            href="https://www.pnw.edu/people/shafkat-islam-ph-d/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Prof. Islam
          </a>
        </p>

        <p>
          Research Intern at {' '}
          <strong>Georgia Tech & Emory University</strong> at{' '}
          <a
            href="https://med.emory.edu/departments/radiology/research/research-labs/madabhushi-lab/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Madabhushi Lab
          </a>
          .
        </p>

        <p>
          <em>Collaborators:</em>{' '}
          {/* <a
            href="https://another-profile.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Prof. Alan Lee
          </a>
          ,{' '} */}
          <a
            href="https://www.usf.edu/engineering/ee/faculty-staff/lin-xiaomin.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Prof. Lin
          </a>
        </p>

        <p>
          Experienced in building web and mobile applications and exploring AI technologies.
          <br />
          Current landscape of AI adoption in science, especially in biomedical imaging and healthcare has been such an eye-opener.
          <br />
          Working on leveraging LLMs and multi-agent systems.
        </p>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="text-neutral-300 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Contact</h2>

        <div className="flex items-center justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:mthasan@ualr.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="p-3 rounded-full border border-border bg-background/60 backdrop-blur-sm transition
                            group-hover:scale-110 group-hover:border-foreground/70">
              <Mail className="w-6 h-6 text-foreground/70 group-hover:text-foreground" />
            </div>
            <span className="text-sm text-foreground/60 group-hover:text-foreground">Email</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tanvircr7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="p-3 rounded-full border border-border bg-background/60 backdrop-blur-sm transition
                            group-hover:scale-110 group-hover:border-foreground/70">
              <Github className="w-6 h-6 text-foreground/70 group-hover:text-foreground" />
            </div>
            <span className="text-sm text-foreground/60 group-hover:text-foreground">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mdthasan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="p-3 rounded-full border border-border bg-background/60 backdrop-blur-sm transition
                            group-hover:scale-110 group-hover:border-foreground/70">
              <Linkedin className="w-6 h-6 text-foreground/70 group-hover:text-foreground" />
            </div>
            <span className="text-sm text-foreground/60 group-hover:text-foreground">LinkedIn</span>
          </a>

          {/* X */}
          <a
            href="https://x.com/tanvircr7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="p-3 rounded-full border border-border bg-background/60 backdrop-blur-sm transition
                            group-hover:scale-110 group-hover:border-foreground/70">
              <Twitter className="w-6 h-6 text-foreground/70 group-hover:text-foreground" />
            </div>
            <span className="text-sm text-foreground/60 group-hover:text-foreground">LinkedIn</span>
          </a>
        </div>
      </Section>

      <footer className="px-6 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Mohammad Tanvir Hasan
      </footer>
    </main>
  )
}
