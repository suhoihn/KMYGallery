import {
  ArrowDown,
  ArrowRight,
  Braces,
  Boxes,
  BookOpenCheck,
  CircuitBoard,
  Cpu,
  FileText,
  Gamepad2,
  GitBranch,
  GraduationCap,
  Mail,
  Network,
  Palette,
  ScanSearch,
  ShoppingBasket,
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
    title: "Blue Dragon",
    label: "Adaptive learning game · 2023—24",
    description:
      "A Unity English-learning game with three play modes, persistent player profiles, progression, and a reinforcement-learning system that adapts gameplay parameters.",
    facts: ["Unity + C#", "3 learning modes", "RL-based adaptation"],
    accent: "project-dragon",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "KMY Visualiser",
    label: "Developer tooling · 2026",
    description:
      "A full-stack inspection workspace for the real KMY compiler: tokens, Pratt-parser events, diagnostics, modules, and expandable AST graphs.",
    facts: ["React + TypeScript", "Kotlin + Spring", "Real compiler output"],
    accent: "project-visualiser",
    icon: Network,
  },
  {
    number: "05",
    title: "Self-Learning Math",
    label: "Full-stack learning platform · 2023—24",
    description:
      "A MERN mathematics revision platform with a searchable question bank, accounts, recommendations, bookmarks, answer history, and administrative content tools.",
    facts: ["React + Redux Saga", "Express + MongoDB", "Personalised practice"],
    accent: "project-learning",
    icon: BookOpenCheck,
    href: "https://github.com/suhoihn/self_learning_web",
  },
  {
    number: "06",
    title: "R-Inbox AI",
    label: "Applied AI · 2026",
    description:
      "A natural-language place search prototype combining structured intent, dense and lexical retrieval, reciprocal-rank fusion, and evidence enrichment.",
    facts: ["Hybrid retrieval", "Gemini intent parsing", "Crawler + embeddings"],
    accent: "project-ai",
    icon: ScanSearch,
  },
  {
    number: "07",
    title: "Grocery Manager",
    label: "Sussex hackathon · 2025",
    description:
      "A full-stack grocery inventory prototype built for a 2025 University of Sussex hackathon, supporting search, stock updates, quantities, and expiry information.",
    facts: ["React + Ant Design", "Express + MongoDB", "Hackathon prototype"],
    accent: "project-grocery",
    icon: ShoppingBasket,
  },
  {
    number: "08",
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

const currentFocus = [
  ["KMY language", "Extending the compiler, its intermediate representations, and native backend."],
  ["Quartet 4", "Improving performance and architecture across a long-running action-game codebase."],
  ["Project archaeology", "Turning years of experiments into clear case studies without erasing the learning process."],
];

const interests = [
  {
    title: "Games & game design",
    copy: "Action games, platformer systems, boss design, and understanding how familiar mechanics work underneath.",
    icon: Gamepad2,
  },
  {
    title: "Visual making",
    copy: "Pixel-art utilities, drawing tools, interface experiments, and making technical ideas easier to see.",
    icon: Palette,
  },
  {
    title: "Hardware tinkering",
    copy: "Arduino displays, LEDs, small communication experiments, and playful physical-computing prototypes.",
    icon: CircuitBoard,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="KMY home">KMY<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#connect">Connect</a>
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
          <p className="section-count">08 selected projects · 2022—26</p>
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
                  {project.href ? (
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      View repository <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="case-study-status">Case study in preparation</p>
                  )}
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

      <section className="about-section" id="about">
        <div className="about-heading">
          <p className="eyebrow">About</p>
          <h2>I learn a system by trying to build it.</h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m a software developer whose work grew from small Pygame
            experiments into compilers, game systems, full-stack tools, and
            adaptive learning software.
          </p>
          <p>
            I&apos;m most interested in projects where the internals matter:
            parsers, runtimes, rendering, simulation, retrieval, and the tools
            that make complicated systems understandable.
          </p>
          <p className="stub-note">Education, location, and a personal introduction can be added here.</p>
        </div>
      </section>

      <section className="focus-section" aria-labelledby="focus-title">
        <div className="section-heading">
          <p className="eyebrow" id="focus-title">Current focus</p>
          <p className="section-count">What I&apos;m exploring now</p>
        </div>
        <div className="focus-grid">
          {currentFocus.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interests-section">
        <div className="interests-intro">
          <p className="eyebrow">Beyond the project list</p>
          <h2>Things I keep returning to.</h2>
          <p>
            These are inferred from the work in the archive. Replace or expand
            them with the hobbies you want people to know you for.
          </p>
        </div>
        <div className="interest-grid">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <article key={interest.title}>
                <Icon size={28} strokeWidth={1.3} aria-hidden="true" />
                <h3>{interest.title}</h3>
                <p>{interest.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="connect-section" id="connect">
        <div>
          <p className="eyebrow">Elsewhere</p>
          <h2>Code, contact,<br />and the next thing.</h2>
        </div>
        <div className="connect-list">
          <a href="https://github.com/suhoihn" target="_blank" rel="noreferrer">
            <GitBranch size={21} aria-hidden="true" />
            <span><strong>GitHub</strong><small>github.com/suhoihn</small></span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <div className="connect-placeholder">
            <FileText size={21} aria-hidden="true" />
            <span><strong>Curriculum vitae</strong><small>Add CV or résumé PDF</small></span>
            <em>Coming soon</em>
          </div>
          <div className="connect-placeholder">
            <Mail size={21} aria-hidden="true" />
            <span><strong>Contact</strong><small>Add a public email and LinkedIn</small></span>
            <em>Stub</em>
          </div>
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
            UI widgets to fan games, Arduino, adaptive learning, hackathon work,
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
