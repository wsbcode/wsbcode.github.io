/* ===========================================
   ARQUIVO JAVASCRIPT - PORTFÓLIO
   Desenvolvedor Web Front-end
   
   Sumário:
   1. Seleção de Elementos do DOM
   2. Menu de Navegação Mobile
   3. Scroll Suave
   4. Header com Efeito ao Scrollar
   5. Botão Voltar ao Topo
   6. Animação de Elementos ao Scrollar
   7. Barras de Progresso das Habilidades
   8. Validação do Formulário de Contato
   9. Efeitos de Hover Personalizados
   10. Inicialização
   =========================================== */

// Espera o DOM carregar completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
   /* ===========================================
       1. SELEÇÃO DE ELEMENTOS DO DOM
       Seleciona todos os elementos que serão manipulados
       =========================================== */

   // Elementos do header e navegação
   const cabecalho = document.getElementById("cabecalho");
   const menuHamburguer = document.getElementById("menuHamburguer");
   const listaNavegacao = document.getElementById("listaNavegacao");
   const linksNavegacao = document.querySelectorAll(".link-navegacao");

   // Botão voltar ao topo
   const botaoTopo = document.getElementById("botaoTopo");

   // Elementos do formulário
   const formularioContato = document.getElementById("formularioContato");
   const campoNome = document.getElementById("nome");
   const campoEmail = document.getElementById("email");
   const campoMensagem = document.getElementById("mensagem");
   const botaoEnviar = document.getElementById("botaoEnviar");
   const mensagemSucesso = document.getElementById("mensagemSucesso");

   // Barras de progresso
   const barrasProgresso = document.querySelectorAll(".progresso");

   // Elementos para animação ao scrollar
   const secoes = document.querySelectorAll(".secao");
   const cardsProjeto = document.querySelectorAll(".card-projeto");
   const cardsHabilidade = document.querySelectorAll(".card-habilidade");

   /* ===========================================
       2. MENU DE NAVEGAÇÃO MOBILE
       Controla a abertura e fechamento do menu hamburguer
       =========================================== */

   /**
    * Função para alternar o estado do menu mobile
    * Adiciona/remove a classe 'ativo' no botão e na lista
    */
   function alternarMenu() {
      menuHamburguer.classList.toggle("ativo");
      listaNavegacao.classList.toggle("ativo");

      // Impede o scroll do body quando o menu está aberto
      document.body.style.overflow = listaNavegacao.classList.contains("ativo") ? "hidden" : "";
   }

   /**
    * Função para fechar o menu mobile
    * Remove a classe 'ativo' do botão e da lista
    */
   function fecharMenu() {
      menuHamburguer.classList.remove("ativo");
      listaNavegacao.classList.remove("ativo");
      document.body.style.overflow = "";
   }

   // Event listener para o botão hamburguer
   menuHamburguer.addEventListener("click", alternarMenu);

   // Fecha o menu ao clicar em um link de navegação
   linksNavegacao.forEach(function (link) {
      link.addEventListener("click", fecharMenu);
   });

   // Fecha o menu ao clicar fora dele
   document.addEventListener("click", function (evento) {
      // Verifica se o clique foi fora do menu e do botão hamburguer
      const clicouForaMenu = !listaNavegacao.contains(evento.target);
      const clicouForaBotao = !menuHamburguer.contains(evento.target);

      if (clicouForaMenu && clicouForaBotao && listaNavegacao.classList.contains("ativo")) {
         fecharMenu();
      }
   });

   /* ===========================================
       3. SCROLL SUAVE
       Implementa navegação suave ao clicar nos links
       =========================================== */

   /**
    * Adiciona comportamento de scroll suave para todos os links
    * que apontam para âncoras na página (#)
    */
   linksNavegacao.forEach(function (link) {
      link.addEventListener("click", function (evento) {
         evento.preventDefault();

         // Obtém o ID do elemento alvo do atributo href
         const idAlvo = this.getAttribute("href");
         const elementoAlvo = document.querySelector(idAlvo);

         if (elementoAlvo) {
            // Calcula a posição considerando a altura do header fixo
            const alturaHeader = cabecalho.offsetHeight;
            const posicaoAlvo = elementoAlvo.offsetTop - alturaHeader;

            // Realiza o scroll suave até a posição calculada
            window.scrollTo({
               top: posicaoAlvo,
               behavior: "smooth",
            });
         }
      });
   });

   /* ===========================================
       4. HEADER COM EFEITO AO SCROLLAR
       Muda a aparência do header quando o usuário scrolla
       =========================================== */

   // Variável para armazenar a última posição do scroll
   let ultimaPosicaoScroll = 0;

   /**
    * Função executada a cada scroll na página
    * Adiciona classe 'rolado' ao header para mudar sua aparência
    */
   function verificarScroll() {
      const posicaoAtual = window.pageYOffset || document.documentElement.scrollTop;

      // Adiciona classe 'rolado' se scrollou mais que 100px
      if (posicaoAtual > 100) {
         cabecalho.classList.add("rolado");
      } else {
         cabecalho.classList.remove("rolado");
      }

      // Atualiza a última posição
      ultimaPosicaoScroll = posicaoAtual;
   }

   // Event listener para o evento de scroll
   window.addEventListener("scroll", verificarScroll);

   /* ===========================================
       5. BOTÃO VOLTAR AO TOPO
       Mostra/esconde o botão e implementa a funcionalidade
       =========================================== */

   /**
    * Função para verificar se deve mostrar o botão de voltar ao topo
    * Mostra o botão quando o scroll passar de 500px
    */
   function verificarBotaoTopo() {
      if (window.pageYOffset > 500) {
         botaoTopo.classList.add("visivel");
      } else {
         botaoTopo.classList.remove("visivel");
      }
   }

   // Event listener para mostrar/esconder o botão
   window.addEventListener("scroll", verificarBotaoTopo);

   /**
    * Função para voltar ao topo da página com animação suave
    */
   function voltarAoTopo() {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   }

   // Event listener para o clique no botão
   botaoTopo.addEventListener("click", voltarAoTopo);

   /* ===========================================
       6. ANIMAÇÃO DE ELEMENTOS AO SCROLLAR
       Revela elementos quando entram na viewport
       =========================================== */

   /**
    * Configuração do Intersection Observer
    * Observa quando elementos entram na área visível da tela
    */
   const opcoesObservador = {
      root: null, // viewport como referência
      rootMargin: "0px", // sem margem adicional
      threshold: 0.15, // 15% do elemento visível para ativar
   };

   /**
    * Callback executado quando um elemento entra/sai da viewport
    * @param {Array} entradas - lista de elementos observados
    * @param {IntersectionObserver} observador - instância do observador
    */
   function callbackObservador(entradas, observador) {
      entradas.forEach(function (entrada) {
         if (entrada.isIntersecting) {
            // Adiciona classe para revelar o elemento
            entrada.target.classList.add("visivel");

            // Para de observar após revelar (otimização)
            observador.unobserve(entrada.target);
         }
      });
   }

   // Cria o observador
   const observador = new IntersectionObserver(callbackObservador, opcoesObservador);

   // Adiciona classe 'revelar' e observa as seções
   secoes.forEach(function (secao) {
      secao.classList.add("revelar");
      observador.observe(secao);
   });

   // Observa cards de projetos com delay progressivo
   cardsProjeto.forEach(function (card, indice) {
      card.classList.add("revelar");
      card.style.transitionDelay = indice * 0.1 + "s";
      observador.observe(card);
   });

   // Observa cards de habilidades
   cardsHabilidade.forEach(function (card, indice) {
      card.classList.add("revelar");
      card.style.transitionDelay = indice * 0.1 + "s";
      observador.observe(card);
   });

   /* ===========================================
       7. BARRAS DE PROGRESSO DAS HABILIDADES
       Anima as barras quando a seção de habilidades é visível
       =========================================== */

   /**
    * Configuração do observador específico para as barras de progresso
    */
   const opcoesObservadorBarras = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   };

   /**
    * Callback para animar as barras de progresso
    * @param {Array} entradas - elementos observados
    */
   // function callbackBarrasProgresso(entradas) {
   //     entradas.forEach(function(entrada) {
   //         if (entrada.isIntersecting) {
   //             // Anima cada barra de progresso
   //             barrasProgresso.forEach(function(barra) {
   //                 // Obtém a porcentagem do atributo data-porcentagem
   //                 const porcentagem = barra.getAttribute('data-porcentagem');

   //                 // Define a largura da barra após um pequeno delay
   //                 setTimeout(function() {
   //                     barra.style.width = porcentagem + '%';
   //                 }, 200);
   //             });
   //         }
   //     });
   // }

   // Cria observador para a seção de habilidades
   const observadorBarras = new IntersectionObserver(
      callbackBarrasProgresso,
      opcoesObservadorBarras
   );

   // Observa a seção de habilidades
   const secaoHabilidades = document.querySelector(".secao-habilidades");
   if (secaoHabilidades) {
      observadorBarras.observe(secaoHabilidades);
   }

   /* ===========================================
       8. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
       Valida os campos antes de enviar
       =========================================== */

   /**
    * Função para validar o campo de email
    * Usa expressão regular para verificar formato válido
    * @param {string} email - email a ser validado
    * @returns {boolean} - true se válido, false se inválido
    */
   function validarEmail(email) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regexEmail.test(email);
   }

   /**
    * Função para mostrar mensagem de erro em um campo
    * @param {HTMLElement} campo - elemento do campo
    * @param {HTMLElement} elementoErro - elemento para mostrar o erro
    * @param {string} mensagem - mensagem de erro
    */
   function mostrarErro(campo, elementoErro, mensagem) {
      campo.classList.add("erro");
      elementoErro.textContent = mensagem;
   }

   /**
    * Função para limpar mensagem de erro de um campo
    * @param {HTMLElement} campo - elemento do campo
    * @param {HTMLElement} elementoErro - elemento do erro
    */
   function limparErro(campo, elementoErro) {
      campo.classList.remove("erro");
      elementoErro.textContent = "";
   }

   /**
    * Função para validar o formulário completo
    * @returns {boolean} - true se todos os campos são válidos
    */
   function validarFormulario() {
      let formularioValido = true;

      // Referências aos elementos de erro
      const erroNome = document.getElementById("erroNome");
      const erroEmail = document.getElementById("erroEmail");
      const erroMensagem = document.getElementById("erroMensagem");

      // Validação do nome
      if (campoNome.value.trim() === "") {
         mostrarErro(campoNome, erroNome, "Por favor, insira seu nome.");
         formularioValido = false;
      } else if (campoNome.value.trim().length < 3) {
         mostrarErro(campoNome, erroNome, "O nome deve ter pelo menos 3 caracteres.");
         formularioValido = false;
      } else {
         limparErro(campoNome, erroNome);
      }

      // Validação do email
      if (campoEmail.value.trim() === "") {
         mostrarErro(campoEmail, erroEmail, "Por favor, insira seu email.");
         formularioValido = false;
      } else if (!validarEmail(campoEmail.value.trim())) {
         mostrarErro(campoEmail, erroEmail, "Por favor, insira um email válido.");
         formularioValido = false;
      } else {
         limparErro(campoEmail, erroEmail);
      }

      // Validação da mensagem
      if (campoMensagem.value.trim() === "") {
         mostrarErro(campoMensagem, erroMensagem, "Por favor, escreva uma mensagem.");
         formularioValido = false;
      } else if (campoMensagem.value.trim().length < 10) {
         mostrarErro(campoMensagem, erroMensagem, "A mensagem deve ter pelo menos 10 caracteres.");
         formularioValido = false;
      } else {
         limparErro(campoMensagem, erroMensagem);
      }

      return formularioValido;
   }

   /**
    * Função para simular o envio do formulário
    * Em um projeto real, aqui você faria uma requisição para o backend
    */
   function enviarFormulario() {
      // Adiciona classe de carregamento ao botão
      botaoEnviar.classList.add("enviando");
      botaoEnviar.querySelector(".texto-botao").textContent = "Enviando...";

      // Simula um delay de envio (em produção seria uma requisição real)
      setTimeout(function () {
         // Remove classe de carregamento
         botaoEnviar.classList.remove("enviando");
         botaoEnviar.querySelector(".texto-botao").textContent = "Enviar Mensagem";

         // Mostra mensagem de sucesso
         mensagemSucesso.classList.add("visivel");

         // Limpa os campos do formulário
         formularioContato.reset();

         // Esconde a mensagem de sucesso após 5 segundos
         setTimeout(function () {
            mensagemSucesso.classList.remove("visivel");
         }, 5000);
      }, 2000);
   }

   // Event listener para o envio do formulário
   formularioContato.addEventListener("submit", function (evento) {
      evento.preventDefault();

      // Valida e envia se válido
      if (validarFormulario()) {
         enviarFormulario();
      }
   });

   // Validação em tempo real - remove erro quando o usuário começa a digitar
   campoNome.addEventListener("input", function () {
      limparErro(this, document.getElementById("erroNome"));
   });

   campoEmail.addEventListener("input", function () {
      limparErro(this, document.getElementById("erroEmail"));
   });

   campoMensagem.addEventListener("input", function () {
      limparErro(this, document.getElementById("erroMensagem"));
   });

   /* ===========================================
       9. EFEITOS DE HOVER PERSONALIZADOS
       Adiciona interações extras com JavaScript
       =========================================== */

   /**
    * Efeito de ripple (onda) ao clicar nos botões
    * @param {Event} evento - evento de clique
    */
   function criarEfeitoRipple(evento) {
      const botao = evento.currentTarget;

      // Cria o elemento do ripple
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      // Calcula a posição do clique relativa ao botão
      const rect = botao.getBoundingClientRect();
      const tamanho = Math.max(rect.width, rect.height);
      const x = evento.clientX - rect.left - tamanho / 2;
      const y = evento.clientY - rect.top - tamanho / 2;

      // Define o estilo do ripple
      ripple.style.cssText = `
            position: absolute;
            width: ${tamanho}px;
            height: ${tamanho}px;
            left: ${x}px;
            top: ${y}px;
            background-color: rgba(100, 255, 218, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleAnimation 0.6s ease-out;
            pointer-events: none;
        `;

      // Adiciona o ripple ao botão
      botao.appendChild(ripple);

      // Remove o ripple após a animação
      setTimeout(function () {
         ripple.remove();
      }, 600);
   }

   // Adiciona o efeito de ripple aos botões principais
   const botoesComRipple = document.querySelectorAll(".botao-principal, .botao-enviar");
   botoesComRipple.forEach(function (botao) {
      botao.style.position = "relative";
      botao.style.overflow = "hidden";
      botao.addEventListener("click", criarEfeitoRipple);
   });

   /**
    * Efeito de tilt (inclinação) nos cards de projeto
    * Cria um efeito 3D sutil ao mover o mouse sobre o card
    */
   cardsProjeto.forEach(function (card) {
      card.addEventListener("mousemove", function (evento) {
         const rect = card.getBoundingClientRect();
         const x = evento.clientX - rect.left;
         const y = evento.clientY - rect.top;

         // Calcula a rotação baseada na posição do mouse
         const centroX = rect.width / 2;
         const centroY = rect.height / 2;
         const rotacaoX = (y - centroY) / 20;
         const rotacaoY = (centroX - x) / 20;

         // Aplica a transformação
         card.style.transform = `perspective(1000px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg) translateY(-10px)`;
      });

      // Reset ao sair do card
      card.addEventListener("mouseleave", function () {
         card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
      });
   });

   /**
    * Efeito de brilho nos cards de habilidade
    * Adiciona um efeito de luz seguindo o mouse
    */
   cardsHabilidade.forEach(function (card) {
      card.addEventListener("mousemove", function (evento) {
         const rect = card.getBoundingClientRect();
         const x = evento.clientX - rect.left;
         const y = evento.clientY - rect.top;

         // Cria gradiente radial seguindo o mouse
         card.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(100, 255, 218, 0.1) 0%,
                    transparent 50%
                ),
                var(--cor-fundo)
            `;
      });

      // Reset ao sair
      card.addEventListener("mouseleave", function () {
         card.style.background = "var(--cor-fundo)";
      });
   });

   /* ===========================================
       10. INICIALIZAÇÃO
       Código executado ao carregar a página
       =========================================== */

   // Adiciona estilo CSS para a animação de ripple via JavaScript
   const estiloRipple = document.createElement("style");
   estiloRipple.textContent = `
        @keyframes rippleAnimation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
   document.head.appendChild(estiloRipple);

   // Verifica scroll inicial (caso a página seja recarregada no meio)
   verificarScroll();
   verificarBotaoTopo();

   // Log de confirmação no console
   console.log("✅ Portfólio carregado com sucesso!");
   console.log("🚀 Desenvolvido com HTML, CSS e JavaScript puro.");
});

/* ===========================================
   FUNÇÕES UTILITÁRIAS GLOBAIS
   Funções que podem ser usadas em qualquer lugar
   =========================================== */

/**
 * Função para debounce - limita a frequência de execução de uma função
 * Útil para otimizar eventos como scroll e resize
 * @param {Function} funcao - função a ser executada
 * @param {number} atraso - tempo de atraso em milissegundos
 * @returns {Function} - função com debounce aplicado
 */
function debounce(funcao, atraso) {
   let temporizador;
   return function () {
      const contexto = this;
      const argumentos = arguments;
      clearTimeout(temporizador);
      temporizador = setTimeout(function () {
         funcao.apply(contexto, argumentos);
      }, atraso);
   };
}

/**
 * Função para throttle - garante execução em intervalos regulares
 * @param {Function} funcao - função a ser executada
 * @param {number} limite - intervalo mínimo entre execuções
 * @returns {Function} - função com throttle aplicado
 */
function throttle(funcao, limite) {
   let ultimaChamada = 0;
   return function () {
      const agora = Date.now();
      if (agora - ultimaChamada >= limite) {
         ultimaChamada = agora;
         funcao.apply(this, arguments);
      }
   };
}
