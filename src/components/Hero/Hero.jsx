import { useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal.js";
import "./Hero.css";

const TITLES = [
  "Backend Engineer",
  "Distributed systems",
  "Payment middleware",
  "Event-driven architect",
];

function useTypewriter(words, { typeMs = 80, deleteMs = 50, pauseMs = 1400 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("type"); // type | hold | delete

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
          <span aria-hidden="true">$&nbsp;</span>status — available for senior backend roles
        </span>
        <span className="hero__location">
          <span aria-hidden="true">// </span>Dhaka, Bangladesh
        </span>
      </div>

      <div className="hero__main">
        <div className="hero__copy">
          <h1 id="hero-heading" className="hero__title reveal" ref={titleRef}>
            <span className="hero__line">Hi, I'm <em>Samrat Alam</em>.</span>
            <span className="hero__line hero__line--alt">
              I build resilient backends for
            </span>
            <span className="hero__line">FinTech &amp; Telecom.</span>
          </h1>

          <div className="hero__typer" aria-live="polite" aria-atomic="true">
            <span className="hero__typer-prompt" aria-hidden="true">&gt;_</span>
            <span className="hero__typer-text">{typed}</span>
            <span className="hero__typer-caret" aria-hidden="true">|</span>
          </div>

          <div className="hero__body reveal" ref={bodyRef}>
            <p className="hero__lede">
              4.5+ years designing distributed payment middleware, event-driven
              services, and high-throughput microservices that serve millions
              of users. Java, Spring Boot, Kafka, and a strong bias for
              idempotency, observability, and clean integration boundaries.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                See selected work <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href="mailto:samratalam21@gmail.com">
                samratalam21@gmail.com
              </a>
            </div>
          </div>
        </div>

        <figure className="hero__portrait reveal" ref={portraitRef}>
          <div className="portrait-frame">
            <img
              src="/assets/portrait.jpg"
              alt="Portrait of Samrat Alam"
              width="480"
              height="600"
              loading="eager"
              fetchPriority="high"
              onError={(e) => e.currentTarget.classList.add("img--missing")}
            />
            <span className="portrait-frame__badge" aria-hidden="true">
              <span>since</span>
              <strong>2021</strong>
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
}
