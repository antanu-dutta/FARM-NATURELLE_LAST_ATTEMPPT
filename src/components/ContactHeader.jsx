import React from "react";
import { Link } from "react-router-dom";

const ContactHeader = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://farmnaturelle.com/cdn/shop/files/Group_14856874.png?v=1697981044"
          alt=""
          className="w-full object-cover "
        />
        <div className="absolute top-0 flex justify-center text-white items-center flex-col w-full h-full">
          <h2 className="text-7xl mb-4">Contact Us</h2>
          <span className="font-bold">
            <Link to="/">Home</Link> / Contact
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
