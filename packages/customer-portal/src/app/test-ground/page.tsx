"use client";
import { Step, Stepper } from "@material-tailwind/react";
import { useState } from "react";
import { FaSeedling, FaShip } from "react-icons/fa";

function page({
  src,
  to,
  from,
  days,
  id,
  Co2 = 230222,
  costEntered = 768,
  container = "ST20",
  numberOfContainer = 1,
  containerSizeType,
}: any) {
  return (
    <div className="w-full flex-center">
      <div className="flex-center shadow-lg rounded-lg  w-2/4 flex-col">
        <div className="flex-center w-full border-b-2 p-2   border-gray-200">
          <img
            className="h-16 w-16"
            src={"images/COSCO.svg"}
            alt="cosco logo"
          />
        </div>
        <div className="rounded flex-between shadow-md w-full">
          <div className="flex-center flex-col w-3/4 ">
            <div className="flex-center flex-col">
              <FaShip className="h-4 w-4 text-sky-800" />
              <p className="text-xs paragraph-semibold text-gray-600">
                {days} Days
              </p>
            </div>
            <div className="px-6 flex justify-between w-full">
              <p className="text-base base-medium text-gray-600">{to}</p>
              <p className="text-base base-medium text-gray-600">{from}</p>
            </div>
            <div className="flex-center my-2">
              <div className="flex-center">
                <div className="h-4 w-4 rounded-full border-2 border-orange-500"></div>
                <div className="w-20 h h-0.5 mx-1 bg-orange-500"></div>
              </div>
              <div className="flex-center">
                <div className="h-4 w-4 rounded-full border-2 border-orange-500"></div>
                <div className="w-20 h h-0.5 mx-1 bg-orange-500"></div>
              </div>
              <div className="flex-center">
                <div className="h-4 w-4 rounded-full border-2 border-orange-500"></div>
                <div className="w-20 h h-0.5 mx-1 bg-orange-500"></div>
                <div className="h-4 w-4 rounded-full border-2 border-orange-500"></div>
              </div>
            </div>
            <div className="px-6 flex justify-evenly w-full">
              <div></div>
              <p className="text-sm paragraph-medium text-gray-600">{to}</p>
              <p className="text-sm paragraph-medium text-gray-600">{from}</p>
              <div></div>
            </div>
          </div>

          <div className="flex-center flex-col border-l-2 h-40  border-gray-200 w-1/4">
            <div className="flex"></div>
            <div className="flex justify-start mb-2 mt-4">
              <p className="text-gray-500 paragraph-semibold text-xs pr-2">
                Valid :{" "}
              </p>
              <p className="text-xs paragraph-semibold">2024-02-20</p>
            </div>
            <div className="flex justify-start mb-2">
              <p className="text-gray-500 paragraph-semibold text-xs pr-2">
                ID :{" "}
              </p>
              <a
                href="#"
                className="text-xs paragraph-semibold hover:text-sky-600"
              >
                {id}
              </a>
            </div>
            <div className="flex justify-start mb-2">
              <FaSeedling className="text-green-400 w-4 h-4" />
              <a
                href="#"
                className="text-xs paragraph-semibold pl-2 hover:text-sky-600"
              >
                {Co2} kg CO2
              </a>
            </div>
            <button className="body-medium leading-6  z-40 bg-orange-500 px-3 rounded-md shadow-sm  text-white hover:bg-orange-400 hover:scale-95 py-1">
              Book Now ₹{costEntered}
            </button>
            <div className="flex justify-end mt-2 h-8 w-full">
              <button className="w-full bg-sky-700 text-white rounded-ee-md hover:bg-sky-600 h-8 paragraph-medium text-sm">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
