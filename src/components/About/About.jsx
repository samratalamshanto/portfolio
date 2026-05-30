import { useReveal } from "../../hooks/useReveal.js";
import { EXPERIENCE } from "../Experience/experienceData.js";
import "./About.css";

// Derive "Currently" from the first role that is still in progress, so this
// auto-updates whenever experienceData.js changes (e.g. job switch).
function currentRole() {
  const present = EXPERIENCE.find((r) => /present/i.test(r.period));
  const r = present ?? EXPERIENCE[0];
  return `${r.title} — ${r.company}`;
}

export default function About({ index }) {
  const FACTS = [
    { dt: "Currently", dd: currentRole() },
    { dt: "Focus", dd: "Payment middleware · Event-driven systems · Distributed reliability" },
    { dt: "Stack", dd: "Java · Spring Boot · Kafka · PostgreSQL · Redis · APISIX" },
    { dt: "Based in", dd: "Dhaka, Bangladesh — open to remote" },
  ];
  const headerRef = useReveal();
  const ledeRef = useReveal();
  const factsRef = useReveal();
  return (
    <section id="about" className="section about container" aria-labelledby="about-heading">
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">{index}</span>
        <h2 id="about-heading" className="section__title">
          About
        </h2>
      </header>

      <div className="about__grid">
        <div className="about__lede reveal" ref={ledeRef}>
          <p>
            I work on the integration-heavy backends behind payment middleware,
            telecom platforms, and event-driven workflows — systems where a
            retried request, a stale cache, or a missed outbox event becomes a
            real-money problem.
          </p>
          <p>
            My focus is hexagonal architecture, idempotent processing, and
            clean contracts between services. I treat reliability,
            observability, and recovery paths as features, not afterthoughts.
          </p>
        </div>

        <dl className="about__facts reveal" ref={factsRef}>
          {FACTS.map((f) => (
            <div key={f.dt}>
              <dt>{f.dt}</dt>
              <dd>{f.dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
