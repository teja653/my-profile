import React from "react";
import "./SkillsSection.css";

const skills = [
  { name: "HTML", logo: "./HTML5_Logo_512.png" },
  { name: "CSS", logo: "./css-3-logo-png_seeklogo-297888.png" },
  { name: "JavaScript", logo: "./JavaScript-Logo.png" },
  { name: "React", logo: "./logo192.png" },
  { name: "Java", logo: "./java-logo-png_seeklogo-158094.png"},
  { name: "Tailwind", logo: "./tailwindcss-1633184775.webp" },
  { name: "Bootstrap", logo: "./images (1).jpg" },
  { name: "JIRA", logo: "./Atlassian-Logo-2010s1.png"},
  { name: "GitHub", logo: "./download.png" },
  { name: "VSCode", logo: "./images.png"},
];

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">My Coding Skills</h1>
      <div className="skills-grid">
           {skills.map((skill) => (
          <a  className="skill-card">
            <img src={skill.logo} className="skill-icon" />
            <p>{skill.name}</p>
            </a>
           ))}
      </div>
    </section>
  );
};

export default SkillsSection;

