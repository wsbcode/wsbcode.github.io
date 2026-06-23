import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const navItems = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Sobre Mim', href: '#sobre', id: 'sobre' },
  { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
  { label: 'Projetos', href: '#projetos', id: 'projetos' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' as const },
  { label: 'Email', href: 'mailto:contato@exemplo.com', icon: 'email' as const },
]

const sectionIds = navItems.map((item) => item.id)

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [visibleSections, setVisibleSections] = useState<string[]>(['inicio'])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const visibleSet = new Set(visibleSections)

  // Intersection Observer para detectar seções visíveis
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const sectionId = entry.target.id
          setActiveSection(sectionId)
          setVisibleSections((current) =>
            current.includes(sectionId) ? current : [...current, sectionId]
          )
        })
      },
      {
        threshold: 0.35,
        rootMargin: '-20% 0px -45% 0px',
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      {/* Background ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-sky-500/15 blur-3xl animate-pulse-slow" />
        <div className="absolute right-[-8%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigate={handleNavigate}
      />

      <main className="relative">
        <Hero isVisible={visibleSet.has('inicio')} />
        <About isVisible={visibleSet.has('sobre')} />
        <Skills isVisible={visibleSet.has('habilidades')} />
        <Projects isVisible={visibleSet.has('projetos')} />
        <Contact isVisible={visibleSet.has('contato')} />
      </main>

      <Footer navItems={navItems} socialLinks={socialLinks} />
    </div>
  )
}

export default App