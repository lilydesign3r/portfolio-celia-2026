'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import type { Dictionary } from '@/lib/dictionaries'

export default function Hero({ dict }: { dict: Dictionary }) {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const pillsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from(pillsRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        delay: 0.5,
        ease: 'back.out(1.6)',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--color-cream)]"
    >
      {/* Title + pills */}
      <div className="relative w-fit mx-auto px-4">

        {/* Pill 1: UX/UI — encima de la "p", ligeramente solapando */}
        <div
          ref={(el) => { pillsRef.current[0] = el }}
          className="absolute left-[18%] -rotate-3 border-2 border-dashed border-[var(--color-ink)] rounded-xl font-medium whitespace-nowrap select-none bg-[var(--color-cream)]"
          style={{
            top: 'clamp(-1.2rem, -1.5vw, -0.8rem)',
            fontSize: 'clamp(0.65rem, 1.1vw, 0.875rem)',
            padding: 'clamp(0.3rem, 0.5vw, 0.5rem) clamp(0.6rem, 1vw, 1rem)',
          }}
        >
          UX/UI
        </div>

        {/* Pill 4: rol — encima a la derecha */}
        <div
          ref={(el) => { pillsRef.current[3] = el }}
          className="absolute right-[12%] rotate-2 border border-[var(--color-ink)] rounded-full font-medium whitespace-nowrap select-none opacity-60"
          style={{
            top: 'clamp(-1rem, -1.2vw, -0.6rem)',
            fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)',
            padding: 'clamp(0.25rem, 0.4vw, 0.4rem) clamp(0.5rem, 0.9vw, 0.875rem)',
          }}
        >
          {dict.hero.role}
        </div>

        <h1
          ref={titleRef}
          className="font-[var(--font-display)] text-[clamp(3.5rem,13vw,12rem)] leading-none tracking-[-0.02em] text-[var(--color-ink)] lowercase"
        >
          {dict.hero.title}
        </h1>

        {/* Pill 2: año — bottom left solapando baseline */}
        <div
          ref={(el) => { pillsRef.current[1] = el }}
          className="absolute left-[4%] rotate-2 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-bold whitespace-nowrap select-none"
          style={{
            bottom: 'clamp(-1.8rem, -2vw, -0.8rem)',
            fontSize: 'clamp(0.65rem, 1.1vw, 0.875rem)',
            padding: 'clamp(0.3rem, 0.5vw, 0.5rem) clamp(0.7rem, 1.2vw, 1.25rem)',
          }}
        >
          {dict.hero.year}
        </div>

        {/* Pill 3: nombre — bottom right solapando */}
        <div
          ref={(el) => { pillsRef.current[2] = el }}
          className="absolute right-[2%] -rotate-1 bg-[var(--color-ink)] text-[var(--color-cream)] rounded-full font-medium whitespace-nowrap select-none flex items-center"
          style={{
            bottom: 'clamp(-2.8rem, -3vw, -1.4rem)',
            fontSize: 'clamp(0.75rem, 1.3vw, 1rem)',
            padding: 'clamp(0.4rem, 0.65vw, 0.75rem) clamp(0.9rem, 1.5vw, 1.75rem)',
            gap: 'clamp(0.3rem, 0.5vw, 0.5rem)',
          }}
        >
          {dict.hero.name} <span className="opacity-50">✦</span>
        </div>
      </div>

      {/* Tagline + CTA */}
      <div className="mt-20 text-center px-6 max-w-sm">
        <p className="mt-3 text-sm opacity-[0.7] leading-relaxed">
          {dict.hero.tagline}
        </p>
        <a
          href="#projects"
          className="inline-block mt-7 border border-[var(--color-ink)] rounded-full px-7 py-2.5 text-sm hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors"
        >
          {dict.hero.cta} ↓
        </a>
      </div>
    </section>
  )
}
