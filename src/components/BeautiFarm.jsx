import React from "react";
import { beautiFarmUrl } from "../data assets/Farm";
import SwiperComp from "../reusable components/SwiperComp";
import Heading from "../reusable components/Heading";

function BeautyOfFruitFarm() {
  const sliderImages = beautiFarmUrl.map((curImg, index) => (
    <img src={curImg} key={index} className="w-full" />
  ));
  return (
    <div className="py-[80px]">
      <div className="container">
        <div>
          <Heading className="mb-5 text-center text-primary">
            Beauty of Fruit Farm
          </Heading>
          <div className="w-full">
            <SwiperComp
              sliderElements={sliderImages}
              view={4}
              slidesPerGroup={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeautyOfFruitFarm;
