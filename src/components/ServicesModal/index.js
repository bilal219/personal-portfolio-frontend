import React from "react";

const ServicesModal = ({ firstWord, secondWord, listArray }) => {
  return (
    <div className="services-modal">
      <div className="services-modal-content">
        <h4 className="services-modal-title">
          {firstWord} <br />
          {secondWord}
        </h4>
        <i className="uil uil-times services-modal-close"></i>

        <ul className="services-modal-services grid">
          <li className="services-modal-service">
            <i className="uil uil-check-circle services-modal-icon"></i>I
            develop the User Interface
          </li>
          <li className="services-modal-service">
            <i className="uil uil-check-circle services-modal-icon"></i>I
            develop the User Interface
          </li>
          <li className="services-modal-service">
            <i className="uil uil-check-circle services-modal-icon"></i>I
            develop the User Interface
          </li>
          <li className="services-modal-service">
            <i className="uil uil-check-circle services-modal-icon"></i>I
            develop the User Interface
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
