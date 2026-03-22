import React from 'react';
import Photo from '../Assets/Photo_prof.jpg';
import { Mail, MapPin, User, FileText, Briefcase, Send } from 'lucide-react';
import './CSS/Sidebar.css';

export default function Sidebar({ activeSection, onNavigate }) {
  const navItems = [
    { id: 'about me', label: 'About Me', icon: User },
    { id: 'CV', label: 'CV', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Send }
  ];

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-image-wrapper">
            <img src={Photo} alt="Profile" />
        </div>
        <h1 className="profile-name">Humayra Tasnim Nooha</h1>
        <p className="profile-title">CS Student | Future Software Engineer</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <Mail className="contact-icon" />
            <span>tasnimhumayra447@gmail.com</span>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" />
            <span>Melbourne, Australia</span>
          </div>
        </div>
      </div>

      <nav className="nav-section">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`nav-item ${activeSection === id ? 'active' : ''}`}
          >
            <Icon className="nav-icon" />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
