"use client";
import { Combobox } from "@headlessui/react";
import { Datepicker } from "flowbite-react";
import { useState } from "react";

function DatePicker({ setValue, register, errors }: any) {
  const handleMoveInDatePickerChange = (date: any) => {
    const fomatedDate =
      date.getDay() + "/ " + date.getMonth() + " / " + date.getFullYear();
    console.log("move in : ", fomatedDate);

    setValue("moveInDate", date);
  };
  const handleMoveOutDatePickerChange = (date: any) => {
    const fomatedDate =
      date.getDay() + "/ " + date.getMonth() + " / " + date.getFullYear();

    setValue("moveOutDate", date);
  };

  return (
    <div className="flex justify-evenly items-center my-2">
      <div className="lg:mr-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Move-in Date
        </label>
        <Datepicker
          {...register("moveInDate", {
            required: true,
          })}
          onSelectedDateChanged={handleMoveInDatePickerChange}
        />
        {errors.moveInDate && (
          <span className="text-xs text-rose-500">This field is required</span>
        )}
      </div>
      <div className="lg:ml-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Move-out Date
        </label>
        <Datepicker
          {...register("moveOutDate", {
            required: true,
          })}
          onSelectedDateChanged={handleMoveOutDatePickerChange}
        />
        {errors.moveOutDate && (
          <span className="text-xs text-rose-500">This field is required</span>
        )}
      </div>
    </div>
  );
}

export default DatePicker;
