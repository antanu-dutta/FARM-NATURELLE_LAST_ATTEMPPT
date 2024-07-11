import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

const Search = ({ openSearch, setOpenSearch }) => {
  return (
    <div
      className={`p-2 absolute top-0 left-0 w-full transition-all duration-300 transform ${
        openSearch ? "opacity-100 scale-100 " : "opacity-0 scale-0 "
      }`}
    >
      <div className="flex items-center gap-4 ">
        <div className="w-full flex items-center p-3 border-gray-600 border rounded-xl gap-4 ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none border-none text-sm"
          />
          <FaSearch />
        </div>
        <div
          className="rounded-full cursor-pointer p-2 border border-gray-800"
          onClick={() => setOpenSearch(false)}
        >
          <HiMiniXMark size={20} />
        </div>
      </div>
    </div>
  );
};

export default Search;
