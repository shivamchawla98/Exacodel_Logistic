'use client'
import { shippingLines } from '../data/dropdownData';
import { useState } from 'react';

const Listings = ({ id, line, handleClick, active }: any) => {
  return (
    <div className="flex text-sm items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
      <input
        id={id}
        type="checkbox"
        defaultValue=""
        name="bordered-checkbox"
        className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={active.includes(line)} // Check if the line is active (exists in the active array)
        onChange={() => handleClick(line)} // Pass the line as an argument to handleClick
      />
      <label
        htmlFor={id}
        className={`p-4 font-medium ${
          active.includes(line) ? 'text-gray-700 font-semibold' : 'text-gray-600'
        } `}
      >
        {line}
      </label>
    </div>
  );
};

function ShipingLineFilter() {
  const [active, setActive] = useState<string[]>([])

  const handleClick = (line: string) => {
    if (active.includes(line)) {
      // If the line is already active, remove it from the active array
      setActive(active.filter((item) => item !== line));
    } else {
      // If the line is not active, add it to the active array
      setActive([...active, line]);
    }
  };

  return (
    <div className="flex justify-center flex-col mt-11 md:ml-8 rounded-lg ">
      <p className="text-xl font-medium text-gray-900 dark:text-white text-center pb-4 pt-4">
        Shipping Lines
      </p>
      {shippingLines.slice(0, 4).map((line, index) => (
        <Listings key={index} id={line} line={line} handleClick={handleClick} active={active} />
      ))}
    </div>
  );
}

export default ShipingLineFilter;
