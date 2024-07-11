import React from "react";
import { paymentCardIcon } from "../data assets/footerassets";

const FooterCopyRight = () => {
  return (
    <div className="border-t border-white py-10 ">
      <div className="container">
        <div className="text-white flex items-center justify-between">
          <p>&copy; 2024 Farm Naturelle . All rights reserved.</p>
          <div className="flex items-center gap-4">
            {paymentCardIcon.map((curIcon, index) => (
              <img src={curIcon} key={index} className="w-auto h-[25px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyRight;
