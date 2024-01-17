"use client";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition, Listbox } from "@headlessui/react";
import country_list from "@/components/data/country";
import { useLazyQuery } from "@apollo/client";
import GET_PORTS_USING_COUNTRY from "@/graphql/query/getPortsUsingCountry";
import country from "@/components/data/country";
import { type } from "os";
import GET_PORTS_NAME_USING_STATE from "@/graphql/query/getPortsNameUsingState";
import { setState } from "@/features/customerRegForm/customerRegForm-slice";
const removeDuplicates = (arr: any[]) => {
  return arr?.filter((value, index, self) => self.indexOf(value) === index);
};
const serviceType = ["Airport - Seaport", "Warehouse"];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function SearchBar({
  orignDestination,
  type,
  setName,
  setState,
  country,
  orignDestinationTitle,
  setOriginDestinationCountry,
  setType,
}: any) {
  const [SuggestionsCountry, { data, error, loading }] = useLazyQuery(
    GET_PORTS_USING_COUNTRY
  );
  const [SuggestionsState, { error: errorState, loading: loadingState }] =
    useLazyQuery(GET_PORTS_NAME_USING_STATE);
  const [states, setOptionsState] = useState(data);
  const [names, setOptionsName] = useState(data);

  const fetchAndSetStates = async (value: string) => {
    let { data } = await SuggestionsCountry({
      variables: {
        input: value,
      },
    });
    let allAvailableStates = removeDuplicates(
      data?.SuggestionsCountry?.map((ports: any) => ports.State)
    );
    setOptionsState(allAvailableStates);
    console.log("data : ", data);
  };

  const fetchAndSetNames = async (value: string) => {
    let { data } = await SuggestionsState({
      variables: {
        input: value,
      },
    });
    let allAvailableNames = removeDuplicates(
      data?.SuggestionsState?.map((ports: any) => ports.name)
    );
    setOptionsName(allAvailableNames);
    console.log("data : ", data);
  };

  return (
    <Popover className="relative shadow-md  rounded-md">
      <Popover.Button className="flex active:border-primary-500 border-b-2 border-primary-500 outline-none active:border-2  justify-start flex-col my-auto w-80 lg:w-72 shadow rounded-md border-1 py-2 px-2 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
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
                    const value = e.target.value;
                    setType(value);
                  }}
                  className=" border border-primary-500 paragraph-medium text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                  onChange={async (e: any) => {
                    let value = e.target.value;
                    console.log("value : >>>", value);

                    fetchAndSetStates(value);
                    console.log(value);
                    setOriginDestinationCountry(value);
                  }}
                  className=" border border-primary-500  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  State
                </label>
                <select
                  id="state"
                  onChange={(e: any) => {
                    let value = e.target.value;
                    console.log(value);
                    fetchAndSetNames(value);
                    setState(value);
                  }}
                  className=" border border-primary-500  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected>Choose country then state appears</option>
                  {states?.map((state: any) => (
                    <option value={state} key={state}>
                      {state}
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
                  className=" border border-primary-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Address"
                />
                {
                  <div className="overflow-hidden rounded-md bg-white shadow">
                    <ul role="list" className="divide-y divide-gray-200">
                      {names?.map((item: any) => (
                        <li key={item} className="px-6 py-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
