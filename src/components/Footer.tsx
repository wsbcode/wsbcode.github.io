import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode } from 'react-icons/fa6'

interface NavItem {
  label: string
  href: string
  id: string
}

interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}

interface FooterProps {
  navItems: NavItem[]
  socialLinks: SocialLink[]
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
}

export default function Footer({ navItems, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950/50">
      <div className="section-shell pb-12 pt-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-6">
            <a href="#inicio" className="flex items-center gap-2 text-xl font-bold text-white" aria-label="Início">
              <FaCode className="text-sky-400" />
              <span className="font-display">WB</span>
            </a>
            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Desenvolvedor Full Stack transformando ideias em soluções digitais através do desenvolvimento web.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky-400/40 hover:bg-white/10 hover:text-sky-300"
                    aria-label={link.label}
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              })}
            </div>
          </div>

          <nav className="space-y-4" aria-label="Navegação do rodapé">
            <h3 className="font-display text-lg font-semibold text-white">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4" aria-label="Contato do rodapé">
            <h3 className="font-display text-lg font-semibold text-white">Contato</h3>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              <a href="mailto:contato@exemplo.com" className="hover:text-sky-400 transition-colors">
                contato@exemplo.com
              </a>
              <div className="flex items-center gap-2">
                <FaLinkedinIn className="text-lg" />
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-lg" />
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
                  GitHub
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} William Barbosa. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-600">
            Construído com React, Vite, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}