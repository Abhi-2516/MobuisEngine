import React from 'react';
import '../styles/chooseus.css';

const ChooseUs = () => {
  return (
    <section className="choose-us-section">
      <h2 className="choose-us-title">Why Choose Us?</h2>

      <div className="choose-us-cards">

        <div className="choose-us-card">
          <div className="choose-us-icon">🤝</div>
          <h3 className="choose-us-card-title">Tried, Tested, Trusted</h3>
          <p className="choose-us-card-text">
            Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
          </p>
        </div>

        <div className="choose-us-card">
          <div className="choose-us-icon">👥</div>
          <h3 className="choose-us-card-title">Real People, Real Help</h3>
          <p className="choose-us-card-text">
            A hands-on team that actually cares — guiding you through every twist in your career path.
          </p>
        </div>

        <div className="choose-us-card">
          <div className="choose-us-icon">⭐</div>
          <h3 className="choose-us-card-title">Beat the Line</h3>
          <p className="choose-us-card-text">
            We search, shortlist, and apply for you, so your name shows up first — every single day.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;
