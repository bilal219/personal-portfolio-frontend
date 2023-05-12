import Button from "@/commons/Button";
import React from "react";

const Projects = () => {
  return (
    <section className="project section">
      <div className="project-bg">
        <div className="project-container container grid">
          <div className="project-data">
            <h2 className="project-title">You have a new project</h2>
            <p className="project-description">
              Contact me now and get a 30% discount
            </p>
            <Button
              btnClass={"btn-white"}
              hrefLink={"#contact"}
              btnText={"Contact Me"}
              iconClass={"uil uil-message project-icon"}
            />
          </div>
          <img
            src="assets/images/project.png"
            alt=""
            className="project-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
