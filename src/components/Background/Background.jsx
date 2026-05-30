import { useReveal } from "../../hooks/useReveal.js";
import "./Background.css";

export default function Background() {
  const educationRef = useReveal();
  const cpRef = useReveal();

  return (
    <section className="section section--split container" aria-label="Background">
      <div className="split reveal" ref={educationRef}>
        <span className="section__index">06 / Education</span>
        <h2 className="section__title section__title--sm">
          Khulna University of Engineering &amp; Technology
        </h2>
        <p className="split__meta">B.Sc. in Computer Science &amp; Engineering</p>
        <p className="split__meta">2017 — 2022 · CGPA 3.43 / 4.00</p>
      </div>

      <div className="split reveal" ref={cpRef}>
        <span className="section__index">07 / Competitive programming</span>
        <h2 className="section__title section__title--sm">
          600+ problems solved
        </h2>
        <ul className="cp-list">
          <li>
            <a href="https://leetcode.com/" rel="noopener noreferrer" target="_blank">
              LeetCode
            </a>
          </li>
          <li>
            <a href="https://codeforces.com/" rel="noopener noreferrer" target="_blank">
              Codeforces
            </a>
          </li>
          <li>
            <a href="https://cses.fi/" rel="noopener noreferrer" target="_blank">
              CSES
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
