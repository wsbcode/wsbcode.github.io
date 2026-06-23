import { useState, useEffect } from 'react'
import { FaBars, FaXmark, FaCode } from 'react-icons/fa6'

interface NavItem {
  label: string
  href: string
  id: string
}

interface NavbarProps {
  navItems: NavItem[]
  activeSection: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  onNavigate: () => void
}

export default function Navbar({
  navItems,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 text-xl font-bold text-white" aria-label="Início">
            <FaCode className="text-sky-400" />
            <span className="font-display">WB</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                  activeSection === item.id ? 'text-sky-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="py-6 space-y-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={onNavigate}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-sky-500/10 text-sky-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}