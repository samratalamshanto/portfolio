import { useReveal } from "../../hooks/useReveal.js";
import "./Contact.css";

const LINKS = [
  { label: "Email", value: "samratalam21@gmail.com", href: "mailto:samratalam21@gmail.com" },
  { label: "Phone", value: "+880 1833 183699", href: "tel:+8801833183699" },
  { label: "LinkedIn", value: "linkedin.com/in/samrat-alam", href: "https://www.linkedin.com/in/samrat-alam/" },
  { label: "GitHub", value: "github.com/samratalamshanto", href: "https://github.com/samratalamshanto" },
];

const hrefFor = (label) => LINKS.find((l) => l.label === label).href;

export default function Contact({ index }) {
  const headerRef = useReveal();
  const linksRef = useReveal();
  const ctaRef = useReveal();

  return (
    <section id="contact" className="section contact container" aria-labelledby="contact-heading">
      <header className="section__header reveal" ref={headerRef}>
        <span className="section__index">{index}</span>
        <h2 id="contact-heading" className="section__title">
          Get in touch
        </h2>
        <p className="contact__lede">
          I work on payment systems, distributed reliability, and the
          integration layer that connects them. Email is the best way to reach
          me.
        </p>
      </header>

      <ul className="contact__links reveal" role="list" ref={linksRef}>
        {LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span>{l.label}</span>
              <strong>{l.value}</strong>
              <span className="contact__arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="contact__cta reveal" ref={ctaRef}>
        <p className="contact__cta-title">Interested in working together?</p>
        <div className="contact__cta-actions">
          <a className="btn btn--primary" href={hrefFor("Email")}>
            Email me
          </a>
          <a
            className="btn btn--ghost"
            href={hrefFor("LinkedIn")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a
            className="btn btn--ghost"
            href={hrefFor("GitHub")}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
