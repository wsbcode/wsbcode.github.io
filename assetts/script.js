// =========================
// Partículas
// =========================

// Verifica se a biblioteca particlesJS carregou no navegador
// Isso evita erros caso a biblioteca não tenha sido importada corretamente
if (typeof particlesJS !== "undefined") {
   // Chamamos a função particlesJS passando:
   // 1º parâmetro: id do elemento HTML onde as partículas vão aparecer
   // 2º parâmetro: objeto com todas as configurações das partículas
   particlesJS("particles-js", {
      particles: {
         // Quantidade de partículas e densidade na tela
         number: {
            value: 80, // Quantas partículas existirão na tela
            density: { enable: true, value_area: 800 }, // Ajusta a densidade conforme a tela
         },

         // Cor das partículas
         color: { value: "#ffffff" },

         // Formato das partículas (círculo, triângulo, etc.)
         shape: { type: "circle" },

         // Transparência das partículas
         opacity: { value: 0.5, random: false, anim: { enable: false } },

         // Tamanho das partículas
         size: { value: 3, random: true, anim: { enable: false } },

         // Linhas entre partículas
         line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },

         // Movimento das partículas
         move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
         },
      },

      // Interatividade com o usuário
      interactivity: {
         detect_on: "canvas", // Detecta eventos no próprio canvas

         events: {
            onhover: { enable: true, mode: "repulse" }, // Ao passar o mouse, partículas se afastam
            onclick: { enable: true, mode: "push" }, // Ao clicar, gera novas partículas
            resize: true, // Ajusta partículas ao redimensionar a tela
         },

         modes: {
            repulse: { distance: 200, duration: 0.4 }, // Distância e tempo que partículas se afastam
            push: { particles_nb: 4 }, // Quantas partículas novas aparecem ao clicar
         },
      },

      retina_detect: true, // Detecta telas de alta resolução
   });
} else {
   // Caso a biblioteca particles.js não carregue
   console.warn("particles.js não carregou. Usando fundo degradê escuro.");

   // Seleciona o container de partículas
   const container = document.getElementById("particles-js");

   // Aplica um fundo degradê escuro como alternativa visual
   container.style.backgroundImage = "radial-gradient(circle at center, #111 0%, #000 100%)";
   container.style.backgroundSize = "cover"; // Preenche todo o container
   container.style.backgroundPosition = "center"; // Centraliza o degradê
}

// =========================
// Menu hambúrguer
// =========================

// Seleciona o botão do hambúrguer e a lista de links
const hamburger = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-links");

// Adiciona evento de clique no botão do hambúrguer
hamburger.addEventListener("click", () => {
   // Adiciona ou remove a classe 'active' no botão e nos links
   // Isso faz o menu abrir ou fechar no mobile
   hamburger.classList.toggle("active");
   navLinks.classList.toggle("active");
});

// =========================
// Digitação do H1
// =========================

// Espera todo o conteúdo do DOM carregar antes de executar
document.addEventListener("DOMContentLoaded", () => {
   const el = document.getElementById("typing"); // Seleciona o h1 que vai receber a digitação
   if (!el) return; // Se não existir, sai da função

   const text = el.getAttribute("data-text") || el.textContent.trim(); // Pega o texto do atributo data-text
   const isMobile = window.matchMedia("(max-width: 768px)").matches; // Verifica se é tela mobile

   if (isMobile) {
      // Se for mobile, inicia a animação de digitação
      el.textContent = ""; // Limpa o conteúdo do h1 para começar do zero

      // Cria o cursor piscante
      const cursor = document.createElement("span");
      cursor.className = "typing-cursor"; // Classe para estilizar no CSS
      el.parentNode.appendChild(cursor); // Adiciona o cursor ao lado do h1

      let i = 0; // Contador de caracteres
      const speed = 30; // Velocidade da digitação em ms por caractere

      // Função que digita caractere por caractere
      function typeNext() {
         if (i <= text.length - 1) {
            el.textContent += text.charAt(i); // Adiciona o próximo caractere
            i++;
            setTimeout(typeNext, speed); // Chama a função novamente após 'speed' milissegundos
         }
      }

      setTimeout(typeNext, 300); // Pequeno delay antes de iniciar
   } else {
      // Se for desktop, apenas mostra o texto estático
      el.textContent = text;
   }
});
