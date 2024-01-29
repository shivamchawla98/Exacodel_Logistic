"use client";

import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { BsFillBox2Fill } from "react-icons/bs";

type Inputs = {
  fclOrLcl: string;
  containerType: string;
  weight: number;
  volume: number;
};

function SearchBar({
  setFclOrLcl,
  setContainer,
  setNumContainer,
  setWeights,
  setVolumes,
  setShowLoad,
}: any) {
  const [transportationType, setTransportationType] =
    useState("FCL Containers");
  const [containerType, setContainerType] = useState("20ft");
  const [numOfContainer, setNumOfContainer] = useState(0);
  const [weight, setWeight] = useState(0);
  const [volume, setVolume] = useState(0);

  const handleTypeChange = (e: any) => {
    setTransportationType(e.target.value);
  };

  const handleSubmit = () => {
    if (transportationType === "FCL Containers") {
      setFclOrLcl("fcl");
      setContainer(containerType);
      setNumContainer(numOfContainer);
      console.log("Container type : ", containerType);
      console.log("numOfContainer : ", numOfContainer);
    } else {
      setFclOrLcl("lcl");
      setWeights(weight);
      setVolumes(volume);
      console.log("Weight : ", weight);
      console.log("Volume : ", volume);
    }
    setShowLoad(false);
  };

  return (
    <section
      id="login"
      className="p-4 absolute left-0 flex flex-col justify-center max-w-md mx-auto"
    >
      <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-300  rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-xl mx-auto">
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
        </div>
        <div id="login_htmlForm" className="flex flex-col justify-center">
          {transportationType == "FCL Containers" ? (
            <>
              <div className="flex justify-between items-center mb-3">
                <div className="inline-flex items-center self-start w-1/2">
                  <BsFillBox2Fill size={18} style={{ margin: "7px" }} />
                  <span className="text-xs paragraph-semibold text-gray-800">
                    Container Type
                  </span>
                </div>

                <select
                  defaultValue={"20FT"}
                  onChange={(e) => setContainerType(e.target.value)}
                  className=" body-medium py-1.5 px-2 mx-1.5 w-24
              block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
              focus:outline-none
              focus:border-primary-500
              focus:ring-1
              focus:ring-primary-500
              focus:invalid:border-primary-500  focus:invalid:ring-primary-500"
                >
                  <option
                    className="text-sm body-medium border-b-2 "
                    value="ST20"
                  >
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
              <div className="flex justify-between items-center mb-3">
                <div className="inline-flex items-center self-start">
                  <BsFillBox2Fill size={18} style={{ margin: "7px" }} />
                  <span className="text-xs paragraph-semibold text-gray-900">
                    Number Of
                  </span>
                </div>
                <div className="flex-center w-28">
                  <button
                    onClick={() => {
                      if (numOfContainer === 0) {
                        return;
                      }
                      setNumOfContainer(numOfContainer - 1);
                    }}
                    className="shadow-md rounded-md w-12 hover:scale-105 text-lg"
                  >
                    -
                  </button>

                  <div
                    placeholder="number of container"
                    className="flex-center w-12 body-medium py-1.5 px-2 mx-1.5
              block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
              "
                  >
                    {numOfContainer}
                  </div>
                  <button
                    onClick={() => setNumOfContainer(numOfContainer + 1)}
                    className="shadow-md rounded-md w-12 text-lg scale-105"
                  >
                    +
                  </button>
                </div>
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
                  onChange={(e: any) => setWeight(e.target.value)}
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
                  onChange={(e: any) => setVolume(e.target.value)}
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
            onClick={handleSubmit}
          >
            {/* <span id="login_process_state" className="hidden">
              Sending :)
            </span> */}
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
