import type { Metadata } from 'next'
import { DM_Serif_Display, Archivo_Black, Inter } from 'next/font/google'
import '../globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import ThemeWrapper from '@/components/ThemeWrapper'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roca',
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Celia Barbecho — Portfolio',
  description: 'Product Designer. UX/UI con base en diseño gráfico e IA integrada en el proceso.',
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <html lang={lang} className={`${dmSerif.variable} ${archivoBlack.variable} ${inter.variable}`}>
      <body>
        <ThemeProvider>
          <a
            href="#projects"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-ink)] focus:text-[var(--color-cream)] focus:rounded-full focus:text-sm focus:font-medium"
          >
            {lang === 'es' ? 'Ir al contenido' : 'Skip to content'}
          </a>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
