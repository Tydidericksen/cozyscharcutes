import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/HomeGrazing.JPG";
import VideoSource from "../assets/VideoSource.mp4";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" >
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={VideoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="headerContainer">
        <h1> COZY CHARCUTES </h1>
        <p> SPICE UP ANY OCCASION</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
