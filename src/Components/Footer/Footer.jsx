import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <h2 className="footer-title">Contact Us</h2>
        <div className="footer-content">
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/ahmad-abubakar-b72b3835a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon linkedin" />
            </a>

            <h2>LinkedIn</h2>
          </div>
          <div className="icon-container">
            <a
              href="https://www.tiktok.com/@web___developer0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok className="icon tiktok" />
            </a>

            <h2>Tiktok</h2>
          </div>
          <div className="icon-container">
            <a
              href="https://wa.me/2347033560816"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="icon whatsapp" />
            </a>
            <h2>What's App</h2>
          </div>
          <div className="icon-container">
            <a>
              <FaPhoneAlt className="icon phone" />
            </a>
          </div>
          <div className="icon-label">
            <h2>Phone</h2>
            <p>+2347033560816</p>
          </div>
        </div>
        <p className="footer-note">
          &copy; {new Date().getFullYear()} Ahmad Dev. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
