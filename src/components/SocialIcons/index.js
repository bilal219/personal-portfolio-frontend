import { ancherTarget } from "@/utils/CommonUtils";
import React from "react";

const SocialIcons = (data) => {
  return (
    <div className="home-social">
      <a href="#" className="home-social-icon" target={ancherTarget("")}>
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="#" className="home-social-icon">
        <i className="uil uil-github-alt"></i>
      </a>
      <a href="#" className="home-social-icon">
        <i className="uil uil-facebook-f"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
