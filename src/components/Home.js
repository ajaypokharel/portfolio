import React from 'react';
import { Canvas } from '@react-three/fiber';
import SpinningTorusKnot from './RotatingBox'; // Adjust path as necessary
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SpinningTorusKnot />
            </Canvas>
            <div className="hero-content">
            <h1><span className="name">Ajay Pokharel</span></h1>
            <h2 className="subtitle">Engineer at heart ❤️</h2>
            <p className="description">Building Creative Solutions</p>
            </div>
        </section>
    );
};

export default Home;
