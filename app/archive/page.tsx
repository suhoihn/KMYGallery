import { ArrowLeft, ArrowUpRight } from "lucide-react";

const eras = [
  {
    years: "2018—20",
    title: "Learning by making everything",
    summary: "Small games, drawing tools, desktop metaphors, and a UI toolkit—mostly in Python, Pygame, and Tkinter.",
    groups: [
      {
        title: "Games & rendering",
        items: ["Pong", "Zombie", "Nyan Co", "Bam", "Chang in Pygame", "Mini-Com", "SUGO", "Yee", "Camera experiments", "Scrolling", "Text rotation", "Early 3D projection"],
      },
      {
        title: "Creative tools",
        items: ["PixelPaint", "Shape Your Ideas", "Editor", "Text Editor", "Text Editor — 1st Succession", "Text Editor — 2nd Succession"],
      },
      {
        title: "Interfaces from scratch",
        items: ["Py_Widget", "PyMenu", "Windows in Pygame", "Directories", "Cmd", "Computer", "Message boxes", "Login Manager", "Treeview", "Level and title menus"],
      },
      {
        title: "Small studies",
        items: ["Simple Rectangle I & II", "Circle", "Stem-and-leaf", "BoonSan", "Excelism Graphy Persecution", "3D cube experiment", "Camera and tracking studies", "Slope and ray-casting tests"],
      },
    ],
  },
  {
    years: "2021—22",
    title: "Games became systems",
    summary: "Projects expanded into reusable combat, map, camera, dialogue, menu, and content systems.",
    groups: [
      {
        title: "Long-running worlds",
        items: ["Bulgasari — February 2021", "Bulgasari — July 2021", "Bulgasari — October 2021", "Bulgasari — December 2021", "Bulgasari — March 2022", "Bulgasari — current"],
      },
      {
        title: "Game architecture",
        items: ["Real Platformer", "Board Game", "Shooting Game", "Spring Fair game", "RPG prototype", "3D Games in Python", "A New Beginning — platformer", "Super Mario Remake — fan learning project", "Moving Simulator — RPG Maker project"],
      },
      {
        title: "Studies & fan experiments",
        items: ["Blue Soul", "Gaster Blaster", "Hopes and Rocks", "Bounce to the Top", "Flappy Bird study"],
      },
      {
        title: "Foundations beyond games",
        items: ["Java fundamentals and OOP exercises", "Quiz Game", "Java GUI studies", "Arduino piano", "Arduino Pong", "TFT display experiments", "LED sketches", "Arduino master/slave communication"],
      },
    ],
  },
  {
    years: "2022—24",
    title: "One game kept growing",
    summary: "Quartet 4 began as a fan game and grew into the largest sustained game-engineering effort in the archive.",
    groups: [
      {
        title: "Quartet 4 — Remilia’s Revenge",
        items: ["54 Python modules", "Boss and enemy framework", "Player and weapon systems", "Tilemap streaming", "Stage selection", "Cutscenes and endings", "Password/save system", "Debugging and map tools"],
      },
      {
        title: "Data & coursework",
        items: ["Content-based movie recommender", "Collaborative-filtering recommender", "Recommendation study interface", "The Ultimate IA", "CS club experiments", "Sudoku solver", "Clock-angle study", "String and number utilities"],
      },
      {
        title: "Learning platforms",
        items: ["Blue Dragon — Unity English-learning game", "Three word and alphabet game modes", "Player profiles, levels, XP, and coins", "Reinforcement-learning difficulty adaptation", "Self-Learning Math — MERN revision platform", "Question bank and personalised recommendations", "Bookmarks, history, and administration tools"],
      },
      {
        title: "Arcade prototypes",
        items: ["Arcade Boss Shooter — school-era Pygame project", "Target-shooter prototype", "Boss, projectile, and effects systems"],
      },
    ],
  },
  {
    years: "2025",
    title: "Performance and lower-level work",
    summary: "The focus shifted toward collision systems, spatial structures, native extensions, and performance.",
    groups: [
      {
        title: "C++ physics",
        items: ["Custom Vector2", "Circle collision", "Polygon intersection", "Circle–polygon collision", "Penetration normals and response", "SFML testbed"],
      },
      {
        title: "Quartet 4 performance",
        items: ["Pygame-CE migration", "Cython enemy utilities", "Cython/C++ quadtree", "Compiled utility modules", "Profiling and memory investigation"],
      },
      {
        title: "Hackathon & experiments",
        items: ["Sussex Hackathon Grocery Manager", "React + Express + MongoDB inventory prototype", "Rhythm game experiments", "3D projection and tilting-platform tests", "Beep editor", "C++ math parser", "C++ rhythm-game experiment"],
      },
    ],
  },
  {
    years: "2026",
    title: "Languages, tools, and intelligent systems",
    summary: "Earlier interests converged into compiler engineering, full-stack visualisation, and retrieval systems.",
    groups: [
      {
        title: "KMY ecosystem",
        items: ["KMY compiler", "Bytecode VM", "Native x86-64 backend", "HIR / SSA / MIR pipeline", "Language examples and tests", "VS Code syntax extension", "KMY Compiler Visualiser"],
      },
      {
        title: "Applied AI",
        items: ["R-Inbox natural-language place search", "Structured query intent", "Dense + lexical retrieval", "Reciprocal-rank fusion", "Crawler and enrichment pipeline", "ElixerAI document-pipeline concept"],
      },
      {
        title: "Full-stack studies",
        items: ["Kotlin/Spring quote API", "React quote interface", "React + Express test app", "Small C++ linking experiments"],
      },
      {
        title: "Recent curiosities",
        items: ["Weird Window", "Runaway window experiment", "Native C and Win32 interface studies"],
      },
    ],
  },
];

export const metadata = {
  title: "Programming Archive — KMY",
  description: "A chronological archive of games, tools, experiments, and systems built from 2018 onward.",
};

export default function ArchivePage() {
  return (
    <main className="archive-page">
      <header className="site-header archive-header">
        <a className="brand" href="/" aria-label="KMY home">KMY<span>.</span></a>
        <a className="header-link" href="/"><ArrowLeft size={15} /> Selected work</a>
      </header>

      <section className="archive-hero">
        <p className="eyebrow">Programming archive · 2018—present</p>
        <h1>Every small thing<br /><em>led somewhere.</em></h1>
        <p>
          Not a graveyard of old code—a record of changing interests, repeated
          attempts, and the ideas that eventually became larger systems.
        </p>
      </section>

      <section className="timeline" aria-label="Programming history">
        {eras.map((era) => (
          <article className="era" key={era.years}>
            <div className="era-heading">
              <p>{era.years}</p>
              <h2>{era.title}</h2>
              <p>{era.summary}</p>
            </div>
            <div className="era-groups">
              {era.groups.map((group) => (
                <details key={group.title}>
                  <summary>
                    <span>{group.title}</span>
                    <span>{group.items.length.toString().padStart(2, "0")}</span>
                  </summary>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </details>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="archive-closing">
        <p className="eyebrow">Still in progress</p>
        <h2>The archive ends here.<br />The work doesn&apos;t.</h2>
        <a href="/">Return to selected work <ArrowUpRight size={18} /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="/">KMY<span>.</span></a>
        <p>A record of learning in public.</p>
        <a href="/">Selected work</a>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
