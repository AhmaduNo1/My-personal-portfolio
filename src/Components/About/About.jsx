import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="About-section">
      <h1 className="About-title">
        About <span>Me</span>
      </h1>
      <div className="About-grid">
        <div className="About-img">
          <img className="About-img" src="./Avatar.png" alt="About Image" />
        </div>
        <div className="About-description">
          <p>
            I'm Ahmad Abubakar, a passionate and purpose-driven software
            developer from Nigeria. My mission is clear: to use technology as a
            tool to create real impact — starting with fighting poverty through
            innovation and software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
