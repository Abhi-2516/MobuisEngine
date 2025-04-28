import React from 'react';
import '../styles/WorkSection.css';

const steps = [
  {
    number: '1',
    title: 'Submit Intake Form',
  },
  {
    number: '2',
    title: 'We do the search and curation for list of jobs',
  },
  {
    number: '3',
    title: 'You approve, we do the tedious part (applying)',
  },
  {
    number: '4',
    title: 'You get the interviews',
  },
];

const WorkSection = () => {
  return (
    <section className="work-section">
      <h2 className="work-title">How we work?</h2>
      <div className="work-steps">
        {steps.map((step) => (
          <div key={step.number} className="work-step">
            <div className="step-number">{step.number}</div>
            <div className="step-line" />
            <p className="step-title">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
