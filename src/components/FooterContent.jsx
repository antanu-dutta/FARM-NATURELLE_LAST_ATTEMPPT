import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import { footerCategory, footerLinks } from "../data assets/footerassets";
import FooterContact from "./FooterContact";

const FooterContent = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_cropped-cropped-FN_logo_2021-1-e1662637473598_png.png?v=1696492045"
              alt="logo"
              className="w-[80px]"
            />
            <p className="text-sm text-white">
              Become a Insider and get 10% off your order today. Plus we'll keep
              you up-to-date with the latest theme news.
            </p>
            <div className="bg-white px-4 py-2 rounded flex items-center justify-between">
              <input
                type="text"
                placeholder="Enter you Email Address"
                className="outline-none  w-full text-sm"
              />
              <FaLongArrowAltRight />
            </div>
          </div>
          <FooterLinks heading="CATEGORIES" links={footerCategory} />
          <FooterLinks heading="IMPORTANT LINKS" links={footerLinks} />
          <FooterContact />
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
