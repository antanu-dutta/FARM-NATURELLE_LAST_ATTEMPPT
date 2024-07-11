import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const FooterContact = () => {
  return (
    <div className="flex flex-col text-white">
      <h2 className="font-bold text-lg mb-4">CONTACT INFO</h2>
      <p className="mb-4">
        PHONE: <br />
        98109 88725, 81305 31333
      </p>
      <p className="mb-4">
        EMAIL: <br />
        hello@farmnaturelle.com
      </p>
      <div className="px-4 flex items-center gap-4 text-2xl">
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
        <FaYoutube />
      </div>
    </div>
  );
};

export default FooterContact;
