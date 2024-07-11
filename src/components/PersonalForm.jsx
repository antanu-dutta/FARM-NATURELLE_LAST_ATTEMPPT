import React from "react";
import Heading from "../reusable components/Heading";

const PersonalForm = () => {
  const personalForm = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeHolder: "Enter you First name",
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeHolder: "Enter you Last name",
    },
    {
      id: "email",
      label: "Email Id",
      type: "email",
      placeHolder: "Enter you Email Id",
    },
    {
      id: "contact",
      label: "Contact Number",
      type: "number",
      placeHolder: "Enter you Contact Number",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-8 mb-8">
      {personalForm.map((curField, index) => (
        <div className="" key={index}>
          <label className="text-xl text-left block mb-2" htmlFor={curField.id}>
            {curField.label}
          </label>
          <input
            type={curField.type}
            placeholder={curField.placeHolder}
            id={curField.id}
            className="p-5 w-full border border-black rounded-xl outline-none"
          />
        </div>
      ))}
    </div>
  );
};

export default PersonalForm;
