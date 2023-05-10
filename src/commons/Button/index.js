import { ancherTarget } from "@/utils/CommonUtils";
import Link from "next/link";
import React from "react";

const Button = ({
  btnClass,
  btnText,
  btnUrl,
  btnTarget,
  onClick,
  isTargetBtn,
  isSocialIcon,
  socialIconClass,
  clearAncher = true,
}) => {
  return isSocialIcon ? (
    <Link
      href={btnUrl || "#"}
      target={ancherTarget(btnTarget)}
      className={clearAncher && "clearAncher"}
    >
      <i className={socialIconClass}></i>
    </Link>
  ) : isTargetBtn ? (
    <Link
      href={btnUrl || "#"}
      target={ancherTarget(btnTarget)}
      className={clearAncher && "clearAncher"}
    >
      <button className={`${btnClass}`}>{btnText}</button>
    </Link>
  ) : (
    <button className={`${btnClass}`} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
