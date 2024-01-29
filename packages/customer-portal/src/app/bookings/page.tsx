"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { containerTypes } from "@/components/data/dropdownData";
import { shippingLines } from "@/components/data/dropdownData";
import BookingCard from "./components/BookingCard";
// import ShippingFilter2 from "./components/ShippingFilter2";
import ShippingFilter3 from "./components/ShippingFilter3";

const filters = [
  {
    id: "containers",
    name: "Container Type",
    options: containerTypes,
    status: false,
  },
  {
    id: "shipping-line",
    name: "Shipping Lines",
    options: shippingLines,
    status: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [container, setContainer] = useState(false);
  const [fcl, setFcl] = useState<boolean>(false);
  const [shippingLine, setShippingLine] = useState(false);
  const [data, setData] = useState([]);
  const [containerSizeType, setContainerSizeType] = useState("");
  const [numberOfContainer, setNumberOfContainer] = useState(1);

  useEffect(() => {
    console.log(data);
    data.map((item) => {
      console.log("from  :: ", item);
    });
  }, [data]);

  return (
    <div className="bg-white">
      <section className="bg-white ">
        <ShippingFilter3
          setData={setData}
          setFcl={setFcl}
          setNumberOfContainer={setNumberOfContainer}
          setContainerSizeType={setContainerSizeType}
        />
      </section>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="pl-4 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  <div
                    key="containers"
                    // className={sectionIdx === 0 ? "" : "pt-10"}
                  >
                    <fieldset>
                      <legend
                        onClick={() => {
                          setContainer(!container);
                        }}
                        className=" text-xs paragraph-semibold flex-between bg-gray-50 px-4 py-2 rounded-md hover:text-gray-800 cursor-pointer  text-gray-800"
                      >
                        <span>
                          <ChevronDownIcon
                            className={`ml-2 w-6 h-6 paragraph-semibold text-gray-500 hover:text-orange-400 ${
                              !container && "rotate-90"
                            } `}
                          />
                        </span>
                        Container Type
                      </legend>
                      <div className="space-y-3 bg-gray-50 px-2">
                        {container &&
                          containerTypes.map((option, optionIdx) => (
                            <div key={option} className="flex items-center">
                              <input
                                id={`${optionIdx}`}
                                name={`${optionIdx}[]`}
                                defaultValue={option}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-gray-500 focus:ring-orange-500"
                              />
                              <label
                                htmlFor={`${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                      </div>
                    </fieldset>
                    <fieldset className="mt-2">
                      <legend
                        onClick={() => {
                          setShippingLine(!shippingLine);
                        }}
                        className="text-xs paragraph-semibold flex-center bg-gray-50 px-4 py-1.5 rounded-md  hover:text-gray-800  cursor-pointer  text-gray-800"
                      >
                        <ChevronDownIcon
                          className={classNames(
                            "ml-2 w-6 h-6 paragraph-semibold text-gray-500 hover:text-ornage-500",
                            !shippingLine && "rotate-90"
                          )}
                        />
                        <span>Shipping Lines</span>
                      </legend>
                      <div className="space-y-3 bg-gray-50 px-2">
                        {shippingLine &&
                          shippingLines.map((option, optionIdx) => (
                            <div key={option} className="flex items-center">
                              <input
                                id={`${optionIdx}`}
                                name={`${optionIdx}[]`}
                                defaultValue={option}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-fuchsia-800"
                              />
                              <label
                                htmlFor={`${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                      </div>
                    </fieldset>
                  </div>
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3 mx-auto">
              {data &&
                !fcl &&
                data.map((item: any) => (
                  <BookingCard
                    key={item.shipmentId}
                    src={item.oceanFreight.logo}
                    to={item.cityTo.name}
                    from={item.cityFrom.name}
                    days={item.oceanFreight.transitTime}
                    id={item.shipmentId}
                    Co2={item.oceanFreight.co2}
                    costEntered={item.oceanFreight.originalPrice}
                    numberOfContainer={numberOfContainer}
                    containerSizeType={containerSizeType}
                  />
                ))}
              {data &&
                fcl &&
                data.map((item: any) => (
                  <BookingCard
                    key={item.shipmentId}
                    to={item.cityTo.name}
                    from={item.cityFrom.name}
                    days={item.freight[0].transitTime}
                    id={item.shipmentId}
                    costEntered={item.freight[0].price}
                    numberOfContainer={numberOfContainer}
                    containerSizeType={containerSizeType}
                  />
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
