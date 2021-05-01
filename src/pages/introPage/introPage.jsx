import React from "react";
import NavBar from "./components/navBar";
import IntroContent from "./components/IntroContent";
import SkillsPage from "./components/skillsPage";
import ContactMe from "./components/ContactMe";

const IntroPage = () => {
  return (
    <>
      <NavBar />
      <IntroContent />
      <SkillsPage />
      <ContactMe />
    </>
  );
};

export default IntroPage;
