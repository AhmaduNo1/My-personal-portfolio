import React from "react";
import "./contact.css"; // if you want to style it separately

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>
      <form
        action="https://formspree.io/f/xnnvoeqo"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
