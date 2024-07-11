import React from "react";
import ContactForm from "./ContactForm";
import { contactImages } from "../data assets/Contactus";

const ContactContent = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="flex gap-7">
          <ContactForm />
          <div className="flex flex-col gap-3">
            {contactImages.map((curImg, index) => {
              return (
                <div>
                  <img src={curImg.url} />
                  {curImg.text && (
                    <p className="text-sm w-1/2">{curImg.text}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
