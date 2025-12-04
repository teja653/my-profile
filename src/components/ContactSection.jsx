import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-text">
        I am thrilled that you are interested in getting in touch. Whether you
        have a project in mind, a question to ask, or simply want to say hello,
        I would love to hear from you. Feel free to reach out through any of the
        following methods.
      </p>

      <div className="contact-info">
        <h2 className="social-heading">I'M ALSO IN SOCIAL NETWORKS</h2>

        <div className="info-item">
          <span className="icon">🏠</span>
          <div>
            <h3>Address</h3>
            <p>Hyderabad,Telagana, India</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">📞</span>
          <div>
            <h3>Let's Talk</h3>
            <p>
              +91 9010730497
            </p>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">📧</span>
          <div>
            <h3>E-Mail</h3>
            <a
              href="mailto:tejadesemsetti999@gmail.com"
              className="contact-link"
            >
              tejadesemsetti999@gmail.com
            </a>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">💼</span>
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/teja-desemsetti-7a1901223"
              className="contact-link"
            >
             linkedin.com/in/teja-desemsetti-7a1901223
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

