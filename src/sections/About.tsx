import { useEffect, useState } from "react";
import { FaDribbble, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import fotoPerfil from "../assets/img/fotoPerfil.jpeg";
import backSobre from "../assets/img/backSobre.jpeg";

interface AboutProps {
   isVisible: boolean;
}

export default function About({ isVisible }: AboutProps) {
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      if (isVisible) setLoaded(true);
   }, [isVisible]);

   const socialLinks = [
      { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
      { label: "GitHub", href: "https://github.com/", icon: FaGithub },
      { label: "Dribbble", href: "https://dribbble.com/", icon: FaDribbble },
      { label: "WhatsApp", href: "https://wa.me/5511999999999", icon: FaWhatsapp },
   ];

   return (
      <section
         id="sobre"
         className="scroll-mt-28 relative min-h-screen bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${backSobre})` }}
      >
         <div className="absolute inset-0 bg-slate-950/80" aria-hidden="true" />

         {loaded ? (
            <div className="relative">
               <div className="section-shell">
                  <div
                     className={`relative mx-auto max-w-5xl transition duration-700 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                     }`}
                  >
                     <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020]/90 shadow-2xl shadow-slate-950/60 p-8 sm:p-10 lg:p-12 lg:flex lg:items-center lg:gap-10">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
                        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-sky-400/60 via-fuchsia-400/30 to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-fuchsia-400/60 via-sky-400/30 to-transparent" />

                        <div className="relative lg:w-2/5 shrink-0">
                           <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden border-2 border-blue-500/50 shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_0_40px_rgba(168,85,247,0.3)]">
                              <img
                                 src={fotoPerfil}
                                 alt="William Barbosa - Foto de perfil"
                                 className="h-full w-full object-cover"
                                 loading="lazy"
                              />
                           </div>
                        </div>

                        <div className="mt-8 lg:mt-0 lg:w-3/5 text-center lg:text-left">
                           <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                              Sobre Mim
                           </h2>

                           <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg mx-auto lg:mx-0">
                              Sou <strong className="text-white">William Barbosa</strong>,
                              desenvolvedor{" "}
                              <strong className="text-sky-300">Full Stack</strong>{" "}
                           </p>

                           <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base mx-auto lg:mx-0">
                              Iniciei minha jornada na tecnologia através do desenvolvimento web,
                              estudando HTML, CSS, JavaScript, TypeScript e React. Durante esse
                              período, desenvolvi projetos práticos e construí uma base sólida sobre
                              o funcionamento de aplicações web. Com o avanço dos estudos, percebi
                              que me identificava mais com a parte lógica e estrutural das
                              aplicações do que com a construção de interfaces. Por isso, passei a
                              direcionar meu foco para o desenvolvimento Back-End, aprofundando meus
                              conhecimentos em Node.js, APIs, bancos de dados e desenvolvimento de
                              sistemas.
                              {/* Pula a linha e deixa um espaço em branco antes do próximo bloco */}
                              <br /> <br />
                              Além da programação, possuo experiência em suporte técnico e
                              atendimento ao cliente, atuando na resolução de problemas e suporte
                              remoto a usuários. Essa experiência contribuiu para o desenvolvimento
                              de habilidades como comunicação, organization e análise de problemas.
                           </p>

                           <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                              {socialLinks.map((link) => {
                                 const Icon = link.icon;
                                 return (
                                    <a
                                       key={link.label}
                                       href={link.href}
                                       target="_blank"
                                       rel="noreferrer"
                                       aria-label={link.label}
                                       className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white/10 hover:text-sky-300"
                                    >
                                       <Icon className="text-xl" />
                                    </a>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div className="relative h-24" />
         )}
      </section>
   );
}
