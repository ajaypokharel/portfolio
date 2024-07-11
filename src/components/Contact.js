import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="social-links">
          <motion.a href="https://github.com/ajaypokharel"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size="3em" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/ajaypokharel/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size="3em" />
          </motion.a>
          <motion.a href="mailto:ajaypokharel8@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size="3em" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
