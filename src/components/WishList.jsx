import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const WishList = ({ closeWishList }) => {
  return (
    <div className="fixed-element grid place-content-center">
      <div className="w-[1000px] h-[700px] bg-white">
        <div className="bg-faded-black p-1 text-white flex gap-3 items-center justify-end">
          <Link to="/login">
            <span>Login</span>
          </Link>
          <HiMiniXMark
            className="cursor-pointer"
            size={20}
            onClick={() => closeWishList(false)}
          />
        </div>
        <div className="py-5 px-4">
          <h1 className="text-3xl font-medium mb-3">My Wishlist</h1>
          <div className="px-3 border flex items-center gap-4">
            <IoIosSearch />
            <input
              type="text"
              className="text-sm  p-2 w-full outline-none"
              placeholder="Search item"
            />
          </div>
          <div className="text-center mt-24 text-sm">No Products !</div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
