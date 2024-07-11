import React from "react";
import { footerCompany } from "../data assets/footerassets";
import FooterContent from "./FooterContent";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <footer>
      <div className="footer-image">
        <div className="container">
          <div className="text-center">
            <h2 className="text-primary text-4xl font-semibold">
              Also Available On
            </h2>
            <div className="flex items-center justify-between gap-9 pt-10 pb-[340px]">
              {footerCompany.map((curImg, index) => (
                <img src={curImg} key={index} className="w-[120px]" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <FooterContent />
        <FooterCopyRight />
      </div>
    </footer>
  );
};

export default Footer;
