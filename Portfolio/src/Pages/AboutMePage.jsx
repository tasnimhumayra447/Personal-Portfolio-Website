import React from 'react';
import { Brain, BookOpen, Code, Music, Dumbbell } from 'lucide-react';
import ActivityCard from '../Components/ActivityCard';
import './CSS/AboutMePage.css';

function AboutMePage() {
  const activities = [
    { 
      icon: Brain, 
      title: 'Studying', 
      description: 'Forever learning computer science, with a focus on AI to solve real-world problems.' 
    },
    { 
      icon: Code, 
      title: 'Coding', 
      description: 'Using C, C++, Python for problem-solving, Java for OOP, and ReactJS for web development.' 
    },
    { 
      icon: BookOpen, 
      title: 'Reading', 
      description: 'Love reading crime, mystery fiction and psychological thrillers.' 
    },
    { 
      icon: Dumbbell, 
      title: 'Sports', 
      description: `When I'm not coding or studying, you'll find me on the badminton court,
       losing gracefully and blaming everything except myself: the wind, the lighting, and sometimes the shuttle.` 
    }
  ];

  return (
    <div className="page-container section-enter">
      <h2 className="page-title gradient-text">👋 Hello!</h2>
      <p className="page-intro">
        I'm a second year Computing and Software Systems student, currently focusing on front-end development.
        I do competitive programming on the side and am passionate about learning new technologies and 
        applying them to solve real-world problems.
      </p>

      <h3 className="section-title gradient-text">What keeps me busy</h3>
      <div className="activities-grid">
        {activities.map(activity => (
          <ActivityCard key={activity.title} {...activity} />
        ))}
      </div>
    </div>
  );
}

export default AboutMePage;