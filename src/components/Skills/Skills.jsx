import { useReveal } from "../../hooks/useReveal.js";
import { SKILL_GROUPS } from "./skillsData.js";
import "./Skills.css";

function SkillCard({ group }) {
  const ref = useReveal();
  return (
    <article
      className={`skill-card reveal ${group.wide ? "skill-card--wide" : ""}`}
      ref={ref}
    >
      <h3>{group.title}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Skills() {
  const headerRef = useReveal();
  return (
    <section
      id="skills"
      className="section skills container"
      aria-labelledby="skills-heading"
    >
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">03 — Stack</span>
        <h2 id="skills-heading" className="section__title">
          Tools I actually ship with.
        </h2>
      </header>

      <div className="skills__grid">
        {SKILL_GROUPS.map((g) => (
          <SkillCard key={g.title} group={g} />
        ))}
      </div>
    </section>
  );
}
