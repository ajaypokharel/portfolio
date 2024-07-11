import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './GlobalStyle.css';
function App() {
  return (
      <div className="App">
        <div className="navbar" id="navbar">
          <Navbar />
        </div>
          <div className="section" id="home">
              <Home />
          </div>
          <div className="section" id="about">
              <About />
          </div>
          <div className="section" id="projects">
            <Projects />
          </div>
          <div className="section" id="skills">
              <Skills />
          </div>
          <div className="section" id="contact">
            <Contact />
          </div>
      </div>
  );
}

export default App;