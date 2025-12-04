import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <h3 className="about-subtitle">
        Hi, I'm Teja Durga Sai
      </h3>
      <h4 className="about-role">Frontend Developer</h4>

      <p className="about-description">
         A highly motivated and detail-oriented Front-End Developer seeking an Associate position to apply
 my skills in HTML, CSS, JavaScript, and modern frameworks to create dynamic, user-friendly web
 applications. Passionate about learning new technologies and contributing to impactful projects
        <br /><br />
        I bring a passion for creating captivating user interfaces using the latest web technologies. 
        Proficient in HTML5, CSS3, and JavaScript, I specialize in transforming design concepts into seamless 
        and interactive web experiences. My toolkit includes popular frontend libraries and frameworks, 
        with a strong emphasis on React.js for building dynamic and responsive applications.
      </p>

    </section>
  );
};

export default AboutSection;
