import React from "react";
import Title from "../reusable components/Title";
import Heading from "../reusable components/Heading";
import Paragraph from "../reusable components/Paragraph";
import PrimaryButton from "../reusable components/PrimaryButton";

const StayAtFarmContent = ({ stayAtFarmBenifits }) => {
  return (
    <div className="w-full lg:w-1/2">
      <Title className="text-gray-800">OUR STAY AT RAMNAGAR</Title>
      <Heading className="mb-3">
        Stay at <span className="text-primary">Farm House</span>{" "}
      </Heading>
      <Paragraph className="text-sm text-gray-600 font-medium leading-5 mb-4">
        Serene escape blending modern comfort with nature's bounty. Embrace
        tranquility, experience sustainable farming, and rejuvenate.
      </Paragraph>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {stayAtFarmBenifits.map((item, index) => (
          <div className="flex items-center gap-3" key={index}>
            <img
              src="https://farmnaturelle.com/cdn/shop/files/Frame_1.svg?v=1697717852"
              alt=""
            />
            <span className="text-base">{item}</span>
          </div>
        ))}
      </div>
      <div className="rounded border border-black px-2 md:px-4 py-6 flex justify-between text-sm md:text-base items-center mb-4">
        <span>Room 1 (1 King Size Bed)</span>
        <p>
          <span>&#8377; 3500</span> Per Night
        </p>
      </div>
      <div className="rounded border mb-5 border-black px-4 text-sm md:text-base gap-3 py-6 flex justify-between items-center">
        <span>Room 2 (2 King Size Beds)</span>
        <p>
          <span>&#8377; 5500</span> Per Night
        </p>
      </div>
      <PrimaryButton>BOOK NOW</PrimaryButton>
    </div>
  );
};

export default StayAtFarmContent;
