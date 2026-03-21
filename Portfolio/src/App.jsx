import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AboutMePage from './Pages/AboutMePage';
import CVPage from './Pages/CV';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about me');

  const renderPage = () => {
    switch (activeSection) {
      case 'about me':
        return <AboutMePage />;
      case 'CV':
        return <CVPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}
