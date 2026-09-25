import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiOpenai,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skills = {
  Frontend: [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
  ],
  Backend: [
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  ],
  Ferramentas: [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
    { name: 'IA', icon: SiOpenai, color: '#412991' },
  ],
}

export default skills
