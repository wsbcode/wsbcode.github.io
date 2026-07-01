import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const quickLinks = [
   { label: "Sobre Mim", href: "#sobre" },
   { label: "Habilidades", href: "#habilidades" },
   { label: "Projetos", href: "#projetos" },
   { label: "Contato", href: "#contato" },
];

const socials = [
   { icon: FiGithub, href: "https://github.com/wsbcode" },
   { icon: FiLinkedin, href: "https://www.linkedin.com/in/wsbarbosa/" },
   { icon: FaWhatsapp, href: "https://wa.me/5571992773034" },
    { icon: FiInstagram, href: "https://www.instagram.com/williambarbosa______" },
    { icon: FiFacebook, href: "https://www.facebook.com/profile.php?id=61551114907013" },
];

export default function Footer() {
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <footer className="relative border-t border-gray-800 bg-gray-950">
         <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
               <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                     WB<span className="text-cyan-400">Code</span>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     Desenvolvedor Full Stack focado em criar soluções web completas com tecnologia
                     moderna e código de qualidade.
                  </p>
               </div>

               <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                     Links Rápidos
                  </h4>
                  <div className="flex flex-col gap-2">
                     {quickLinks.map((link) => (
                        <a
                           key={link.href}
                           href={link.href}
                           className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                           {link.label}
                        </a>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                     Redes Sociais
                  </h4>
                  <div className="flex gap-3">
                     {socials.map((social) => (
                        <a
                           key={social.href}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                        >
                           <social.icon className="text-lg" />
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-gray-800">
               <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} William Barbosa. Todos os direitos reservados.
               </p>
               <button
                  onClick={scrollToTop}
                  className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer"
                  aria-label="Voltar ao topo"
               >
                  <FiArrowUp />
               </button>
            </div>
         </div>
      </footer>
   );
}
