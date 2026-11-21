import React from 'react';
import './Features.css';

const featuresData = [
  { title: '100% Organic', desc: 'Derived from natural sources', img: 'https://placehold.co/400x300' },
  { title: 'Increase Yield', desc: 'Up to 30% more production', img: 'https://placehold.co/400x300' },
  { title: 'Stress Tolerance', desc: 'Better resistance to drought & heat', img: 'https://placehold.co/400x300' }
];

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Us</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;