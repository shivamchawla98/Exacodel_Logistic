'use clinet'

import { useState } from "react";
import { BsFillChatFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import container from "../../../asset/images/container1.png";
import Image from "next/image";

const arr = [1, 2, 3, 4];
const tabs = [
  {
    name: "Tracking",
    current: true,
  },
  {
    name: "Finance",
    current: false,
  },
  {
    name: "Booing Info",
    current: false,
  },
  {
    name: "Doucuments",
    current: false,
  },
  {
    name: "Shipping Instruction",
    current: false,
  },
  {
    name: "payment",
    current: false,
  },
];

const NotificationCard = () => {
  return (
    <div className="relative">
    <a
      href="#"
      className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div className="flex-shrink-0">
        {/* <img
          className="rounded-full w-11 h-11"
          src="/docs/images/people/profile-picture-1.jpg"
          alt="Jese image"
        /> */}
        <Image
                  className="rounded-full w-11 h-11"
                  width={44}
                  height={44}
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Jese image"
        />
        <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
          <svg
            className="w-2 h-2 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
            <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
          </svg>
        </div>
      </div>
      <div className="w-full pl-3">
        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
          New message from{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Jese Leos
          </span>
          Hey, what&apos;s up? All set for the presentation?
        </div>
        <div className="text-xs text-blue-600 dark:text-blue-500">
          a few moments ago
        </div>
      </div>
    </a>
    </div>
  );
};

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <div className="flex flex-col relative right-4">
      <button
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
        type="button"
        onClick={() => setShowNotification(!showNotification)}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 14 20"
        >
          <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
        </svg>
        <div className="relative flex">
          <div className="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900" />
        </div>
      </button>
      {/* Dropdown menu */}
      {showNotification && (
        <div
          id="dropdownNotification"
          className="z-20 w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
          aria-labelledby="dropdownNotificationButton"
        >
          <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
            Notifications
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {arr.map((item) => {
              return <NotificationCard key={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const SearchBar = () => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
        />
      </div>
    </form>
  );
};

const BookingDetails = () => {
  return (
    <div className="w-full shadow-sm rounded-sm grid grid-cols-1 items-center mt-6">
      <div className="flex justify-between w-full">
        <div className="lg:w-1/2 flex justify-evenly pt-6">
          <p className="text-gray-600 font-medium text-lg">867453</p>
          <div className="flex justify-evenly">
            <p className="text-gray-700 font-bold text-lg pr-4">Ningbo, CN</p>
            <MdOutlineArrowForwardIos
              size={17}
              className="text-gray-600 mt-1"
            />
            <p className="text-gray-700 font-bold text-lg pl-4">Ningbo, CN</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-end ">
          <button className="text-purple-500 w-24 h-10 text-lg shadow-md rounded-sm font-medium mr-5 mt-2">
            New
          </button>
        </div>
      </div>
      <div className="w-full flex justify-evenly">
        <div className="flex justify-between w-2/5">
          <div className="grid grid-cols-1 ml-14">
            <Image src={container} alt="container Image" width={120} />
            <p className="ml-10 mt-4">
              <strong>FCL </strong> 1 X 40&apos;
            </p>
          </div>

          <div className="grid grid-cols-1 space-y-0 h-14 ml-10 w-50 my-auto">
            <p className="text-sm font-light">
              <span className="mr-2 text-base font-normal">
                Commodity Name :
              </span>{" "}
              chair
            </p>
            <p className="text-sm font-light">
              <span className="mr-2 text-base font-normal">Cargo Ready :</span>{" "}
              28/08/2023
            </p>
            <p className="text-sm font-light">
              <span className="mr-2 text-base font-normal">
                Shipping Line :
              </span>{" "}
              Maersk
            </p>
          </div>
        </div>
        <div className="w- w-2/3 flex justify-end">
          <p className="text-lg text-gray-800 my-auto  font-medium">
            USD 12000
          </p>
        </div>
      </div>
    </div>
  );
};

const Tabs = () => {
  const [tab, setTab] = useState("Tracking")
  
  const tabHandler = (e: any) => {
    setTab(e.target.id)
    tabs.map( (item) => {
      if (e.target.id === item.name) {
        item.current = true
      } else item.current = false
    })
    
  }

  return (
    <ul className="flex mt-4">
      {tabs.map((item) => {
        return (
          <li className="flex-1 mr-2" key={item.name} id={item.name} onClick={tabHandler}>
          <a
          id={item.name}
            className={`text-center block borderpy-2 py-2 px-4 ${
              item.current
                ? "border-sky-500 rounded  bg-sky-500 hover:bg-sky-700 text-white"
                : "border-white rounded hover:border-gray-200 text-sky-500 hover:bg-gray-200"
            }`}
            href="#"
          >
            {item.name}
          </a>
        </li>
        )
      })}

    </ul>
  );
};


const trackings = [
  {
     type: 'Truck',
     date: '12 Oct 2020',
     event: 'Export truck gate in to terminal',
     tripNumber: '3432546',
     transportName: 'xxxxxx',
     notes: 'xxxxxx'
  }
]

const TrackingTable = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8">
      <div className="sm:flex sm:items-center justify-end">
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
        </div>
      </div>
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Movement Type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Event
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Trip number
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Transport name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Notes
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {trackings.map((track) => (
                  <tr key={track.tripNumber} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {track.type}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{track.date}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{track.event}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{track.tripNumber}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{track.transportName}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{track.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function Bookings() {
  return (
    <div className="xl:pl-44">
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
        <div className="flex justify-between">
          <SearchBar />
          <Notification />
        </div>
        <div className="h-14 shadow-md rodunded-sm w-full flex justify-between align-middle">
          <button className="flex justify-between items-center text-gray-700 font-medium">
            <IoIosArrowBack className="text-sky-700" size={34} />
            Booking list
          </button>
          <div className="w-1/2 mt-2 flex justify-evenly items-center">
            <button className="bg-white flex hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border  rounded-sm ">
              <BsFillChatFill className="text-sky-600 " size={20} />
              <p className="px-4 pt-1 text-xs">Chat</p>
            </button>
            <button className="flex justify-between"></button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border text-xs  rounded-sm ">
              Reject
            </button>
            <button className="bg-white flex hover:bg-gray-100 text-green-500 font-medium py-2 px-2 text-xs border  rounded-sm ">
              Send to RO
            </button>
            <button className="bg-white flex hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 text-xs border  rounded-sm ">
              Accept
            </button>
          </div>
        </div>
        <BookingDetails />
        <Tabs />
        <TrackingTable />
        <TrackingTable />
        <TrackingTable />
        <TrackingTable />
      </div>
    </div>
  );
}

export default Bookings;
