import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useQuery } from "@apollo/client";
import { GET_LAYOUT_DATA } from "@/GraphQL/queries/Layout";

const Layout = ({ children }) => {
  const [layout, setLayout] = useState();
  const { loading, error, data } = useQuery(GET_LAYOUT_DATA, {
    fetchPolicy: "network-only",
    onCompleted: (layoutData) => {
      const {
        layout: {
          data: { attributes },
        },
      } = layoutData;
      setLayout(attributes);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  // useEffect(() => {
  //   if (!loading) {
  //     document.documentElement.style.setProperty(
  //       "--hue-color",
  //       layout?.ColorValue || 255
  //     );
  //   }
  // }, [layout]);
  return (
    <>
      <Header logoName={layout?.LogoName} linkArray={layout?.Link} />
      {children}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup-icon"></i>
      </a>
      <Footer />
    </>
  );
};

export default Layout;
