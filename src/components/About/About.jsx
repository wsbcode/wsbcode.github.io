import { motion } from "framer-motion";
import { HiCode, HiLightningBolt, HiAcademicCap } from "react-icons/hi";

const highlights = [
   {
      icon: HiCode,
      title: "Clean Code",
      desc: "Código limpo, modular e de fácil manutenção seguindo boas práticas.",
   },
   {
      icon: HiLightningBolt,
      title: "Performance",
      desc: "Aplicações rápidas e otimizadas para a melhor experiência do usuário.",
   },
   {
      icon: HiAcademicCap,
      title: "Aprendizado Contínuo",
      desc: "Sempre atualizado com as tendências e melhores tecnologias do mercado.",
   },
];

export default function About() {
   return (
      <section id="sobre" className="py-20 relative">
         <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950 pointer-events-none" />

         <div className="relative z-10 max-w-6xl mx-auto px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Sobre{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                     Mim
                  </span>
               </h2>
               <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                     <p>
                        Iniciei minha jornada na tecnologia através do desenvolvimento web,
                        estudando HTML, CSS, JavaScript, TypeScript e React. Durante esse período,
                        desenvolvi projetos práticos e construí uma base sólida sobre o
                        funcionamento de aplicações web.
                     </p>
                     <p>
                        Com o avanço dos estudos, percebi que me identificava mais com a parte
                        lógica e estrutural das aplicações do que com a construção de interfaces.
                        Por isso, passei a direcionar meu foco para o desenvolvimento Back-End,
                        aprofundando meus conhecimentos em Node.js, APIs, bancos de dados e
                        desenvolvimento de sistemas.
                     </p>
                     <p>
                        Além da programação, possuo experiência em suporte técnico e atendimento ao
                        cliente, atuando na resolução de problemas e suporte remoto a usuários. Essa
                        experiência contribuiu para o desenvolvimento de habilidades como
                        comunicação, organização e análise de problemas.
                     </p>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid gap-4"
               >
                  {highlights.map((item, i) => (
                     <div
                        key={i}
                        className="flex gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors"
                     >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                           <item.icon className="text-cyan-400 text-xl" />
                        </div>
                        <div>
                           <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                           <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>
      </section>
   );
}
