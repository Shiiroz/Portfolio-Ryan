import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="contact-page">
        <p>Vous pouvez me contacter via :</p>
        <div className="contact-links">

          <a href="mailto:ryanmortuaire@icloud.com" target="_blank" rel="noopener noreferrer">
            <img src="mail.png" alt="Email" />
          </a>
          <a href="https://github.com/Shiiroz" target="_blank" rel="noopener noreferrer">
            <img src="github.jpg" alt="GitHub" />
          </a>
          <a href="www.linkedin.com/in/ryanmortuaire" target="_blank" rel="noopener noreferrer">
            <img src="link.png" alt="LinkedIn" />
          </a>

        </div>
      </div>
    </div>
  );
}
