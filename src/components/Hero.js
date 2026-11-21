import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>BioStimulant Solutions</h1>
        <p>Enhancing crop resilience & yield naturally</p>
        <button className="cta-button">Discover Our Products</button>
      </div>
    </section>
  );
};

export default Hero;