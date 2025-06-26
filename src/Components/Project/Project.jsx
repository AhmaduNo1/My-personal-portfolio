import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <>
      <h1 className="project-header">Projects</h1>

      <section className="project-section">
        <div className="project-view">
          <div className="project">
            <h3 className="project-title">Mini Quiz</h3>
            <a
              href="https://ahmaduno1.github.io/mini-Quiz-app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                className="project-img"
                src="./minQuiz.png"
                alt="Mini Quiz"
              />
            </a>
          </div>
          <div className="project">
            <h3 className="project-title">Personal Portfolio Website</h3>
            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                className="project-img"
                src=".\portfolioWebSite.png"
                alt="Portfolio Website"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
