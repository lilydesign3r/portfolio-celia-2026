import Image from 'next/image'
import type { Dictionary } from '@/lib/dictionaries'

export default function ContactSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 bg-[var(--color-ink)] text-[var(--color-cream)]"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] mb-8">
            {dict.contact.title}
          </h2>
          <div className="space-y-3 text-lg">
            <a
              href={`mailto:${dict.contact.email}`}
              className="group flex items-center gap-3 opacity-70 hover:opacity-100 transition-all hover:translate-x-1"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="border-b border-transparent group-hover:border-current transition-colors">{dict.contact.email}</span>
              <span className="ml-auto opacity-0 group-hover:opacity-60 transition-all group-hover:translate-x-0.5">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/celia-barbecho-p%C3%A9rez-8b51ba1bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 opacity-70 hover:opacity-100 transition-all hover:translate-x-1"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="border-b border-transparent group-hover:border-current transition-colors">{dict.contact.linkedin}</span>
              <span className="ml-auto opacity-0 group-hover:opacity-60 transition-all group-hover:translate-x-0.5">↗</span>
            </a>
            <a
              href="https://www.instagram.com/ux_yoyo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 opacity-70 hover:opacity-100 transition-all hover:translate-x-1"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="border-b border-transparent group-hover:border-current transition-colors">{dict.contact.instagram}</span>
              <span className="ml-auto opacity-0 group-hover:opacity-60 transition-all group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </div>

        <div className="opacity-20 flex gap-4">
          <Image src="/characters/char_05.png" alt="" width={100} height={100} style={{ width: 100, height: 'auto', filter: 'invert(1)' }} />
          <Image src="/characters/char_07.png" alt="" width={80} height={80} style={{ width: 80, height: 'auto', filter: 'invert(1)' }} />
        </div>
      </div>
    </section>
  )
}
