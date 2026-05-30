import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Stats from "./components/Stats/Stats.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Publications from "./components/Publications/Publications.jsx";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Order + names live in this JSON. Reorder / rename / disable a section by
// editing src/data/sections.json — App.jsx itself stays untouched.
import sections from "./data/sections.json";

// Map a sections.json `key` to its component. Add an entry here when you
// introduce a NEW section file; for ordering / labels only, edit sections.json.
const COMPONENT_BY_KEY = {
  about: About,
  experience: Experience,
  skills: Skills,
  projects: Projects,
  publications: Publications,
  education: Education,
  contact: Contact,
};

const formatIndex = (n, name) => `${String(n).padStart(2, "0")} / ${name}`;

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        {sections.map(({ key, name }, i) => {
          const Component = COMPONENT_BY_KEY[key];
          if (!Component) {
            console.warn(`[sections.json] No component registered for key "${key}"`);
            return null;
          }
          return <Component key={key} index={formatIndex(i + 1, name)} />;
        })}
      </main>
      <Footer />
    </>
  );
}
