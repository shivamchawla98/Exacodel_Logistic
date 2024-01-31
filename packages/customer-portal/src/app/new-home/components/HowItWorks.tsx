import Image from "next/image";
import React from "react";
import { AccordionAlwaysOpen } from "./Accordion";

function HowItWorks() {
  return (
    <section className="w-full flex-center">
      <div className="lg:w-1/2 h-screen relative">
        <Image
          src="/images/yellowTruck.jpg"
          fill={true}
          alt="how it works image"
          className=" z-20 absolute"
        />
      </div>
      <div className="w-1/2 pl-8 h-screen bg-gray-50">
        <p className=" border-s-4 mt-12  w-28 bg-gray-200 text-sm border-orange-400  px-2 paragraph-medium">
          What We Do
        </p>
        <h2 className="h2-bold h1-bold mt-2 text-5xl py-2">How It Works</h2>
        <AccordionAlwaysOpen />
      </div>
    </section>
  );
}

export default HowItWorks;
