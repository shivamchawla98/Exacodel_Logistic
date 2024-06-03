"use client";
import WarehousePricing from "./Card";
import ServiceFilter from "./ServiceFilter";
import LocationSearchInput from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchLatLng } from "@/features/warehouse/warehouse-slice";
import { useQuery } from "@apollo/client";
import LIST_OF_WAREHOUSE_USING_LAT_LNG from "@/graphql/query/getWarehouseListByLatLng";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateWarehouseMarkers } from "@/features/warehouse/warehouse-slice";

const warehouseTypeMapping: any = {
  coldStorageFacility: "Cold Storage Facility",
  generalWarehouse: "General Warehouse",
  referigeratedWarehouse: "Refrigerated Warehouse",
  fullFilmentCenter: "Fulfillment Center",
  petroleumWarehouse: "Petroleum Warehouse",
  bondedWarehouse: "Bonded Warehouse",
  hazCargoWarehouse: "Hazardous Cargo Warehouse",
};

const hazardousTypes = [
  "Class1",
  "Class2",
  "Class3",
  "Class4",
  "Class5",
  "Class6",
  "Class7",
  "Class8",
];

interface Inputs {
  warehouseType: string;
  hazardType: string;
  sqFootRequired: number;
  lat: number;
  lng: number;
}

function SearchAndFilter({ setLoginClose }: any) {
  const { searchLatLng } = useSelector((state: any) => state.warehouseSlice);
  const dispatch = useDispatch();
  const [reqValue, setSpaceReqValue] = useState(100);
  

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const [warehouses, setWarehouses] = useState<any[]>([]);

  const handlePlaceSelect = (place: any) => {
    console.log("Selected Place:", place);
    // Extract latitude and longitude from place.geometry.location
    const lat = place.geometry?.location.lat();
    const lng = place.geometry?.location.lng();
    dispatch(updateSearchLatLng({ lat: lat, lng: lng }));
    console.log("Latitude: >>>>>>>>>", lat);
  };
  console.log("warehouses : >>>>", warehouses);

  const { loading, error, data, refetch } = useQuery(
    LIST_OF_WAREHOUSE_USING_LAT_LNG,
    {
      variables: {
        lat: searchLatLng.lat,
        lng: searchLatLng.lng,
      },
    }
  );

  console.log("data : ", data?.searchWarehousesByUserLocation);
  const onSubmit: SubmitHandler<Inputs> = (formData: any) => {
    console.log(formData);
    try {
      refetch({
        variables: {
          lat: searchLatLng.lat,
          lng: searchLatLng.lng,
        },
      });
      let filteredWarehouse = data.searchWarehousesByUserLocation.filter(
        (warehouse: any) => {
          console.log("warehouse type : ", warehouse.totalAvailiableArea * 1);
          if (
            warehouse.totalAvailiableArea * 1 >= formData.sqFootRequired * 1 &&
            (warehouse.warehouseType === formData.warehouseType ||
              formData?.warehouseType === "other")
          ) {
            return warehouse;
          }
        }
      );
      if (localStorage.getItem("requiredSpace") != null) {
        localStorage.removeItem("requiredSpace");
      }
      localStorage.setItem(
        "requiredSpace",
        JSON.stringify(formData.sqFootRequired)
      );
      setWarehouses(filteredWarehouse);
      dispatch(updateWarehouseMarkers(filteredWarehouse));
      console.log("formatted filtered one", filteredWarehouse);
    } catch (error: any) {
      toast(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 py-6 flex h-screen overflow-y-auto justify-center items-center flex-wrap no-scrollbar  bg-gradient-to-br to-transparent from-primary-100"
    >
      <ToastContainer />
      <div className="w-full flex justify-center items-center">
        <div className="lg: w-10/12">
          <LocationSearchInput onPlaceSelected={handlePlaceSelect} />
        </div>
      </div>

      <div className="w-full flex justify-evenly items-center">
        {/* <DatePicker /> */}
        <div className="lg:w-5/12">
          <label
            htmlFor="warehouseType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Warehouse Type
          </label>
          <select
            {...register("warehouseType", {})}
            id="warehouseType"
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="other">other</option>
            {Object.entries(warehouseTypeMapping).map(([value, Key]: any) => {
              return (
                <option key={Key} value={value}>
                  {Key}
                </option>
              );
            })}
          </select>
        </div>
        <div className="lg:w-1/3">
          <label
            htmlFor="hazardous-type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Hazardous Category
          </label>
          <select
            {...register("hazardType")}
            id="hazardous-type"
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="">Choose type</option>
            {hazardousTypes.map((hazType: any) => {
              return (
                <option key={hazType} value={hazType}>
                  {hazType}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14">
        <div className="max-w-md my-2 ">
          <div className="mb-2 block">
            <Label
              htmlFor="space"
              className="text-gray-700"
              value="Required Space Sq. Ft."
            />
          </div>
          <div className="flex justify-evenly items-center">
            <button
              type="button"
              className="px-2 py-1 mr-2 bg-primary-500 text-white rounded-md focus:outline-none hover:bg-fuchsia-700"
              onClick={() => {
                if (reqValue <= 100) {
                  return;
                }
                setSpaceReqValue((prevValue) => prevValue - 50);
                setValue("sqFootRequired", reqValue);
              }}
            >
              -50
            </button>
            <input
              {...register("sqFootRequired", { value: 100 })}
              value={reqValue}
              className=" rounded-md border-gray-200 border-1 border focus:border-primary-400 text-sm"
              {...register("sqFootRequired", {
                required: "Enter space needed for storage",
              })}
              type="number"
              placeholder="Space Required in Sq. Foot"
            />
            <button
              type="button"
              className="px-2 ml-2 py-1 bg-primary-500 text-white rounded-md focus:outline-none hover:bg-primary-600"
              onClick={() => {
                setSpaceReqValue((prevValue) => prevValue + 50);
                setValue("sqFootRequired", reqValue);
              }}
            >
              +50
            </button>
            {errors.sqFootRequired && (
              <p className="text-xs text-rose-500">
                Space Required in Sq. Feet
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14">
        <ServiceFilter />
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14 my-4">
        <button
          type="submit"
          className="text-white bg-primary-500 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-fuchsia-700 dark:hover:bg-primary-500 focus:outline-none dark:focus:ring-primary-500"
        >
          Discover Warehouses
        </button>
      </div>
      <div className="w-full flex lg:justify-start justify-center flex-col items-center ml-14 my-4">
        {loading && (
          <div className="flex justify-center items-center mt-20">
            <div className="animate-spin rounded-full border-t-4 border-b-4 border-primary-500 h-12 w-12"></div>
          </div>
        )}
        {warehouses !== undefined &&
          warehouses.map((warehouse) => (
            <WarehousePricing
              key={warehouse?.id}
              setLoginClose={setLoginClose}
              comapanyName={warehouse?.companyName}
              address={warehouse?.Adress}
              storageCharges={warehouse?.storageCharges}
              Id={warehouse?.id}
              uniqueid={warehouse?.uniqueid}
              hazrard={warehouse?.hazardousStorageType}
              warehouseType={warehouse?.warehouseType}
              temperatureCapacity={warehouse?.temperatureCapacity}
              temperatureType={warehouse?.temperatureType}
            />
          ))}
      </div>
    </form>
  );
}

export default SearchAndFilter;
