import React from "react";
import "../styles/ClientSection.css";

const Client = () => {
  const testimonials = [
    {
      name: "Holly",
      description: "is a senior executive who got over 10 job interviews and an offer she accepted",
    },
    {
      name: "Holly",
      description: "is a senior executive who got over 10 job interviews and an offer she accepted",
    },
    {
      name: "Holly",
      description: "is a senior executive who got over 10 job interviews and an offer she accepted",
    },
  ];

  return (
    <div className="client-container">
      <h2 className="client-heading">What our clients have to say</h2>
      <div className="client-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="client-card">
            <div className="client-card-top">
              <div className="play-icon">▶</div>
            </div>
            <div className="client-card-bottom">
              <p>
                <span className="bold">{testimonial.name}</span> {testimonial.description}
              </p>
              <div className="arrow-icon">↗</div>
            </div>
          </div>
        ))}
      </div>
      <div className="client-buttons">
        <button className="btn-outline">More customer testimonials ↗</button>
        <button className="btn-primary">Get Started →</button>
      </div>
    </div>
  );
};

export default Client;
