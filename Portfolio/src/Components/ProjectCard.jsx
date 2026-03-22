import React from 'react';
import Card from './Card.jsx';
import './CSS/ProjectCard.css';

export default function ProjectCard({ title, image, tech, description, github }) {
  return (
    <a href={github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Card className="project-card">
        <div className="project-image">
          {image}
        </div>
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-tech">{tech}</p>
          <p className="project-description">{description}</p>
        </div>
      </Card>
    </a>
  );
}