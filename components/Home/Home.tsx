import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./skills/Skills";
import Experiene from "./Experience/Experiene";
import Education from "./Education/Education";
import ContactMe from "./ContactMe/ContactMe";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experiene />
      <Skills />
      <ContactMe />
    </>
  );
};

export default Home;
