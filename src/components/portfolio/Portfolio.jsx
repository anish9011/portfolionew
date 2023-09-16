import "./portfolio.css";

import IMG1 from "../../assets/couriernew.jpg";
import IMG2 from "../../assets/data science.jpg";
import IMG4 from "../../assets/android new.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "COURIER MANAGEMENT SYSTEM (DBMS PROJECT)",
      img: IMG1,
      description:
        "The main objective of the Courier Management DBMS project is to develop a robust software system that automates and optimizes courier and logistics operations, ensuring efficient tracking, management, and delivery of parcels and packages.",
      technologies: "Html | CSS | Javascript | Php | MySQL",
    },
    {
      id: 2,
      title: "INVENTORY MANAGEMENT ANDROID APPLICATION",
      img: IMG4,
      description:
        "To create a user-friendly mobile app that enables businesses to streamline their inventory management processes, enhance accuracy, reduce errors, and improve overall efficiency.",
      technologies: "Java | Firebase | Android",
    },
    {
      id: 3,
      title: "SPEECH EMOTION RECOGNITION (DATA SCIENCE PROJECT)",
      img: IMG2,
      description: "The Speech Emotion Recognition Data Science Project aims to develop a machine learning model capable of automatically detecting and classifying emotions from spoken language.",
      technologies: "Pyhton | Anaconda | Jupyter",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
