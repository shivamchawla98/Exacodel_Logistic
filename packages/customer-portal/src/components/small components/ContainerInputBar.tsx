'use client'

import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

function SearchBar() {

const [containerAmount, setContainerAmount] = useState(0)


  return (
    <section
      id="login"
      className="p-4 flex flex-col justify-center max-w-md mx-auto"
    >
      <div className="p-6 bg-sky-100 rounded">
        <div className="flex items-center justify-center font-black m-3 mb-12">
          <h1 className="tracking-wide text-3xl text-gray-900">
            FCL Containers
          </h1>
        </div>
        <form
          id="login_form"
          action="api_login"
          method="POST"
          className="flex flex-col justify-center"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="inline-flex items-center self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-3 bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 text-gray-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-bold text-gray-900">Container Count</span>
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={() => containerAmount > 0 ? setContainerAmount(containerAmount - 1) : ''}
                className="bg-yellow-600 p-1.5 font-bold rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <input
                id="item_count"
                type="number"
                defaultValue={containerAmount}
                className="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
      block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
      focus:outline-none
      focus:border-sky-500
      focus:ring-1
      focus:ring-sky-500
      focus:invalid:border-red-500  focus:invalid:ring-red-500"
              />
              <button
                type="button"
                onClick={() => setContainerAmount(containerAmount + 1)}
                className="bg-green-600 p-1.5 font-bold rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-3">
            <div className="inline-flex items-center self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-3 bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 text-gray-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-bold text-gray-900">Container Quantiy</span>
            </div>

            <select
            defaultValue={'DEFAULT'}
              id="countries"
              className="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
              block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
              focus:outline-none
              focus:border-sky-500
              focus:ring-1
              focus:ring-sky-500
              focus:invalid:border-red-500  focus:invalid:ring-red-500"
            >
              <option value="DEFAULT">20FT</option>
              <option value="US">20FT</option>
              <option value="CA">40FT</option>
              <option value="FR">40FT HC</option>
              <option value="DE">45FT HC</option>
            </select>
          </div>

          <button
            className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
            type="submit"
          >
            <span id="login_process_state" className="hidden">
              Sending :)
            </span>
            <span id="login_default_state">
              Book Now
              <span id="subtotal" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
