import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, CircuitBoard, Gamepad2, GitBranch, Mail, Palette } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { CodeBurst } from "@/components/code-burst";
import { ProjectCard, type PortfolioProject } from "@/components/project-card";
import { SiteFooter, SiteHeader } from "@/components/site-header";

const projects: PortfolioProject[] = [
  {
    number: "01", slug: "kmy", title: "KMY Compiler", category: "Language engineering", year: "2026—present",
    description: "A programming language built in C++ with parsing, semantic analysis, closures, a bytecode VM, and an experimental x86-64 native backend.",
    tags: ["C++", "Bytecode VM", "SSA / MIR", "x86-64"], repo: "https://github.com/suhoihn/KMYCompiler",
  },
  {
    number: "02", slug: "datahub", title: "ROKAF Datahub", category: "Data platform", year: "2026—present",
    description: "Data hub and approval/rejection pipeline for files entering an internal LLM, with hybrid BM25 and vector search. I designed logical-path manifests mapped to MinIO object metadata and delta-replayed history; built asynchronous processing, probing, and infinite scrolling; and handled an Oracle/MySQL migration job and internal deployment with k9s.",
    tags: ["TypeScript", "Kotlin / Spring Boot", "Oracle / MySQL", "MinIO + Elasticsearch"], note: "Internal ROKAF project", repoNote: "Repository not publicly available.",
  },
  {
    number: "03", slug: "quartet", title: "Quartet 4", category: "Game systems", year: "2022—present",
    description: "A long-running Touhou × Mega Man action-platformer fan project with bosses, weapons, maps, tools, and performance work.",
    tags: ["Python", "Pygame", "Cython + C++"], images: [
      { src: "/quartet-final-battle.png", alt: "Quartet 4 boss arena gameplay" },
      { src: "/quartet-youmu.png", alt: "Quartet 4 gameplay battle against Youmu" },
      { src: "/quartet-weapon.png", alt: "Quartet 4 Reimu weapon artwork" },
    ], note: "Non-commercial fan project", repo: "https://github.com/suhoihn/TouhouMM",
  },
  {
    number: "04", slug: "dragon", title: "Blue Dragon", category: "Learning game", year: "2023—24",
    description: "Led a Unity English-learning game for Vietnam’s Blue Dragon Children’s Foundation, with multiple modes, player progression, and Q-table reinforcement learning that adapts gameplay.",
    tags: ["Unity", "C#", "Q-table RL"], repo: "https://github.com/suhoihn/Blue_Dragon_Game", images: [
      { src: "/blue-dragon-home.png", alt: "Blue Dragon player menu and game start screen" },
      { src: "/blue-dragon-play.png", alt: "Blue Dragon spelling gameplay" },
      { src: "/blue-dragon-word.png", alt: "Blue Dragon word challenge gameplay" },
    ],
  },
  {
    number: "05", slug: "visualizer", title: "KMY Visualiser", category: "Developer tooling", year: "2026—present",
    description: "An inspection workspace for compiler tokens, parser events, diagnostics, modules, and expandable syntax graphs.",
    tags: ["React", "TypeScript", "Kotlin + Spring"], repo: "https://github.com/suhoihn/KMYCVisualiser", images: [
      { src: "/kmy-visualiser-ast.png", alt: "KMY Visualiser showing a real abstract syntax tree graph for a sample program" },
      { src: "/kmy-visualiser.png", alt: "KMY Visualiser showing lexer tokens from a real analysis run" },
    ],
  },
  {
    number: "06", slug: "armv8", title: "ARMv8 Emulator & Audio Synthesiser", category: "Systems & audio", year: "2025",
    description: "A four-person Imperial C project spanning an AArch64 emulator and assembler, a Raspberry Pi LED program, and a three-oscillator audio synthesiser. My work covered branch instructions, the LED program, waveform and filter code, and getting the synth running on Pi.",
    tags: ["C", "AArch64", "Raspberry Pi", "Audio synthesis"], note: "Term 3 team project", repoNote: "The coursework repository is private.",
  },
  {
    number: "07", slug: "learning", title: "Self-Learning Math", category: "Learning platform", year: "2023—24",
    description: "A full-stack mathematics revision site with a question bank, recommendations, accounts, bookmarks, answer history, and content administration.",
    tags: ["React", "Express", "MongoDB"], repo: "https://github.com/suhoihn/self_learning_web", images: [
      { src: "/math-filters.png", alt: "Math revision site question filters" },
      { src: "/math-problem.png", alt: "Math revision site problem viewer" },
      { src: "/math-admin.png", alt: "Math revision site question administration" },
    ],
  },
  {
    number: "08", slug: "mario", title: "Mario in Python", category: "Game engineering", year: "2019—present",
    description: "An ambitious Pygame platformer begun in December 2019, with custom levels, enemies, power-ups, collisions, slopes, pipes, and a growing collection of game systems.",
    tags: ["Python", "Pygame", "Platformer systems"], repo: "https://github.com/suhoihn/Mario-Python", note: "Non-commercial fan project",
    video: { src: "/mario-demo.mp4", poster: "/mario-poster.jpg", label: "Mario in Python gameplay recording" },
  },
  {
    number: "09", slug: "pywidgets", title: "PyWidgets", category: "Interface toolkit", year: "2019",
    description: "A Pygame widget toolkit built from scratch, with windows, menus, tabs, buttons, lists, text inputs, and scrollbars. The screenshots show its original demo and two applications built with it.",
    tags: ["Python", "Pygame", "Custom UI"], images: [
      { src: "/pywidgets-example.png", alt: "Original PyWidgets Example.py showing menus, tabs, inputs, lists, and a table" },
      { src: "/pywidgets-apps.png", alt: "PyDos console and text editor applications built with PyWidgets" },
    ],
  },
  {
    number: "10", slug: "bulgasari", title: "Bulgasari", category: "Original game", year: "2021—22",
    description: "A sprawling Pygame action-adventure with connected areas, combat, weapons, NPCs, shops, cutscenes, and save systems, developed through many iterations.",
    tags: ["Python", "Pygame", "Game systems"], images: [
      { src: "/bulgasari-title.png", alt: "Original Bulgasari title screen with character art and game menu" },
      { src: "/bulgasari.png", alt: "Original Bulgasari gameplay showing the player, town, and HUD" },
    ],
  },
  {
    number: "11", slug: "maze", title: "Amazing Maze + Login Manager", category: "Game & account prototype", year: "2018—2020",
    description: "A Pygame maze game with a level selector and custom-stage editor, paired with a Tkinter account manager for registration, login, security questions, and recovery.",
    tags: ["Python", "Pygame", "Tkinter", "Level editor"], note: "Historical account-flow prototype — not a production authentication system", images: [
      { src: "/amazing-maze.png", alt: "Original Amazing Maze title screen with Start and Editor options" },
      { src: "/amazing-maze-gameplay.png", alt: "Amazing Maze gameplay in a level with walls and enemies" },
      { src: "/amazing-maze-editor.png", alt: "Amazing Maze level editor with an enemy configuration dialog" },
      { src: "/amazing-maze-level-select.png", alt: "Amazing Maze custom level selection window" },
      { src: "/amazing-maze-settings.png", alt: "Amazing Maze new-level settings window" },
      { src: "/login-manager.png", alt: "Original Login Manager sign-in window linked to Amazing Maze" },
      { src: "/login-manager-new-account.png", alt: "Original Login Manager new-account form with security question options" },
    ],
  },
];

const interests = [
  { title: "Games & design", copy: "Action games, platformer systems, bosses, and the mechanics behind them.", icon: Gamepad2 },
  { title: "Visual making", copy: "Pixel-art utilities, drawing tools, and interfaces that make ideas visible.", icon: Palette },
  { title: "Hardware experiments", copy: "Arduino displays, LEDs, communication sketches, and physical prototypes.", icon: CircuitBoard },
];

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Software developer · Compilers / games / applied AI</p>
          <h1 id="hero-title">Suho Ihn<span className="name-period">.</span></h1>
          <p className="hero-lead">Ideas become systems.</p>
          <p className="hero-description">I build programming languages, games, learning tools, and experiments that help me understand how software works.</p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">Explore projects <ArrowDown size={17} aria-hidden="true" /></a>
            <a className="text-link" href="/journey/">My journey <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <CodeBurst />
        <div className="hero-bottom"><span>From first sketch to working system</span><span>Scroll to explore ↓</span></div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-top"><div><p className="eyebrow">Selected work / 2018—26</p><h2 id="work-title">Projects worth opening.</h2></div><p>Explore the original repositories where available. Real project screenshots appear where I have them; interactive demos will be added only when the original projects are ready to run here.</p></div>
        <div className="project-list">{projects.map((project) => <ProjectCard key={project.slug} project={project} total={projects.length} />)}</div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">About me</p><h2 id="about-title">I learn by building the part I want to understand.</h2></div>
        <div className="about-copy"><p>I&apos;m Suho Ihn. My work grew from small Pygame experiments into compilers, game systems, full-stack tools, and adaptive learning software.</p><p>I enjoy digging into the internals: parsers, runtimes, simulation, retrieval, and the tools that make complex systems easier to inspect.</p><a className="inline-link" href="/journey/">See my journey <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </section>

      <section className="interests-section" aria-labelledby="interests-title">
        <div className="section-top"><div><p className="eyebrow">Interests</p><h2 id="interests-title">Beyond the project list.</h2></div><p>These themes recur in my projects and experiments. I&apos;ll keep adding more personal detail over time.</p></div>
        <div className="interest-grid">{interests.map((interest) => { const Icon = interest.icon; return <article key={interest.title}><Icon size={28} strokeWidth={1.3} aria-hidden="true" /><h3>{interest.title}</h3><p>{interest.copy}</p></article>; })}</div>
      </section>

      <section className="journey-invite"><div><p className="eyebrow">The longer path</p><h2>Small programs count.</h2></div><p>The archive follows the experiments that came before the flagship projects. The journey page holds experience and education milestones.</p><div><a href="/archive/">Programming archive <ArrowUpRight size={17} aria-hidden="true" /></a><a href="/journey/">Journey & experience <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

      <section className="connect-section" id="connect" aria-labelledby="connect-title">
        <div><p className="eyebrow">Connect</p><h2 id="connect-title">Let&apos;s talk about what&apos;s next.</h2><p>For opportunities, collaborations, or a question about a project, reach me directly.</p></div>
        <div className="connect-list">
          <a href="mailto:ihnsuho0819@gmail.com"><Mail size={20} aria-hidden="true" /><span><strong>Email</strong><small>ihnsuho0819@gmail.com</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/suho-ihn-34808927a/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={20} aria-hidden="true" /><span><strong>LinkedIn</strong><small>Suho Ihn</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href="https://github.com/suhoihn" target="_blank" rel="noreferrer"><GitBranch size={20} aria-hidden="true" /><span><strong>GitHub</strong><small>github.com/suhoihn</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>
      <SiteFooter />
      <BackToTop />
    </main>
  );
}
