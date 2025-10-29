// =========================
// Verifica se a biblioteca particlesJS carregou
// =========================

// Aqui estamos checando se a função "particlesJS" existe no navegador.
// Isso serve para garantir que a biblioteca de partículas foi carregada corretamente.
// Se não carregou, vamos usar um fundo alternativo.
if (typeof particlesJS !== "undefined") {
   // =========================
   // Configuração normal das partículas
   // =========================

   // Chamamos a função particlesJS, passando dois parâmetros:
   // 1. O id do elemento HTML onde as partículas vão aparecer ("particles-js")
   // 2. Um objeto com todas as configurações das partículas
   particlesJS("particles-js", {
      // Configuração das partículas
      particles: {
         // Quantidade de partículas e densidade na tela
         number: {
            value: 80, // Quantas partículas existem na tela
            density: {
               enable: true, // Se a densidade deve ser considerada
               value_area: 800, // Área virtual para calcular densidade
            },
         },

         // Cor das partículas
         color: { value: "#ffffff" }, // Branco

         // Formato das partículas
         shape: { type: "circle" }, // Pode ser círculo, triângulo, estrela, etc.

         // Transparência das partículas
         opacity: {
            value: 0.5, // Transparência média
            random: false, // Não varia aleatoriamente
            anim: { enable: false }, // Sem animação de transparência
         },

         // Tamanho das partículas
         size: {
            value: 3, // Tamanho médio
            random: true, // Pequena variação aleatória
            anim: { enable: false }, // Sem animação de tamanho
         },

         // Linhas entre partículas
         line_linked: {
            enable: true, // Ativa as linhas
            distance: 150, // Distância máxima para conectar partículas
            color: "#ffffff", // Cor das linhas
            opacity: 0.4, // Transparência das linhas
            width: 1, // Largura das linhas
         },

         // Movimento das partículas
         move: {
            enable: true, // Ativa movimento
            speed: 5, // Velocidade
            direction: "none", // Sem direção específica
            random: false, // Movimento não aleatório
            straight: false, // Movimento não reto
            out_mode: "out", // Quando saem da tela, reaparecem do outro lado
            bounce: false, // Não quica nas bordas
         },
      },

      // Interatividade (como as partículas reagem ao usuário)
      interactivity: {
         detect_on: "canvas", // Detecta interação no próprio canvas das partículas

         // Eventos que interagem com o mouse
         events: {
            onhover: {
               enable: true, // Ativa efeito ao passar o mouse
               mode: "repulse", // As partículas se afastam do mouse
            },
            onclick: {
               enable: true, // Ativa efeito ao clicar
               mode: "push", // Cria novas partículas ao clicar
            },
            resize: true, // Ajusta as partículas ao redimensionar a tela
         },

         // Configurações dos efeitos de interação
         modes: {
            repulse: {
               distance: 200, // Distância que as partículas se afastam
               duration: 0.4, // Tempo que leva para voltar
            },
            push: {
               particles_nb: 4, // Quantas partículas novas aparecem ao clicar
            },
         },
      },

      // Detecta telas de alta resolução (como Retina)
      retina_detect: true,
   });
} else {
   // =========================
   // Fallback caso particles.js não carregue
   // =========================

   // Mostra um aviso no console para o desenvolvedor
   console.warn("particles.js não carregou. Usando fundo degradê escuro.");

   // Seleciona o container onde as partículas deveriam estar
   const container = document.getElementById("particles-js");

   // Aplica um fundo degradê escuro como alternativa
   // Assim, mesmo sem partículas, a página continua visualmente agradável
   container.style.backgroundImage = "radial-gradient(circle at center, #111 0%, #000 100%)";
   container.style.backgroundSize = "cover"; // Ajusta para preencher o espaço
   container.style.backgroundPosition = "center"; // Centraliza o degradê
}
