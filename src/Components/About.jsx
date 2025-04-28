import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Us</h2>

      <div className="profile">
        <img 
          src="src\images\ab-1.png" 
          alt="Ashwin" 
          className="profile-image"
        />
        <div className="profile-content">
          <p><strong>Ashwin</strong> is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.</p>
          <p>Ashwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.</p>
        
        </div>
      </div>

      <div className="profile">
        <img 
          src="src\images\ab-2.png" 
          alt="Nicole" 
          className="profile-image"
        />
        <div className="profile-content">
          <p><strong>Nicole</strong> is an Executive coach at Mobius specializing in resume builds and career advisory.</p>
          <p>With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.</p>
        </div>
      </div>

      <div className="about-links">
        <a href="#board" className="about-link">Learn more about our Board of Advisors ↗</a>
        <a href="#linkedin" className="about-link">Follow us on our LinkedIn page ↗</a>
      </div>
    </section>
  );
};

export default About;
