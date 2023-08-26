'use client'

import Image from 'next/image';
import maersk from '../../../asset/images/maersk.png';
import { useState } from 'react';

import BookingStepper from './BookingCardStepper';
import ViewMoreTab from './ViewMoreTab';
import { BsArrowRight } from 'react-icons/bs';

function BookingCard({img, fromDestination, toDestination}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showKnowMore, setShowKnowMore] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [cost, setCost] = useState(768);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div
      style={{ marginTop: '56px' }}
      className=" 
      h-44 w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700
      flex justify-center
      "
    >
      <div className="w-11/12 md:w-3/6 lg:w-1/2 sm:w-3/6 mx-auto">
        <div className="w-full flex justify-center border-b-2 border-slate-100 pb-2">
          <Image src={maersk} width={100} height={60} alt="maersk" />
        </div>
        <BookingStepper setActiveStep={setActiveStep} activeStep={activeStep}/>
      </div>



      <div className="flex justify-center my-auto">
        <button
          onClick={openModal}
         className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded h-auto">
          <p className='text-gray-800'>${cost}</p>
          <p className='text-xs'>BOOk NOW</p>
        </button>
        <div 
        onClick={() => setShowKnowMore(!showKnowMore)}
        className='flex justify-center rounded-md shadow-md items-center p-2 ml-4 cursor-pointer'>
          <p>View More</p>
          <BsArrowRight className="w-6 h-6 text-sky-600" />
        </div>
      </div>

    </div>
    {showKnowMore && <div className="grid grid-cols-1 divide-y">
    <ViewMoreTab setActiveStep={setActiveStep} step={0} setCost={setCost} cost={cost}/>
    <ViewMoreTab setActiveStep={setActiveStep} step={1} setCost={setCost} cost={cost}/>
    <ViewMoreTab setActiveStep={setActiveStep} step={2} setCost={setCost} cost={cost}/>
    <ViewMoreTab setActiveStep={setActiveStep} step={3} setCost={setCost} cost={cost}/>
    </div> 
    }

    </>
  );
}

export default BookingCard;
