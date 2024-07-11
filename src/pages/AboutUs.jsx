import React from "react";
import AboutHeader from "../components/AboutHeader";
import AboutusComp from "../reusable components/AboutusComp";
import { greetings, philosophy, mission } from "../data assets/Aboutus";
import AboutProgress from "../components/AboutProgress";
import AboutusBigHeading from "../components/AboutusBigHeading";
import AboutusFounder from "../components/AboutusFounder";
import AboutusSoil from "../components/AboutusSoil";
const AboutUs = () => {
  return (
    <div className="pt-[130px]">
      <AboutHeader />
      <AboutusComp data={greetings} />
      <AboutProgress />
      <AboutusBigHeading />
      <AboutusFounder />
      <AboutusComp data={philosophy} />
      <AboutusSoil />
      <AboutusComp data={mission} />
    </div>
  );
};

export default AboutUs;
