import React from "react";
import "./ProjectSection.css";

const ProjectSection = () => {
  const projectList = [
    {
      id: 1,
      title: "ONLINE COURSE APP",
      image: "./Screenshot (178).png",
      description:
        "Online course app with key functionalities to replicate the user experience of the original website.",
      tech: ["⚛️", "💻", "🧩", "🎨"],
      github: "https://github.com/teja653/onlinecourseapp",
      demo: "https://hrk29bnc-3001.inc1.devtunnels.ms/",
    },
    {
      id: 2,
      title: "CALCULATOR",
      image: "./Screenshot (179).png",
      description:
        "calculator application with stunning animations and a fully responsive design.",
      tech: ["⚛️", "💻", "🎨", "🧩"],
      github: "https://github.com/teja653/calculator",
      demo: "#",
    },
    {
      id: 3,
      title: "QUIZ APP",
      image:
        "./Screenshot (180).png",
      description:
        "Quiz app application with stunning animations and a fully responsive design.",
      tech: ["⚛️", "💻", "🎨", "🧩"],
      github: "https://github.com/yourgithub/gxber",
      demo: "#",
    },
    {
      id: 4,
      title: "LOGIN PAGE",
      image:
        "./Screenshot (181).png",
      description:
        "online login page application with stunning animations and a fully responsive design.",
      tech: ["⚛️", "💻", "🎨", "🧩"],
      github: "https://github.com/yourgithub/gxber",
      demo: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-container">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-info">
              <h2 className="project-name">{project.title}</h2>
              <div className="project-tech">
                {project.tech.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>

              <div className="project-buttons">
                <a
                  href={project.github}
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.demo}
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
