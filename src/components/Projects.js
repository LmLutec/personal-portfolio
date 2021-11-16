import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "On the Go",
      description:
        "This project keeps track of food trucks (registered) in your area. Truck owners register their food truck and when foodies search for food trucks in their area (by city and state), the food trucks are displayed.",
    },
    {
      title: "Made Of",
      description:
        "This is a horoscope project with a 'Dear Abby' feature for anonymous advice.",
    },
    {
      title: "Been There",
      description:
        "This project is meant to allow users to give others a review of their vacation. It can also be used to browse through reviews (by location) and pick a destination to try out.",
    },
  ]);

  return (
    <div>
      <h3>Projects</h3>
      <div className="projectsContainer">
        {projects.map((p) => (
          <div className="project">
            <h5>{p.title} </h5>
            {p.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
