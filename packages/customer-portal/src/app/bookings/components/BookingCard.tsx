'use client'

import Image from 'next/image';
import maersk from '../../../asset/images/maersk.png';
import { useState } from 'react';

import BookingStepper from './BookingCardStepper';
import ViewMoreTab from './ViewMoreTab';
import { BsArrowRight } from 'react-icons/bs';

function BookingCard({ img, fromDestination, toDestination }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showKnowMore, setShowKnowMore] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [cost, setCost] = useState(768);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleShowKnowMore = () => setShowKnowMore(!showKnowMore);

  return (
<>
  <div className="mt-8 w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 ">
    <div className="w-full flex justify-center border-b-2 border-slate-100 pb-2">
      <Image src={maersk} width={100} height={60} alt="maersk" />
    </div>
    <BookingStepper setActiveStep={setActiveStep} activeStep={activeStep} />

    <div className="flex justify-center">
      <button
        onClick={openModal}
        className="bg-sky-500 hover:bg-sky-400 text-white font-medium py-1 px-3 rounded-md border border-sky-500 transition-transform transform hover:scale-105 text-sm"
      >
        ${cost}
        {" "}
        <span className="text-xs">BOOK NOW</span>
      </button>
      <div
        onClick={toggleShowKnowMore}
        className="flex justify-center rounded-md shadow-md items-center p-2 ml-4 cursor-pointer"
      >
        <p>View More</p>
        <BsArrowRight className="w-6 h-6 text-sky-600" />
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
