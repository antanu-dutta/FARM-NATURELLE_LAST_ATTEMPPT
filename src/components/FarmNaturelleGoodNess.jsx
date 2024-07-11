import React from "react";
import { goodNessImageUrl } from "../data assets/Farm";
import SwiperComp from "../reusable components/SwiperComp";
import TransparentButton from "../reusable components/TransparentButton";

function FarmNatureGoodNess() {
  const imgArray = goodNessImageUrl.map((curImg, index) => (
    <img src={curImg} key={index} />
  ));
  return (
    <div className="bg-primary ">
      <div className="container">
        <div className="py-10">
          <h2 className="text-xl lg:text-3xl text-white font-semibold text-center leading-snug mb-8">
            We’ve have over 400 Honey Collection workers to collect jungle honey
            and <br />{" "}
            <span className="text-[#cbd82d]">
              15000 Honey boxes to bring Nature Goodness to you
            </span>
          </h2>
          <div className="w-full ">
            <SwiperComp sliderElements={imgArray} view={4} slidesPerGroup={4} />
          </div>
          <div className="flex justify-center items-center pt-6">
            <TransparentButton className="py-3 font-bold">
              BOOK A VISIT
            </TransparentButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmNatureGoodNess;
