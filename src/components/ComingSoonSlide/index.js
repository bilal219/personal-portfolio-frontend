import Button from "@/commons/Button";
import React from "react";

const ComingSoonSlide = ({ isTwoSided }) => {
  return (
    <div className="slide">
      <div className="slide-body">
        {isTwoSided ? (
          <>
            <div className="left-side">test</div>
            <div className="right-side">test</div>
          </>
        ) : (
          <div className="center-content">test</div>
        )}
      </div>
      <div className="footer-wrapper">
        <div className="image-frame"></div>
      </div>
    </div>
  );
};

export default ComingSoonSlide;
