import { useState, FormEvent } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6'

interface ContactProps {
  isVisible: boolean
}

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  { label: 'Email', href: 'mailto:contato@exemplo.com', icon: FaEnvelope },
]

export default function Contact({ isVisible }: ContactProps) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Contato via portfólio - ${formState.name}`)
    const body = encodeURIComponent(
      `Nome: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )
    window.location.href = `mailto:contato@exemplo.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contato" className="scroll-mt-28 pb-8">
      <div
        className={`section-shell space-y-10 transition duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Contato</p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Vamos conversar sobre projetos, oportunidades e soluções digitais.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={handleSubmit} className="glass-panel space-y-5 rounded-3xl p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Nome</span>
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                  placeholder="Seu nome"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                  placeholder="seuemail@exemplo.com"
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Mensagem</span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                placeholder="Escreva sua mensagem aqui"
              />
            </label>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-600 hover:shadow-sky-500/40 transition-all duration-300"
            >
              Enviar
            </button>
          </form>

          <aside className="space-y-6">
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="font-display text-2xl font-semibold text-white">Canais diretos</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Você pode falar comigo pelos canais abaixo ou usar o formulário para iniciar uma conversa.
              </p>

              <div className="mt-6 grid gap-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-white/10 hover:text-sky-300"
                    >
                      <Icon className="text-xl" />
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">Disponibilidade</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Aberto para oportunidades como desenvolvedor Full Stack, projetos freelance e colaboração em produtos digitais.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}