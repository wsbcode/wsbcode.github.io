import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

interface Project {
   title: string;
   description: string;
   image: string;
   technologies: string[];
   githubUrl: string;
   demoUrl: string;
}

interface ProjectsProps {
   isVisible: boolean;
}

const projects: Project[] = [
   {
      title: "Sistema Gerador de Provas",
      description:
         "Plataforma para organizar conteúdos, montar avaliações e distribuir provas com foco em produtividade e clareza.",
      image: "https://picsum.photos/seed/project1/600/400",
      technologies: ["React", "Node.js", "SQL"],
      githubUrl: "https://github.com/",
      demoUrl: "https://example.com/",
   },
   {
      title: "Lista de Tarefas",
      description:
         "Aplicação prática para controle de tarefas com interface objetiva, organização visual e interação rápida.",
      image: "https://picsum.photos/seed/project2/600/400",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/",
      demoUrl: "https://example.com/",
   },
   {
      title: "Dashboard Financeiro",
      description:
         "Painel analítico para acompanhar indicadores financeiros com gráficos, cards e visão executiva.",
      image: "https://picsum.photos/seed/project3/600/400",
      technologies: ["TypeScript", "React", "Node.js"],
      githubUrl: "https://github.com/",
      demoUrl: "https://example.com/",
   },
];

export default function Projects({ isVisible }: ProjectsProps) {
   return (
      <section id="projetos" className="scroll-mt-28">
         <div
            className={`section-shell space-y-10 transition duration-700 ${
               isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
         >
            <div className="max-w-3xl space-y-4">
               <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                  Projetos
               </p>
               <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                  Exemplos de entregas com foco em clareza, escalabilidade e boa experiência.
               </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
               {projects.map((project) => (
                  <article
                     key={project.title}
                     className="glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-xl"
                  >
                     <div className="aspect-video overflow-hidden">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                           loading="lazy"
                        />
                     </div>
                     <div className="p-6 space-y-4">
                        <h3 className="font-display text-xl font-semibold text-white">
                           {project.title}
                        </h3>
                        <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                           {project.technologies.map((tech) => (
                              <span
                                 key={tech}
                                 className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                           <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-sky-400 transition-colors"
                           >
                              <FaGithub className="text-lg" />
                              Código
                           </a>
                           <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-sky-400 transition-colors"
                           >
                              <HiOutlineExternalLink className="text-lg" />
                              Demo
                           </a>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}
