import React, { useEffect } from "react";
import Heading from "../reusable components/Heading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import NavigationButton from "../reusable components/NavigationButton";
import SecondaryButton from "../reusable components/SecondaryButton";
import SwiperComp from "../reusable components/SwiperComp";
import ProductCard from "./ProductCard";
import { useProductContext } from "../context/ProductContext";

const FilteredProduct = ({ heading, title, category }) => {
  const { products } = useProductContext();
  const icons = [<FaArrowLeft />, <FaArrowRight />];
  const filteredProduct = products.filter(
    (curProduct) => curProduct.category === category
  );
  const productList = filteredProduct.map((curProduct, index) => (
    <ProductCard
      key={index}
      image={curProduct.image}
      hoverImage={curProduct.hoverImage}
      name={curProduct.name.slice(0, 30) + "..."}
      discountedPrice={curProduct.variety[0].discountedPrice}
      originalPrice={curProduct.variety[0].originalPrice}
      discount={curProduct.variety[0].discount}
    />
  ));

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
          <SwiperComp sliderElements={productList} view={3} />
        </div>
      </div>
    </div>
  );
};

export default FilteredProduct;
