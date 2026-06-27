import { useReveal } from "../../hooks/useReveal.js";
import { asset } from "../../utils/asset.js";
import "./Contact.css";

const RESUME_HREF = asset("/assets/Samrat_Alam_Resume.pdf");

const LINKS = [
  { label: "Email", value: "samratalam21@gmail.com", href: "mailto:samratalam21@gmail.com", icon: "email" },
  { label: "LinkedIn", value: "linkedin.com/in/samrat-alam", href: "https://www.linkedin.com/in/samrat-alam/", icon: "linkedin" },
  { label: "GitHub", value: "github.com/samratalamshanto", href: "https://github.com/samratalamshanto", icon: "github" },
  { label: "Résumé", value: "Download PDF", href: RESUME_HREF, download: true, icon: "resume" },
];

const hrefFor = (label) => LINKS.find((l) => l.label === label)?.href ?? "#";

function ContactIcon({ type }) {
  const common = {
    className: "contact__icon",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  };

  if (type === "email") {
    return (
      <svg {...common}>
        <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg {...common}>
        <path d="M6.5 10v8M6.5 6v.01M11 18v-8m0 3.5c0-2 1.2-3.5 3.3-3.5 2 0 3.2 1.3 3.2 3.8V18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg {...common}>
        <path
          d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.43.08.58-.18.58-.4v-1.5c-2.38.52-2.88-1.02-2.88-1.02-.39-.98-.95-1.24-.95-1.24-.78-.53.06-.52.06-.52.86.06 1.32.88 1.32.88.76 1.3 2 0.93 2.5.71.08-.55.3-.93.54-1.14-1.9-.22-3.9-.95-3.9-4.24 0-.94.34-1.7.88-2.3-.09-.22-.38-1.1.08-2.28 0 0 .72-.23 2.35.88a8.1 8.1 0 0 1 4.28 0c1.63-1.11 2.35-.88 2.35-.88.46 1.18.17 2.06.08 2.28.55.6.88 1.36.88 2.3 0 3.3-2 4.02-3.9 4.24.31.27.58.79.58 1.6v2.38c0 .22.15.48.59.4A8.5 8.5 0 0 0 12 3.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
              <ContactIcon type={l.icon} />
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
