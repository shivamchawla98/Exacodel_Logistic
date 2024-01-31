import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <section className="mt-72 w-full flex-center h-screen">
      <div className="flex flex-col w-3/4">
        <p className=" border-s-4  w-28 bg-gray-200 text-sm border-orange-400  px-2 paragraph-medium">
          What We Do
        </p>
        <h2 className="h2-bold h1-bold mt-2 text-5xl py-2">Services</h2>
        <div className="flex justify-end items-center w-full">
          <div className="w-10 h-10 bg-orange-500 rounded-full cursor-pointer mr-2 flex-center">
            <IoIosArrowRoundBack className="h-5 w-5  text-gray-900" />
          </div>
          <div className="w-10 h-10 bg-gray-900 cursor-pointer rounded-full ml-2 flex-center">
            <IoIosArrowRoundForward className="h-5 w-5  text-white" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
