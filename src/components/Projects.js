import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import talkToData from '../assets/talk_to_data.png'
import smartnotes from '../assets/smartnotes.png'
import pokh from '../assets/pokh.jpeg'
import webrtc from '../assets/webrtc.jpeg'


const projectData = [
  {
    id: 1,
    title: "Pokh Programming Language",
    description: "A new programming language with syntax inspired by Python & Go. Built using ‘nearley.js’ library",
    image: pokh,
    link: "https://github.com/ajaypokharel/pokh"
  },
  {
    id: 2,
    title: "SmartNotes",
    description: "An AI-powered lecture notes web application by fine-tuning pre-trained models such as Whisper (ASR) and BART",
    image: smartnotes,
    link: "https://github.com/ajaypokharel/ai-powered-notes"
  },
  {
    id: 3,
    title: "TalkToData",
    description: "A user-centric system for managing and analyzing large datasets without requiring database expertise through natural language",
    image: talkToData,
    link: "https://github.com/ajaypokharel/storeDB"
  },
  {
    id: 4,
    title: "Video Conference App",
    description: "A peer-to-peer full-stack video conferencing web application using the WebRTC framework in JavaScript, hosted on Firebase",
    image: webrtc,
    link: "https://capturely-vhs.web.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {projectData.map((project) => (
          <motion.div 
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
