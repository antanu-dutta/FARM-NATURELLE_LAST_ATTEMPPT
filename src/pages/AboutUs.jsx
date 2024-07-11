import React from "react";
import AboutHeader from "../components/AboutHeader";
import AboutusComp from "../reusable components/AboutusComp";
import { greetings } from "../data assets/Aboutus";
import AboutProgress from "../components/AboutProgress";
import AboutusBigHeading from "../components/AboutusBigHeading";
import AboutusFounder from "../components/AboutusFounder";
const AboutUs = () => {
  return (
    <div className="pt-[130px]">
      <AboutHeader />
      <AboutusComp data={greetings} />
      <AboutProgress />
      <AboutusBigHeading />
      <AboutusFounder />
    </div>
  );
};

export default AboutUs;
