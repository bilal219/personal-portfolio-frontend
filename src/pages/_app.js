import { ApolloProvider } from "@apollo/client";
import client from "@/config/ApolloClient";
import "../styles/globals.scss";

//swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Layout from "@/components/Layout";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // const sections = document.querySelectorAll("section[id]");
    // function scrollActive() {
    //   const scrollY = window.pageYOffset;
    //   sections.forEach((current) => {
    //     const sectionHeight = current?.offsetHeight;
    //     const sectionTop = current?.offsetTop - 50;
    //     const sectionId = current.getAttribute("id");

    //     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //       document
    //         .querySelector(".nav-menu a[href*=" + sectionId + "]")
    //         .classList?.add("active-link");
    //     } else {
    //       document
    //         .querySelector(".nav-menu a[href*=" + sectionId + "]")
    //         .classList?.remove("active-link");
    //     }
    //   });
    // }

    function scrollHeader() {
      const nav = document?.getElementById("header");
      this?.scrollY >= 80
        ? nav.classList.add("scroll-header")
        : nav.classList.remove("scroll-header");
    }
    function scrollUp() {
      const scroll = document?.getElementById("scroll-up");
      this?.scrollY >= 80
        ? scroll.classList.add("show-scroll")
        : scroll.classList.remove("show-scroll");
    }

    window.addEventListener("scroll", scrollUp);
    window.addEventListener("scroll", scrollHeader);
    // window.addEventListener("scroll", scrollActive);
  }, []);

  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ApolloProvider>
  );
}
