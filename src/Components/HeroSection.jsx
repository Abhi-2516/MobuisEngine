import React from 'react';
import '../styles/Herosection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Land job interviews <span>10x </span>faster
        </h1>
        <p className="hero-subtitle">
          Custom-built resumes that match your goals, keywords, and recruiter expectations.
        </p>
        <button className="hero-button">Get Started →</button>
      </div>

      <div className="hero-image">
        <div className="ebook-container">
          <img src="src/images/hero.png" alt="E-Book" className="ebook-image" />

          <div className="icon-container">
            <img src="src/images/circle.png" alt="Circle" className="circle" />
            <img src="src/images/book.png" alt="Book Icon" className="book-icon" />
          </div>
        </div>
        <div className="download-text">Download Free E-Book</div>
      </div>
    </section>
  );
};

export default HeroSection;
