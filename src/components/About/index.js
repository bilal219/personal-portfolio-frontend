import AboutList from "@/commons/AboutList";
import Button from "@/commons/Button";
import TitleSection from "@/commons/TitleSection";
import React from "react";

const About = () => {
  return (
    <section className="about section" id="about">
      <TitleSection title="About Me" subtitle="My Introduction" />
      <div className="about-container container grid">
        <img src="/assets/images/about.jpg" alt="" className="about-img" />
        <div className="about-data">
          <p className="about-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="about-info">
            <AboutList time="08+" title={"year"} measure={"Experience"} />
            <AboutList time="20+" title={"Completed"} measure={"Projects"} />
            <AboutList time="05+" title={"Companies"} measure={"Worked"} />
          </div>
          <div className="about-btns">
            <Button
              isDownload={true}
              btnText={"Download CV"}
              iconClass="uil uil-import"
              hrefLink="#"
              target=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
