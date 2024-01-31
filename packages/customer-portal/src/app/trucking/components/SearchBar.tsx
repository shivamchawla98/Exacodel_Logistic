"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { LuContainer } from "react-icons/lu";
import { MdWarehouse } from "react-icons/md";
import GET_ALL_TRUCKS from "@/graphql/query/getAllTrucks";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

function SearchBar({ setTruckData }: any) {
  const { data, error, loading } = useQuery(GET_ALL_TRUCKS);
  const router = useRouter();
  const handleTruckSearch = async () => {
    let truckData = data?.getAllTrucks;
    console.log("truck data : ", data);

    setTruckData(truckData);
  };

  return (
    <div className="w-full flex-center">
      <div className="w-full md:w-4/5 mt-10  bg-gradient-to-l from-gray-200 to-gray-400 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-xl border border-orange-500">
        <div className="flex justify-end flex-wrap pl-4 w-full">
          <div className="flex-start flex-wrap">
            <p className="text-xs md:text-sm lg:text-base text-white h3-semibold mr-5 my-2 md:my-0 ">
              Shipping Type :{" "}
            </p>
            <div className="flex-start pl-4 flex-wrap bg-white shadow-md px-4 py-2 rounded-lg">
              <div className="flex jutify-evenly flex-wrap items-center md:w-48 rounded-md h-6 md:h-8 bg-white ">
                <div
                  onClick={() => router.push("/bookings")}
                  className="flex-center cursor-pointer"
                >
                  <LuContainer className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mx-4" />
                  <p className="text-xs md:text-sm text-gray-800 paragraph-semibold">
                    Freight
                  </p>
                  <button
                    className={`border-r border-gray-300 text-xs paragraph-medium hover:scale-105 mx-2 pr-2`}
                  >
                    Air
                  </button>
                  <button
                    className={`text-xs paragraph-medium hover:scale-105 mx-2`}
                  >
                    Sea
                  </button>
                </div>
              </div>
              <div className="flex jutify-evenly flex-wrap cursor-pointer items-center px-2 rounded-md h-6 md:h-8 bg-white shadow-md">
                <FaTruck className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mx-4" />
                <Link
                  href={"#"}
                  className="text-xs md:text-sm text-gray-800 paragraph-semibold"
                >
                  Truck
                </Link>
              </div>
              <div className="flex-center mt-2 md:mt-0 hover:scale-105 md:ml-2 cursor-pointer">
                <MdWarehouse className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mx-4" />
                <a
                  href={"/warehouse"}
                  className="text-xs md:text-sm text-gray-800 paragraph-semibold"
                >
                  Warehouse
                </a>
              </div>
            </div>
          </div>
          {/* <button className="text-xs my-2 md:my-0 md:text-sm lg:text-base text-gray-800 h3-bold flex-center">
            Request Quote
            <IoIosArrowRoundForward className="h-6 w-6 font-light text-orange-500 mx-4" />
          </button> */}
        </div>

        <div className="flex-center flex-wrap md:flex-nowrap w-full shadow-lg">
          <div className="w-11/12 md:w-3/12 lg:w-80 relative mt-2 bg-white rounded-md md:rounded-r-none md:rounded-l-lg shadow-xl border-r  px-3.5 py-2.5 h-14  hover:border-gray-300">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <HiLocationMarker
                className="h-5 w-5 pl-2 text-orange-500"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              placeholder="From..."
              className=" border-2 paragraph-medium border-white pl-6  text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-500 block  w-full   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
          <div className="w-11/12 md:w-3/12 lg:w-80 relative mt-2 bg-white  rounded-md md:rounded-none px-3.5 py-2.5 h-14 shadow-2xl border-r   hover:border-gray-300">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <HiLocationMarker
                className="h-5 w-5 pl-2 text-orange-500"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              placeholder="To..."
              className=" border-2 paragraph-medium border-white pl-6  text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-500 block  w-full   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>

          <button
            onClick={handleTruckSearch}
            className="flex justify-center  items-center bg-orange-500 rounded-md md:rounded-l-none md:rounded-r-lg px-2 py-3 mt-2 "
          >
            <MagnifyingGlassIcon className="text-white h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
