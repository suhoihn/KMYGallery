import {
  ArrowDown,
  ArrowRight,
  Braces,
  Boxes,
  Cpu,
  Gamepad2,
  Network,
  ScanSearch,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "KMY",
    label: "Programming language · 2026",
    description:
      "A programming language built in C++ with a Pratt parser, semantic analysis, closures, a bytecode VM, and an experimental native x86-64 backend.",
    facts: ["23k source lines", "VM + native backends", "HIR → SSA → MIR"],
    accent: "project-kmy",
    icon: Braces,
  },
  {
    number: "02",
    title: "Quartet 4",
    label: "Game systems · 2022—present",
    description:
      "An ambitious non-commercial Touhou × Mega Man fan game, developed as a deep study of action-platformer architecture and performance.",
    facts: ["22k Python lines", "54 modules", "Python + Cython + C++"],
    accent: "project-quartet",
    icon: Gamepad2,
    note: "Non-commercial fan project",
  },
  {
    number: "03",
    title: "KMY Visualiser",
    label: "Developer tooling · 2026",
    description:
      "A full-stack inspection workspace for the real KMY compiler: tokens, Pratt-parser events, diagnostics, modules, and expandable AST graphs.",
    facts: ["React + TypeScript", "Kotlin + Spring", "Real compiler output"],
    accent: "project-visualiser",
    icon: Network,
  },
  {
    number: "04",
    title: "R-Inbox AI",
    label: "Applied AI · 2026",
    description:
      "A natural-language place search prototype combining structured intent, dense and lexical retrieval, reciprocal-rank fusion, and evidence enrichment.",
    facts: ["Hybrid retrieval", "Gemini intent parsing", "Crawler + embeddings"],
    accent: "project-ai",
    icon: ScanSearch,
  },
  {
    number: "05",
    title: "Flat Physics",
    label: "C++ systems · 2025",
    description:
      "A compact 2D collision and response engine with custom vector math, polygon intersection, contact normals, and an SFML testbed.",
    facts: ["C++", "SFML", "SAT collision"],
    accent: "project-physics",
    icon: Cpu,
  },
];

const capabilities = [
  ["Languages & compilers", "Parsing, type systems, intermediate representations, virtual machines, and native code generation."],
  ["Game architecture", "Combat systems, bosses, weapons, map streaming, spatial indexing, tools, and performance work."],
  ["Applied intelligence", "Retrieval, recommendation, semantic enrichment, ranking, and full-stack visualisation."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="KMY home">KMY<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#practice">Practice</a>
          <a href="/archive">Archive</a>
        </nav>
        <a className="header-link" href="/archive">Programming history <ArrowRight size={15} aria-hidden="true" /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-meta reveal">
          <span>Software developer</span>
          <span>Compilers · Games · Applied AI</span>
        </div>
        <h1 className="reveal reveal-delay-1">
          I build systems
          <span className="hero-line">from the <em>language</em> up.</span>
        </h1>
        <div className="hero-footer reveal reveal-delay-2">
          <p>
            Years of experiments grew into compilers, game engines, developer
            tools, and intelligent search systems.
          </p>
          <a href="#work" className="circle-link" aria-label="See selected work"><ArrowDown size={22} /></a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring" />
          <Braces className="orbit-mark" strokeWidth={1.1} />
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected systems</p>
          <p className="section-count">05 flagship projects · 2022—26</p>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className={`project-visual ${project.accent}`}>
                  <span className="project-number">{project.number}</span>
                  <Icon className="project-icon" strokeWidth={1} aria-hidden="true" />
                  <span className="visual-label">{project.label}</span>
                </div>
                <div className="project-copy">
                  <p className="project-type">{project.label}</p>
                  <h2>{project.title}</h2>
                  {project.note && <p className="project-note">{project.note}</p>}
                  <p className="project-description">{project.description}</p>
                  <ul className="fact-list" aria-label={`${project.title} highlights`}>
                    {project.facts.map((fact) => <li key={fact}>{fact}</li>)}
                  </ul>
                  <p className="case-study-status">Case study in preparation</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="practice-section" id="practice">
        <div className="practice-intro">
          <p className="eyebrow">Engineering practice</p>
          <h2>Curiosity became a working method.</h2>
          <p>
            I tend to understand a system by rebuilding its important parts:
            the parser, the renderer, the data pipeline, or the tool that makes
            the rest observable.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-invite">
        <div>
          <p className="eyebrow">The long version</p>
          <h2>Small programs count.</h2>
        </div>
        <div>
          <p>
            The archive follows the path from 2018 Pygame sketches and homemade
            UI widgets to game engines, Arduino, Java, recommendation systems,
            C++, AI, and compiler construction.
          </p>
          <a href="/archive">Explore the programming archive <ArrowRight size={18} /></a>
        </div>
        <Boxes className="archive-mark" strokeWidth={0.8} aria-hidden="true" />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">KMY<span>.</span></a>
        <p>Building from first principles.</p>
        <a href="/archive">Archive</a>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
