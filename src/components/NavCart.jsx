import React from "react";
import { HiMiniXMark } from "react-icons/hi2";

const NavCart = ({ closeCart }) => {
  return (
    <div className="fixed-element">
      <div className="absolute right-0 top-0 bg-white w-[21%] h-full p-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">Your Cart (0)</span>
          <div
            className="rounded-3xl bg-gray-500 text-2xl text-white"
            onClick={() => closeCart(false)}
          >
            <HiMiniXMark />
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default NavCart;
