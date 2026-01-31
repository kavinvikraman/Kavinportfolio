
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import CodingProfiles from "./CodingProfiles";
import Certifications from "./Certifications";
import Contact from "./Contact";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="coding-profiles">
        <CodingProfiles />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;