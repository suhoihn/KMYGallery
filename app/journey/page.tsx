import { BackToTop } from "@/components/back-to-top";
import { SiteFooter, SiteHeader } from "@/components/site-header";

const milestones = [
  {
    years: "2020—2024",
    title: "BIS HCMC",
    description: "Founded Pygame and IGCSE Computer Science clubs and co-led Robotics & Coding, teaching game development and Arduino basics. Led a Blue Dragon English-learning game and built an IGCSE maths revision site with my maths teacher.",
    detail: "BIS Gauss Trophy · UKMT Gold & Best in Year · Saigon Senior Math team 1st place",
  },
  {
    years: "2024—2030 (expected)",
    title: "Imperial College London · Computer Science",
    description: "In a four-person Term 3 C project, built an AArch64 emulator and assembler, an LED-blink program for Raspberry Pi, and a multi-oscillator audio synthesiser. My work focused on branch instructions, the LED program, waveforms and filters, and getting the synth running on Pi.",
    detail: "AArch64 · C · Raspberry Pi · Audio synthesis",
  },
  {
    years: "May 2026—present",
    title: "ROKAF Data Platform Team",
    description: "Building a data hub in TypeScript, Kotlin/Spring Boot, Oracle, MinIO, and Elasticsearch. It manages versioned files through staging and approvals, then makes them discoverable with hybrid BM25 and vector search.",
    detail: "Data platform · Search · Workflow",
  },
];

export default function JourneyPage() {
  return (
    <main className="inner-page journey-page">
      <SiteHeader />
      <section className="inner-hero">
        <p className="eyebrow">Journey / Experience</p>
        <h1>The path so far.</h1>
        <p>From teaching programming and building learning tools to engineering data and search systems.</p>
      </section>
      <section className="experience-timeline" aria-label="Experience timeline">
        {milestones.map((milestone) => (
          <article key={milestone.title}>
            <p>{milestone.years}</p>
            <div><h2>{milestone.title}</h2><p className="milestone-description">{milestone.description}</p><span>{milestone.detail}</span></div>
          </article>
        ))}
      </section>
      <div className="inner-bottom-link"><a href="/">← Return to projects</a></div>
      <SiteFooter />
      <BackToTop />
    </main>
  );
}
