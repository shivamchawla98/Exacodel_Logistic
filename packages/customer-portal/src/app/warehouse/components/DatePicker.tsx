"use client";
import { Combobox } from "@headlessui/react";
import { Datepicker } from "flowbite-react";
import { useState } from "react";

function DatePicker() {
  const [date, setSelectedDate] = useState<any>(0);
  const handleDatePickerChange = (date: any) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div className="flex justify-evenly items-center my-2">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Move-in Date
        </label>
        <Datepicker onSelectedDateChanged={handleDatePickerChange} />
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Move-out Date
        </label>
        <Datepicker onSelectedDateChanged={handleDatePickerChange} />
      </div>
    </div>
  );
}

export default DatePicker;
