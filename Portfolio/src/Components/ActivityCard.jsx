import React from 'react';
import Card from './Card.jsx';
import './CSS/ActivityCard.css';

export default function ActivityCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <div className="activity-icon-wrapper">
        <Icon className="activity-icon" />
      </div>
      <h4 className="activity-title">{title}</h4>
      <p className="activity-description">{description}</p>
    </Card>
  );
}
