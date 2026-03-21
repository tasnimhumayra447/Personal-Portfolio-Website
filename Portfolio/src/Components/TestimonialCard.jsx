import React from 'react';
import Card from './Card.jsx';
import './CSS/TestimonialCard.css';

export default function TestimonialCard({ name, role, quote }) {
  return (
    <Card variant="gradient">
      <div className="testimonial-content">
        <div className="testimonial-avatar">
          {name[0]}
        </div>
        <div className="testimonial-text">
          <div className="testimonial-header">
            <h4 className="testimonial-name">{name}</h4>
            <span className="quote-mark">"</span>
          </div>
          <p className="testimonial-role">{role}</p>
          <p className="testimonial-quote">{quote}</p>
        </div>
      </div>
    </Card>
  );
}
