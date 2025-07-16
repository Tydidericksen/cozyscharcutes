import React from "react";
import { Link } from "react-router-dom";
import VideoSource from "../assets/VideoSource.mp4";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={VideoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Cozy</span>
            <span className="title-accent">Charcutes</span>
          </h1>
          <p className="hero-subtitle">Artisanal Charcuterie Boards & Grazing Tables</p>
          <p className="hero-description">
            Elevate your gatherings with our handcrafted charcuterie boards, 
            featuring premium meats, artisanal cheeses, and seasonal accompaniments.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary hero-btn">
              Explore Menu
            </Link>
            <Link to="/about" className="btn btn-secondary hero-btn">
              Our Story
            </Link>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature">
            <div className="feature-icon">🍷</div>
            <span>Premium Quality</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <span>Artisanal Craft</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <span>Local Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
