"use client";

import Image from "next/image";
import maersk from "../../../asset/images/maersk.png";
import { useState } from "react";

import BookingStepper from "./BookingCardStepper";
import ViewMoreTab from "./ViewMoreTab";
import { LuSprout } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
const steps = [
  { name: "Step 1", href: "#", status: "upcoming" },
  { name: "Step 2", href: "#", status: "complete" },
  { name: "Step 3", href: "#", status: "complete" },
  { name: "Step 4", href: "#", status: "upcoming" },
];

function BookingCard({ img, fromDestination, toDestination }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showKnowMore, setShowKnowMore] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [cost, setCost] = useState(768);
  const [stepsData, setStepsData] = useState(steps);
  const handleStepClick = (stepIndex: any) => {
    if (stepsData[stepIndex].status === "upcoming") {
      const updatedSteps = [...stepsData];
      updatedSteps[stepIndex].status = "complete";
      setStepsData(updatedSteps);
    } else {
      const updatedSteps = [...stepsData];
      updatedSteps[stepIndex].status = "upcoming";
      setStepsData(updatedSteps);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleShowKnowMore = () => setShowKnowMore(!showKnowMore);

  return (
    <>
      <div className="mt-8 w-full  max-w-2xl p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 ">
        <div className="w-full flex justify-center border-b-2 border-slate-100 pb-2">
          <Image src={maersk} width={100} height={60} alt="maersk" />
        </div>

        <div className="flex justify-evenly items-center">
          <BookingStepper steps={steps} handleStepClick={handleStepClick} />
          <div className="flex justify-center items-center flex-wrap ml-4">
            <button
              onClick={openModal}
              className="bg-primary-500 py-2 text-xs hover:bg-fuchsia-800 text-white font-medium px-3 rounded-md border border-fuchsia-800 transition-transform transform hover:scale-105"
            >
              ${cost} <span className="text-xs">BOOK NOW</span>
            </button>
            <div
              onClick={toggleShowKnowMore}
              className="flex justify-center rounded-md shadow-md items-center p-2 ml-4 cursor-pointer"
            >
              {/* <p>View More</p> */}
              <MdArrowDropDown className="w-6 h-6 text-primary-500" />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly item center mt-4">
          <div className="flex justify-center items-center">
            <span className="text-sm text-gray-500 font-medium">
              Valid : <span className="text-xs text-gray-600"> 2023-12-31</span>
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-sm text-gray-500 font-medium">
              ID :{" "}
              <span className="text-xs text-gray-600 hover:text-primary-500 cursor-pointer">
                17841700
              </span>
            </span>
          </div>
          <div className="flex justify-evenly items-center">
            <LuSprout className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500 font-medium pt-1">
              449.08 kg CO2
            </span>
          </div>
        </div>
      </div>

      {showKnowMore && (
        <div className=" bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="grid grid-cols-1 divide-y">
            {[0, 1, 2, 3].map((step) => (
              <ViewMoreTab
                key={step}
                setActiveStep={setActiveStep}
                step={step}
                setCost={setCost}
                cost={cost}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default BookingCard;
