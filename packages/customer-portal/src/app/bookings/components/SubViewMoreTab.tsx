import { step } from "@material-tailwind/react";
import { useState } from "react";

const items = ["Truck", "Rail"];

function SubViewMoreTab() {
  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);
  const handleCheckboxChangeA = () => {
    setIsCheckedA(!isCheckedA);
  };
  const handleCheckboxChangeB = () => {
    setIsCheckedB(!isCheckedB);
  };
  return (
    <ul role="list" className="divide-y divide-gray-200">
      <li className="px-4 py-2 text-sm body-semibold text-cyan-800 flex justify-end w-96 sm:px-0">
        ST20&apos;
      </li>
      <li className="px-4 py-2 text-xs text-gray-600 flex justify-between w-96 sm:px-0">
        <div className="lg:w-1/4 ml-4 lg:ml-0 flex justify-between item-center">
          <input
            className="w-4 h-4 text-sky-400 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            checked={isCheckedA}
            onChange={handleCheckboxChangeA}
            id={`checkbox-${step}`}
          />
          <div className="block lg:ml-0 text-xs paragraph-medium">Truck</div>
        </div>
        <div className="block text-xs paragraph-semibold text-primary-500">
          $360
        </div>
      </li>
      <li className="px-4 py-2 text-xs text-gray-600 flex justify-between w-96 sm:px-0">
        <div className="lg:w-1/4 ml-4 lg:ml-0 flex justify-between item-center">
          <input
            className="w-4 h-4 text-sky-400 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            checked={isCheckedB}
            onChange={handleCheckboxChangeB}
            id={`checkbox-${step}`}
          />
          <div className="block lg:ml-0 text-xs paragraph-medium">Rail</div>
        </div>
        <div className="block text-xs text-primary-500 paragraph-semibold">
          $360
        </div>
      </li>
    </ul>
  );
}

export default SubViewMoreTab;
