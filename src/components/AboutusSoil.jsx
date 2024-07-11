import React from "react";
import Heading from "../reusable components/Heading";
import TransparentButton from "../reusable components/TransparentButton";
import { FaPlay } from "react-icons/fa";

const AboutusSoil = () => {
  return (
    <div className="aboutus-soil">
      <div className="container">
        <div className="flex items-center justify-between px-10">
          <div>
            <h2 className="text-white text-[48px] font-semibold mb-4">
              <span className="text-pear">From Soil to Soul:</span> <br />
              Where Nature Thrives, <br /> Health Flourishes
            </h2>
            <TransparentButton className={"py-4 font-semibold"}>
              have a look at our farms
            </TransparentButton>
          </div>
          <div className="flex items-center flex-col gap-5">
            <div className="playbutton">
              <FaPlay className="text-white text-4xl " />
            </div>

            <Heading className={"text-pear"}>WATCH THE VIDEO</Heading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSoil;
