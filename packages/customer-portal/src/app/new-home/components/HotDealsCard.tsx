import React from "react";
import { FaShip } from "react-icons/fa";
import { GiSharkFin } from "react-icons/gi";

function HotDealsCard() {
  return (
    <div className="w-52 rounded-lg shadow-lg p-4 flex-col">
      <div className="flex-start px-2 mb-2">
        <FaShip className="w-4 h-4 text-orange-400 mr-2" />
        <p className="text-sm paragraph-medium ">Ningbo, CN</p>
      </div>
      <div className="flex-between items-center pl-2 border-top-2 border-gray-100">
        <div className="flex-start px-2  mt-2 py-1 bg-gray-200">
          <GiSharkFin className="w-4 h-4 text-orange-400 mr-2" />
          <p className="text-xs paragraph-normal ">Ningbo, CN</p>
        </div>
        <p className="paragraph-semibold text-xs pt-1">USD 385</p>
      </div>
    </div>
  );
}

export default HotDealsCard;
