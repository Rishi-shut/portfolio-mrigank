import { BackButton } from '@/components/layout/BackButton';
import { NetworkDome } from '@/components/effects/NetworkDome';
import { TerminalContact } from '@/components/contact/TerminalContact';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata = {
  title: "Contact | Mrigank Terminal",
  description: "Say Hello and establish connection through the secure command line contact terminal.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="page contact-page">
        <BackButton position="left" />
        
        <section className="contact-heading">
          <h1 className="contact-title">
            Say <em>Hello</em>
          </h1>
          <p className="contact-subtitle">let&apos;s build something together</p>
        </section>
        
        <NetworkDome />
        
        <TerminalContact />
        
        <footer className="footer-nav">
          <span>PORTFOLIO 2026</span>
          <span className="footer-nav-center text-[rgba(255,255,255,0.4)]">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github</a>
            &nbsp;&nbsp;•&nbsp;&nbsp;
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin</a>
            &nbsp;&nbsp;•&nbsp;&nbsp;
            <a href="mailto:hello@mrigank.dev" className="hover:text-white transition-colors">email</a>
          </span>
          <span>CONTACT TERMINAL</span>
        </footer>
      </main>
    </PageTransition>
  );
}
