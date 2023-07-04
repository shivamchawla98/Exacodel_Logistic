'use client'

import { MdDirectionsBoatFilled } from 'react-icons/md';
import { useState } from 'react';

function ServicesCard({}) {
  const [icon, setIcon] = useState(<MdDirectionsBoatFilled />)
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center ">
        <div className="bg-slate-200 flex justify-center items-center w-12 h-12 rounded">
          <MdDirectionsBoatFilled size={30} color="blue" />
        </div>
        <a href="#" className='w-30 mr-8 mt-2'>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Freight Services
          </h5>
        </a>
      </div>
      <hr
  className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 divide-y divide-gray-400 ">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
      <a
        href="#"
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        See our guideline
      </a>
    </div>
  );
}

export default ServicesCard;
