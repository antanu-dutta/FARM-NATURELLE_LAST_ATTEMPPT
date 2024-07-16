import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import PrimaryButton from "../reusable components/PrimaryButton";

const ProductCard = (props) => {
  const { image, hoverImage, name, discountedPrice, originalPrice, discount } =
    props;
  return (
    <div className=" bg-white shadow-md overflow-hidden rounded-2xl">
      <div className="relative group">
        <img src={image} alt={name} className="w-full cursor-pointer" />
        <img
          src={hoverImage}
          alt={name}
          className="absolute top-0 left-full w-full group-hover:left-0 transition-all cursor-pointer"
        />
        <div className="absolute top-0 flex items-center justify-between p-3 w-full ">
          <span className="px-2 py-1 bg-orange text-low text-white rounded-3xl">
            Best Seller
          </span>
          <FaRegHeart className="text-2xl" />
        </div>
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold">{name}</p>
        <hr className="my-3" />
        <div className="flex mb-4 items-center gap-2">
          <span className="text-gray-600 line-through font-semibold">
            Rs. {originalPrice}
          </span>
          <span className="text-black text-sm font-medium">
            Rs. {discountedPrice}
          </span>
          <span className="text-low font-medium p-1 text-white bg-red-600 rounded-lg">
            SAVE {discount}
          </span>
        </div>
        <PrimaryButton className={"w-full"}>add to cart</PrimaryButton>
      </div>
    </div>
  );
};

export default ProductCard;
