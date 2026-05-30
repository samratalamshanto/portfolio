import { useReveal } from "../../hooks/useReveal.js";
import { PUBLICATIONS } from "./publicationsData.js";
import "./Publications.css";

function Paper({ paper }) {
  const ref = useReveal();
  return (
    <li className="paper reveal" ref={ref}>
      <span className="paper__venue">{paper.venue}</span>
      <div>
        <h3 className="paper__title">{paper.title}</h3>
        <p className="paper__note">{paper.note}</p>
      </div>
    </li>
  );
}

export default function Publications() {
  const headerRef = useReveal();
  return (
    <section
      id="publications"
      className="section publications container"
      aria-labelledby="publications-heading"
    >
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">05 / Research</span>
        <h2 id="publications-heading" className="section__title">
          Publications
        </h2>
      </header>

      <ul className="papers" role="list">
        {PUBLICATIONS.map((p) => (
          <Paper key={p.title} paper={p} />
        ))}
      </ul>
    </section>
  );
}
