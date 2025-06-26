import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section>
      <div className="content-container">
        <div className="grid-container">
          <div className="info">
            <img className="logo" src="\logo.svg" alt="LOGO" />
            <h1 className="hero-title">
              Ahmad <span>Dev</span>
            </h1>
            <h2 className="hero-subtitle">Hope through software </h2>
            <p className="hero-description">
              I am a software engineer with a passion for creating innovative
              solutions that make a difference.
            </p>
            <a
              href="https://wa.me/2347033560816"
              className="hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </div>
          <div className="hero-img">
            <img className="hero-image" src="\Avatar.png" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
