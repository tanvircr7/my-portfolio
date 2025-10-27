// components/Header.tsx
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header({ limit = false }: { limit?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all
      ${scrolled ? 'backdrop-blur border-b border-white/10' : ''}`}>
      <nav className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">MTH</Link>
        <div className="flex gap-6 text-sm text-neutral-300">
            {!limit && (
                <>
                    <a href="/projects" className="hover:text-white">Projects</a>
                    <a href="#research" className="hover:text-white">Research</a>
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </>
            )}
            {limit && (
                <>
                    <a href="/" className="hover:text-white">Home</a>
                </>
            )}
        </div>
      </nav>
    </header>
  )
}
