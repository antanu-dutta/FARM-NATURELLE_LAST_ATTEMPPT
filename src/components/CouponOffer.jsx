import React from "react";
import { PiCopySimple } from "react-icons/pi";

const CouponOffer = () => {
  return (
    <div className="bg-primary  p-2 flex items-center justify-center text-white">
      <span className="me-4 text-normal">
        Get an extra 5% discount on orders over ₹1000, up to ₹100 - Use coupon
        NFARM100
      </span>
      <PiCopySimple size={25} />
    </div>
  );
};

export default CouponOffer;
