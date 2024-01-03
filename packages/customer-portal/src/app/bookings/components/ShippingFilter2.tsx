import { useState } from "react";
import SearchBar from "./SearchBar";
import Load from "./Load";
import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function ShippingFilter2() {
  const [origin, setOrigin] = useState("Where are you shipping from.");
  const [destination, setDestination] = useState("Where are you shipping to.");
  const [originCountry, setOriginCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [type, setType] = useState("");
  return (
    <div className="flex justify-center flex-wrap items-center lg:px-10 mt-10">
      <SearchBar
        orignDestination={origin}
        orignDestinationTitle={"Origin"}
        type={type}
        country={originCountry}
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
        type={type}
        country={destinationCountry}
        setOriginDestinationCountry={(country: any) => {
          setDestinationCountry(country);
        }}
        setType={(medium: any) => {
          setType(medium);
        }}
      />
      <Load />
      <button className="flex justify-center items-center shadow-md rounded-md p-2 py-3 bg-white">
        <MagnifyingGlassIcon className="text-gray-600 h-8 " />
      </button>
    </div>
  );
}

export default ShippingFilter2;
