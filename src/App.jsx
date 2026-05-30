import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Stats from "./components/Stats/Stats.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Publications from "./components/Publications/Publications.jsx";
import Education from "./components/Education/Education.jsx";
import Background from "./components/Background/Background.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Single source of truth for the indexed section order shown in section
// eyebrows (e.g. "03 / Stack"). Reorder / add / remove here — every
// component's index updates automatically.
const SECTIONS = [
  { key: "about", Component: About, name: "About" },
  { key: "experience", Component: Experience, name: "Experience" },
  { key: "skills", Component: Skills, name: "Stack" },
  { key: "projects", Component: Projects, name: "Projects" },
  { key: "publications", Component: Publications, name: "Research" },
  { key: "education", Component: Education, name: "Education" },
  { key: "background", Component: Background, name: "Practice" },
  { key: "contact", Component: Contact, name: "Contact" },
];

const formatIndex = (n, name) => `${String(n).padStart(2, "0")} / ${name}`;

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        {SECTIONS.map(({ key, Component, name }, i) => (
          <Component key={key} index={formatIndex(i + 1, name)} />
        ))}
      </main>
      <Footer />
    </>
  );
}
