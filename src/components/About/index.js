import AboutList from "@/commons/AboutList";
import Button from "@/commons/Button";
import TitleSection from "@/commons/TitleSection";
import { ancherTarget } from "@/utils/CommonUtils";
import React, { useEffect } from "react";

const About = ({ titleSection, image, description, skillsArray, btn }) => {
  return (
    <section className="about section" id={titleSection?.Url}>
      <TitleSection
        title={titleSection?.Title}
        subtitle={titleSection?.Subtitle}
      />
      <div className="about-container container grid">
        <img
          src={process?.env?.APP_URL + image?.url}
          alt={process?.env?.APP_URL + image?.name}
          className="about-img"
        />
        <div className="about-data">
          <p className="about-description">{description}</p>
          <div className="about-info">
            {skillsArray?.length &&
              skillsArray?.map((el, i) => (
                <AboutList
                  time={el?.Duration}
                  description={el?.Description}
                  key={i}
                />
              ))}
          </div>
          <div className="about-btns">
            <Button
              btnText={btn?.ButtonText}
              iconClass={btn?.IconClass}
              hrefLink={process.env.APP_URL + btn?.ButtonUrl}
              target={btn?.Target}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
