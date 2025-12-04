import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutSection/>
      <ProjectSection/>
      <SkillsSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
