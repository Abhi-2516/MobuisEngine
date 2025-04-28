import React from 'react';
import '../styles/resume.css';

const Resume = () => {
  const resumePlans = [
    {
      title: "Resume Rebuild",
      price: "$1000",
      duration: "one time",
      features: [
        "3× 30-min coaching",
        "Focused on storytelling, not just formatting",
        "Analyst + full application team on Pacific hours",
        "Tailored to your target industry, company, or role",
        "Direct work with our co-founder (ex-Google, JP Morgan)",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience",
        "Resume Rebuild portfolio available upon request",
      ],
    },
    {
      title: "Interview Prep",
      price: "$500",
      duration: "one time",
      features: [
        "2× 45-min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles — technical & non-technical",
      ],
    },
  ];

  return (
    <div className="resume-section">
      <h2 className="resume-heading">Resume Building & Coaching</h2>
      <p className="resume-subheading">
        Let’s talk about where you’re headed — and how your resume can get you there. <br />
        <span className="schedule-call">Schedule a call to get started.</span>
      </p>

      <div className="resume-plans">
        {resumePlans.map((plan, index) => (
          <div key={index} className="resume-card">
            <h3 className="plan-title">{plan.title}</h3>
            <div className="plan-price">
              <span className="price">{plan.price}</span>
              <span className="duration"> {plan.duration}</span>
            </div>
            <hr className="divider" />
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">️✅</span> {feature}
                </li>
              ))}
            </ul>
            <button className="plan-button">Get Started →</button>
          </div>
        ))}
      </div>

      <div className="contact-card">
        <div className="contact-text">
          <p className="doubt-text">STILL HAVE DOUBTS?</p>
          <h3 className="contact-heading">Contact us</h3>
        </div>
        <button className="contact-button">➔</button>
      </div>
    </div>
  );
};

export default Resume;
