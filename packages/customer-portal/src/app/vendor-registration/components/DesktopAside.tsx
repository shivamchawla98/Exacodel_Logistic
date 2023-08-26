/* eslint-disable @next/next/no-img-element */
import { PhotoIcon } from '@heroicons/react/24/outline';
import React from 'react';

function DesktopAside({handleClick}: any) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <div className="col-span-full">
          <div className="mt-2 flex items-center gap-x-3">
            <span className="relative inline-block">
              <img
                className="h-16 w-16 rounded-md"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="absolute bottom-0 right-0 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white">
                <span className="block h-4 w-4 rounded-full bg-gray-300" />
              </span>
            </span>
            <button
              type="button"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Change
            </button>
          </div>
        </div>

        {/*  upload */}

        <div className="w-full mt-14">
          <ol className="space-y-4">
            <li onClick={() => handleClick(1)}>
              <div
                className="cursor-pointer w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
                role="alert" 
              >
                <div className="flex items-center justify-between" >
                  <span className="sr-only">User info</span>
                  <h3 className="font-medium">1. Basic Details</h3>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li onClick={() => handleClick(2)} >
              <div
                className="cursor-pointer w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <span className="sr-only">Account info</span>
                  <h3 className="font-medium">2. Company Details</h3>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li onClick={() => handleClick(3)}>
              <div
                className="cursor-pointer w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <span className="sr-only">Social accounts</span>
                  <h3 className="font-medium">3. Address Details</h3>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li onClick={() => handleClick(4)}>
              <div
                className="cursor-pointer w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <span className="sr-only">Review</span>
                  <h3 className="font-medium">4. Company Contacts</h3>
                </div>
              </div>
            </li>
            <li onClick={() => handleClick(5)}>
              <div
                className="cursor-pointer w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <span className="sr-only">Confirmation</span>
                  <h3 className="font-medium">5.Document Upload Confirmation</h3>
                </div>
              </div>
            </li>
            <li onClick={() => handleClick(6)}>
              <div
                className="cursor-pointer w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <span className="sr-only">Confirmation</span>
                  <h3 className="font-medium">6. Rate Input</h3>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default DesktopAside;
