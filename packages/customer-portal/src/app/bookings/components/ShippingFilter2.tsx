"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import Load from "./Load";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Datepicker } from "flowbite-react";

function ShippingFilter2() {
  const [origin, setOrigin] = useState("Where are you shipping from.");
  const [destination, setDestination] = useState("Where are you shipping to.");
  const [originCountry, setOriginCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [originState, setOriginState] = useState("");
  const [destinationState, setDestinationState] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (date: any) => {
    setDate(date);
    console.log(date);
  };

  return (
    <div className="w-full flex-center">
      <div className="flex-center py-12 rounded-lg w-11/12 shadow-md flex-wrap lg:px-10 mt-10">
        <div className="bg-white flex-center rounded-lg shadow-md flex-wrap">
          <SearchBar
            orignDestination={origin}
            orignDestinationTitle={"Origin"}
            setState={setOriginState}
            type={type}
            setName={setOrigin}
            country={originCountry}
            set
            setOriginDestinationCountry={(country: any) => {
              setOriginCountry(country);
            }}
            setType={(medium: any) => {
              setType(medium);
            }}
          />
          <SearchBar
            orignDestination={destination}
            orignDestinationTitle={"Destination"}
            setName={setDestination}
            type={type}
            country={destinationCountry}
            setState={setDestinationState}
            setOriginDestinationCountry={(country: any) => {
              setDestinationCountry(country);
            }}
            setType={(medium: any) => {
              setType(medium);
            }}
          />
          <Load handleDateChange={handleDateChange} />
          <button className="flex shadow-md justify-center items-center rounded-md p-2 py-3">
            <MagnifyingGlassIcon className="text-gray-600 h-8 " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShippingFilter2;
