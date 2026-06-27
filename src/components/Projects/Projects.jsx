import { useReveal } from "../../hooks/useReveal.js";
import { asset } from "../../utils/asset.js";
import { PROJECTS, MORE_PROJECTS_URL } from "./projectsData.js";
import "./Projects.css";

function ProjectCard({ project, flip }) {
  const ref = useReveal();
  return (
    <article className={`project reveal ${flip ? "project--flip" : ""}`} ref={ref}>
      <div className="project__media">
        <img
          src={asset(project.image)}
          alt=""
          width="800"
          height="500"
          loading="lazy"
          decoding="async"
          onError={(e) => e.currentTarget.classList.add("img--missing")}
        />
      </div>
      <div className="project__body">
        <span className="project__index">{project.index} — Project</span>
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
          View on GitHub
          <span className="project__link-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Projects({ index }) {
  const headerRef = useReveal();
  const moreRef = useReveal();
  return (
    <section
      id="projects"
      className="section projects-section container"
      aria-labelledby="projects-heading"
    >
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">{index}</span>
        <h2 id="projects-heading" className="section__title">
          Selected projects
        </h2>
      </header>

      <div className="projects">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.index} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      {MORE_PROJECTS_URL && (
        <div className="projects__more reveal" ref={moreRef}>
          <span className="projects__more-rule" aria-hidden="true" />
          <a
            href={MORE_PROJECTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__more-link"
          >
            <span>More projects on GitHub</span>
            <span className="projects__more-arrow" aria-hidden="true">↗</span>
          </a>
          <span className="projects__more-rule" aria-hidden="true" />
        </div>
      )}
    </section>
  );
}
