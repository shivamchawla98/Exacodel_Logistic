import Image from "next/image";
import { title } from "process";
import React from "react";
import { BsBox2 } from "react-icons/bs";
import { PiMoneyLight } from "react-icons/pi";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function WhyUs() {
  return (
    <div className=" relative w-full h-screen lg:mb-36 h pb-10">
      <Image
        src="/images/haplyod.jpg"
        className="w-full h-80 saturate-100"
        height={300}
        width={1000}
        alt="container image"
      />
      <div className="flex-center absolute top-52 flex-wrap w-full">
        <div
          className="bg-gradient-to-r flex-center flex-col p-4  left-10 from-primary-600 to-purple-400
        py-12 w-3/4
    "
        >
          <div className="flex-center ">
            <div className="w-1/2">
              <div className="flex justify-start items-center">
                <p className=" border-s-4 bg-gray-200 text-sm pr-2 border-orange-400 pl-2 paragraph-medium">
                  Why us
                </p>
              </div>
              <div className="flex justify-start items-center">
                <h2 className="h2-bold h1-bold mt-2 text-5xl text-white">
                  Exclusive space from China to USA
                </h2>
              </div>
              <div className="flex justify-start pt-4 w-11/12 pr-8  items-center">
                <p className=" text-gray-200 text-xs pr-4 paragraph-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate distinctio hic non doloremque incidunt
                  necessitatibus obcaecati velit rerum sint! Libero aliquid
                  debitis temporibus minima ipsam voluptatem qui odio harum nam?
                </p>
              </div>
              <div className=" flex-start mt-5">
                <div className=" h-11 w-11  flex-center  border-2 rounded-full border-orange-500">
                  <BsBox2 className="h-6 w-6 text-white" />
                </div>
                <p className="pragraph-normal text-lg text-white pl-6">
                  Delivery On Time
                </p>
              </div>
              <div className=" flex-start mt-4">
                <div className=" h-11 w-11  flex-center  border-2 rounded-full border-orange-500">
                  <PiMoneyLight className="h-6 w-6 text-white" />
                </div>
                <p className="pragraph-normal text-lg text-white pl-6">
                  Optimized Travel Cost
                </p>
              </div>
            </div>
            <div className=" h-72 flex-center relative w-2/5">
              <img
                src={"/images/w1.jpg"}
                alt="why us image"
                className="w-72 absolute right-5 top-9  h-80"
              />
            </div>
          </div>
        </div>
        <div className="shadow-md w-3/4 h-24 flex justify-evenly items-center">
          <div className="flex-center">
            <h2 className="h1-bold text-4xl pr-2">1294</h2>
            <div className="w-3 h-3 pr-2 bg-gradient-to-r flex-center flex-col left-10 from-primary-600 to-purple-400" />
            <p className="paragraph-medium text-xs pl-2">Delivered Packages</p>
          </div>
          <div className="flex-center">
            <h2 className="h1-bold text-4xl pr-2">3594</h2>
            <div className="w-3 h-3 pr-2 bg-gradient-to-r flex-center flex-col left-10 from-primary-600 to-purple-400" />
            <p className="paragraph-medium text-xs pl-2">Delivered Packages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
