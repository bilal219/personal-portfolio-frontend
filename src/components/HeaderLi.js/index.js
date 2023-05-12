import React from "react";
import { useRecoilState } from "recoil";
import { handleToggleAtom } from "../../store/Atoms";

const HeaderLi = ({ iconClass, linkName, target, linkClass }) => {
  const [toggle, setToggle] = useRecoilState(handleToggleAtom);
  return (
    <li className="nav-item" onClick={() => setToggle(false)}>
      <a href={`#${linkName}`} className={`nav-link ${linkClass}`}>
        <i className={`nav-icon ${iconClass}`}></i>
        {linkName}
      </a>
    </li>
  );
};

export default HeaderLi;
