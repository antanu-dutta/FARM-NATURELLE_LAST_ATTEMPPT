import React from "react";
import Heading from "../reusable components/Heading";
import Paragraph from "../reusable components/Paragraph";

const AmazonReview = () => {
  return (
    <div className="amazon_review">
      <div className="container">
        <div className="text-center">
          <Heading className={"mb-8 text-[48px]"}>
            Over 30,000 reviews <br /> on Amazon
          </Heading>
          <Paragraph className="text-primary text-xl">
            We’ve received a lot of love and are thrilled to <br /> share some
            of the experiences of our happy <br /> customers.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default AmazonReview;
