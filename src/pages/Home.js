import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoSource from "../assets/VideoSource.mp4";
import "../styles/Home.css";
import Gallery from '../components/Gallery';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video doesn't go fullscreen on mobile
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('x5-playsinline', 'true');
      video.setAttribute('x5-video-player-type', 'h5');
      video.setAttribute('x5-video-player-fullscreen', 'false');
      
      // Prevent context menu and controls on mobile
      video.controls = false;
      video.disablePictureInPicture = true;
      
      // Ensure autoplay works
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      
      // Play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay prevented:', error);
        });
      }
    }
  }, []);

  return (
    <div className="home-page">
      <div className="home">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          disablePictureInPicture
          className="video-background"
        >
          <source src={VideoSource} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">COZY'S</span>
              <span className="title-accent">CHARCUTES</span>
            </h1>
            <p className="hero-description">
              Elevate your gatherings with our exquisite charcuterie boards and grazing tables,
              perfectly curated for every occasion.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-secondary hero-btn">
                Explore Menu
              </Link>
              <Link to="/catering" className="btn btn-secondary hero-btn">
                Catering Services
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
