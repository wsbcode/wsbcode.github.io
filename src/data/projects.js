import desenvolvimentoImg from "../assets/images/desenvolvimentos.png";
import pomodoroImg from "../assets/images/pomodoro.png";
import climaImg from "../assets/images/clima.png";

const projects = [
   {
      title: "🍅 Pomodoro Timer",
      desc: "Aplicação de gerenciamento de tempo baseada na técnica Pomodoro. Permite definir intervalos de trabalho e descanso, com notificações sonoras.",
      techs: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/wsbcode/pomodoro",
      demo: "https://wsbcode.github.io/pomodoro/",
      image: pomodoroImg,
   },
   {
      title: "⛅ Tempo Clima",
      desc: "Aplicação de previsão do tempo que exibe condições climáticas em tempo real com base na localização do usuário ou busca por cidades.",
      techs: ["TypeScript", "Vite", "HTML/CSS", "IA"],
      github: "https://github.com/wsbcode/tempo-clima",
      demo: "https://wsbcode.github.io/tempo-clima/",
      image: climaImg,
   },
   {
      title: "Projeto 3",
      desc: "Sistema web completo com integração de APIs externas e deploy automatizado.",
      techs: ["React", "Express", "SQL"],
      github: "https://github.com/wsbcode",
      demo: "https://example.com",
      image: desenvolvimentoImg,
   },
   {
      title: "Projeto 4",
      desc: "Ferramenta interativa desenvolvida com foco em usabilidade e design responsivo.",
      techs: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/wsbcode",
      demo: "https://example.com",
      image: desenvolvimentoImg,
   },
];

export default projects;
