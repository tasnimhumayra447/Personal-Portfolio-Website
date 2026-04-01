import React from 'react';
import ExperienceCard from '../Components/ExperienceCard';
import EducationCard from '../Components/EducationCard';
import './CSS/CV.css';

export default function CVPage() {
  const experiences = [
    { 
      company: 'Women in Tech (WIT) UniMelb', 
      role: 'IT Officer', 
      period: 'Mar 2025 - Present', 
      details: 'Creating and maintaining WIT website, ensuring accurate content and reliable operation for 500+ members.' 
    },
    { 
      company: 'Self-Employed', 
      role: 'Private Tutor', 
      period: 'Nov 2025 - Mar 2026', 
      details: 'Taught Math, Physics and Chemistry to a Year 9 student' 
    },
    { 
      company: 'Ace Academy', 
      role: 'Math Tutor', 
      period: 'Sep 2022 - Apr 2023', 
      details: 'Taught Math to two Year 9 students and prepared weekly lesson plans' 
    },
  ];

  const awards = (
    <>
    Awards:<br />
      • Outstanding Pearson Learner Award - Highest Mark in the World, AS (Year 11) Math <br />
      • Cambridge Outstanding Learners Award - Top in Country, AS  (Year 11) Computer Science <br />
      • Cambridge Outstanding Learners Award - Top in Country, IGCSE  (Year 10) Biology <br />
      • Cambridge Outstanding Learners Award - Top in Country, IGCSE (Year 10) Business Studies <br />
      • Cambridge Outstanding Learners Award - Top in the World, IGCSE (Year 10) Mathematics <br />
      • Sheikha Fatima Award for Excellence <br />
      • Ranked 5th in National IChO (International Chemistry Olympiad) Round
    </>
  );

  const courses = (
    <>
    Dean's Honours List 2026: Ranked in the top 3% in Year 1, Bachelor of Science.
    Melbourne International Undergraduate Scholarship <br /> <br />
    Courses:<br />
      • Foundations of Algorithms (C, C++) <br />
      • Foundations of Computing (Python) <br />
      • Database Systems (SQL) <br />
      • Linear Algebra (MATLAB) <br />
      • Calculus 2
    </>
  )

  const education = [
    { 
      school: 'University of Melbourne', 
      years: '2025-Present', 
      grade: 'H1 WAM (92.4)', 
      details: <p>{courses}</p>
    },
    { 
      school: 'Gems Westminster School Sharjah, UAE', 
      years: '2020-2024', 
      grade: '4 A*s in Math, Physics, Chemistry and Computer Science', 
      details: <p>{awards}</p>
    }
  ];

  return (
    <div className="page-container section-enter">
      <h2 className="page-title gradient-text">📝 CV</h2>
      
      <h3 className="section-title">Experience</h3>
      <div className="resume-section">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>

      <h3 className="section-title">Education</h3>
      <div className="resume-section">
        {education.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
}
