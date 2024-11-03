import React from "react";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import IntroSection from "../components/IntroSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Portfolio: React.FC = () => {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Portfolio;
