"use client";
import { Fragment } from "react";
import { Popover, Transition, Listbox } from "@headlessui/react";
import country_list from "@/components/data/country";

const serviceType = ["Airport - Seaport", "Warehouse"];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function SearchBar({
  orignDestination,
  type,
  country,
  orignDestinationTitle,
  setOriginDestinationCountry,
  setType,
}: any) {
  return (
    <Popover className="relative">
      <Popover.Button className="flex focus:border-sky-500 justify-start flex-col my-auto w-80 lg:w-72 shadow-md rounded-md border-1 py-2 px-2 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <div className="flex justify-start items-center w-full font-normal">
          {orignDestinationTitle}
        </div>
        <div className="flex justify-start items-center w-full">
          <p className="text-xs text-gray-400 font-medium">
            {type.length !== 0 ? type + " / " : null}
          </p>
          <p className="text-xs text-gray-600 font-medium">
            {country.length !== 0 ? country : orignDestination}
          </p>
        </div>

        {/* <ChevronDownIcon className="h-5 w-5" aria-hidden="true" /> */}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 lg:left-2/3 z-10 mt-5 flex w-screen max-w-2xl -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-sky-600/5 lg:max-w-3xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-3 my-6">
              <div>
                <label
                  htmlFor={orignDestinationTitle + "service"}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type
                </label>
                <select
                  id={orignDestinationTitle + "service"}
                  onChange={(e: any) => {
                    setType(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                >
                  <option selected>Choose a Service</option>
                  {serviceType.map((service) => (
                    <option value={service} key={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <select
                  id="country"
                  onChange={(e: any) => {
                    let value = e.target.value;
                    console.log(value);

                    setOriginDestinationCountry(value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                >
                  <option selected>Choose a country</option>
                  {country_list.map((country) => (
                    <option value={country} key={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
