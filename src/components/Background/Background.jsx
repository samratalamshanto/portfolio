import { useReveal } from "../../hooks/useReveal.js";
import "./Background.css";

const PLATFORMS = [
  { label: "LeetCode", href: "https://leetcode.com/u/samratalam/" },
  { label: "Codeforces", href: "https://codeforces.com/profile/samratshanto" },
  { label: "CSES", href: "https://cses.fi/user/183254" },
];

export default function Background({ index }) {
  const headerRef = useReveal();
  const cardRef = useReveal();

  return (
    <section
      id="cp"
      className="section background container"
      aria-labelledby="cp-heading"
    >
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">{index}</span>
        <h2 id="cp-heading" className="section__title">
          Competitive programming
        </h2>
      </header>

      <div className="cp-card reveal" ref={cardRef}>
        <div className="cp-card__stat">
          <span className="cp-card__num">600+</span>
          <span className="cp-card__label">Problems solved across platforms</span>
        </div>
        <ul className="cp-list">
          {PLATFORMS.map((p) => (
            <li key={p.label}>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                {p.label}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
