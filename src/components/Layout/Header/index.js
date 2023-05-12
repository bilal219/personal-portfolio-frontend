import HeaderLi from "@/components/HeaderLi.js";
import { handleThemeAtom, handleToggleAtom, themeAtom } from "@/store/Atoms";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const Header = () => {
  const [toggle, setToggle] = useRecoilState(handleToggleAtom);
  const [darktheme, setDarkTheme] = useRecoilState(handleThemeAtom);
  useEffect(() => {
    darktheme
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  }, [darktheme]);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          Muhammad bilal yousaf
        </a>
        <div className={`nav-menu${toggle ? " show-menu" : ""}`} id="nav-menu">
          <ul className="nav-list grid">
            <HeaderLi
              hrefLink="home"
              iconClass="uil uil-estate"
              linkClass={"active-link"}
              linkName={"Home"}
            />
            <HeaderLi
              linkName={"About"}
              hrefLink="about"
              iconClass="uil uil-user"
            />
            <HeaderLi
              linkName={"Skills"}
              hrefLink="skills"
              iconClass="uil uil-file-alt"
            />
            <HeaderLi
              linkName={"Services"}
              hrefLink="services"
              iconClass="uil uil-briefcase-alt"
            />
            <HeaderLi
              linkName={"Portfolio"}
              hrefLink="portfolio"
              iconClass="uil uil-scenery"
            />
            <HeaderLi
              linkName={"Contact Me"}
              hrefLink="contact"
              iconClass="uil uil-message"
            />
          </ul>
          <i
            className="uil uil-times nav-close"
            id="nav-close"
            onClick={() => setToggle(false)}
          ></i>
        </div>
        <div className="nav-btns">
          <i
            className={`uil ${darktheme ? "uil-sun" : "uil-moon"} change-theme`}
            id="theme-btn"
            onClick={() => setDarkTheme(!darktheme)}
          ></i>
          <div
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => setToggle(true)}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
