'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Dictionary } from '@/lib/dictionaries'
import { useTheme } from './ThemeProvider'

export default function Navbar({ dict, lang }: { dict: Dictionary; lang: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleLang() {
    const newLang = lang === 'es' ? 'en' : 'es'
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPath)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-[var(--color-cream)]/80 border-b border-[var(--color-ink)]/10' : ''}`}>
      <span className="font-[var(--font-display)] text-lg tracking-wide text-[var(--color-ink)]">
        CB
      </span>
      <div className="flex items-center gap-8">
        <Link
          href={`/${lang}#projects`}
          className="text-sm hover:opacity-60 transition-opacity"
        >
          {dict.nav.projects}
        </Link>
        <Link
          href={`/${lang}#about`}
          className="text-sm hover:opacity-60 transition-opacity"
        >
          {dict.nav.about}
        </Link>
        <Link
          href={`/${lang}#contact`}
          className="text-sm hover:opacity-60 transition-opacity"
        >
          {dict.nav.contact}
        </Link>
        <button
          onClick={toggle}
          className="text-sm border border-[var(--color-ink)] rounded-full px-3 py-2 hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
        <button
          onClick={toggleLang}
          className="text-sm border border-[var(--color-ink)] rounded-full px-3 py-2 hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors"
          aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  )
}
