import { ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <a className="brand" href="/" aria-label="Suho Ihn home">SI<span className="brand-spark">✳</span></a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="/#work">Projects</a>
        <a href="/journey/">Journey</a>
        <a href="/archive/">Archive</a>
        <a href="/#about">About</a>
      </nav>
      <a className="header-contact" href="mailto:ihnsuho0819@gmail.com">Contact <ArrowUpRight size={16} aria-hidden="true" /></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="brand" href="/" aria-label="Suho Ihn home">SI<span className="brand-spark">✳</span></a>
      <p>Suho Ihn · Software developer</p>
      <div>
        <a href="https://github.com/suhoihn" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/suho-ihn-34808927a/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:ihnsuho0819@gmail.com">Email</a>
      </div>
    </footer>
  );
}
