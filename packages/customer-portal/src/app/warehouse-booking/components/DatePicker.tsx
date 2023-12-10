"use client";
import { Combobox } from "@headlessui/react";
import { Datepicker } from "flowbite-react";
import { useState } from "react";

function DatePicker({ setValue, register }: any) {
  const handleMoveInDatePickerChange = (date: any) => {
    console.log("move in : ", date);

    setValue("moveInDate", date);
  };
  const handleMoveOutDatePickerChange = (date: any) => {
    console.log("move in : ", date);

    setValue("moveOutDate", date);
  };

  return (
    <div className="flex justify-evenly items-center my-2">
      <div className="lg:mr-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Move-in Date
        </label>
        <Datepicker onSelectedDateChanged={handleMoveInDatePickerChange} />
      </div>
      <div className="lg:ml-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Move-out Date
        </label>
        <Datepicker onSelectedDateChanged={handleMoveOutDatePickerChange} />
      </div>
    </div>
  );
}

export default DatePicker;
