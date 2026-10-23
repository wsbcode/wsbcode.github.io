import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMessageCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const socials = [
   { label: "GitHub", icon: FiGithub, href: "https://github.com/wsbcode" },
   { label: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/wsbarbosa/" },
   { label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/5571992773034" },
];

export default function Contact() {
   return (
      <section id="contato" className="py-20 relative">
         <div className="max-w-6xl mx-auto px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl sm:text-4xl font-bold mb-4">
               Vamos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                   conversar?
                </span>
             </h2>
             <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="rounded-xl bg-gray-900/50 border border-gray-800 p-6"
            >
               <FiMessageCircle className="text-3xl text-accent mb-4" />
               <h3 className="text-xl font-semibold text-white mb-3">
                  Disponível para novos projetos
               </h3>
               <p className="text-gray-400 leading-relaxed mb-6">
                  Se você tem uma ideia, projeto ou oportunidade em mente, fale comigo pelas
                  minhas redes. Será um prazer conhecer melhor o que você está construindo.
               </p>
               <a
                  href="https://wa.me/5571992773034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-gray-950 font-semibold px-5 py-3 rounded-lg transition-all duration-200"
               >
                  Conversar pelo WhatsApp
                  <FiArrowUpRight />
               </a>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-6"
               >
                  <p className="text-gray-400 leading-relaxed">
                     Acompanhe meu trabalho, conheça meus projetos e entre em contato pelo canal
                     que for mais conveniente para você.
                  </p>

                  <div className="flex flex-col gap-3">
                     {socials.map((social) => (
                        <a
                           key={social.label}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-accent-light transition-colors group"
                         >
                            <div className="w-10 h-10 rounded-lg bg-gray-900/50 border border-gray-800 flex items-center justify-center group-hover:border-accent-light/50 transition-colors">
                              <social.icon className="text-lg" />
                           </div>
                           <span className="text-sm">{social.label}</span>
                        </a>
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
