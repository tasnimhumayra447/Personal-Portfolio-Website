import React from 'react';
import Card from './Card.jsx';
import './CSS/ProjectCard.css';

export default function ProjectCard({ title, category, image, tech }) {
  return (
    <Card className="project-card">
      <div className="project-image">
        {image}
      </div>
      <div className="project-info">
        <div className="project-category">{category}</div>
        <h3 className="project-title">{title}</h3>
        <p className="project-tech">{tech}</p>
      </div>
    </Card>
  );
}
