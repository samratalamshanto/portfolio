import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import "./Header.css";

const NAV = [
  { href: "#about", num: "01", label: "about" },
  { href: "#experience", num: "02", label: "experience" },
  { href: "#skills", num: "03", label: "stack" },
  { href: "#projects", num: "04", label: "projects" },
  { href: "#publications", num: "05", label: "writing" },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#" className="brand" aria-label="Samrat Alam, home">
          <span className="brand__mark" aria-hidden="true">~/</span>
          <span className="brand__name">
            samrat<span className="brand__cursor" aria-hidden="true">_</span>
          </span>
        </a>

        <nav
          className={`site-nav ${open ? "is-open" : ""}`}
          aria-label="Section navigation"
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span aria-hidden="true">{item.num}.</span> {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="site-nav__cta"
            onClick={() => setOpen(false)}
          >
            contact()
          </a>
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <svg
              className="theme-toggle__icon theme-toggle__icon--sun"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
                <line x1="4.5" y1="4.5" x2="6.5" y2="6.5" />
                <line x1="17.5" y1="17.5" x2="19.5" y2="19.5" />
                <line x1="4.5" y1="19.5" x2="6.5" y2="17.5" />
                <line x1="17.5" y1="6.5" x2="19.5" y2="4.5" />
              </g>
            </svg>
            <svg
              className="theme-toggle__icon theme-toggle__icon--moon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M20 14.5A8 8 0 0 1 9.5 4a0.5 0.5 0 0 0-.7-.5A9 9 0 1 0 20.5 15.2a0.5 0.5 0 0 0-.5-.7Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button
            type="button"
            className={`menu-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
