import { ancherTarget } from "@/utils/CommonUtils";
import Link from "next/link";
import React from "react";

const SocialIcons = ({ data }) => {
  return (
    <div className="home-social">
      {data && data?.length
        ? data?.map((el, i) => (
            <Link
              href={el?.Url || "#"}
              className="home-social-icon"
              target={ancherTarget(el?.Target)}
              key={i}
            >
              <i className={el?.IconsClass}></i>
            </Link>
          ))
        : ""}
    </div>
  );
};

export default SocialIcons;
