import React from 'react';
import './CSS/CategoryFilter.css';

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`category-button ${selected === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
