import { useState } from "react";
import { BsTruck } from "react-icons/bs";
import { LuSprout } from "react-icons/lu";
import SubViewMoreTab from "./SubViewMoreTab";

function ViewMoreTab({ setActiveStep, step, setCost, cost }: any) {
  const costOfThis = 360;
  const [isChecked, setIsChecked] = useState(false);
  const [viewSubMenu, setViewSubMenu] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div
        onClick={() => {
          setViewSubMenu(!viewSubMenu);
        }}
        className="w-full h-12 bg-white flex items-center justify-between"
      >
        <div className="flex items-center  text-sm text-gray-600  font-medium ml-4">
          <input
            className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 rounded focus:ring-fuchsia-800 dark:focus:ring-primary-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id={`checkbox-${step}`}
          />
          <label
            className="inline-block ml-2 cursor-pointer text-gray-600"
            htmlFor={`checkbox-${step}`}
          >
            <BsTruck className="w-5" />
          </label>
          <label
            className="inline-block ml-2 text-xs cursor-pointer text-gray-600"
            htmlFor={`checkbox-${step}`}
          >
            Default checkbox
          </label>
        </div>
        <div className="flex justify-evenly items-center">
          <LuSprout className="text-green-500 h-4 w-4 " />
          <p className=" ml-2 text-xs cursor-pointer text-gray-600">
            426.82 kg CO2
          </p>
        </div>
        <p className="text-sm paragraph-semibold text-primary-500 mr-4">
          ${costOfThis}
        </p>
      </div>
      {viewSubMenu && <SubViewMoreTab />}
    </div>
  );
}

export default ViewMoreTab;
