import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-icon"><FaHome /></Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-icon"><FaUser /></Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-icon"><FaCode /></Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-icon"><FaEnvelope /></Link>
            </div>
        </nav>
    );
};

export default Navbar;
