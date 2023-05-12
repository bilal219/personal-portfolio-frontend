import Qualification from "@/commons/Qualification";
import About from "@/components/About";
import Contact from "@/components/Contact";
import HomeComponent from "@/components/HomeComponent";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="main">
      <HomeComponent />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Projects />
      <Testimonial />
      <Contact />
    </main>
  );
}
