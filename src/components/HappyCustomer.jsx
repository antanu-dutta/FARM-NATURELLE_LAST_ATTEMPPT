import React from "react";
import Heading from "../reusable components/Heading";
import Paragraph from "../reusable components/Paragraph";
import HappyCustomerReviewCard from "./HappyCustomerReviewCard";
import { happyCustomerReviewData } from "../data assets/HappyCustomerReview";
import SwiperComp from "../reusable components/SwiperComp";

const HappyCustomer = () => {
  const reviewCardArray = happyCustomerReviewData.map((curRev, index) => (
    <HappyCustomerReviewCard
      image={curRev.img}
      name={curRev.name}
      review={curRev.review}
    />
  ));
  return (
    <div>
      <div className="container">
        <div className="text-center pt-[70px]">
          <Heading className={"mb-4 text-[48px]"}>Happy Customers</Heading>
          <Paragraph className="text-black text-xl mb-10">
            With million of products delivered, discover why customers trust{" "}
            <br /> us with there daily health
          </Paragraph>
          <div className="pb-8">
            <SwiperComp
              sliderElements={reviewCardArray}
              view={3}
              slidesPerGroup={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
