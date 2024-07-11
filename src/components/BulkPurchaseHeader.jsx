import React from "react";
import Heading from "../reusable components/Heading";
import { Link } from "react-router-dom";

function BulkPurchaseHeader() {
  return (
    <div className="relative">
      <img
        src="https://farmnaturelle.com/cdn/shop/files/Frame_14857631_24e99a43-f359-4831-aefa-02c2c37c14cf.png?v=1698825737"
        alt="About-us image"
        className="object-cover w-full"
      />
      <div className="absolute top-0 text-white left-0 w-full h-full flex items-center flex-col justify-center">
        <Heading className={"text-[64px]"}>Bulk Orders (B2B)</Heading>
        <p className="font-bold text-base">
          <Link>Home</Link> / Bulk Orders
        </p>
      </div>
    </div>
  );
}

export default BulkPurchaseHeader;
