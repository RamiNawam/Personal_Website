export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Python Mini Games Collection',
    description: 'A collection of classic games implemented in Python, including Snake, Pong, and other interactive games. Demonstrates strong programming fundamentals and game development concepts.',
    technologies: ['Python', 'Pygame', 'Object-Oriented Programming'],
    image: 'https://via.placeholder.com/600x400?text=Python+Games',
    link: '#',
    github: 'https://github.com/RamiNawam/Python_Mini_Games',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and TypeScript. Features dark mode, smooth animations, and a clean design to showcase projects and skills.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
    link: '#',
    github: 'https://github.com/RamiNawam/Personal_Website',
  },
  {
    id: 3,
    title: 'Snake Game',
    description: 'A classic Snake game implementation with modern features. The game includes score tracking, increasing difficulty, and smooth controls.',
    technologies: ['Python', 'Pygame', 'Game Development'],
    image: 'https://via.placeholder.com/600x400?text=Snake+Game',
    link: '#',
    github: 'https://github.com/RamiNawam/Python_Mini_Games',
  }
];

export default projects; 