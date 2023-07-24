'use client'
import { useState } from "react";
import { containerTypes } from "../data/dropdownData";


const Listings = ({containerSize, active, handleClick}) => {

  return (

    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
    <div className="flex items-center pl-3">
      <input
        id={containerSize}
        onClick={() => handleClick(containerSize)}
        type="radio"
        defaultValue=""
        name="list-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor={containerSize}
        className={`p-4 font-semibold ${active == containerSize ?  "text-gray-900" : "text-gray-600"}`}
        onClick={() => handleClick(containerSize)}
      >
        {containerSize}
      </label>
    </div>
  </li>
  );
}


function ContainerFilter() {
  const [active, setActive] = useState(null)
  const handleClick = (containerSize) => {
    setActive(containerSize)
  }
  

  return (
    <>
    <ul className="mt-14 w-50 pt-6 m-4 md:ml-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <p className="p-1 text-xl font-semibold text-gray-900 dark:text-white text-center">
      Choose Container Size
    </p>
      {containerTypes.map((containerType, i) => 
      <Listings 
      key={i} containerSize ={containerType} active={active}
      handleClick={handleClick}
      />)}
    </ul>
  </>
  );
}

export default ContainerFilter;
