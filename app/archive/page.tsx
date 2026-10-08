import { ArrowUpRight } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { SiteFooter, SiteHeader } from "@/components/site-header";

const eras = [
  {
    years: "2018—20",
    title: "Learning by making everything",
    summary: "Small games, drawing tools, desktop metaphors, and a UI toolkit—mostly in Python, Pygame, and Tkinter.",
    groups: [
      {
        title: "Games & rendering",
        description: "Short Pygame exercises in movement, collisions, cameras, scrolling, and perspective rendering.",
        items: ["Pong", "Zombie", "Nyan Co", "Bam", "Chang in Pygame", "Mini-Com", "SUGO", "Yee", "Camera experiments", "Scrolling", "Text rotation", "Early 3D projection"],
      },
      {
        title: "Creative tools",
        description: "Pixel drawing and text-editing tools, including several rewrites as the interface grew.",
        items: ["PixelPaint", "Shape Your Ideas", "Editor", "Text Editor", "Text Editor — 1st Succession", "Text Editor — 2nd Succession"],
      },
      {
        title: "Interfaces from scratch",
        description: "Hand-built widgets, menus, faux desktop windows, directory views, and dialog patterns.",
        items: ["Py_Widget", "PyMenu", "Windows in Pygame", "Directories", "Cmd", "Computer", "Message boxes", "Treeview", "Level and title menus"],
      },
      {
        title: "Small studies",
        description: "Focused exercises in geometry, graphing, number manipulation, and visual experiments.",
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
        description: "Dated Bulgasari builds show the game evolving across maps, combat, UI, and story changes.",
        items: ["Bulgasari — February 2021", "Bulgasari — July 2021", "Bulgasari — October 2021", "Bulgasari — December 2021", "Bulgasari — March 2022", "Bulgasari — current"],
      },
      {
        title: "Game architecture",
        description: "Platformer and RPG prototypes used to test shared movement, combat, maps, and menus.",
        items: ["Real Platformer", "Board Game", "Shooting Game", "Spring Fair game", "RPG prototype", "3D Games in Python", "A New Beginning — platformer", "Super Mario Remake — fan learning project", "Moving Simulator — RPG Maker project"],
      },
      {
        title: "Studies & fan experiments",
        description: "Small fan and arcade studies for character motion, attacks, and game feel.",
        items: ["Blue Soul", "Gaster Blaster", "Hopes and Rocks", "Bounce to the Top", "Flappy Bird study"],
      },
      {
        title: "Foundations beyond games",
        description: "Java programming exercises alongside Arduino displays, input, sound, and communication sketches.",
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
        description: "The major fan-game codebase: playable stages, bosses, tools, and persistent progress.",
        items: ["54 Python modules", "Boss and enemy framework", "Player and weapon systems", "Tilemap streaming", "Stage selection", "Cutscenes and endings", "Password/save system", "Debugging and map tools"],
      },
      {
        title: "Data & coursework",
        description: "For my IB Computer Science Extended Essay, I built a movie-recommendation program and testing interface to compare algorithms with real users.",
        items: ["Recommendation Algorithm Experiment", "Content-based and SVD collaborative-filtering recommenders", "Python/Tkinter test interface", "132-participant satisfaction study", "The Ultimate IA", "CS club experiments", "Sudoku solver", "Clock-angle study", "String and number utilities"],
      },
      {
        title: "Learning platforms",
        description: "Blue Dragon teaches English through play; Self-Learning Math organizes revision questions and learner progress.",
        items: ["Blue Dragon — Unity English-learning game", "Three word and alphabet game modes", "Player profiles, levels, XP, and coins", "Reinforcement-learning difficulty adaptation", "Self-Learning Math — MERN revision platform", "Question bank and personalised recommendations", "Bookmarks, history, and administration tools"],
      },
      {
        title: "Arcade prototypes",
        description: "Pygame shooter experiments with bosses, projectiles, effects, and school-fair playtests.",
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
        title: "Flat Physics — learning port",
        description: "An unfinished translation of a C# physics tutorial into C++, using SFML for visual checks.",
        items: ["Custom Vector2", "Circle collision", "Polygon intersection", "Circle–polygon collision", "Penetration normals and response", "SFML testbed"],
      },
      {
        title: "Quartet 4 performance",
        description: "Profiling and compiled extensions were used to improve enemy updates and spatial queries.",
        items: ["Pygame-CE migration", "Cython enemy utilities", "Cython/C++ quadtree", "Compiled utility modules", "Profiling and memory investigation"],
      },
      {
        title: "Hackathon & experiments",
        description: "A Sussex inventory prototype and assorted sound, parser, rendering, and game-mechanic studies.",
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
        description: "Compiler, runtime, native backend, editor support, and inspection tools for the KMY language.",
        items: ["KMY compiler", "Bytecode VM", "Native x86-64 backend", "HIR / SSA / MIR pipeline", "Language examples and tests", "VS Code syntax extension", "KMY Compiler Visualiser"],
      },
      {
        title: "Applied AI",
        description: "Retrieval and enrichment prototypes that turn natural-language needs into ranked results.",
        items: ["AI Place Finder — natural-language place search", "Structured query intent", "Dense + lexical retrieval", "Reciprocal-rank fusion", "Crawler and enrichment pipeline", "ElixerAI document-pipeline concept"],
      },
      {
        title: "Full-stack studies",
        description: "Small APIs and interfaces used to practice cross-language web application design.",
        items: ["Kotlin/Spring quote API", "React quote interface", "React + Express test app", "Small C++ linking experiments"],
      },
      {
        title: "Recent curiosities",
        description: "Window-management and native-interface sketches that test unusual UI behaviour.",
        items: ["Weird Window", "Runaway window experiment", "Native C and Win32 interface studies"],
      },
    ],
  },
];

export const metadata = {
  title: "Programming Archive — Suho Ihn",
  description: "A chronological archive of games, tools, experiments, and systems built from 2018 onward.",
};

export default function ArchivePage() {
  return (
    <main className="archive-page">
      <SiteHeader />

      <section className="archive-hero">
        <p className="eyebrow">Programming archive · 2018—present</p>
        <h1>Every small thing<br /><em>led somewhere.</em></h1>
        <p>
          A record of changing interests, repeated attempts, and the ideas that
          eventually became larger systems. Smaller experiments are grouped by
          what they explored; the original code is not presented as finished work.
        </p>
      </section>

      <section className="archive-featured" aria-label="Archive highlights">
        <article>
          <p className="eyebrow">2026 · archived prototype</p>
          <h2>AI Place Finder</h2>
          <p>A natural-language place search prototype combining structured intent, lexical and vector retrieval, ranking, and evidence enrichment. Preserved here as an exploration of search systems rather than selected work.</p>
          <a href="https://github.com/suhoihn/route-planner" target="_blank" rel="noreferrer">GitHub repo <ArrowUpRight size={16} aria-hidden="true" /></a>
        </article>
        <article>
          <p className="eyebrow">2025 · Sussex hackathon</p>
          <h2>Grocery Manager</h2>
          <p>A React, Express, and MongoDB inventory prototype for searching items, changing quantities, and tracking expiry information. The front end builds, but the project is unfinished and needs a safely configured database to run end to end.</p>
          <a href="https://github.com/suhoihn/GroceryDemo" target="_blank" rel="noreferrer">GitHub repo <ArrowUpRight size={16} aria-hidden="true" /></a>
        </article>
        <article>
          <p className="eyebrow">2025 · learning exercise</p>
          <h2>Flat Physics</h2>
          <p>An unfinished C#-tutorial-to-C++ port exploring vector math and circle/polygon collision in an SFML testbed. Kept here as a record of the learning process, not a finished original engine.</p>
        </article>
        <article>
          <p className="eyebrow">2023—24 · IB Computer Science EE</p>
          <h2>Recommendation Algorithm Experiment</h2>
          <p>Built a Python/Tkinter movie-recommendation program and test interface for my Extended Essay. I compared content-based recommendations with SVD collaborative filtering and collected ratings and satisfaction from 132 participants. The study found no clear overall winner.</p>
        </article>
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
                  <p className="archive-group-description">{group.description}</p>
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

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
