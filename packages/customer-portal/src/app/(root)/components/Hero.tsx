'use client'
import {FaShip, FaPlaneDeparture, FaTruck} from 'react-icons/fa'
import { useState } from 'react';
import ShippingFilter from '../../../components/ShippingFilter';
import World from '@/components/Globe';


const SelectMedium = () => {
  const [isActive, setActive] = useState("sea");

  const handleSeaClick = () => {
    setActive("sea")
  }

  const handleAirClick = () => {
    setActive("air")
  }

  const handleLandClick = () => {
    setActive("land")
  }

  return (
    <span className="isolate inline-flex rounded-lg">
      <button
        onClick={handleSeaClick}
        type="button"
        className={`relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:z-10 ${isActive === 'sea' ? 'bg-blue-400' : 'bg-white'}`}
      >
        SEA
        <FaShip className={`text-gray-900 pl-2 ${isActive === 'sea' ? 'text-rose-400' : ''}`} size={35}/>
      </button>
      <button
        type="button"
        onClick={handleAirClick}
        className={`relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:z-10 ${isActive === 'air' ? 'bg-blue-400' : 'bg-white'}`}
      >
        AIR
        <FaPlaneDeparture className={`text-gray-900 pl-2 ${isActive === 'air' ? 'text-rose-400' : ''}`} size={35}/>
      </button>
      <button
        type="button"
        onClick={handleLandClick}
        className={`relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:z-10 ${isActive === 'land' ? 'bg-blue-400' : 'bg-white'}`}
      >
        LAND
      <FaTruck className={`text-gray-900 pl-2 ${isActive === 'land' ? 'text-rose-400' : ''}`} size={35}/>
      </button>
    </span>
  )
}


function Hero() {
  return (
    <section className="relative w-full bg-gray-100 dark:bg-gray-900 bg-gradient-to-tl from-white to-sky-200">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Payments tool for software companies
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          From checkout to global sales tax compliance, companies.
        </p>
        <div className='absolute right-0'>
        <World />

        </div>
        <SelectMedium />
        <ShippingFilter />
      </div>
    </section>
  );
}

export default Hero;
