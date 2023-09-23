
import { useState } from "react";
import { BsTruck } from "react-icons/bs";

function ViewMoreTab({ setActiveStep, step, setCost, cost }: any) {
  const costOfThis = 360;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full h-12 bg-white flex items-center justify-between">
      <div className="flex items-center  text-sm text-gray-600  font-medium ml-4">
        <input
          className="h-5 w-5 bg-sky-300 rounded-md ml-2"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id={`checkbox-${step}`}
        />
        <label
          className="inline-block ml-2 cursor-pointer text-gray-800"
          htmlFor={`checkbox-${step}`}
        >
          <BsTruck className="w-6" />
        </label>
        <label
          className="inline-block ml-2 cursor-pointer text-gray-800"
          htmlFor={`checkbox-${step}`}
        >
          Default checkbox
        </label>
      </div>
      <p className="font-medium text-sky-500 mr-4">${costOfThis}</p>
    </div>
  );
}

export default ViewMoreTab;
