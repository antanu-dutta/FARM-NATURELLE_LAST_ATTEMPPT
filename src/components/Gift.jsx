import React from "react";
import Heading from "../reusable components/Heading";
import GiftBox from "./GiftBox";
import { giftBoxes } from "../data assets/GiftBoxes";
import SwiperComp from "../reusable components/SwiperComp";
import PrimaryButton from "../reusable components/PrimaryButton";

const Gift = () => {
  const giftBox = giftBoxes.map((curBox, index) => (
    <GiftBox
      image={curBox.image}
      heading={curBox.heading}
      subHeading={curBox.subHeading}
      price={curBox.price}
    />
  ));
  return (
    <div>
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <Heading className={"text-center"}>
            Gift Your Loved ones Healthy Living{" "}
            <span className="text-primary">starts @ Rs 499 only</span>
          </Heading>
          <div className="w-full mb-10">
            <SwiperComp sliderElements={giftBox} view={2} slidesPerGroup={2} />
          </div>
          <PrimaryButton>shop this</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Gift;
