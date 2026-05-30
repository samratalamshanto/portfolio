import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useActiveSection } from "../../hooks/useActiveSection.js";
import { asset } from "../../utils/asset.js";
import sections from "../../data/sections.json";
import "./Header.css";

const GITHUB_URL = "https://github.com/samratalamshanto";
const RESUME_PATH = "/assets/Samrat_Alam_Resume.pdf";

// Build the nav from the same source of truth used in App.jsx. Contact is
// rendered as the trailing CTA, so it's filtered out of the regular nav.
const NAV = sections
  .filter((s) => s.key !== "contact")
  .map((s, i) => ({
    href: `#${s.key}`,
    id: s.key,
    num: String(i + 1).padStart(2, "0"),
    label: s.name,
  }));

const SECTION_IDS = sections.map((s) => s.key);

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#" className="brand" aria-label="Samrat Alam, home">
          <span className="brand__mark" aria-hidden="true">SA</span>
          <span className="brand__name">Samrat Alam</span>
        </a>

        <nav
          className={`site-nav ${open ? "is-open" : ""}`}
          aria-label="Section navigation"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={active === item.id ? "page" : undefined}
            >
              <span aria-hidden="true">{item.num}</span>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="site-nav__cta"
            onClick={() => setOpen(false)}
            aria-current={active === "contact" ? "page" : undefined}
          >
            Contact
          </a>
        </nav>

        <div className="site-header__actions">
          <a
            className="header-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
              <path
                fill="currentColor"
                d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"
              />
            </svg>
          </a>
          <a
            className="header-link header-link--cv"
            href={asset(RESUME_PATH)}
            download
            aria-label="Download résumé (PDF)"
            title="Download résumé"
          >
            <span>CV</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
              />
            </svg>
          </a>
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
