import React from "react";
import SocialIcons from "../SocialIcons";
import ImageFrame from "../ImageFrame";
import Button from "@/commons/Button";

const HomeComponent = () => {
  return (
    <section className="home section" id="home">
      <div className="container home-container grid ">
        <div className="home-content grid">
          <SocialIcons />
          <div className="home-image">
            <ImageFrame frameClass="home-blob" imageClass="home-blob-img" />{" "}
          </div>
          <div className="home-data">
            <h1 className="home-title">Hi, I am Muhammad Bilal yousaf</h1>
            <h3 className="home-subtitle">Fullstack developer</h3>
            <p className="home-description">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <Button
              btnText={"Contact Me"}
              iconClass="uil uil-message"
              hrefLink="#contact"
              target=""
            />
          </div>
        </div>
        <div className="home-scroll">
          <a href="#about" className="home-scroll-btn btn-flex">
            <i className="uil uil-mouse-alt home-scroll-mouse"></i>
            <span className="home-scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home-scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
