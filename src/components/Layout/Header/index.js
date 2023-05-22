import HeaderLi from "@/components/HeaderLi.js";
import { handleThemeAtom, handleToggleAtom } from "@/store/Atoms";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const Header = ({ logoName, linkArray }) => {
  const [toggle, setToggle] = useRecoilState(handleToggleAtom);
  const [darktheme, setDarkTheme] = useRecoilState(handleThemeAtom);
  // activating links
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    function scrollActive() {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current?.offsetHeight;
        const sectionTop = current?.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList?.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList?.remove("active-link");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);
  });

  useEffect(() => {
    darktheme
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  }, [darktheme]);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          {logoName}
        </a>
        <div className={`nav-menu${toggle ? " show-menu" : ""}`} id="nav-menu">
          <ul className="nav-list grid">
            {linkArray?.length
              ? linkArray?.map((el, i) => (
                  <HeaderLi
                    hrefLink={el?.LinkUrl}
                    iconClass={el?.IconClass}
                    linkClass={!i ? "active-link" : ""}
                    linkName={el?.LinkName}
                    key={i}
                  />
                ))
              : ""}
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
