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
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with payment processing, user authentication, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    image: 'https://via.placeholder.com/600x400?text=E-Commerce+Project',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management application with drag-and-drop functionality, user collaboration, and real-time updates.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current and forecast data using a third-party API with location services.',
    technologies: ['JavaScript', 'CSS', 'REST API', 'Geolocation'],
    image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Personal Blog',
    description: 'A content management system for a personal blog with categories, tags, and search functionality.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Markdown'],
    image: 'https://via.placeholder.com/600x400?text=Blog+Platform',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Recipe App',
    description: 'A mobile-first recipe application with search, filtering, and user-generated content capabilities.',
    technologies: ['React Native', 'GraphQL', 'Node.js'],
    image: 'https://via.placeholder.com/600x400?text=Recipe+App',
    link: '#',
    github: '#',
  },
];

export default projects; 