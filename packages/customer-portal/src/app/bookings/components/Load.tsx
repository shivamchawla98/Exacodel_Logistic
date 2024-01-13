"use client";
import { Fragment, useState } from "react";
import { Popover, Transition, Listbox } from "@headlessui/react";
import country_list from "@/components/data/country";
import ContainerFilter from "@/components/small components/ContainerFilter";
import SearchAndFilter from "@/app/warehouse/components/SearchAndFilter";
import SearchBar from "@/components/small components/ContainerInputBar";
const serviceType = ["Airport/Seaport", "Warehouse"];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function Load() {
  return (
    <Popover className="relative rounded-md shadow-md">
      <Popover.Button className="flex focus:border-primary-500 border-b-2 border-primary-500 justify-start flex-col w-72 lg:w-72 border-1 shadow rounded-md py-2 px-2 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <div className="flex justify-start items-center w-full font-normal">
          Load
        </div>
        <div className="flex justify-start items-center w-full">
          <p className="text-xs text-gray-400 font-medium">Port/Airport</p>
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-xl -translate-x-1/2">
          <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-sky-600/5 lg:max-w-sm">
            <div className="flex justify-center items-center">
              <SearchBar
                register={(args: any) => {
                  console.log(args);
                }}
              />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
