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
// Digitação do H1 e H2
// =========================

// Espera todo o conteúdo do DOM carregar antes de executar

// Espera o carregamento completo do HTML antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
   // Seleciona os elementos H1 e H2 pelo ID
   const h1 = document.getElementById("typing");
   const h2 = document.getElementById("typing2");

   // Pega o texto que está dentro do atributo "data-text" de cada elemento
   // Exemplo: <h1 data-text="Transformo ideias..."></h1>
   const text1 = h1.getAttribute("data-text");
   const text2 = h2.getAttribute("data-text");

   // Define a velocidade da digitação (em milissegundos por letra)
   const speed = 50;

   // ----------------------------------------
   // FUNÇÃO PRINCIPAL DE DIGITAÇÃO
   // ----------------------------------------
   function typeText(element, text, callback) {
      element.textContent = ""; // limpa o conteúdo antes de digitar
      let i = 0; // contador de letras

      // Função interna que digita letra por letra
      function typeNext() {
         if (i < text.length) {
            // Adiciona uma letra por vez ao texto do elemento
            element.textContent += text.charAt(i);
            i++; // avança para a próxima letra
            setTimeout(typeNext, speed); // espera um pouco e repete
         } else {
            // Quando terminar o texto, remove o cursor (barrinha lateral)
            element.style.borderRight = "none";

            // Se houver uma função de "continuação", chama ela
            if (callback) callback();
         }
      }

      // Inicia a digitação
      typeNext();
   }

   // ----------------------------------------
   // INÍCIO DAS ANIMAÇÕES
   // ----------------------------------------

   // Primeiro, o H1 começa a ser digitado
   typeText(h1, text1, () => {
      // Depois que o H1 terminar, aguarda 600ms (meio segundo)
      // e começa a mostrar e digitar o H2
      setTimeout(() => {
         h2.style.opacity = "1"; // faz o H2 aparecer com suavidade
         h2.style.transition = "opacity 0.5s ease"; // aplica o efeito de transição

         // Começa a digitar o texto do H2
         typeText(h2, text2);
      }, 600);
   });
});
