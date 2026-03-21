import React from 'react';
import { Send } from 'lucide-react';
import Card from '../Components/Card';
import './CSS/ContactPage.css';

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container section-enter">
      <h2 className="page-title gradient-text">✌️ Let's Talk</h2>
      
      <Card className="contact-form-card">
        <h3 className="contact-form-title">Get In Touch</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Humayra Tasnim Nooha"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="humayra@gmail.com"
              />
            </div>
          </div>
          
          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              rows={6}
              className="form-textarea"
              placeholder="Say hi... my inbox gets lonely sometimes!"
            />
          </div>

          <button type="submit" className="submit-button">
            <Send className="submit-icon" />
            Send Message
          </button>
        </form>
      </Card>
    </div>
  );
}
