import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { cutivatingImage } from "../data assets/Farm";
import SwiperComp from "../reusable components/SwiperComp";
import Heading from "../reusable components/Heading";

function CultivatingWellness() {
  const imgArray = cutivatingImage.map((curImg, index) => <img src={curImg} />);
  return (
    <div className="py-16">
      <div className="container">
        <div>
          <Heading className={"mb-6 text-center"}>
            Cultivating Wellness:{" "}
            <span className="text-primary">
              Herb Gardens Enriched with 15+ Medicinal Plants
            </span>
          </Heading>
          <div className="w-full">
            <SwiperComp sliderElements={imgArray} view={4} slidesPerGroup={4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CultivatingWellness;
