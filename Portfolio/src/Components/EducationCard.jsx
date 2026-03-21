import React from 'react';
import Card from './Card.jsx';
import './CSS/EducationCard.css';

export default function EducationCard({ school, years, grade, details }) {
  return (
    <Card variant="gradient">
      <div className="education-header">
        <div>
          <h4 className="education-school">{school}</h4>
          <p className="education-grade">{grade}</p>
        </div>
        <span className="education-years">{years}</span>
      </div>
      <p className="education-details">{details}</p>
    </Card>
  );
}
