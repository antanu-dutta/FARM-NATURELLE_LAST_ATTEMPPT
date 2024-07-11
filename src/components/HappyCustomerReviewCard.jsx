import React from "react";
import FiveStar from "../reusable components/FiveStar";
import Paragraph from "../reusable components/Paragraph";

const HappyCustomerReviewCard = ({ image, name, review }) => {
  return (
    <div className="p-6 rounded-lg bg-white min-h-[400px]">
      <div className="flex items-center gap-5 mb-5">
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
      <hr className="border border-gray-900 mb-5" />
      <FiveStar className={"mb-5"} />
      <Paragraph className="text-left text-gray-900 text-lg">
        {review}
      </Paragraph>
    </div>
  );
};

export default HappyCustomerReviewCard;
