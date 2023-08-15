"use client";
import { FaShip, FaPlaneDeparture, FaTruck, FaSearch } from "react-icons/fa";
import { useState } from "react";
import ShippingFilter from "../../../components/ShippingFilter";
import World from "@/components/Globe";
import Image from "next/image";
import mapBanner from "../../../asset/images/world_map1.png";
import globe from "../../../asset/images/Globe .png";
import { BiMoneyWithdraw } from "react-icons/bi";
import { SiConvertio } from "react-icons/si";
import DatePicker from "@/components/DatePicker";

const Button = () => {
  return (
    <button className="bg-white hover:border-rose-400 border-2 text-gray-600 font-bold py-2 px-4 rounded-full p-auto">
      <BiMoneyWithdraw size={45} />
      Rate
    </button>
  );
};

const SelectFieldWithIcon = () => {
  const options = ["fcl", "lcl"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="flex items-center">
      <FaShip className="mr-2 text-sky-700" size={60} />
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="py-3 px-8 block w-full border-gray-200 border-2 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 font-bold"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

function BookNowFilter() {
  return (
    <div className="bg-white shadow sm:rounded-lg lg:w-11/12">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex">
          <input
            type="text"
            className="py-3 px-8 block w-full border-gray-200 border-2 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 font-bold"
            placeholder="FROM"
          />
          <div>
            <SiConvertio size={40} className="ml-3 mr-3 cursor-pointer" />
          </div>
          <input
            type="text"
            className="py-3 px-8 block w-full border-gray-200 border-2 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 font-bold"
            placeholder="TO"
          />
        </div>
        <div className="flex justify-evenly mt-6">
          <DatePicker />
          <SelectFieldWithIcon />
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-44 py-3 text-xl px-4 rounded-full flex justify-evenly">
          <FaSearch className="text-white" size={25} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={mapBanner}
        alt="Picture of the author"
        fill={true}
        quality={100}
        className="z-0 absolute top-0"
      />
      <div className="bg-sky-500 z-10 h-screen w-full opacity-70 absolute top-0"></div>
      <div className="absolute top-0 z-20 flex justify-evenly items-center h-screen w-full">
        <div className="w-1/2 mt-16 relative">
          <h1 className="text-2xl lg:text-5xl font-bold p-4 absolute top-0 left-12 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Find The Best Freight Quote
          </h1>
          <Image
            src={globe}
            alt="globe illustration"
            quality={100}
            className="w-3/4"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center lg:mt-24">
          {/* buttons */}
          <div className="flex justify-evenly w-full p-6">
            <Button />
            <Button />
            <Button />
          </div>
          <BookNowFilter />
        </div>
      </div>
    </section>
  );
}

export default Hero;
