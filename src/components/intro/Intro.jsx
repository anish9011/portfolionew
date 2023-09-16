import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/photo_2023-09-16_17-51-21.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <h2>
          To pursue a job opportunity in a competitive environment that will challenge me to push my boundaries and expand my knowledge in the field of computer science while allowing me to add value to the dynamics of the company. I am a grduate at Visveswaraya Technological University,persuing my bachelor degree on Computer Science and Engineering with a concentration on Software and Information Systems
          </h2>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
