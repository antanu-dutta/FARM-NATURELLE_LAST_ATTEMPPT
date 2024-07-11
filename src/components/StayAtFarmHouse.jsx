import React from "react";
import { stayAtFarmBenifits, stayAtFarmSlideImage } from "../data assets/Farm";
import SwiperComp from "../reusable components/SwiperComp";
import StayAtFarmContent from "./StayAtFarmContent";

function StayAtFarmHouse() {
  const sliderImages = stayAtFarmSlideImage.map((curImg, index) => (
    <img src={curImg} key={index} className="w-full" />
  ));
  return (
    <div className="py-16">
      <div className="container">
        <div
          className={`rounded-xl  bg-white p-4 flex flex-col lg:flex-row gap-6 border`}
        >
          <div className="w-full lg:w-1/2">
            <SwiperComp sliderElements={sliderImages} />
          </div>
          <StayAtFarmContent stayAtFarmBenifits={stayAtFarmBenifits} />
        </div>
      </div>
    </div>
  );
}

export default StayAtFarmHouse;
