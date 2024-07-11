import React from "react";
import Heading from "../reusable components/Heading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import NavigationButton from "../reusable components/NavigationButton";
import SecondaryButton from "../reusable components/SecondaryButton";
import SwiperComp from "../reusable components/SwiperComp";
import ProductCard from "./ProductCard";

const FilteredProduct = ({ heading, title }) => {
  const icons = [<FaArrowLeft />, <FaArrowRight />];
  const product = [
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
  ];
  return (
    <div className="py-16">
      <div className="flex items-center ">
        <div className="px-[5%] w-[35%] flex flex-col gap-9">
          <Heading className={"text-brown"}>{heading}</Heading>
          <p className="text-sm">{title}</p>
          <div className="w-[25%] flex justify-between">
            {icons.map((curIcon, index) => (
              <NavigationButton key={index}>{curIcon}</NavigationButton>
            ))}
          </div>
          <SecondaryButton className="py-3 bg-brown border border-brown text-white hover:text-brown hover:bg-transparent ">
            view all
          </SecondaryButton>
        </div>
        <div className="w-[65%]">
          <SwiperComp sliderElements={product} view={3} />
        </div>
      </div>
    </div>
  );
};

export default FilteredProduct;
