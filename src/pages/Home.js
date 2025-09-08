import React from "react";
import { Link } from "react-router-dom";
import VideoSource from "../assets/VideoSource.mp4";
import "../styles/Home.css";
import Gallery from '../components/Gallery';

function Home() {
  return (
    <div className="home-page">
      <div className="home">
        <video autoPlay loop muted className="video-background">
          <source src={VideoSource} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">COZY'S</span>
              <span className="title-accent">CHARCUTES</span>
            </h1>
            <p className="hero-subtitle">Crafted with Passion, Shared with Love</p>
            <p className="hero-description">
              Elevate your gatherings with our exquisite charcuterie boards and grazing tables,
              perfectly curated for every occasion.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary hero-btn">
                Explore Menu
              </Link>
              <Link to="/contact" className="btn btn-secondary hero-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
}

export default Home;
