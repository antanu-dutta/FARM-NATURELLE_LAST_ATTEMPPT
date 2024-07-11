import React from "react";
import Heading from "../reusable components/Heading";
import PrimaryButton from "../reusable components/PrimaryButton";

const GiftBox = (props) => {
  const { image, heading, subHeading, price } = props;
  return (
    <div className="relative overflow-hidden">
      <img src={image} alt="" className="w-full rounded-lg" />
      <div className="absolute top-0 left-0 p-10 w-full h-full items-start flex flex-col text-white">
        <Heading className="mb-2">{heading}</Heading>
        <span className="text-xl font-[300]">{subHeading}</span>
        <span className="text-[#f3b515] text-2xl">{price}</span>
        <PrimaryButton className="bg-white mt-auto">buy now</PrimaryButton>
      </div>
    </div>
  );
};

export default GiftBox;
