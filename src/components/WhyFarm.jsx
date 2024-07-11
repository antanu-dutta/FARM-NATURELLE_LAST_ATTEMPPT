import React from "react";
import Title from "../reusable components/Title";
import Heading from "../reusable components/Heading";
import { whyFarm } from "../data assets/WhyFarm";
import Paragraph from "../reusable components/Paragraph";

const WhyFarm = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Title>WHY FARM NATURELLE</Title>
          <Heading>We are Organic & Natural</Heading>
          <div className="relative">
            <img
              src="https://farmnaturelle.com/cdn/shop/files/Group_14856958.jpg?v=1703231499"
              alt=""
              className="w-full"
            />
            <div className="absolute top-0 w-full px-10 h-full flex items-center gap-7 justify-center left-0">
              {whyFarm.map((curElem, index) => (
                <div
                  className={`p-2 text-white ${
                    curElem.border ? "border-r" : "border-none"
                  }`}
                  key={index}
                >
                  <Heading className={"text-xl"}>{curElem.heading}</Heading>
                  <Paragraph>{curElem.description}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFarm;
