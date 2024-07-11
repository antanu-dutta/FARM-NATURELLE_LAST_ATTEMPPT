import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import PrimaryButton from "../reusable components/PrimaryButton";

const ProductCard = () => {
  return (
    <div className=" bg-white shadow-md overflow-hidden rounded-2xl">
      <div className="relative group">
        <img
          src="https://farmnaturelle.com/cdn/shop/files/3_04c1d709-5e90-40b5-83fc-6ee87ba55563_800x.jpg?v=1708000860"
          alt=""
        />
        <img
          src="https://farmnaturelle.com/cdn/shop/files/2_52d72052-4078-4146-a5bb-7eb9c66b2070_800x.jpg?v=1703749282"
          alt=""
          className="absolute top-0 left-full group-hover:left-0 transition-all"
        />
        <div className="absolute top-0 flex items-center justify-between p-3 w-full ">
          <span className="px-2 py-1 bg-orange text-low text-white rounded-3xl">
            Best Seller
          </span>
          <FaRegHeart className="text-2xl" />
        </div>
      </div>
      <div className="p-4">
        <p>Lorem ipsum dolor sit.</p>
        <hr className="my-3" />
        <div className="flex mb-4 items-center gap-2">
          <span className="text-gray-600 line-through text-base">
            Rs. 459.00
          </span>
          <span className="text-black text-sm font-medium">Rs. 369.00</span>
          <span className="text-low font-medium p-1 text-white bg-red-600 rounded-lg">
            SAVE 20%
          </span>
        </div>
        <PrimaryButton className={"w-full"}>add to cart</PrimaryButton>
      </div>
    </div>
  );
};

export default ProductCard;
