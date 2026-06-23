import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineArrowRight } from 'react-icons/hi2'

interface HeroProps {
  isVisible: boolean
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <section id="inicio" className="scroll-mt-28 pt-28 lg:pt-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <div
          className={`space-y-8 transition duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Portfólio profissional em React + Vite + Tailwind CSS
          </div>

          <div className="space-y-5">
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              William Barbosa
            </h1>
            <p className="font-display text-2xl font-medium text-slate-300 md:text-3xl">
              Desenvolvedor Full Stack
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-400 text-balance">
              Transformando ideias em soluções digitais através do desenvolvimento web.
            </p>
          </div>

          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-600 hover:shadow-sky-500/40 transition-all duration-300"
            >
              Ver Projetos
              <HiOutlineArrowRight className="text-lg" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">React</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Node.js</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">TypeScript</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky-400/40 hover:bg-white/10 hover:text-sky-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky-400/40 hover:bg-white/10 hover:text-sky-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div
          className={`relative transition duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-sky-500/20 blur-2xl animate-pulse-slow" />
          <div className="absolute right-6 top-14 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-2xl shadow-slate-950/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_40%)]" />

            <div className="relative flex flex-col items-center gap-6">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 shadow-glow animate-float">
                <div className="absolute inset-4 rounded-full border border-sky-400/20 bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-fuchsia-500/15" />
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 text-5xl font-bold text-white shadow-xl">
                  WB
                </div>
              </div>

              <div className="grid w-full grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Foco</p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">Interfaces modernas</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Stack</p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">React + Node.js</p>
                </div>
              </div>

              <div className="w-full rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm leading-7 text-slate-300">
                  Construindo soluções com atenção à experiência do usuário, arquitetura limpa e interface profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}