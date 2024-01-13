import { useState } from "react";
import SearchBar from "./SearchBar";
import Load from "./Load";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function ShippingFilter2() {
  const [origin, setOrigin] = useState("Where are you shipping from.");
  const [destination, setDestination] = useState("Where are you shipping to.");
  const [originCountry, setOriginCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [type, setType] = useState("");
  return (
    <div className="w-full flex-center">
      <div className="flex-center py-12 rounded-lg w-11/12 shadow-md flex-wrap items-center lg:px-10 mt-10">
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
        <button className="flex shadow-md justify-center items-center rounded-md p-2 py-3">
          <MagnifyingGlassIcon className="text-gray-600 h-8 " />
        </button>
      </div>
    </div>
  );
}

export default ShippingFilter2;
