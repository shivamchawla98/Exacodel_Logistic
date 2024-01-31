import { useState } from "react";
import Image from "next/image";
import { CheckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Id } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { updateWarehouseId } from "@/features/warehouse/warehouse-slice";
import { FaBiohazard, FaTemperatureHigh, FaWarehouse } from "react-icons/fa";

const warehouseTypeMapping: any = {
  coldStorageFacility: "Cold Storage Facility",
  generalWarehouse: "General Warehouse",
  referigeratedWarehouse: "Refrigerated Warehouse",
  fullFilmentCenter: "Fulfillment Center",
  petroleumWarehouse: "Petroleum Warehouse",
  bondedWarehouse: "Bonded Warehouse",
  hazCargoWarehouse: "Hazardous Cargo Warehouse",
};

const temperatureCapacityMapping: any = {
  MINUS_Eighteen_Degree_to_twenty_degree_celcius: "Between -18°C and 20°C",
  MINUS_Two_Degree_to_MINUS_Eight_degree_celcius: "Between -2°C and -8°C",
  MINUS_Twenty_Degree_to_twenty_degree_celcius: "Between -20°C and 20°C",
  fifteen_Degree_to_twentyfive_degree_celcius: "Between 15°C and 25°C",
};

const WarehousePricing = ({
  setLoginClose,
  address,
  storageCharges,
  Id,
  uniqueid,
  hazrard,
  warehouseType,
  temperatureCapacity,
  temperatureType,
}: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLogedIn } = useSelector((state: any) => state.form);
  const getWarehouseHumanReadable = (warehouse: any) => {
    return warehouseTypeMapping[warehouse];
  };
  const getWarehouseTempHumanReadable = (temperature: any) => {
    return temperatureCapacityMapping[temperature];
  };

  // return (
  //   <div className="w-full flex justify-center my-2 items-center flex-wrap">
  //     <div className="relative mx-auto max-w-md">
  //       <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
  //         <div className="shadow p-4 rounded-lg bg-white">
  //           <div className="flex justify-center relative rounded-lg overflow-hidden h-40">
  //             <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
  //               <div className="absolute inset-0 bg-black opacity-10" />
  //             </div>
  //             <div className="absolute flex justify-center bottom-0 mb-3">
  //               <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
  //                 <p className="flex items-center text-xs font-medium text-gray-800">
  //                   <CheckIcon className="text-green-500 h-4 w-4" />
  //                   Fork Lift
  //                 </p>
  //                 <p className="flex items-center text-xs font-medium text-gray-800">
  //                   <CheckIcon className="text-green-500 h-4 w-4" />
  //                   Full-time Labour
  //                 </p>
  //                 <p className="flex items-center text-xs font-medium text-gray-800">
  //                   <CheckIcon className="text-green-500 h-4 w-4" />
  //                   Supervisor
  //                 </p>
  //               </div>
  //             </div>
  //             <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
  //               Featured
  //             </span>
  //           </div>
  //           <div className="mt-4">
  //             <h2
  //               className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
  //               title="New York"
  //             >
  //               {uniqueid}
  //             </h2>
  //             <p
  //               className="mt-2 text-sm text-gray-800 line-clamp-1"
  //               title="New York, NY 10004, United States"
  //             >
  //               {address}
  //             </p>
  //           </div>

  //           <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
  //             <p className="inline-flex flex-col xl:flex-row items-center text-gray-800">
  //               <FaBiohazard className="text-primary-500 w-5 h-5" />
  //               <span className="ml-2 font-medium text-sm mt-1  text-gray-700">
  //                 {hazrard}
  //               </span>
  //             </p>
  //             <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
  //               <FaWarehouse className="text-sky-500 w-5 h-5" />
  //               <span className="ml-2 font-medium text-sm mt-1  text-gray-700">
  //                 {getWarehouseHumanReadable(warehouseType)}
  //               </span>
  //             </p>
  //             <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
  //               <FaTemperatureHigh className="text-sky-500 w-5 h-5" />
  //               <span className="ml-2 font-medium text-sm mt-1  text-gray-700">
  //                 {getWarehouseTempHumanReadable(temperatureCapacity)}{" "}
  //                 <strong>{temperatureType}</strong>
  //               </span>
  //             </p>
  //           </div>
  //           <div className="w-full flex justify-evenly mt-4 items-center">
  //             <div className="flex justify-end">
  //               <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
  //                 <span className="text-sm uppercase">₹</span>
  //                 <span className="text-lg">{storageCharges}</span>/m
  //               </p>
  //             </div>
  //             <div className="w-11/12 flex lg:justify-start items-center ml-14 my-4">
  //               <button
  //                 onClick={() => {
  //                   try {
  //                     if (!isLogedIn) {
  //                       setLoginClose(false);
  //                       return;
  //                     }
  //                     if (localStorage.getItem("warehouseId") != null) {
  //                       localStorage.removeItem("warehouseId");
  //                     }
  //                     localStorage.setItem("warehouseId", JSON.stringify(Id));
  //                     dispatch(updateWarehouseId(Id));
  //                     router.push("/warehouse-booking");
  //                   } catch (error) {
  //                     console.log(error);
  //                   }
  //                 }}
  //                 type="button"
  //                 className="text-white bg-primary-500 hover:bg-fuchsia-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-md text-xs px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-500 focus:outline-none dark:focus:ring-primary-500"
  //               >
  //                 Book Warehouse
  //               </button>
  //               <button
  //                 onClick={() => {
  //                   try {
  //                     if (localStorage.getItem("warehouseId") != null) {
  //                       localStorage.removeItem("warehouseId");
  //                     }
  //                     localStorage.setItem("warehouseId", Id);
  //                     router.push("/warehouse-details");
  //                   } catch (error) {
  //                     console.log(error);
  //                   }
  //                 }}
  //                 type="button"
  //                 className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-600 focus:outline-none dark:focus:ring-sky-600"
  //               >
  //                 View Warehouse Details
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="w-full flex justify-center my-2 items-center flex-wrap">
      <div className="relative mx-auto max-w-lg">
        <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
          <div className="shadow p-4 rounded-lg bg-white flex justify-between items-center">
            <div className="w-1/2">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-40">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                  <div className="absolute inset-0 bg-black opacity-10" />
                </div>
                {/* <div className="absolute flex justify-center bottom-0 mb-3">
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
                </div> */}
                <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-primary-500 text-sm font-medium text-white select-none">
                  Featured
                </span>
              </div>
              <div className="mt-4">
                <h2
                  className="paragraph-semibold text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  {uniqueid}
                </h2>
                <p
                  className="mt-2 paragraph-regular text-sm text-gray-800 "
                  title="New York, NY 10004, United States"
                >
                  {address}
                </p>
              </div>
            </div>

            <div className="flex-col w-2/5">
              <div className="flex-evenly">
                <p className="inline-flex flex-col xl:flex-row items-center text-gray-800">
                  <FaBiohazard className="text-primary-500 w-4 h-4" />
                  <span className="ml-2 body-medium text-sm mt-1  text-gray-700">
                    {hazrard}
                  </span>
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                  <FaWarehouse className="text-primary-500 w-4 h-4" />
                  <span className="ml-2 body-medium text-sm mt-1  text-gray-700">
                    {getWarehouseHumanReadable(warehouseType)}
                  </span>
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                  <FaTemperatureHigh className="text-primary-500 w-4 h-4" />
                  <span className="ml-2 body-medium text-sm mt-1  text-gray-700">
                    {getWarehouseTempHumanReadable(temperatureCapacity)}{" "}
                    <strong>{temperatureType}</strong>
                  </span>
                </p>
              </div>
              <div className="w-full flex-col mt-4 items-center">
                <div className=" flex lg:justify-start items-center my-4">
                  <button
                    onClick={() => {
                      try {
                        if (!isLogedIn) {
                          setLoginClose(false);
                          return;
                        }
                        if (localStorage.getItem("warehouseId") != null) {
                          localStorage.removeItem("warehouseId");
                        }
                        localStorage.setItem("warehouseId", JSON.stringify(Id));
                        dispatch(updateWarehouseId(Id));
                        router.push("/warehouse-booking");
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    type="button"
                    className="text-white bg-primary-500 hover:bg-fuchsia-800 focus:ring-4 focus:ring-primary-300 body-medium  rounded-md text-xs px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-500 focus:outline-none dark:focus:ring-primary-500"
                  >
                    Book
                  </button>
                  <button
                    onClick={() => {
                      try {
                        if (localStorage.getItem("warehouseId") != null) {
                          localStorage.removeItem("warehouseId");
                        }
                        localStorage.setItem("warehouseId", Id);
                        router.push("/warehouse-details");
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    type="button"
                    className="text-white body-medium bg-cyan-900 hover:bg-cyan-900 focus:ring-4 focus:ring-cyan-300 rounded-md text-xs px-5 py-2.5 me-2 mb-2 dark:bg-cyan-900 dark:hover:bg-cyan-900 focus:outline-none dark:focus:ring-cyan-900"
                  >
                    View
                  </button>
                </div>
                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-sm uppercase">₹</span>
                    <span className="text-lg">{storageCharges}</span> sq.
                    Ft./day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehousePricing;
