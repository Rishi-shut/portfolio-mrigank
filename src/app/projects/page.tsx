import { StarField } from '@/components/effects/StarField';
import { BackButton } from '@/components/layout/BackButton';
import { ProjectCarousel } from '@/components/projects/ProjectCarousel';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata = {
  title: "Projects | Mrigank Archive",
  description: "Fanned carousel of digital captures, cinematic filters, and premium vehicle discovery interfaces.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="page projects-page">
        <StarField className="absolute inset-0 z-0 pointer-events-none" />
        
        <BackButton position="left" />
        
        <div className="project-index">MRIGANK INDEX 2026</div>
        
        <h1 className="projects-title">Projects</h1>
        
        <ProjectCarousel />
        
        <footer className="footer-nav">
          <span>PORTFOLIO 2026</span>
          <span className="text-[rgba(255,255,255,0.24)]">use hover to orbit index</span>
          <span>INDEX NODE: ACTIVE</span>
        </footer>
      </main>
    </PageTransition>
  );
}
