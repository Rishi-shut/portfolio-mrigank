export interface SkillGroup {
  index: string;
  title: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    index: '01 FRONTEND',
    title: 'Frontend & Animation',
    tags: ['Next.js', 'React.js', 'Three.js', 'React Three Fiber', 'Framer Motion', 'GSAP', 'HTML/CSS'],
  },
  {
    index: '02 BACKEND',
    title: 'Backend & Cloud',
    tags: ['Node.js', 'Express', 'PostgreSQL (Neon)', 'Prisma ORM', 'Firebase'],
  },
  {
    index: '03 LANGUAGES',
    title: 'Languages',
    tags: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'],
  },
  {
    index: '04 DESIGN',
    title: 'Design & Tools',
    tags: ['Figma', 'Canva', 'UI/UX Prototyping', 'Git/GitHub', 'Postman'],
  },
];
