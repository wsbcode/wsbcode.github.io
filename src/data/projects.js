import desenvolvimentoImg from "../assets/images/desenvolvimentos.png";
import pomodoroImg from "../assets/images/pomodoro.png";

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
      title: "Projeto 2",
      desc: "Aplicação full stack com foco em performance e experiência do usuário. Inclui autenticação e dashboard.",
      techs: ["TypeScript", "Next.js", "PostgreSQL"],
      github: "https://github.com/wsbcode",
      demo: "https://example.com",
      image: desenvolvimentoImg,
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
