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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                     Mim
                  </span>
               </h2>
               <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto rounded-full" />
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
                        Iniciei meus estudos na tecnologia pelo Front-End, criando interfaces com
                        HTML, CSS, JavaScript, TypeScript e React. Essa base me deu uma visão clara
                        de como o usuário interage com a aplicação e como o Front se comunica com o
                        sistema.
                     </p>
                     <p>
                        Com a prática, percebi maior afinidade com a lógica, estrutura de dados e
                        regras de negócio, direcionando meu foco para o desenvolvimento Back-End
                        (Java, APIs REST e Banco de Dados).
                     </p>
                     <p>
                        Também possuo experiência em suporte técnico e atendimento ao cliente, o que
                        fortalece minha comunicação, capacidade de resolução de problemas e
                        organização em equipe.
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
                        className="group flex gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-accent-light/50 hover:bg-accent/5 transition-all duration-300"
                     >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors duration-300">
                           <item.icon className="text-accent text-xl" />
                        </div>
                        <div>
                           <h3 className="text-white group-hover:text-accent-light font-semibold mb-1 transition-colors duration-300">
                              {item.title}
                           </h3>
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
