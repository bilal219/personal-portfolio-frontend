import Button from "@/commons/Button";
import TitleSection from "@/commons/TitleSection";
import React from "react";
import Carousel from "../Carousel";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <TitleSection title={"port folio"} subtitle={"most recent work"} />
      <div className="portfolio-container container">
        <Carousel />
      </div>
    </section>
  );
};

export default Portfolio;
