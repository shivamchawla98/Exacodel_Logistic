'use client'

import { useState } from "react";
import { BsTruck } from "react-icons/bs";

function ViewMoreTab({setActiveStep, step, setCost, cost}) {
    const costOfThis = 360;
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)   
      };
  return (
    <div className='w-full h-10 bg-white flex shadow-md justify-between mx-auto'>
        <div className="flex justify-center align-middle ml-10">
      <input
      className='h-4 bg-sky-300 rounded-md w-4 mt-3 ml-2'
    type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        id="checkboxDefault"
      />
      <BsTruck className="text-gray-800 w-6 mt-3 mx-2"/>
      <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer h-6 pt-2 font-medium text-gray-600 mx-2"
        htmlFor="checkboxDefault"
      >
        Default checkbox
      </label>

        </div>
        <p className="font-medium text-rose-500 mt-2 lg:mr-10">${costOfThis}</p>
    </div>
  )
}

export default ViewMoreTab