import { useReveal } from "../../hooks/useReveal.js";
import { asset } from "../../utils/asset.js";
import { EXPERIENCE } from "./experienceData.js";
import "./Experience.css";

// Render simple **bold** segments — local-only, no external markdown lib.
function renderBullet(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

function Role({ role }) {
  const ref = useReveal();
  return (
    <li className="role reveal" ref={ref}>
      <div className="role__meta">
        <span className="role__period">{role.period}</span>
        <span className="role__company">
          <span className="role__logo" aria-hidden="true">
            <img
              src={asset(role.logo)}
              alt=""
              width="44"
              height="44"
              onError={(e) => e.currentTarget.classList.add("img--missing")}
            />
          </span>
          {role.company}
          <small>{role.location}</small>
        </span>
      </div>

      <div className="role__body">
        <h3 className="role__title">{role.title}</h3>
        <p className="role__summary">{role.summary}</p>
        <ul className="role__bullets">
          {role.bullets.map((b, i) => (
            <li key={i}>{renderBullet(b)}</li>
          ))}
        </ul>
        <ul className="role__tags" aria-label="Technologies used">
          {role.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Experience() {
  const headerRef = useReveal();
  return (
    <section
      id="experience"
      className="section experience container"
      aria-labelledby="experience-heading"
    >
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">02 / Experience</span>
        <h2 id="experience-heading" className="section__title">
          Experience
        </h2>
      </header>

      <ol className="timeline" role="list">
        {EXPERIENCE.map((role) => (
          <Role key={role.company} role={role} />
        ))}
      </ol>
    </section>
  );
}
