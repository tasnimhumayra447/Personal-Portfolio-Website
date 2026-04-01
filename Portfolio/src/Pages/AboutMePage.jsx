import React from 'react';
import { Brain, BookOpen, Code, Music, Dumbbell } from 'lucide-react';
import ActivityCard from '../Components/ActivityCard';
import './CSS/AboutMePage.css';

function AboutMePage() {
  const activities = [
    { 
      icon: Brain, 
      title: 'Studying', 
      description: `Building strong foundations in Object-Oriented Programming, Data Structures, Algorithms, 
       and full-stack development principles.`
    },
    { 
      icon: Code, 
      title: 'Coding', 
      description: `Developing applications using C, C++, Python, Java, and ReactJS, 
       with a focus on problem-solving, clean design, and scalable solutions.`
    },
    { 
      icon: BookOpen, 
      title: 'Reading', 
      description: 'Love reading crime, mystery fiction and psychological thrillers.' 
    },
    { 
      icon: Dumbbell, 
      title: 'Badminton', 
      description: `When I'm not coding or studying, you'll find me on the badminton court,
       losing gracefully and blaming everything except myself: the wind, the lighting, and sometimes the shuttle.` 
    }
  ];

  return (
    <div className="page-container section-enter">
      <h2 className="page-title gradient-text">👋 Hello!</h2>
      <p className="page-intro">
        I'm a second-year Computing and Software Systems student who enjoys tackling complex problems step by step. 
        I'm actively strengthening my skills by working through 
        challenging problems and developing practical projects. My goal is to grow into an engineer who can 
        design efficient systems and contribute meaningful solutions to real-world challenges.
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