import { useReveal } from "../../hooks/useReveal.js";
import { PROJECTS } from "./projectsData.js";
import "./Projects.css";

function ProjectCard({ project, flip }) {
  const ref = useReveal();
  return (
    <article className={`project reveal ${flip ? "project--flip" : ""}`} ref={ref}>
      <div className="project__media">
        <img
          src={project.image}
          alt=""
          width="800"
          height="500"
          loading="lazy"
          onError={(e) => e.currentTarget.classList.add("img--missing")}
        />
      </div>
      <div className="project__body">
        <span className="project__index">{project.index}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="project__tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a
          className="project__link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const headerRef = useReveal();
  return (
    <section
      id="projects"
      className="section projects-section container"
      aria-labelledby="projects-heading"
    >
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">04 — Selected projects</span>
        <h2 id="projects-heading" className="section__title">
          A few things I've built outside of work hours.
        </h2>
      </header>

      <div className="projects">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.index} project={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
