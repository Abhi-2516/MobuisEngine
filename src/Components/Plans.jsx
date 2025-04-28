import React from "react";
import "../styles/Plans.css";

const Plans = () => {
  const plans = [
    {
      title: "April Promo",
      price: "$35",
      features: [
        "Curated jobs from 1M+ listings, refreshed every 48 hours",
        "Up to 20 human-applied apps/week (no bots, no fluff — your actual company sites)",
        "Need more? Add extra apps for just $1.5 each",
        "Your own dedicated application analyst",
        "Personalized with up to 10 filters & 5 job titles",
      ],
      button: "Get Started →",
    },
    {
      title: "Starter",
      price: "$50",
      tag: "Popular",
      features: [
        "All the perks of the Promo Plan, plus:",
        "Resume review & story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $1.5 each",
        "Analyst support within 6 hours (SLA/PST hours)",
      ],
      button: "Get Started →",
    },
    {
      title: "Plus",
      price: "$100",
      features: [
        "Everything in Starter, with more muscle:",
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours",
      ],
      button: "Get Started →",
    },
  ];

  const advancePlan = {
    title: "Advance",
    price: "$150",
    features: [
      "Everything in Plus",
      "Custom Resumes & Cover Letters",
      "20 fully customized applications/week",
      "Help with complex job searches",
      "Access to senior resume experts, Founder & Exec Coaches",
    ],
    button: "Get Started →",
  };

  return (
    <div className="plans-container">
      <h2 className="plans-heading">Job Application Service Plans</h2>

      <div className="plans-cards">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3 className="plan-title">{plan.title}</h3>
            {plan.tag && <span className="plan-tag">{plan.tag}</span>}
            <div className="plan-price">
              <span className="price">{plan.price}</span>
              <span className="week">/week</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✅</span> {feature}
                </li>
              ))}
            </ul>
            <button className="plan-button">{plan.button}</button>
          </div>
        ))}
      </div>


      {/* Advance Plan */}
      <div className="advance-plan">
        <div className="advance-left">
          <h3 className="advance-title">{advancePlan.title}</h3>
          <ul className="advance-features">
            {advancePlan.features.map((feature, idx) => (
              <li key={idx}>
                <span className="check-icon">️✅</span> {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="advance-right">
          <div className="plan-price white-text">
            <span className="price">{advancePlan.price}</span>
            <span className="week">/week</span>
          </div>
          <button className="plan-button white-button">{advancePlan.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
