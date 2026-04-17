'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const oppositeTheme = theme === 'light' ? 'dark' : 'light'

  const portalRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let rafId: number
    let mouseX = -100
    let mouseY = -100
    let isHover = false

    function onMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      const target = e.target as HTMLElement
      isHover = !!target.closest('a, button, [role="button"], [data-clickable]')
    }

    function tick() {
      const portalRadius = isHover ? 25 : 15
      const cursorSize = isHover ? 20 : 10

      if (portalRef.current) {
        portalRef.current.style.clipPath = `circle(${portalRadius}px at ${mouseX}px ${mouseY}px)`
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `translateY(-${window.scrollY}px)`
      }

      if (cursorRef.current) {
        const half = cursorSize / 2
        cursorRef.current.style.width = `${cursorSize}px`
        cursorRef.current.style.height = `${cursorSize}px`
        cursorRef.current.style.transform = `translate(${mouseX - half}px, ${mouseY - half}px)`
      }

      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Capa principal — tema activo */}
      <div data-theme={theme}>
        {children}
      </div>

      {/* Capa portal — muestra el tema contrario a través del cursor */}
      <div
        ref={portalRef}
        data-theme={oppositeTheme}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 48,
          pointerEvents: 'none',
          clipPath: 'circle(15px at -100px -100px)',
          overflow: 'hidden',
          transition: 'clip-path 0.12s ease',
        }}
        aria-hidden="true"
      >
        <div
          ref={innerRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {children}
        </div>
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: '50%',
          border: '1.5px solid currentColor',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'width 0.12s ease, height 0.12s ease',
          transform: 'translate(-100px, -100px)',
          color: 'white',
        }}
        aria-hidden="true"
      />
    </>
  )
}
