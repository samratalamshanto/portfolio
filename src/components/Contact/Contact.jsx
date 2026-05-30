import { useReveal } from "../../hooks/useReveal.js";
import "./Contact.css";

const LINKS = [
  { label: "Email", value: "samratalam21@gmail.com", href: "mailto:samratalam21@gmail.com" },
  { label: "Phone", value: "+880 1833 183699", href: "tel:+8801833183699" },
  { label: "LinkedIn", value: "linkedin.com/in/samrat-alam", href: "https://www.linkedin.com/in/samrat-alam" },
  { label: "GitHub", value: "github.com/samratalamshanto", href: "https://github.com/samratalamshanto" },
];

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container contact__inner reveal" ref={ref}>
        <span className="section__index section__index--light">
          08 — Get in touch
        </span>
        <h2 id="contact-heading" className="contact__title">
          Have a hard backend problem?
          <span>Let's talk about it.</span>
        </h2>
        <p className="contact__lede">
          I'm most interested in payment systems, distributed reliability, and
          the messy integration work that sits between them.
        </p>

        <ul className="contact__links" role="list">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{l.label}</span>
                <strong>{l.value}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
