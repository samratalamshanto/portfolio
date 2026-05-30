import { useReveal } from "../../hooks/useReveal.js";
import { asset } from "../../utils/asset.js";
import { EDUCATION } from "./educationData.js";
import "./Education.css";

function EducationCard({ entry }) {
  const ref = useReveal();
  return (
    <article className="edu-card reveal" ref={ref}>
      <div className="edu-card__media">
        <img
          src={asset(entry.image)}
          alt=""
          width="140"
          height="140"
          loading="lazy"
          onError={(e) => e.currentTarget.classList.add("img--missing")}
        />
      </div>
      <div className="edu-card__body">
        <span className="edu-card__period">{entry.period}</span>
        <h3 className="edu-card__degree">{entry.degree}</h3>
        <p className="edu-card__institution">
          {entry.institutionUrl ? (
            <a
              className="edu-card__link"
              href={entry.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {entry.institution}
            </a>
          ) : (
            entry.institution
          )}
          <span className="edu-card__location"> · {entry.location}</span>
        </p>
        <span className="edu-card__result">{entry.result}</span>
      </div>
    </article>
  );
}

export default function Education({ index }) {
  const headerRef = useReveal();
  return (
    <section
      id="education"
      className="section education container"
      aria-labelledby="education-heading"
    >
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">{index}</span>
        <h2 id="education-heading" className="section__title">
          Education
        </h2>
      </header>

      <div className="edu-list">
        {EDUCATION.map((entry) => (
          <EducationCard key={entry.degree} entry={entry} />
        ))}
      </div>
    </section>
  );
}
