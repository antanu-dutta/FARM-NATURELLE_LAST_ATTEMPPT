import React from "react";
import Heading from "../reusable components/Heading";
import Paragraph from "../reusable components/Paragraph";
import TransparentButton from "../reusable components/TransparentButton";
import SecondaryButton from "../reusable components/SecondaryButton";

const Greetings = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container">
        <div className="flex gap-3">
          <div className="flex-1 p-2">
            <span className="text-pear">WELCOME TO FARM NATURELLE</span>
            <Heading className={"text-white leading-[48px] mb-4"}>
              Here Nature's Purest Treasures are nurtured and harvested for your
              well-being.
            </Heading>
            <img
              src="https://farmnaturelle.com/cdn/shop/files/ABOUT_2_280x.jpg?v=1703232158"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <img
              src="https://farmnaturelle.com/cdn/shop/files/Rectangle_9245_280x.jpg?v=1703160482"
              alt=""
              className="w-full mb-3"
            />
            <Paragraph className="text-base mb-4">
              At Farm Naturelle, we believe that the path to true wellness
              begins with embracing the gifts of nature. Through our organic
              farming methods and sustainable approach, we deliver a diverse
              range of products that are not only good for you but also good for
              the planet. Join us as we cultivate a healthier future, one
              harvest at a time, and savor the authentic flavors of Farm
              Naturelle that nourish both body and soul.
            </Paragraph>
            <div className="flex items-center gap-4">
              <TransparentButton className={"py-2"}>
                Know More
              </TransparentButton>
              <SecondaryButton
                className={"py-2 bg-white hover:text-white text-primary"}
              >
                Book a Farm Visit
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
