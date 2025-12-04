import React from "react";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <section className="hero" id="home">
      <div className="content">
        <h3 className="subtitle">USER INTERFACE</h3>
        <h1 className="title">
          Frontend <span>Developer</span>
        </h1>
        <p className="description">
          I'm your pixel magician! Crafting interfaces that captivate like
          Martian landscapes & convert like space lasers. Let's make your vision
          legendary! Ready to see your vision come alive? Let's chat!
        </p>
        <button className="btn"><a href="./Teja Desemsetti.pdf" download>Download Resume</a></button>
      </div>
    </section>
  );
};

export default HomeSection;
