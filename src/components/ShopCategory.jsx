import React, { useEffect } from "react";
import Heading from "../reusable components/Heading";
import { Link } from "react-router-dom";

const ShopCategory = ({ products }) => {
  const { headingImgUrl, links, heading } = products;

  return (
    <div className="bg-beige py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <img src={headingImgUrl} alt="" className="w-[142px]" />
          <Heading className="text-primary">{heading}</Heading>
          <div className="flex flex-wrap justify-center">
            {links.map((curProduct, index) => (
              <div
                className={`${
                  heading === "Shop by Products" ? "w-[16%]" : "w-[12%]"
                } transition-all hover:scale-105 p-4`}
                key={index}
              >
                <Link to={curProduct.path}>
                  <figure>
                    <img
                      src={curProduct.imageUrl}
                      alt={curProduct.name}
                      className={`w-full mb-2 border-2 border-greenish-beige ${
                        heading === "Shop by Products"
                          ? "rounded-xl border-primary"
                          : "rounded-full border-greenish-beige"
                      }`}
                    />
                    <figcaption className="text-center font-medium text-primary">
                      {curProduct.name}
                    </figcaption>
                  </figure>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
