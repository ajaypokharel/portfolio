import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "ML", level: 50 },
  { name: "Swift", level: 70 },
  { name: "Objective-C", level: 65 }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="skill-name">
              <span>{skill.name}</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
