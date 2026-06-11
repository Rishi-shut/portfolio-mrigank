import Link from 'next/link';
import { TopNav } from '@/components/layout/TopNav';
import { FooterNav } from '@/components/layout/FooterNav';
import { SpiralWireframe } from '@/components/effects/SpiralWireframe';
import { PageTransition } from '@/components/layout/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="page home-page">
        <TopNav />
        
        <section className="home-copy">
          <h1 className="home-title">
            Mrigank&apos;s<br />
            <em>Portfolio</em>
          </h1>
          <p className="home-subtitle">
            An editorial showcase of cinematic interfaces, creative animation systems, and technical backend architectures.
          </p>
          
          <div className="home-cta-list">
            <Link href="/projects" className="home-cta-btn">
              <span>&rsaquo; view_projects.exe</span>
            </Link>
            <Link href="/about" className="home-cta-btn">
              <span>&rsaquo; read_profile.md</span>
            </Link>
            <Link href="/contact" className="home-cta-btn">
              <span>&rsaquo; establish_comms.sh</span>
            </Link>
          </div>
        </section>

        <SpiralWireframe />
        
        <FooterNav 
          leftText="Mrigank • Portfolio 2026"
          rightText="ready. awaiting transmission."
        />
      </main>
    </PageTransition>
  );
}
