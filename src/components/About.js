import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import ajay_pic from '../assets/ajay_pic.jpeg'

const About = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.5
        }
    }
};
  const aboutVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <h2>About Me</h2>
        <motion.p variants={aboutVariants}>
          Hi!!! I am <span className="blue-text">Ajay Pokharel</span>, a driven software engineer with a knack for 
          innovation and problem-solving.  Having navigated through the seas of tech with internships at Apple 
          and whirlwind startups, I've learned the art crafting elegant code and turning concepts into captivating realities using
          a diverse toolkit of technologies and programming languages.
          <br/> <br/>
          Let's build the future together, one line of code at a time.
        </motion.p>
        <motion.img 
          src={ajay_pic}
          alt="Ajay Pokharel"
          variants={aboutVariants}
        />
        <motion.div variants={aboutVariants} className="interests-container">
            <h3 className="interests-heading">Interests</h3>
            <motion.div className="interests-list-container">
                <motion.ul variants={listVariants} className="interests-list">
                    <motion.li variants={listVariants}><span className="blue-text">Web Dev</span></motion.li>
                    <motion.li variants={listVariants}><span className="blue-text">AI/ML & Data</span></motion.li>
                    <motion.li variants={listVariants}><span className="blue-text">App Dev</span></motion.li>
                </motion.ul>
            </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
