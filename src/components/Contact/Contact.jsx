import { useReveal } from "../../hooks/useReveal.js";
import { asset } from "../../utils/asset.js";
import "./Contact.css";

const RESUME_HREF = asset("/assets/Samrat_Alam_Resume.pdf");

const LINKS = [
  { label: "Email", value: "samratalam21@gmail.com", href: "mailto:samratalam21@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/samrat-alam", href: "https://www.linkedin.com/in/samrat-alam/" },
  { label: "GitHub", value: "github.com/samratalamshanto", href: "https://github.com/samratalamshanto" },
  { label: "Résumé", value: "Download PDF", href: RESUME_HREF, download: true },
];

const hrefFor = (label) => LINKS.find((l) => l.label === label)?.href ?? "#";

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
              download={l.download || undefined}
              target={!l.download && l.href.startsWith("http") ? "_blank" : undefined}
              rel={!l.download && l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span>{l.label}</span>
              <strong>{l.value}</strong>
              <span className="contact__arrow" aria-hidden="true">
                {l.download ? "↓" : "→"}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="contact__cta reveal" ref={ctaRef}>
        <p className="contact__cta-title">Interested in working together?</p>
        <div className="contact__cta-actions">
          <a className="btn btn--primary btn--send" href={hrefFor("Email")}>
            Email me
            <svg className="btn__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 12 20 4l-4 16-4-6-8-2Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m12 14 4-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a className="btn btn--ghost btn--download" href={RESUME_HREF} download>
            Download résumé
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
