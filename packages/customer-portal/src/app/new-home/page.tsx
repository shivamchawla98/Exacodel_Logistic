import Image from "next/image";
import React from "react";
import ShippingFilter2 from "../bookings/components/ShippingFilter2";
import HotDealSection from "./components/HotDealSection";
import WhyUs from "./components/WhyUs";
import Service from "./components/Service";
import HowItWorks from "./components/HowItWorks";
import IndustryServed from "./components/IndustryServed";
import Blogs from "./components/Blogs";

function page() {
  return (
    <>
      {/* // hero */}
      <section className="w-full h-screen relative">
        <Image
          src="/images/sunrise.jpg"
          alt="globe image"
          fill={true}
          className="w-full saturate-50 h-screen absolute"
        />
        <h1 className="h1-bold z-20 text-5xl text-center w-full top-36 text-white absolute">
          Find The Best Freight Quote
        </h1>
        <div className="absolute z-20 top-32 w-full">
          <ShippingFilter2 />
        </div>
      </section>
      <HotDealSection />
      <WhyUs />
      <Service />
      <HowItWorks />
      <IndustryServed />
      <Blogs />
    </>
  );
}

export default page;
