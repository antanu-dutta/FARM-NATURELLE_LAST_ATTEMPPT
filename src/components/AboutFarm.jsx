import React from "react";
import { aboutFarmImages } from "../data assets/Farm";
import Title from "../reusable components/Title";
import Heading from "../reusable components/Heading";
import Paragraph from "../reusable components/Paragraph";
import PrimaryButton from "../reusable components/PrimaryButton";

function AboutFarm() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex flex-col items-center">
          <Title>OUR FARM</Title>
          <Heading>
            <span className="text-primary">"From Our Farm</span> to Your Table"
          </Heading>
          <Paragraph className="text-center text-sm text-gray-800 font-[300] mb-4">
            At Farm Naturelle, we've cultivated our own slice of paradise in Ram
            Nagar, where every sunrise brings a new promise of sustainable
            farming and organic beekeeping, ensuring that every product we offer
            is a testament to the purity of nature's gifts.{" "}
          </Paragraph>
          <PrimaryButton className={"mb-10"}>BOOK A VISIT</PrimaryButton>
        </div>
        <div className="grid  md:grid-cols-2 gap-5">
          {aboutFarmImages.map((item, index) => (
            <div className="relative" key={index}>
              <img src={item.url} alt="" className="w-full" />
              <p className="absolute bottom-6 text-center w-full text-white text-3xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <h1 className="text-center text-[64px] leading-relaxed py-[80px] font-satisfy">
          "Organic farming anchors Farm Natural, nurturing the land today for a
          sustainable tomorrow."
        </h1>
      </div>
    </div>
  );
}

export default AboutFarm;
