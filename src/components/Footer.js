import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">COZY'S</span>
              <span className="logo-accent">CHARCUTES</span>
            </div>
            <p className="footer-tagline">Crafted with Passion, Shared with Love</p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Cozy's Charcutes</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/cozys.charcutes/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@cozys.charcutes" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>
          
          <div className="footer-info">
            <h3>Contact Info</h3>
            <p>cosettediddy@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Cozy's Charcutes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
