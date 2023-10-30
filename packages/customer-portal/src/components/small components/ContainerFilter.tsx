'use client'
import { useState } from "react";
import { containerTypes } from "../data/dropdownData";


const Listings = ({containerSize, active, handleClick}: any) => {

  return (

    <li className="w-full border-b border-gray-200 rounded-t-lg ">
    <div className="flex items-center pl-3">
      <input
        id={containerSize}
        onClick={() => handleClick(containerSize)}
        type="radio"
        defaultValue=""
        name="list-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
      />
      <label
        htmlFor={containerSize}
        className={`p-4 font-medium ${active == containerSize ?  "text-gray-800 font-semibold" : "text-gray-600"}`}
        onClick={() => handleClick(containerSize)}
      >
        {containerSize}
      </label>
    </div>
  </li>
  );
}


function ContainerFilter() {
  const [active, setActive] = useState(null);

  const handleClick = (containerSize: any) => {
    setActive(containerSize);
  };

  return (
    <div className="mt-4 bg-white rounded-sm">
      <p className="text-xl font-medium text-gray-700 text-center mb-4">
        Choose Container Size
      </p>
      <ul className="text-sm font-medium text-gray-600 ">
        {containerTypes.map((containerType, i) => (
          <Listings
            key={i}
            containerSize={containerType}
            active={active}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}


export default ContainerFilter;
