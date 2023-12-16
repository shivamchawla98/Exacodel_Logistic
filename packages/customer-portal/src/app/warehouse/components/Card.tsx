import { useState } from "react";
import Image from "next/image";
import { CheckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Id } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { updateWarehouseId } from "@/features/warehouse/warehouse-slice";

const WarehousePricing = ({
  setLoginClose,
  comapanyName,
  address,
  storageCharges,
  Id,
  uniqueid,
}: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLogedIn } = useSelector((state: any) => state.form);
  const tabs = [
    {
      title: "Small Size",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19,
    },
    {
      title: "Medium Size",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 39,
    },
    {
      title: "Large Size",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 59,
    },
  ];

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full flex justify-center my-2 items-center flex-wrap">
      <div className="relative mx-auto max-w-md">
        <a
          href="#"
          className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div className="shadow p-4 rounded-lg bg-white">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-40">
              <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div className="absolute inset-0 bg-black opacity-10" />
              </div>
              <div className="absolute flex justify-center bottom-0 mb-3">
                <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                  <p className="flex items-center text-xs font-medium text-gray-800">
                    <CheckIcon className="text-green-500 h-4 w-4" />
                    Fork Lift
                  </p>
                  <p className="flex items-center text-xs font-medium text-gray-800">
                    <CheckIcon className="text-green-500 h-4 w-4" />
                    Full-time Labour
                  </p>
                  <p className="flex items-center text-xs font-medium text-gray-800">
                    <CheckIcon className="text-green-500 h-4 w-4" />
                    Supervisor
                  </p>
                </div>
              </div>
              <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                Featured
              </span>
            </div>
            <div className="mt-4">
              <h2
                className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                title="New York"
              >
                {uniqueid}
              </h2>
              <p
                className="mt-2 text-sm text-gray-800 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                {address}
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">Monthly Rental : ₹0</span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">GST @ 18% : ₹0</span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">Total Amount To Pay : ₹0</span>
              </p>
            </div>
            <div className="w-full flex justify-evenly mt-4 items-center">
              <div className="flex justify-end">
                <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                  <span className="text-sm uppercase">₹</span>
                  <span className="text-lg">{storageCharges}</span>/m
                </p>
              </div>
              <div className="w-11/12 flex lg:justify-start items-center ml-14 my-4">
                <button
                  onClick={() => {
                    if (!isLogedIn) {
                      setLoginClose(false);
                      return;
                    }
                    dispatch(updateWarehouseId(Id));
                    router.push("/warehouse-booking");
                  }}
                  type="button"
                  className="text-white bg-rose-400 hover:bg-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-md text-xs px-5 py-2.5 me-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-500 focus:outline-none dark:focus:ring-rose-500"
                >
                  Book Warehouse
                </button>
                <button
                  type="button"
                  className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-600 focus:outline-none dark:focus:ring-sky-600"
                >
                  Enter Enquiry
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default WarehousePricing;
