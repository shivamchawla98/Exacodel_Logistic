import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import HowItWorkCard from "./HowItWorkCard";

function IndustryServed() {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src="/images/shipSail.jpg"
        alt="Your Image Alt Text"
        fill={true}
        className="filter brightness-75"
      />
      <div className="absolute inset-0 bg-violet-600/30 backdrop-brightness-75" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="w-1/2">
          <p className=" border-s-4 mt-2  w-28 bg-gray-500 text-sm border-orange-400  px-2 paragraph-medium">
            What We Do
          </p>
          <h2 className="h2-bold h1-bold mt-2 text-5xl py-2">How It Works</h2>
        </div>
        <div className="w-4/5 flex justify-evenly item-center mt-12">
          <HowItWorkCard />
          <HowItWorkCard />
          <HowItWorkCard />
          <HowItWorkCard />
        </div>
      </div>
    </div>
  );
}

export default IndustryServed;
