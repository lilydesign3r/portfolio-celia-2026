import { getDictionary } from '@/lib/dictionaries'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang === 'en' ? 'en' : 'es'
  const dict = await getDictionary(locale)

  return (
    <>
      <Navbar dict={dict} lang={locale} />
      <main>
        <Hero dict={dict} />
        <AboutSection dict={dict} />
        <ProjectsSection dict={dict} lang={locale} />
        <ContactSection dict={dict} />
      </main>
    </>
  )
}
