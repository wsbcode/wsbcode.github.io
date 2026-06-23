import { useState } from 'react'
import { FaCode, FaDatabase, FaServer, FaToolbox, FaTerminal } from 'react-icons/fa6'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color?: string
}

interface SkillGroup {
  title: string
  icon: 'frontend' | 'backend' | 'database' | 'tools'
  skills: Skill[]
}

interface SkillsProps {
  isVisible: boolean
}

const categoryIconMap = {
  frontend: FaCode,
  backend: FaServer,
  database: FaDatabase,
  tools: FaToolbox,
}

const accentMap = {
  frontend: 'sky',
  backend: 'violet',
  database: 'emerald',
  tools: 'amber',
}

const accentColors = {
  sky: 'bg-sky-500/10 border-sky-500/20',
  violet: 'bg-violet-500/10 border-violet-500/20',
  emerald: 'bg-emerald-500/10 border-emerald-500/20',
  amber: 'bg-amber-500/10 border-amber-500/20',
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: SiCss, color: 'text-sky-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express', icon: SiExpress, color: 'text-slate-400' },
      { name: 'APIs REST', icon: FaCode, color: 'text-purple-500' },
    ],
  },
  {
    title: 'Banco de Dados',
    icon: 'database',
    skills: [
      { name: 'SQL', icon: SiPostgresql, color: 'text-blue-600' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-500' },
    ],
  },
  {
    title: 'Ferramentas',
    icon: 'tools',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
      { name: 'GitHub', icon: SiGithub, color: 'text-white' },
      { name: 'VS Code', icon: FaTerminal, color: 'text-blue-500' },
    ],
  },
]

export default function Skills({ isVisible }: SkillsProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="habilidades" className="scroll-mt-28">
      <div
        className={`section-shell space-y-10 transition duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Habilidades</p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Stack organizada para entregar interfaces, lógica e integração com qualidade.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const CategoryIcon = categoryIconMap[group.icon]
            const accentClass = accentColors[accentMap[group.icon] as keyof typeof accentColors]
            return (
              <div
                key={group.title}
                className={`glass-panel rounded-3xl p-6 transition-all duration-300 hover:border-white/20 ${accentClass}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-white/5">
                    <CategoryIcon className="text-2xl text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <button
                        type="button"
                        className="relative h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white/10 hover:shadow-xl hover:shadow-sky-500/10"
                        aria-label={skill.name}
                      >
                        <skill.icon
                          className={`text-3xl transition-all duration-300 ${skill.color}`}
                          aria-hidden="true"
                        />
                      </button>

                      {hoveredSkill === skill.name && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          {skill.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}