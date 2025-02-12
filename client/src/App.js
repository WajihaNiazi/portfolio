import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Element } from 'react-scroll';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="certifications">
        <Certifications />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
