import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Muhammad Bilal Yousaf</h1>
            <span className="footer-subtitle">Full Stack Developer</span>
          </div>
          <ul className="footer-links">
            <li>
              <a href="#services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link">
                Contact Me
              </a>
            </li>
          </ul>
          <div className="footer-socials">
            <a href="" className="footer-social">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="" className="footer-social">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="" className="footer-social">
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
        <p className="footer-copy">&#169; MegaHard. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
