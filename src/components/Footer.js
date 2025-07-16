import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Cozy</span>
              <span className="logo-accent">Charcutes</span>
            </div>
            <p className="footer-description">
              Artisanal charcuterie boards and grazing tables crafted with love 
              and premium ingredients for your special occasions.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FacebookIcon />
              </a>
              <a href="mailto:hello@cozycharcutes.com" className="social-link">
                <EmailIcon />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <PhoneIcon />
                <span>(555) 123-4567</span>
              </div>
              <div className="contact-item">
                <EmailIcon />
                <span>hello@cozycharcutes.com</span>
              </div>
              <div className="contact-item">
                <LocationOnIcon />
                <span>Local Delivery Available</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Business Hours</h3>
            <div className="hours">
              <div className="hours-item">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Cozy Charcutes. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;