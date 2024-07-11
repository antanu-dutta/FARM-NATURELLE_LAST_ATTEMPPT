import React from "react";
import {
  bookFarmbookingDetails,
  bookFarmText,
  bookFarminputField,
} from "../data assets/Farm";
import Title from "../reusable components/Title";
import Heading from "../reusable components/Heading";
import Paragraph from "../reusable components/Paragraph";
import BookFarmForm from "./BookFarmForm";

function BookFarm() {
  return (
    <div className="pt-[80px] pb-[67px] bookingFarm">
      <div className="container">
        <div className="flex  gap-4">
          <div className="flex-1">
            <Title className="text-pear">EXPERIENCE THE BEAUTY OF NATURE</Title>
            <Heading className="text-white">Book Your Farm Visit</Heading>
            <Title className="text-xl text-title  block mb-3">
              During the Visit
            </Title>
            {bookFarmText.map((item, index) => (
              <Paragraph
                key={index}
                className="mb-5 text-[15px] text-gray-200 font-medium"
              >
                {item}
              </Paragraph>
            ))}
          </div>
          <BookFarmForm
            bookFarmbookingDetails={bookFarmbookingDetails}
            bookFarminputField={bookFarminputField}
          />
        </div>
      </div>
    </div>
  );
}

export default BookFarm;
