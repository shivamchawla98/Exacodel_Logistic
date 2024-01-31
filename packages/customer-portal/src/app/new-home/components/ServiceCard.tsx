import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

function ServiceCard() {
  return (
    <div className="w-52 shadow-md bg-gray-100 hover:scale-105 cursor-pointer border-orange-500 border-b-2">
      <div className="flex-start px-4 pt-6">
        <TbTruckDelivery className="text-orange-400 w-5 h-5" />
      </div>
      <div className="flex justify-start mt-2 pl-2 items-center w-4/5 border-s-8 border-orange-400">
        <p className=" text-sm  w-28 paragraph-semibold">Freight Services</p>
      </div>
      <div className="flex justify-start pt-2 pb-6 w-full pr-4  items-center px-4">
        <p className=" text-gray-700 text-xs paragraph-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit
          amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
