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

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Education />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
