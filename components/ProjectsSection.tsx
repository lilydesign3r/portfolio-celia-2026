'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { projects } from '@/lib/projects'
import type { Dictionary } from '@/lib/dictionaries'
import { useTheme } from '@/components/ThemeProvider'

function renderBold(text: string) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )
}

export default function ProjectsSection({
  dict,
  lang,
}: {
  dict: Dictionary
  lang: 'es' | 'en'
}) {
  const { theme } = useTheme()
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [visibleProject, setVisibleProject] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const openProject = useCallback((projectId: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return
    const project = projects.find(p => p.id === projectId)
    if (!project || !overlayRef.current) return

    triggerRef.current = e.currentTarget as HTMLButtonElement
    setIsAnimating(true)
    setVisibleProject(projectId)

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    const overlay = overlayRef.current
    overlay.style.background = project.color
    overlay.style.setProperty('--cx', `${cx}px`)
    overlay.style.setProperty('--cy', `${cy}px`)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(overlay, { clipPath: `circle(200vmax at ${cx}px ${cy}px)`, display: 'flex' })
      setActiveProject(projectId)
      setIsAnimating(false)
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
      closeButtonRef.current?.focus()
      return
    }

    gsap.set(overlay, {
      clipPath: `circle(0px at ${cx}px ${cy}px)`,
      display: 'flex',
    })

    gsap.to(overlay, {
      clipPath: `circle(200vmax at ${cx}px ${cy}px)`,
      duration: 0.75,
      ease: 'power3.inOut',
      onComplete: () => {
        setActiveProject(projectId)
        setIsAnimating(false)
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
        closeButtonRef.current?.focus()
      },
    })
  }, [isAnimating])

  const closeProject = useCallback(() => {
    if (isAnimating || !overlayRef.current) return
    setIsAnimating(true)

    const overlay = overlayRef.current
    const cx = overlay.style.getPropertyValue('--cx') || `${window.innerWidth / 2}px`
    const cy = overlay.style.getPropertyValue('--cy') || `${window.innerHeight / 2}px`

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(overlay, { display: 'none' })
      setActiveProject(null)
      setVisibleProject(null)
      setIsAnimating(false)
      triggerRef.current?.focus()
      return
    }

    gsap.to(overlay, {
      clipPath: `circle(0px at ${cx} ${cy})`,
      duration: 0.6,
      ease: 'power3.inOut',
      onComplete: () => {
        gsap.set(overlay, { display: 'none' })
        setActiveProject(null)
        setVisibleProject(null)
        setIsAnimating(false)
        triggerRef.current?.focus()
      },
    })
  }, [isAnimating])

  const active = projects.find(p => p.id === (visibleProject ?? activeProject))

  // Bloquear scroll del body cuando el overlay está abierto
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  // Escape para cerrar + focus trap dentro del overlay
  useEffect(() => {
    if (!activeProject) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { closeProject(); return }
      if (e.key === 'Tab' && overlayRef.current) {
        const focusable = Array.from(overlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        ))
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (!first || !last) return
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeProject, closeProject])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 md:px-16 bg-[var(--color-cream)] overflow-hidden"
    >
      <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] mb-16 text-center">
        {dict.projects.title}
      </h2>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={(e) => openProject(project.id, e)}
            className="group relative rounded-2xl overflow-hidden text-left transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{
              background: theme === 'dark' && project.colorDark ? project.colorDark : project.color,
              color: theme === 'dark' && project.textColorDark ? project.textColorDark : project.textColor,
            }}
          >
            <div className="p-7 min-h-[240px] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">
                  {project[lang].type}
                </span>
                <h3 className="font-[var(--font-display)] text-4xl leading-tight">
                  {project[lang].title}
                </h3>
                <p className="mt-3 text-sm opacity-65 line-clamp-2 leading-relaxed">
                  {project[lang].description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project[lang].tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full border opacity-60"
                      style={{ borderColor: theme === 'dark' && project.textColorDark ? project.textColorDark : project.textColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-lg opacity-40 group-hover:opacity-80 group-hover:translate-x-1 transition-all">→</span>
              </div>
            </div>
            {/* Character watermark */}
            <div className="absolute bottom-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image
                src={`/characters/char_0${(i % 9) + 1}.png`}
                alt=""
                width={70}
                height={70}
                style={{
                  width: 70, height: 'auto',
                  filter: (theme === 'dark' && project.textColorDark ? project.textColorDark : project.textColor) === '#ffffff' ? 'invert(1)' : 'none',
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Bubble overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-overlay-title"
        style={{ willChange: 'clip-path' }}
      >
        {active && (
          <>
            {/* Sticky back button — always visible */}
            <div
              className="shrink-0 flex items-center px-6 md:px-16 pt-7 pb-4"
              style={{ background: active.color }}
            >
              <button
                ref={closeButtonRef}
                onClick={closeProject}
                className="flex items-center gap-3 text-base font-medium opacity-70 hover:opacity-100 transition-opacity group"
                style={{ color: active.textColor }}
              >
                <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                {dict.projects.title}
              </button>
            </div>

            {/* Scrollable content */}
            <div
              ref={detailRef}
              className="flex-1 overflow-y-auto pb-16 px-6 md:px-16"
              style={{ color: active.textColor, background: active.color }}
            >
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-10">
                <span className="text-xs uppercase tracking-widest opacity-60 block mb-3">
                  {active[lang].type}
                </span>
                <h2 id="project-overlay-title" className="font-[var(--font-display)] text-[clamp(3.5rem,10vw,8rem)] leading-none mb-6">
                  {active[lang].title}
                </h2>
                <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm opacity-70">
                  <div>
                    <span className="uppercase tracking-widest text-xs opacity-60 block mb-1">{dict.projects.role}</span>
                    <span className="text-base font-medium" style={{ opacity: 1 }}>{active[lang].role}</span>
                  </div>
                  <div>
                    <span className="uppercase tracking-widest text-xs opacity-60 block mb-1">{dict.projects.type}</span>
                    <span className="text-base font-medium" style={{ opacity: 1 }}>{active[lang].type}</span>
                  </div>
                  {active[lang].content?.tools && (
                    <div>
                      <span className="uppercase tracking-widest text-xs opacity-60 block mb-1">Tools</span>
                      <span className="text-base font-medium" style={{ opacity: 1 }}>{active[lang].content!.tools}</span>
                    </div>
                  )}
                  {active[lang].content?.duration && (
                    <div>
                      <span className="uppercase tracking-widest text-xs opacity-60 block mb-1">{lang === 'es' ? 'Duración' : 'Duration'}</span>
                      <span className="text-base font-medium" style={{ opacity: 1 }}>{active[lang].content!.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl mb-10" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                {active[lang].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {active[lang].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border opacity-70"
                    style={{ borderColor: active.textColor }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content sections */}
              {active[lang].content && (
                <div className="space-y-12 mb-12">
                  {/* Context */}
                  <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                    <h3 className="text-xs uppercase tracking-widest opacity-60 mb-4">
                      {lang === 'es' ? 'Contexto' : 'Context'}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-2xl whitespace-pre-line" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                      {renderBold(active[lang].content!.context)}
                    </p>
                  </div>

                  {/* Survey Stats */}
                  {active[lang].content!.surveyStats && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-6">
                        {lang === 'es' ? 'Datos de la investigación' : 'Research data'}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {active[lang].content!.surveyStats!.map((stat, i) => (
                          <div key={i} className="rounded-xl p-5 text-center" style={{ background: `${active.textColor}10`, border: `1px solid ${active.textColor}15` }}>
                            <p className="font-[var(--font-display)] text-4xl leading-none mb-1">{stat.value}</p>
                            <p className="text-xs font-semibold opacity-80 mt-2">{stat.label}</p>
                            {stat.sub && <p className="text-xs opacity-40 mt-1">{stat.sub}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Research netnography images */}
                  {active[lang].content!.researchImages && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-6">
                        {lang === 'es' ? 'Netnografía — voces reales' : 'Netnography — real voices'}
                      </h3>
                      <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollSnapType: 'x mandatory' }}>
                        {active[lang].content!.researchImages!.map((src, i) => (
                          <div key={i} className="shrink-0 flex flex-col gap-2" style={{ scrollSnapAlign: 'start' }}>
                            <img src={src} alt="" className="rounded-xl h-56 w-auto object-cover" style={{ border: `1px solid ${active.textColor}15` }} />
                            {lang === 'en' && active[lang].content!.researchCaptions?.[i] && (
                              <div style={{ position: 'relative', maxWidth: '220px' }}>
                                {/* Tail apuntando arriba */}
                                <div style={{
                                  position: 'absolute',
                                  top: -7,
                                  left: 14,
                                  width: 0,
                                  height: 0,
                                  borderLeft: '7px solid transparent',
                                  borderRight: '7px solid transparent',
                                  borderBottom: '7px solid #111',
                                }} />
                                <div style={{
                                  background: '#111',
                                  color: '#f0ebe2',
                                  borderRadius: '12px',
                                  padding: '10px 14px',
                                  fontSize: '0.72rem',
                                  lineHeight: 1.55,
                                  fontFamily: 'var(--font-body)',
                                  fontWeight: 300,
                                }}>
                                  "{active[lang].content!.researchCaptions![i]}"
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Moodboard */}
                  {active[lang].content!.benchmarkImages && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-6">
                        {lang === 'es' ? 'Moodboard & referencias' : 'Moodboard & references'}
                      </h3>
                      <div className="flex flex-col gap-4">
                        {active[lang].content!.benchmarkImages!.map((src, i) => (
                          <img key={i} src={src} alt="" className="rounded-xl w-full object-cover" style={{ border: `1px solid ${active.textColor}15` }} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Objective */}
                  <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                    <h3 className="text-xs uppercase tracking-widest opacity-60 mb-4">
                      {lang === 'es' ? 'Objetivo' : 'Objective'}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-2xl whitespace-pre-line" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                      {renderBold(active[lang].content!.objective)}
                    </p>
                  </div>

                  {/* Process */}
                  {active[lang].content!.process.length > 0 && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-8">
                        {lang === 'es' ? 'Proceso' : 'Process'}
                      </h3>
                      <div className="space-y-10">
                        {active[lang].content!.process.map((step, i) => (
                          <div key={i} className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                            <span className="text-sm font-semibold opacity-70 shrink-0 pt-0.5">
                              {String(i + 1).padStart(2, '0')} — {step.label}
                            </span>
                            <div>
                              <p className="text-sm md:text-base leading-relaxed opacity-75 whitespace-pre-line mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                                {renderBold(step.text)}
                              </p>
                              {(step.image || step.image2 || step.image3) && (
                                step.text2 ? (
                                  <div className="flex flex-col gap-6">
                                    {step.image && (
                                      <div className="flex flex-col gap-2">
                                        <img src={step.image} alt={step.label} className="rounded-xl object-cover" style={{ border: `1px solid ${active.textColor}15`, maxHeight: '480px', width: 'auto', maxWidth: '100%' }} />
                                        {lang === 'en' && step.imageCaption && (
                                          <div style={{ position: 'relative', maxWidth: '340px' }}>
                                            <div style={{ position: 'absolute', top: -7, left: 14, width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderBottom: '7px solid #111' }} />
                                            <div style={{ background: '#111', color: '#f0ebe2', borderRadius: '12px', padding: '10px 14px', fontSize: '0.72rem', lineHeight: 1.55, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                                              "{step.imageCaption}"
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                    <p className="text-sm md:text-base leading-relaxed opacity-75 whitespace-pre-line" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                                      {renderBold(step.text2!)}
                                    </p>
                                    {step.image2 && (
                                      <img src={step.image2} alt={step.label} className="rounded-xl object-cover" style={{ border: `1px solid ${active.textColor}15`, maxHeight: '480px', width: 'auto', maxWidth: '100%' }} />
                                    )}
                                    {step.image3 && (
                                      <img src={step.image3} alt={step.label} className="rounded-xl object-cover" style={{ border: `1px solid ${active.textColor}15`, maxHeight: '480px', width: 'auto', maxWidth: '100%' }} />
                                    )}
                                  </div>
                                ) : (
                                  <div className="flex flex-wrap gap-4">
                                    {step.image && (
                                      <div className="flex flex-col gap-2">
                                        <img src={step.image} alt={step.label} className="rounded-xl object-cover" style={{ border: `1px solid ${active.textColor}15`, maxHeight: '480px', width: 'auto', maxWidth: '100%' }} />
                                        {lang === 'en' && step.imageCaption && (
                                          <div style={{ position: 'relative', maxWidth: '340px' }}>
                                            <div style={{ position: 'absolute', top: -7, left: 14, width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderBottom: '7px solid #111' }} />
                                            <div style={{ background: '#111', color: '#f0ebe2', borderRadius: '12px', padding: '10px 14px', fontSize: '0.72rem', lineHeight: 1.55, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                                              "{step.imageCaption}"
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                    {step.image2 && (
                                      <img src={step.image2} alt={step.label} className="rounded-xl object-cover" style={{ border: `1px solid ${active.textColor}15`, maxHeight: '480px', width: 'auto', maxWidth: '100%' }} />
                                    )}
                                    {step.image3 && (
                                      <img src={step.image3} alt={step.label} className="rounded-xl object-cover" style={{ border: `1px solid ${active.textColor}15`, maxHeight: '480px', width: 'auto', maxWidth: '100%' }} />
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* User Personas */}
                  {active[lang].content!.personas && active[lang].content!.personas!.length > 0 && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-8">
                        {lang === 'es' ? 'User Personas' : 'User Personas'}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-5">
                        {active[lang].content!.personas!.map((persona, i) => (
                          <div
                            key={i}
                            className="rounded-xl p-6 space-y-4"
                            style={{ background: `${active.textColor}08`, border: `1px solid ${active.textColor}15` }}
                          >
                            <div className="flex items-center gap-4">
                              {persona.image && (
                                <img
                                  src={persona.image}
                                  alt={persona.name}
                                  className="w-14 h-14 rounded-full object-cover shrink-0"
                                />
                              )}
                              <div>
                                <p className="font-semibold text-base">{persona.name}</p>
                                <p className="text-xs opacity-50 mt-0.5">{persona.age} · {persona.role} · {persona.location}</p>
                              </div>
                            </div>
                            <p className="text-sm italic opacity-70 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>{persona.quote}</p>
                            <p className="text-sm opacity-65 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>{persona.background}</p>
                            <div>
                              <p className="text-xs uppercase tracking-wider opacity-55 mb-2">{lang === 'es' ? 'Objetivos' : 'Goals'}</p>
                              <ul className="space-y-1">
                                {persona.goals.map((g, j) => (
                                  <li key={j} className="text-sm opacity-65 flex gap-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                                    <span className="opacity-40 shrink-0">→</span>{g}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider opacity-55 mb-2">{lang === 'es' ? 'Comportamientos' : 'Behaviors'}</p>
                              <ul className="space-y-1">
                                {persona.behaviors.map((b, j) => (
                                  <li key={j} className="text-sm opacity-65 flex gap-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                                    <span className="opacity-40 shrink-0">·</span>{b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* App screens gallery */}
                  {active[lang].content!.appScreens && active[lang].content!.appScreens!.length > 0 && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-6">
                        {active[lang].type === 'Mobile App'
                          ? (lang === 'es' ? 'Pantallas de la app' : 'App screens')
                          : active[lang].type === 'Design System' || active[lang].type === 'eCommerce'
                            ? (lang === 'es' ? 'Pantallas del diseño' : 'Design screens')
                            : (lang === 'es' ? 'Pantallas del rediseño' : 'Redesign screens')}
                      </h3>
                      <div className="flex gap-4 overflow-x-auto pb-3" style={{ scrollSnapType: 'x mandatory' }}>
                        {active[lang].content!.appScreens!.map((src, i) => (
                          <img key={i} src={src} alt="" className="rounded-2xl shrink-0 object-cover" style={{ height: '480px', width: 'auto', scrollSnapAlign: 'start', border: `1px solid ${active.textColor}10` }} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Video */}
                  {active.videoUrl && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                        <span className="text-sm font-semibold opacity-70 shrink-0 pt-0.5">
                          {lang === 'es' ? 'Proceso en vídeo' : 'Process video'}
                        </span>
                        <div className="flex flex-col gap-4">
                          <video
                            src={active.videoUrl}
                            poster={active.videoPoster}
                            controls
                            playsInline
                            className="rounded-xl block"
                            style={{ maxHeight: '600px' }}
                            onEnded={(e) => e.currentTarget.load()}
                          />
                          {active.liveUrl && (
                            <a
                              href={active.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm hover:opacity-80 transition-opacity font-medium self-start"
                              style={{ background: active.textColor, color: active.color }}
                            >
                              {active.liveLabel ?? (lang === 'es' ? 'Ver resultado' : 'View result')} ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Maze Stats + Flow */}
                  {(active[lang].content!.mazeStats || active[lang].content!.mazeFlow) && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-6">
                        {lang === 'es' ? 'Resultados del test — Maze' : 'Usability test results — Maze'}
                      </h3>
                      {active[lang].content!.mazeStats && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {active[lang].content!.mazeStats!.map((stat, i) => (
                            <div key={i} className="rounded-xl p-6" style={{ background: `${active.textColor}10`, border: `1px solid ${active.textColor}15` }}>
                              <p className="font-[var(--font-display)] text-5xl leading-none">{stat.value}</p>
                              <p className="text-sm font-semibold opacity-80 mt-3">{stat.label}</p>
                              {stat.sub && <p className="text-xs opacity-40 mt-1">{stat.sub}</p>}
                            </div>
                          ))}
                        </div>
                      )}
                      {active[lang].content!.mazeFlow && (
                        <img src={active[lang].content!.mazeFlow} alt="Maze user flow" className="rounded-xl w-full object-cover" style={{ border: `1px solid ${active.textColor}15` }} />
                      )}
                      {active[lang].content!.mazeComments && active[lang].content!.mazeComments!.length > 0 && (
                        <div className="mt-6 space-y-3">
                          <p className="text-xs uppercase tracking-widest opacity-60">{lang === 'es' ? 'Comentarios de usuarios' : 'User comments'}</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {active[lang].content!.mazeComments!.map((comment, i) => (
                              <blockquote key={i} className="text-sm italic opacity-70 leading-relaxed p-4 rounded-xl" style={{ background: `${active.textColor}08`, border: `1px solid ${active.textColor}12`, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                                {comment}
                              </blockquote>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Deliverables */}
                  {active[lang].content!.deliverables && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-5">
                        {lang === 'es' ? 'Entregables' : 'Deliverables'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {active[lang].content!.deliverables!.map((d) => (
                          <span
                            key={d}
                            className="text-xs px-3 py-1.5 rounded-full"
                            style={{ background: `${active.textColor}12`, border: `1px solid ${active.textColor}20` }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Result */}
                  {active[lang].content!.result && (
                    <div className="border-t pt-8" style={{ borderColor: `${active.textColor}20` }}>
                      <h3 className="text-xs uppercase tracking-widest opacity-60 mb-4">
                        {lang === 'es' ? 'Resultado' : 'Result'}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-2xl whitespace-pre-line" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                        {renderBold(active[lang].content!.result!)}
                      </p>
                    </div>
                  )}

                  {/* AI note */}
                  {active[lang].content!.aiNote && (
                    <div
                      className="rounded-xl p-5 text-sm leading-relaxed"
                      style={{ background: `${active.textColor}10`, border: `1px solid ${active.textColor}20` }}
                    >
                      <span className="font-semibold uppercase tracking-wider text-xs block mb-2 opacity-50">
                        AI-native
                      </span>
                      {renderBold(active[lang].content!.aiNote!)}
                    </div>
                  )}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-16">
                {active.prototypeUrl && (
                  <a
                    href={active.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border rounded-full px-6 py-3 text-sm hover:opacity-70 transition-opacity"
                    style={{ borderColor: active.textColor, color: active.textColor }}
                  >
                    {dict.projects.viewCase} ↗
                  </a>
                )}
                {active.presentationUrl && (
                  <a
                    href={active.presentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm hover:opacity-80 transition-opacity font-medium"
                    style={{ background: active.textColor, color: active.color }}
                  >
                    {lang === 'es' ? 'Ver presentación completa' : 'View full presentation'} ↗
                  </a>
                )}
                {active.liveUrl && !active.videoUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm hover:opacity-80 transition-opacity font-medium"
                    style={{ background: active.textColor, color: active.color }}
                  >
                    {active.liveLabel ?? (lang === 'es' ? 'Ver resultado' : 'View result')} ↗
                  </a>
                )}
              </div>

              {/* Big character */}
              <div className="flex justify-end opacity-10 mt-8">
                <Image
                  src={`/characters/char_0${active.characterIndex + 1}.png`}
                  alt=""
                  width={180}
                  height={180}
                  style={{
                    width: 180, height: 'auto',
                    filter: active.textColor === '#ffffff' ? 'invert(1)' : 'none',
                  }}
                />
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
