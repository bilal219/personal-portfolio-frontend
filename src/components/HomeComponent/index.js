import React, { useEffect, useRef, useState } from "react";
import SocialIcons from "../SocialIcons";
import ImageFrame from "../ImageFrame";
import Button from "@/commons/Button";
import { carousel } from "@/utils/CommonUtils";

const HomeComponent = ({
  firstPhrase,
  animatedPhrase,
  title,
  description,
  btn,
  socialIcons,
  image,
}) => {
  return (
    <section className="home section" id="home">
      <div className="container home-container grid ">
        <div className="home-content grid">
          <SocialIcons data={socialIcons} />
          <div className="home-image">
            <ImageFrame
              frameClass="home-blob"
              imageClass="home-blob-img"
              image={image}
            />
          </div>
          <div className="home-data">
            {firstPhrase && (
              <h1 className="home-title">
                {firstPhrase}
                <span className="animatedText">&nbsp;</span>
              </h1>
            )}
            {title && <h3 className="home-subtitle">{title}</h3>}
            {description && <p className="home-description">{description}</p>}
            {btn?.ButtonText && (
              <Button
                btnText={btn?.ButtonText}
                iconClass={btn?.IconClass}
                hrefLink={btn?.ButtonUrl}
                target=""
              />
            )}
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
