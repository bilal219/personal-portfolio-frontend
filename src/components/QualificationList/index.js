import React from "react";

const QualificationList = ({ title, subtitle, islast, isEven, date }) => {
  return (
    <div className="qualification-data">
      {isEven && (
        <>
          <div></div>
          <div>
            <span className="qualification_rounder"></span>
            {!islast && <div className="qualification-line"></div>}
          </div>
        </>
      )}
      <div>
        <h3 className="qualification-title">{title}</h3>
        <span className="qualification-subtitle">{subtitle}</span>
        <div className="qualification-calender">
          <i className="uil uil-calendar-alt"></i>
          {date}
        </div>
      </div>
      {!isEven && (
        <div>
          <span className="qualification_rounder"></span>
          {!islast && <div className="qualification-line"></div>}
        </div>
      )}
    </div>
  );
};

export default QualificationList;
