"use client";

import { useState } from "react";
import { ArrowUpRight, BookOpenCheck, Braces, ChevronLeft, ChevronRight, Cpu, Database, Gamepad2, GraduationCap, Map, Monitor, Network, ScanSearch } from "lucide-react";

const icons = { kmy: Braces, datahub: Database, quartet: Gamepad2, dragon: GraduationCap, visualizer: Network, armv8: Cpu, learning: BookOpenCheck, placefinder: ScanSearch, mario: Gamepad2, bulgasari: Gamepad2, maze: Map, pywidgets: Monitor };

export type PortfolioProject = {
  number: string;
  slug: keyof typeof icons;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  repo?: string;
  repoNote?: string;
  note?: string;
  images?: { src: string; alt: string }[];
  video?: { src: string; poster: string; label: string };
};

export function ProjectCard({ project, total }: { project: PortfolioProject; total: number }) {
  const [imageIndex, setImageIndex] = useState(0);
  const Icon = icons[project.slug];
  const images = project.images ?? [];
  const image = images[imageIndex];
  const stepImage = (direction: number) => setImageIndex((index) => (index + direction + images.length) % images.length);

  return (
    <article className={`project-card project-${project.slug}`}>
      <div className="project-art">
        {project.video ? <video controls preload="none" poster={project.video.poster} aria-label={project.video.label}><source src={project.video.src} type="video/mp4" />Your browser does not support video playback.</video> : image ? <img src={image.src} alt={image.alt} loading="lazy" /> : <Icon strokeWidth={1.05} aria-hidden="true" />}
        <span className="project-number">{project.number} / {total.toString().padStart(2, "0")}</span>
        {images.length > 1 && <div className="gallery-controls" aria-label={`${project.title} screenshots`}>
          <button type="button" onClick={() => stepImage(-1)} aria-label={`Previous ${project.title} image`}><ChevronLeft size={23} aria-hidden="true" /></button>
          <span aria-live="polite">{imageIndex + 1} / {images.length}</span>
          <button type="button" onClick={() => stepImage(1)} aria-label={`Next ${project.title} image`}><ChevronRight size={23} aria-hidden="true" /></button>
        </div>}
      </div>
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3>
        {project.note && <p className="project-note">{project.note}</p>}
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label={`${project.title} technologies and highlights`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <div className="project-actions">
          {image && <a href={image.src} target="_blank" rel="noreferrer">Open image <ArrowUpRight size={16} aria-hidden="true" /></a>}
          {project.video && <a href={project.video.src} target="_blank" rel="noreferrer">Open video <ArrowUpRight size={16} aria-hidden="true" /></a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">GitHub repo <ArrowUpRight size={16} aria-hidden="true" /></a>}
        </div>
        {!project.repo && <p className="repo-note">{project.repoNote ?? "Project repository link to be added."}</p>}
      </div>
    </article>
  );
}
