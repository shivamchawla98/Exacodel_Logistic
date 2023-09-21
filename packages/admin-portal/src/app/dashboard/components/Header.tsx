'use client';

import { useState } from 'react';
import { FaTachometerAlt, FaWpforms , FaSignOutAlt} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';
import { TbTableShortcut } from 'react-icons/tb';
import {BiSupport} from 'react-icons/bi'
import {RiAccountPinCircleFill} from 'react-icons/ri'
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="w-full h-16 items-center bg-white shadow-md py-2 px-6 hidden sm:flex">
        <div className="w-1/2"></div>
        <div className="relative w-1/2 flex justify-end">
          <button
            onClick={toggleDropdown}
            className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          >
            {/* <Image
              src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"
              alt="User Avatar"
              width={30}
              height={30}
            /> */}
          </button>
          {isOpen && (
            <>
              <button
                onClick={toggleDropdown}
                className="h-full w-full fixed inset-0 cursor-default"
              ></button>
              <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                <a
                  href="#"
                  className="block px-4 py-2 account-link hover:text-white"
                >
                  Account
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 account-link hover:text-white"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 account-link hover:text-white"
                >
                  Sign Out
                </a>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Mobile Header & Nav */}
      <header className="w-full bg-sidebar py-5 px-6 sm:hidden bg-blue-500">
        <div className="flex items-center justify-between">
          <a
            href="index.html"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </a>
          <button
            onClick={toggleDropdown}
            className="text-white  text-3xl focus:outline-none"
          >
            {!isOpen ? <GiHamburgerMenu /> : <GrClose className="text-white"/>}
          </button>
        </div>

        <nav className={isOpen ? 'flex flex-col pt-4' : 'hidden'}>
          <a
            href="index.html"
            className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
          >
            <FaTachometerAlt className="mr-4 text-2xl" />
            Dashboard
          </a>
          <a
            href="index.html"
            className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
          >
            <TbTableShortcut className="mr-4 text-2xl" />
            Tables
          </a>
          <a
            href="index.html"
            className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
          >
            <FaWpforms className="mr-4 text-2xl" />
            Forms
          </a>
          <a
            href="index.html"
            className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
          >
            <SlCalender className="mr-4 text-2xl" />
            Calendar
          </a>
          <a
            href="#"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <BiSupport className="mr-4 text-2xl"/>
            Support
          </a>
          <a
            href="#"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <RiAccountPinCircleFill className="mr-4 text-2xl"/>
            My Account
          </a>
          <a
            href="#"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <FaSignOutAlt className="mr-4 text-2xl"/>
            Sign Out
          </a>
        </nav>
      </header>
    </>
  );
}
