"use client";
import WarehousePricing from "./Card";
import SpaceRequired from "./AreaRequiredField";
import DatePicker from "./DatePicker";
import Searchbar from "./Searchbar";
import ServiceFilter from "./ServiceFilter";

function SearchAndFilter() {
  return (
    <div className="w-1/2 py-6 flex h-screen overflow-y-auto justify-center items-center rounded-md shadow-sm flex-wrap no-scrollbar  bg-gradient-to-br to-transparent from-sky-100">
      <div className="w-full flex justify-center items-center">
        <div className="lg: w-10/12">
          <Searchbar />
        </div>
      </div>

      <div className="w-full">
        <DatePicker
        />
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14">
        <SpaceRequired />
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14">
        <ServiceFilter />
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14 my-4">
        <button
          type="button"
          className="text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-500 focus:outline-none dark:focus:ring-sky-500"
        >
          Discover Price
        </button>
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14 my-4">
        <WarehousePricing />
      </div>
    </div>
  );
}

export default SearchAndFilter;
