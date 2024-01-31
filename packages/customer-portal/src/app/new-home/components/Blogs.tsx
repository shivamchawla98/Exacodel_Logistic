import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ServiceCard from "./ServiceCard";
import BlogsCard from "./BlogsCard";

function Blogs() {
  return (
    <section className=" w-full flex-center  mt-14">
      <div className="flex flex-col w-3/4">
        <p className=" border-s-4 w-32 bg-gray-200 text-sm border-orange-400  px-2 paragraph-medium">
          Industry Trend
        </p>
        <h2 className="h2-bold h1-bold mt-2 text-5xl py-2">Blogs</h2>
        <div className="flex justify-end items-center w-full">
          <div className="w-10 h-10 bg-orange-500 rounded-full cursor-pointer mr-2 flex-center">
            <IoIosArrowRoundBack className="h-5 w-5  text-gray-900" />
          </div>
          <div className="w-10 h-10 bg-gray-900 cursor-pointer rounded-full ml-2 flex-center">
            <IoIosArrowRoundForward className="h-5 w-5  text-white" />
          </div>
        </div>
        <div className="w-full flex justify-evenly items-center mt-5 ">
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
        </div>
      </div>
    </section>
  );
}

export default Blogs;
