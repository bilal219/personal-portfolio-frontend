import Button from "@/commons/Button";
import TitleSection from "@/commons/TitleSection";
import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <TitleSection title={"Contact Me"} subtitle={"Get in touch"} />
      <div className="contact-container container grid">
        <div>
          <div className="contact-information">
            <i className="uil uil-phone contact-icon"></i>
            <div>
              <h3 className="contact-title">Call Me</h3>
              <span className="contact-subtitle">+92-309-2280331</span>
            </div>
          </div>

          <div className="contact-information">
            <i className="uil uil-envelope contact-icon"></i>
            <div>
              <h3 className="contact-title">Email</h3>
              <span className="contact-subtitle">
                bilalmughal1309@gmail.com
              </span>
            </div>
          </div>

          <div className="contact-information">
            <i className="uil uil-map-marker contact-icon"></i>
            <div>
              <h3 className="contact-title">Location</h3>
              <span className="contact-subtitle">Lahore - Pakistan</span>
            </div>
          </div>
        </div>
        <form action="" className="contact-form grid">
          <div className="contact-inputs grid">
            <div className="contact-content">
              <label className="contact-label">Name</label>
              <input type="text" name="" id="" className="contact-input" />
            </div>
            <div className="contact-content">
              <label className="contact-label">Email</label>
              <input type="email" name="" id="" className="contact-input" />
            </div>
          </div>
          <div className="contact-content">
            <label className="contact-label">Subject</label>
            <input type="text" name="" id="" className="contact-input" />
          </div>
          <div className="contact-content">
            <label className="contact-label">Message</label>
            <textarea
              name=""
              id=""
              rows="7"
              className="contact-input"
            ></textarea>
          </div>
          <div>
            <Button btnText={"Send Message"} iconClass={"uil uil-message"} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
