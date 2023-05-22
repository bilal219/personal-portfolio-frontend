import Qualification from "@/commons/Qualification";
import About from "@/components/About";
import Contact from "@/components/Contact";
import HomeComponent from "@/components/HomeComponent";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import { useQuery } from "@apollo/client";
import { GET_HOME_PAGE_DATA } from "@/GraphQL/queries/HomePage";
import Loader from "@/components/Loader";
import { useState } from "react";
import Layout from "@/components/Layout";
export default function Home() {
  const [portfolio, setPortfolio] = useState();
  const [qualification, setQualification] = useState();
  const [services, setServices] = useState();
  const [skills, setSkills] = useState();
  const { loading, error, data } = useQuery(GET_HOME_PAGE_DATA, {
    fetchPolicy: "network-only",
    onCompleted: (portfolioData) => {
      console.log(portfolioData, "port");
      const {
        home: {
          data: { attributes },
        },
        skills: { data },
        qualifications,
      } = portfolioData;
      setPortfolio(attributes);
      setSkills(data);
      setQualification(qualifications?.data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="main">
          {portfolio?.Template &&
            portfolio?.Template?.length &&
            portfolio?.Template?.map((el, i) => {
              if (el?.__typename === "ComponentTemplateHome") {
                return (
                  <HomeComponent
                    firstPhrase={el?.FirstPhrase}
                    animatedPhrase={el?.PhraseList}
                    title={el?.Title}
                    description={el?.Description}
                    btn={el?.Button}
                    socialIcons={el?.SocialLinks}
                    image={el?.Image?.data?.attributes}
                    key={i}
                  />
                );
              }
              if (el?.__typename === "ComponentTemplateAbout") {
                return (
                  <About
                    titleSection={el?.TitleSubtitle}
                    image={el?.Image?.data?.attributes}
                    description={el?.Description}
                    skillsArray={el?.Experience}
                    btn={el?.Button}
                    key={i}
                  />
                );
              }
              if (el?.__typename === "ComponentTemplateSkills") {
                return (
                  <Skills
                    titleSection={el?.TitleSubtitle}
                    key={i}
                    skillsArray={skills}
                  />
                );
              }
              if (el?.__typename === "ComponentTemplateQualification") {
                return (
                  <Qualification
                    qualification_array={qualification}
                    titleSection={el?.TitleSubtitle}
                    key={i}
                  />
                );
              }
            })}
          <Services />
          <Portfolio />
          <Projects />
          <Testimonial />
          <Contact />
        </main>
      )}
    </>
  );
}
