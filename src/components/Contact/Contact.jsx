import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPaperAirplane } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const socials = [
   { label: "GitHub", icon: FiGithub, href: "https://github.com/wsbcode" },
   { label: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/wsbarbosa/" },
   { label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/5571992773034" },
   { label: "E-mail", icon: FiMail, href: "mailto:wsbcontatos@gmail.com" },
];

export default function Contact() {
   const [sent, setSent] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      setSent(true);
      setTimeout(() => setSent(false), 4000);
   };

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
                  Entre em{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                     Contato
                  </span>
               </h2>
               <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
               <motion.form
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
               >
                  <div>
                     <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                        Nome
                     </label>
                     <input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Seu nome"
                     />
                  </div>
                  <div>
                     <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        E-mail
                     </label>
                     <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="seu@email.com"
                     />
                  </div>
                  <div>
                     <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                        Mensagem
                     </label>
                     <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                        placeholder="Sua mensagem..."
                     />
                  </div>
                  <button
                     type="submit"
                     className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer"
                  >
                     <HiPaperAirplane className="text-lg" />
                     {sent ? "Enviado!" : "Enviar Mensagem"}
                  </button>
               </motion.form>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-6"
               >
                  <p className="text-gray-400 leading-relaxed">
                     Vamos conversar? Estou aberto a oportunidades, parcerias e novos projetos.
                     Mande uma mensagem ou me encontre nas redes abaixo.
                  </p>

                  <div className="flex flex-col gap-3">
                     {socials.map((social) => (
                        <a
                           key={social.label}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                        >
                           <div className="w-10 h-10 rounded-lg bg-gray-900/50 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
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
