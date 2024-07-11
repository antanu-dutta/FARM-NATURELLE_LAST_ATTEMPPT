import React from "react";

const CompanyForm = () => {
  const inputField = [
    {
      id: "companyName",
      label: "What is your Company name?",
      type: "text",
      placeHolder: "Enter your Company/Brand name",
    },
    {
      id: "companyLocation",
      label: "Company Location",
      type: "text",
      placeHolder: "Enter Company Number",
    },
    {
      id: "message",
      label: "Message",
      type: "textArea",
      placeHolder: "Message",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-8 mb-8">
      {inputField.map((curField, index) => (
        <div
          className={`${
            curField.type === "textArea" ? "col-span-full" : "relative"
          }`}
          key={index}
        >
          <label className="text-xl text-left block mb-2" htmlFor={curField.id}>
            {curField.label}
          </label>
          {curField.type !== "textArea" ? (
            <input
              type={curField.type}
              placeholder={curField.placeHolder}
              id={curField.id}
              className="p-5 w-full border border-black rounded-xl outline-none"
            />
          ) : (
            <textarea
              placeholder={curField.placeHolder}
              className=" p-5 w-full border col-span-full border-black rounded-xl outline-none"
            ></textarea>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default CompanyForm;
