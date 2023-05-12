import TitleSection from "@/commons/TitleSection";
import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial section">
      <TitleSection title={"Testimonial"} subtitle={"My Client saying"} />
      <div className="testimonial-container container">
        <div>
          {/* 1 */}
          <div className="testimonial-content">
            <div className="testimonial-data">
              <div className="testimonial-header">
                <img
                  src="assets/images/testimonial1.jpg"
                  alt=""
                  className="testimonial-img"
                />
                <div>
                  <h3 className="testimonial-name">Sara Smith</h3>
                  <span className="testimonial-client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
              </div>
            </div>
            <p className="testimonial-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'
            </p>
          </div>
          {/* 1 */}
          <div className="testimonial-content">
            <div className="testimonial-data">
              <div className="testimonial-header">
                <img
                  src="assets/images/testimonial2.jpg"
                  alt=""
                  className="testimonial-img"
                />
                <div>
                  <h3 className="testimonial-name">Sara Smith</h3>
                  <span className="testimonial-client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
              </div>
            </div>
            <p className="testimonial-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'
            </p>
          </div>
          {/* 1 */}
          <div className="testimonial-content">
            <div className="testimonial-data">
              <div className="testimonial-header">
                <img
                  src="assets/images/testimonial3.jpg"
                  alt=""
                  className="testimonial-img"
                />
                <div>
                  <h3 className="testimonial-name">Sara Smith</h3>
                  <span className="testimonial-client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
                <i className="uil uil-star testimonial-icon-star"></i>
              </div>
            </div>
            <p className="testimonial-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
