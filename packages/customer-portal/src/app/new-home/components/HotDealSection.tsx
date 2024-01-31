"use client";
import { Carousel } from "@material-tailwind/react";
import React from "react";
import HotDealsCard from "./HotDealsCard";

function HotDealSection() {
  return (
    <section className="flex-center w-11/12 flex-col my-10">
      <div className="flex justify-start items-center w-4/5">
        <p className=" border-s-4 bg-gray-200 text-sm border-orange-400  px-2 paragraph-medium">
          What We Do
        </p>
      </div>
      <div className="w-4/5 flex justify-start items-center">
        <h2 className="h2-bold h1-bold mt-2 text-5xl">Hot deals</h2>
      </div>
      <div className="flex justify-start items-center w-4/5">
        <p className=" text-sm  w-28 my-6 paragraph-semibold">
          Import To India
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Carousel
          autoplay={true}
          loop={true}
          className="py-4 lg:w-4/5 "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-8 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 " : "w-4"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {[1, 2, 3, 4, 5, 6].map((num, indx) => (
            <div key={num} className="w-full flex justify-evenly items-center">
              <HotDealsCard />
              <HotDealsCard />
              <HotDealsCard />
              <HotDealsCard />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex justify-start items-center w-4/5">
        <p className=" text-sm  w-28 my-6 paragraph-semibold">
          Export To India
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Carousel
          autoplay={true}
          loop={true}
          className="py-4 lg:w-4/5 "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-8 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 " : "w-4 "
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {[1, 2, 3, 4, 5, 6].map((num, indx) => (
            <div key={num} className="w-full flex justify-evenly items-center">
              <HotDealsCard />
              <HotDealsCard />
              <HotDealsCard />
              <HotDealsCard />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default HotDealSection;
