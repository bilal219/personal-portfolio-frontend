import React, { useState } from "react";
import TitleSection from "../TitleSection";
import QualificationList from "@/components/QualificationList";

const Qualification = ({ titleSection, qualification_array }) => {
  const [mode, setMode] = useState("Education");
  const array = [
    {
      title: "Education",
      subArray: [
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
      ],
    },
    {
      title: "Work",
      subArray: [
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
        {
          title: "Information Technology",
          suntitle: "University of the Punjab",
          data: "2017 - 2021",
        },
      ],
    },
  ];
  return (
    <section className="qualification section">
      <TitleSection
        title={titleSection?.Title}
        subtitle={titleSection?.Subtitle}
      />
      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className="qualification-btn btn-flex"
            onClick={() => setMode("Education")}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>
          <div
            className="qualification-btn btn-flex"
            onClick={() => setMode("Work")}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Work
          </div>
        </div>
        <div className="qualification-sections">
          {/* education */}
          {qualification_array?.length
            ? qualification_array?.map((el, i) => (
                <div
                  className={`qualification-content ${
                    el?.attributes?.QualificationType === mode
                      ? "qualification-active"
                      : ""
                  }`}
                  data-content
                  id="education"
                  key={i}
                >
                  {el?.attributes?.QualiaficationDescription?.length &&
                    el?.attributes?.QualiaficationDescription?.map((obj, i) => (
                      <QualificationList
                        key={i}
                        title={obj?.Title}
                        subtitle={obj?.Institution}
                        date={obj?.TimeSlot}
                        islast={
                          el?.attributes?.QualiaficationDescription?.length -
                            1 ===
                          i
                        }
                        isEven={(i + 1) % 2 === 0}
                      />
                    ))}
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
