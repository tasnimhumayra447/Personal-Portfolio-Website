import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import './CSS/ProjectsPage.css';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      image: '💼',
      tech: 'React, Vite, CSS',
      description: 'A responsive portfolio website with sidebar navigation and smooth page transitions.',
      github: 'https://github.com/tasnimhumayra447/Personal-Portfolio-Website'
    },
    {
      title: 'Minescaper',
      image: '💣',
      tech: 'HTML, CSS, JavaScript',
      description: 'A Minesweeper-style game with configurable grid, WASD controls, and flood-fill reveal algorithm.',
      github: 'https://github.com/tasnimhumayra447/Minescaper'
    }
  ];

  return (
    <div className="page-container section-enter">
      <h2 className="page-title gradient-text">📂 Projects</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}