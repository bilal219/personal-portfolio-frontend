import Button from "@/commons/Button";
import TitleSection from "@/commons/TitleSection";
import React, { useEffect } from "react";
import ServicesModal from "../ServicesModal";

const Services = () => {
  useEffect(() => {
    const modalView = document.querySelectorAll(".services-modal");
    const modalBtns = document.querySelectorAll(".services-btn");
    const modalClose = document.querySelectorAll(".services-modal-close");

    let modal = function (modalIndex) {
      modalView[modalIndex].classList.add("active-modal");
    };
    let closeModal = function (modalIndex) {
      modalView[modalIndex].classList.remove("active-modal");
    };

    modalBtns.forEach((el, i) => {
      el.addEventListener("click", () => {
        modal(i);
      });
    });
    modalClose.forEach((el, i) => {
      el.addEventListener("click", () => {
        closeModal(i);
      });
    });
  }, []);
  return (
    <section className="servoces section" id="services">
      <TitleSection title={"Services"} subtitle={"What i offer"} />

      <div className="services-container container grid">
        {/* 1 */}
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <Button
            btnClass={"btn-small btn-link services-btn"}
            iconClass={"uil uil-arrow-right"}
            btnText={"View More"}
            isSpan={true}
          />
          <ServicesModal firstWord={" Ui/Ux"} secondWord={"Designer"} />
        </div>
        {/* 2 */}
        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services-title">
              Web <br /> Developer
            </h3>
          </div>
          <Button
            btnClass={"btn-small btn-link services-btn"}
            iconClass={"uil uil-arrow-right"}
            btnText={"View More"}
            isSpan={true}
          />
          <ServicesModal firstWord={"front end"} secondWord={"Developer"} />
        </div>
        {/* 3 */}
        <div className="services-content">
          <div>
            <i className="uil uil-pen services-icon"></i>
            <h3 className="services-title">
              Back end <br /> Developer
            </h3>
          </div>
          <div>
            <Button
              btnClass={"btn-small btn-link services-btn"}
              iconClass={"uil uil-arrow-right"}
              btnText={"View More"}
              isSpan={true}
            />
          </div>
          <ServicesModal firstWord={"Back end"} secondWord={"Developer"} />
        </div>
      </div>
    </section>
  );
};

export default Services;
