import React from "react";
import "./Services.css";
import { FaDesktop } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
const Services = () => {
  return (
    <section className="services-section">
      <h1 className="services-title">
        What I <span>Do</span>
      </h1>
      <div className="card-container">
        <div className="icons-card">
          <FaDesktop className="icons" />
          <h2 className="card-h2">
            Web <br />
            <span className="card-span">Development</span>
          </h2>
        </div>
        <div className="icons-card">
          <BsTools className="icons" />
          <h2 className="card-h2">
            Frontend <br /> <span className="card-span">Development</span>
          </h2>
        </div>
        <div className="icons-card">
          <FaCode className="icons" />
          <h2 className="card-h2">
            Portfolio <br /> <span className="card-span">Website</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
