'use client';

interface FooterNavProps {
  leftText?: string;
  centerText?: string; // e.g. "github / linkedin / email"
  rightText?: string;
}

export function FooterNav({
  leftText = 'Mrigank Portfolio 2026',
  centerText = 'github  •  linkedin  •  email',
  rightText = 'system status: active'
}: FooterNavProps) {
  return (
    <footer className="footer-nav">
      <span>{leftText}</span>
      <span className="footer-nav-center">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github</a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin</a>
        &nbsp;&nbsp;&nbsp;
        <a href="/contact" className="hover:text-white transition-colors">email</a>
      </span>
      <span>{rightText}</span>
    </footer>
  );
}
