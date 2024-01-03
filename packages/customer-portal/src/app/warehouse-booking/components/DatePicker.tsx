"use client";
import {
  updateMoveInDate,
  updateMoveOutDate,
} from "@/features/warehouse/warehouse-slice";
import { Combobox } from "@headlessui/react";
import { Datepicker } from "flowbite-react";
import { useDispatch } from "react-redux";

function DatePicker({ setValue, register, errors }: any) {
  const dispatch = useDispatch();
  const handleMoveInDatePickerChange = (date: any) => {
    const fomatedDate =
      date.getDay() + "/ " + date.getMonth() + " / " + date.getFullYear();
    console.log("move in : ", fomatedDate);
    dispatch(updateMoveInDate(date));
    setValue("moveInDate", date);
  };
  const handleMoveOutDatePickerChange = (date: any) => {
    const fomatedDate =
      date.getDay() + "/ " + date.getMonth() + " / " + date.getFullYear();
    dispatch(updateMoveOutDate(date));
    setValue("moveOutDate", date);
  };

  return (
    <div className="flex justify-evenly items-center my-2">
      <div className="lg:mr-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Move-in Date
        </label>
        <Datepicker
          placeholder="Select date start"
          {...register("moveInDate", {
            required: true,
          })}
          onSelectedDateChanged={handleMoveInDatePickerChange}
          minDate={new Date()}
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
          placeholder="Select date end"
          {...register("moveOutDate", {
            required: true,
          })}
          onSelectedDateChanged={handleMoveOutDatePickerChange}
          minDate={new Date()}
        />
        {errors.moveOutDate && (
          <span className="text-xs text-rose-500">This field is required</span>
        )}
      </div>
    </div>
  );
}

export default DatePicker;
