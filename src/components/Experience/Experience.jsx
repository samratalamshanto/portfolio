import { useReveal } from "../../hooks/useReveal.js";
import { asset } from "../../utils/asset.js";
import { EXPERIENCE } from "./experienceData.js";
import "./Experience.css";

// Render simple **bold** and [label](url) segments — local-only, no markdown lib.
function renderBullet(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={i}
          className="role__link"
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link[1]}
        </a>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

function Role({ role }) {
  const ref = useReveal();
  const isCurrent = /present/i.test(role.period);
  const logo = (
    <span className="role__logo" aria-hidden="true">
      <img
        src={asset(role.logo)}
        alt=""
        width="64"
        height="64"
        onError={(e) => e.currentTarget.classList.add("img--missing")}
      />
    </span>
  );
  return (
    <li className={`role reveal ${isCurrent ? "role--current" : ""}`} ref={ref}>
      <div className="role__meta">
        {role.companyUrl ? (
          <a
            href={role.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="role__logo-link"
            aria-label={`${role.company} website`}
          >
            {logo}
          </a>
        ) : (
          logo
        )}

        <span className="role__period">
          {role.period}
          {isCurrent && (
            <span className="role__now" aria-label="Currently working here">
              Now
            </span>
          )}
        </span>

        <div className="role__company">
          {role.companyUrl ? (
            <a
              href={role.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="role__company-link"
            >
              {role.company}
            </a>
          ) : (
            <span>{role.company}</span>
          )}
          <small>{role.location}</small>
        </div>
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

export default function Experience({ index }) {
  const headerRef = useReveal();
  return (
    <section
      id="experience"
      className="section experience container"
      aria-labelledby="experience-heading"
    >
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">{index}</span>
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
