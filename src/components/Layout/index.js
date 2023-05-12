import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup-icon"></i>
      </a>
      <Footer />
    </>
  );
};

export default Layout;
