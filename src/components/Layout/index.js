import Button from "@/commons/Button";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header-wrapper">
        <div className="logo-area">
          <img
            src="/assets/images/new-wave-car-wash-logo.png"
            alt="new wave car wash logo"
          />
        </div>
        <div className="right-section">
          <div className="social-icons">
            <Button
              isTargetBtn={true}
              isSocialIcon={true}
              socialIconClass="fa-brands fa-facebook-f"
            ></Button>
            <Button
              isTargetBtn={true}
              isSocialIcon={true}
              socialIconClass="fa-brands fa-twitter"
            ></Button>
            <Button
              isTargetBtn={true}
              isSocialIcon={true}
              socialIconClass="fa-brands fa-instagram"
            ></Button>
            <Button btnText={"Experience Now"} isTargetBtn={true} />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
