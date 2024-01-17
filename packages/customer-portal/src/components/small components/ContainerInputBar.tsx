"use client";

import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { BsFillBox2Fill } from "react-icons/bs";
import { RxContainer } from "react-icons/rx";
import { Datepicker } from "flowbite-react";

function SearchBar({ register, handleDateChange }: any) {
  const [transportationType, setTransportationType] =
    useState("FCL Containers");
  const [containerType, setContainerType] = useState("20ft");
  const handleTypeChange = (e: any) => {
    setTransportationType(e.target.value);
  };

  return (
    <section
      id="login"
      className="p-4 flex flex-col justify-center max-w-md mx-auto"
    >
      <div className="p-6 bg-gray-100 rounded mx-auto">
        <div className="flex items-center justify-center">
          <input
            type="radio"
            id="fcl"
            name="containerType"
            value="FCL Containers"
            className="hidden"
            checked={containerType === "FCL Containers"}
            onChange={handleTypeChange}
          />
          <input
            type="radio"
            id="lcl"
            name="containerType"
            value="LCL Containers"
            className="hidden"
            checked={transportationType === "LCL Containers"}
            onChange={handleTypeChange}
          />

          <label
            htmlFor="fcl"
            className={`w-32 py-2 text-center text-gray-800 body-medium text-sm cursor-pointer rounded-tl-lg rounded-bl-lg transition duration-300 ${
              transportationType === "FCL Containers"
                ? "bg-fuchsia-800 text-white"
                : "bg-white border border-gray-300"
            }`}
          >
            FCL Containers
          </label>
          <label
            htmlFor="lcl"
            className={`w-32 py-2 text-center text-gray-800 body-medium text-sm cursor-pointer rounded-tr-lg rounded-br-lg transition duration-300 ${
              transportationType === "LCL Containers"
                ? "bg-fuchsia-800 text-white"
                : "bg-white border border-gray-300"
            }`}
          >
            LCL Containers
          </label>
          <div
            className={`h-8 bg-primary-500 rounded-full absolute transition-transform ${
              transportationType === "LCL Containers"
                ? "translate-x-32"
                : "translate-x-0"
            }`}
          ></div>
        </div>
        <div className="flex items-center justify-center flex-col font-black m-3 mb-6">
          <h1 className="tracking-wide text-xl text-gray-900">
            {transportationType}
          </h1>
          <Datepicker onSelectedDateChanged={handleDateChange} />
        </div>
        <div id="login_htmlForm" className="flex flex-col justify-center">
          {transportationType == "FCL Containers" ? (
            <>
              <div className="flex justify-between items-center mb-3">
                <div className="inline-flex items-center self-start">
                  <BsFillBox2Fill size={18} style={{ margin: "7px" }} />
                  <span className="body-medium text-gray-900">
                    Container Type
                  </span>
                </div>

                <select
                  defaultValue={"20FT"}
                  {...register("containerType", { required: true })}
                  className="max-w-sm body-medium py-1.5 px-2 mx-1.5
              block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
              focus:outline-none
              focus:border-primary-500
              focus:ring-1
              focus:ring-primary-500
              focus:invalid:border-primary-500  focus:invalid:ring-primary-500"
                >
                  <option className="text-sm body-medium" value="ST20">
                    20&apos; Standard
                  </option>
                  <option className="text-sm body-medium" value="ST40">
                    40&apos; Standard
                  </option>
                  <option className="text-sm body-medium" value="HQ40">
                    40&apos; High Cube
                  </option>
                  <option className="text-sm body-medium" value="HQ45">
                    45&apos; High Cube
                  </option>
                  <option className="text-sm body-medium" value="REF20">
                    20&apos; Refrigerated
                  </option>
                  <option className="text-sm body-medium" value="REF40">
                    40&apos; Refrigerated
                  </option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div>
                <label
                  htmlFor="weight"
                  className="text-xs body-medium text-black"
                >
                  WEIGHT, MT
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border my-2 remove-arrow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="volume"
                  className="text-xs body-medium text-black"
                >
                  VOLUME, M³
                </label>
                <input
                  type="number"
                  id="volume"
                  className="bg-gray-50 border my-2 remove-arrow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                />
              </div>
            </>
          )}

          <button
            className="transition duration-300 ease-in-out hover:scale-105 px-4 py-1.5 rounded-md shadow-lg bg-primary-500 body-medium text-gray-100 block"
            type="submit"
          >
            <span id="login_process_state" className="hidden">
              Sending :)
            </span>
            <span id="login_default_state">
              Book Now
              <span id="subtotal" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
