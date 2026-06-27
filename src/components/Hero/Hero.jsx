import { useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal.js";
import { asset } from "../../utils/asset.js";
import { yearsPlus } from "../../utils/experience.js";
import "./Hero.css";

const TITLES = [
  "Backend Engineer",
  "Distributed Systems",
  "Payment Middleware",
  "Event-Driven Architect",
];

function useTypewriter(words, { typeMs = 80, deleteMs = 50, pauseMs = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("type");

  useEffect(() => {
    let id;
    const word = words[index % words.length];

    if (phase === "type") {
      if (text.length < word.length) {
        id = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        id = setTimeout(() => setPhase("delete"), pauseMs);
      }
    } else if (phase === "delete") {
      if (text.length > 0) {
        id = setTimeout(() => setText(word.slice(0, text.length - 1)), deleteMs);
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase("type");
      }
    }

    return () => clearTimeout(id);
  }, [text, phase, index, words, typeMs, deleteMs, pauseMs]);

  return text;
}

export default function Hero() {
  const metaRef = useReveal();
  const titleRef = useReveal();
  const bodyRef = useReveal();
  const portraitRef = useReveal();
  const typed = useTypewriter(TITLES);

  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero__meta reveal" ref={metaRef}>
        <span className="kicker">
          <span className="dot" aria-hidden="true" />
          Available for senior backend roles
        </span>
        <a
          className="hero__location"
          href="https://www.google.com/maps/place/Dhaka"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Based in Dhaka, Bangladesh"
        >
          <svg
            className="hero__location-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
              fill="currentColor"
            />
          </svg>
          <span className="hero__location-text">Dhaka, Bangladesh</span>
          <span className="hero__location-flag" aria-hidden="true">🇧🇩</span>
        </a>
      </div>

      <div className="hero__main">
        <div className="hero__copy">
          <p className="hero__eyebrow">Samrat Alam</p>
          <h1 id="hero-heading" className="hero__title reveal" ref={titleRef}>
            Senior Backend Engineer building
            <br />
            resilient systems for{" "}
            <span className="hero__title-accent">FinTech &amp; Telecom</span>.
          </h1>

          <div className="hero__typer" aria-hidden="true">
            <span className="hero__typer-text">{typed}</span>
            <span className="hero__typer-caret" />
          </div>
          <span className="visually-hidden">
            Roles: Backend Engineer, distributed systems, payment middleware,
            event-driven architect.
          </span>

          <div className="hero__body reveal" ref={bodyRef}>
            <p className="hero__lede">
              {yearsPlus()} years designing distributed payment middleware,
              event-driven services, and high-throughput microservices serving
              millions of users. Java, Spring Boot, Kafka — with a strong bias
              for idempotency, observability, and clean integration boundaries.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                View projects
                <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href="#contact">
                Get in touch
              </a>
              <a
                className="btn btn--ghost btn--download"
                href={asset("/assets/Samrat_Alam_Resume.pdf")}
                download
              >
                Download CV
                <svg className="btn__icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <figure className="hero__portrait reveal" ref={portraitRef}>
          <div className="portrait-frame">
            <img
              src={asset("/assets/portrait.jpg")}
              alt="Portrait of Samrat Alam"
              width="480"
              height="600"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onError={(e) => e.currentTarget.classList.add("img--missing")}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
