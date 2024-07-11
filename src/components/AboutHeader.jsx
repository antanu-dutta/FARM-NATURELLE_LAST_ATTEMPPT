import React from "react";
import Heading from "../reusable components/Heading";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <div className="relative">
      <img
        src="https://farmnaturelle.com/cdn/shop/files/Group_14856858.jpg?v=1697442418"
        alt="About-us image"
        className="object-cover w-full"
      />
      <div className="absolute top-0 text-white left-0 w-full h-full flex items-center flex-col justify-center">
        <Heading className={"text-[64px]"}>About Us</Heading>
        <p className="font-bold text-base">
          <Link>Home</Link> / About us
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
