import React, { useState } from "react";
import { nav } from "../data assets/navlinks";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavLinks = ({ showNavLinks, setShowNavLinks }) => {
  const handleHover = (childNav, mainNav) => {
    if (childNav) {
      setShowNavLinks(mainNav);
    }
  };

  return (
    <>
      <ul className="flex items-center gap-4">
        {nav.map((item, index) => {
          const mainNav = Object.keys(item)[0];
          const childNav = item[mainNav];
          return (
            <li
              key={index}
              className="font-semibold relative cursor-pointer "
              onMouseOver={() => handleHover(childNav, mainNav)}
              onMouseLeave={() => setShowNavLinks(null)}
            >
              <div className="flex items-center gap-2">
                <span className="">{mainNav}</span>
                {childNav && (
                  <MdKeyboardArrowDown
                    className={`transition-all ${
                      showNavLinks === mainNav && "rotate-180 "
                    }`}
                  />
                )}
              </div>

              {childNav && (
                <ul
                  className={`ml-4 mt-2 top-4  bg-white shadow-2xl absolute w-[270px] px-2 py-4  transition-transform duration-300 ease-in-out transform ${
                    showNavLinks === mainNav
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0 pointer-events-none"
                  }`}
                >
                  {childNav.map((child, childIndex) => (
                    <li
                      key={childIndex}
                      className="mt-1 font-medium cursor-pointer  transition-all mb-2 hover:text-primary"
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavLinks;
