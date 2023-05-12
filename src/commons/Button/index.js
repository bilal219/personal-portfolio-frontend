import { ancherTarget } from "@/utils/CommonUtils";
import Link from "next/link";
import React from "react";

const Button = ({
  isDownload,
  btnText,
  iconClass,
  hrefLink,
  target,
  btnClass,
  isSpan,
}) => {
  if (isSpan) {
    return (
      <span className={`btn btn-flex ${btnClass}`}>
        <>
          {btnText}
          {btnText && <i className={`btn-icon ${iconClass}`}></i>}
        </>
      </span>
    );
  }
  return (
    <Link
      href={hrefLink || "#"}
      target={ancherTarget(target)}
      className={`btn btn-flex ${btnClass}`}
    >
      <>
        {btnText}
        {btnText && <i className={`btn-icon ${iconClass}`}></i>}
      </>
    </Link>
  );
};

export default Button;
