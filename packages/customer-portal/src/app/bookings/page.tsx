'use client'


import ContainerFilter from "@/components/small components/ContainerFilter";
import ShipingLineFilter from "@/components/small components/ShipingLineFilter";
import BookingCard from "./components/BookingCard";
import ShippingFilter from "./components/ShippingFilter";
import { useEffect, useState } from "react";



function Page() {
  const [showFilters, setShowFilters] = useState(false);
  // const isSmallScreen = window.innerWidth < 768; 
  let from = "porbandar";
  let to = "china";
  from = from.toUpperCase();
  to = to.toUpperCase();
  let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  
  // useEffect(() => {
  //   setShowFilters(!isSmallScreen);
  // }, [isSmallScreen]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <section className="bg-white">
          <ShippingFilter />
          <div className="flex items-center justify-center font-black p-3 mb-2 pt-10">
          <h3 className="mx-auto text-lg font-semibold tracking-tight text-gray-600 sm:text-2xl text-center">
              You Have Booked form <strong className='text-sky-400'>{from} </strong> to <strong className='text-rose-400'>{to}</strong>
            </h3>
          </div>
      </section>

      <div className="md:flex md:justify-evenly">
      <div className={`p-2 ml-2 shadow-sm`}>
          
            <button
              className="block bg-sky-500 text-white p-2 rounded-md lg:hidden"
              onClick={toggleFilters}
            >
              Toggle Filters
            </button>
        
          <div
            className={`transition-transform transform ${
              showFilters ? 'translate-x-0' : '-translate-x-full'
            } ${showFilters ? '' : 'hidden'}`}
          >
            <ContainerFilter />
            <ShipingLineFilter />
          </div>
          <div
            className={`transition-transform transform hidden lg:block`}
          >
            <ContainerFilter />
            <ShipingLineFilter />
          </div>
        </div>
        <div className='w-full p-2 lg:w-3/6 mx-auto'>
        {testArr.map((element) =>  <BookingCard img="1" key={element} fromDestination="Abbu Dhabi" toDestination="Bandar Abbas" />)}

        </div>

      </div>
    </>
  );
}

export default Page;
