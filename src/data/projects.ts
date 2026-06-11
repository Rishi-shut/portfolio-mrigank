export interface Project {
  id: string;
  title: string;
  short: string;
  image: string;
  doodle: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Photobooth App',
    short: 'An interactive digital capture experience with cinematic filters...',
    image: '/assets/projects/project-01-photobooth.png',
    doodle: 'star',
  },
  {
    id: '02',
    title: 'Inner Voice App',
    short: 'A calming mental wellness workspace...',
    image: '/assets/projects/project-02-inner-voice.png',
    doodle: 'heart',
  },
  {
    id: '03',
    title: 'Automotive Index',
    short: 'A premium vehicle discovery interface...',
    image: '/assets/projects/project-03-automotive.png',
    doodle: 'flower',
  },
  {
    id: '04',
    title: 'Code Archive',
    short: 'A code-driven collection of experimental interfaces...',
    image: '/assets/projects/project-04-code.png',
    doodle: 'star',
  },
  {
    id: '05',
    title: 'Bloom System',
    short: 'A monochrome editorial system for botanical layouts...',
    image: '/assets/projects/project-05-bloom.png',
    doodle: 'flower',
  },
  {
    id: '06',
    title: 'Timeless Snow Globe',
    short: 'An immersive 3D winter memory capsule...',
    image: '/assets/projects/project-06-snow.png',
    doodle: 'heart',
  },
];
