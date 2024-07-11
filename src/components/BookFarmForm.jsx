import React from "react";
import PrimaryButton from "../reusable components/PrimaryButton";

const BookFarmForm = ({ bookFarminputField, bookFarmbookingDetails }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex-1 border border-white p-6">
      <form className="flex gap-5 flex-col" onSubmit={handleOnSubmit}>
        {bookFarminputField.map((item, index) => (
          <input
            key={index}
            type={item.type}
            className="py-3 px-6 border bg-transparent text-white font-medium border-white outline-none"
            placeholder={item.placeholder}
          />
        ))}
        {bookFarmbookingDetails.map((item, index) => (
          <div
            key={index}
            className="py-3 px-6  text-white font-medium border-white  border bg-transparent flex items-center justify-between"
          >
            <div className="flex items-center">
              <input type="radio" className="me-4" name={item.radioName} />
              <span>
                {item.firstText} <br /> {item.secondText}
              </span>
            </div>
            <p className="text-white text-base">
              &#8377; {item.price}{" "}
              <span className="text-[#95bd58] text-lg"></span>
            </p>
          </div>
        ))}
        <PrimaryButton type="submit" className={"text-white border-white"}>
          BOOK A FREE VISIT
        </PrimaryButton>
      </form>
    </div>
  );
};

export default BookFarmForm;
