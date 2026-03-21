import React, { useState } from 'react';
import CategoryFilter from '../Components/CategoryFilter';
import ProjectCard from '../Components/ProjectCard';
import './CSS/ProjectsPage.css';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web development', 'Machine Learning', 'Cool Tech'];
  
  const Portfolio = [
    { title: 'Elevate Platform', category: 'Web development', image: '🎨', tech: 'React, Node.js' },
    { title: 'Wine Classifier', category: 'Machine Learning', image: '🍷', tech: 'Python, scikit-learn' },
    { title: 'Gesture Recognition', category: 'Machine Learning', image: '👋', tech: 'TensorFlow, OpenCV' },
    { title: 'Portfolio Website', category: 'Web development', image: '💼', tech: 'React, Tailwind' },
    { title: 'MealBot Assistant', category: 'Cool Tech', image: '🤖', tech: 'NLP, Python' },
  ];

  const filteredPortfolio = selectedCategory === 'All' 
    ? Portfolio 
    : Portfolio.filter(p => p.category === selectedCategory);

  return (
    <div className="page-container section-enter">
      <h2 className="page-title gradient-text">📂 Projects</h2>
      
      <CategoryFilter 
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="Portfolio-grid">
        {filteredPortfolio.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
