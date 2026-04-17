import Image from 'next/image'
import type { Dictionary } from '@/lib/dictionaries'

export default function AboutSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 bg-[var(--color-cream)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] mb-16">
          {dict.about.title}{' '}
          <span className="text-[var(--color-red)]">{dict.about.highlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
            <Image
              src="/foto-celia-2.png"
              alt="Celia Barbecho"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>

          {/* Text */}
          <div
            className="space-y-5 text-base md:text-lg leading-relaxed opacity-80"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
            <p>
              {dict.about.p3.split(dict.about.bold_phrase).map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <strong className="font-semibold opacity-100">{dict.about.bold_phrase}</strong>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
