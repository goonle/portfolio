import Image from "next/image";
import Header from "./components/portfolio/NavBar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Experience from "./components/portfolio/Experience";
import Education from "./components/portfolio/Education";
import Contact from "./components/portfolio/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>
  );
}
