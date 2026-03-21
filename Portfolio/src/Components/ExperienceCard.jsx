import React from 'react';
import Card from './Card.jsx';
import './CSS/ExperienceCard.css';

export default function ExperienceCard({ company, role, period, details }) {
  return (
    <Card variant="with-glow">
      <div className="experience-content">
        <div className="experience-header">
          <div>
            <h4 className="experience-company">{company}</h4>
            <p className="experience-role">{role}</p>
          </div>
          <span className="experience-period">{period}</span>
        </div>
        <p className="experience-details">{details}</p>
      </div>
    </Card>
  );
}
