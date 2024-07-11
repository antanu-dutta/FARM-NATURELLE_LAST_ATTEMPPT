import React from "react";
import Title from "../reusable components/Title";
import Paragraph from "../reusable components/Paragraph";
import { contactInputField } from "../data assets/Contactus";

const ContactForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="me-6 w-[70%]">
      <p className="text-lg font-medium">Contact Form</p>
      <Paragraph className="text-gray-800 mb-3">
        We value our customers greatly, and are always here to help. If you have
        any questions, queries or comments feel free to drop us a line and we
        will get back to you as soon as we can.
      </Paragraph>
      <form className="flex flex-col gap-6 items-start" onSubmit={handleForm}>
        {contactInputField.map((curField, index) => {
          if (curField.inputType !== "textArea") {
            return (
              <input
                type={curField.inputType}
                placeholder={`${
                  curField.required
                    ? curField.placeHolder + "*"
                    : curField.placeHolder
                }`}
                key={index}
                className="w-full border border-black outline-none p-4"
              />
            );
          } else {
            return (
              <textarea
                placeholder={curField.placeHolder}
                key={index}
                rows={3}
                className="border w-full border-black p-5 outline-none resize-none"
              ></textarea>
            );
          }
        })}
        <button
          type="submit"
          className="rounded bg-primary p-2 uppercase text-white"
        >
          send a message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
