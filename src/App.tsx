import React from "react";
import Header from "./components/Header";
import "./index.css";
import IntroSection from "./components/IntroSection";
import Portfolio from "./components/Portfolio";

const App: React.FC = () => {
  return (
    <>
      <Header title="PhysioEliezel" subtitle="Helping you recover and thrive" />
      <IntroSection />
      {/* <AboutSection />
      <ServicesSection />
      <WorksSection />
      <ContactSection /> */}
      {/* <Portfolio /> */}
    </>
  );
};

export default App;
