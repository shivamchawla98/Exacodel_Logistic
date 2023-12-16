"use client";
import WarehousePricing from "./Card";
import SpaceRequired from "./AreaRequiredField";
import DatePicker from "./DatePicker";
import Searchbar from "./Searchbar";
import ServiceFilter from "./ServiceFilter";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import LocationSearchInput from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchLatLng } from "@/features/warehouse/warehouse-slice";
import { useQuery } from "@apollo/client";
import LIST_OF_WAREHOUSE_USING_LAT_LNG from "@/graphql/query/getWarehouseListByLatLng";
import { useEffect, useState } from "react";

function SearchAndFilter({ setLoginClose }: any) {
  const { searchLatLng } = useSelector((state: any) => state.warehouseSlice);
  const dispatch = useDispatch();
  const handlePlaceSelect = (place: any) => {
    console.log("Selected Place:", place);
    // Extract latitude and longitude from place.geometry.location
    const lat = place.geometry?.location.lat();
    const lng = place.geometry?.location.lng();
    dispatch(updateSearchLatLng({ lat: lat, lng: lng }));
    console.log("Latitude:", searchLatLng);
    console.log("Longitude:", lng);
  };
  const [warehouses, setWarehouses] = useState<any[]>([]);
  console.log("warehouses : ", warehouses);

  const { loading, error, data, refetch } = useQuery(
    LIST_OF_WAREHOUSE_USING_LAT_LNG,
    {
      variables: {
        lat: searchLatLng.lat,
        lng: searchLatLng.lng,
      },
    }
  );

  useEffect(() => {
    refetch({
      variables: {
        lat: searchLatLng.lat,
        lng: searchLatLng.lng,
      },
    });
    setWarehouses(data?.searchWarehousesByUserLocation);
  }, [searchLatLng, data?.searchWarehousesByUserLocation, refetch]);

  console.log("data : ", data?.searchWarehousesByUserLocation);

  return (
    <form className="w-1/2 py-6 flex h-screen overflow-y-auto justify-center items-center rounded-md shadow-sm flex-wrap no-scrollbar  bg-gradient-to-br to-transparent from-sky-100">
      <div className="w-full flex justify-center items-center">
        <div className="lg: w-10/12">
          <LocationSearchInput onPlaceSelected={handlePlaceSelect} />
        </div>
      </div>

      <div className="w-full">
        <DatePicker />
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14">
        <SpaceRequired />
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14">
        <ServiceFilter />
      </div>
      <div className="w-full flex lg:justify-start items-center ml-14 my-4">
        <button
          // onClick={() => {}}
          type="button"
          className="text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-500 focus:outline-none dark:focus:ring-sky-500"
        >
          Discover Price
        </button>
      </div>
      <div className="w-full flex lg:justify-start justify-center flex-col items-center ml-14 my-4">
        {warehouses !== undefined &&
          warehouses.map((warehouse) => (
            <WarehousePricing
              key={warehouse.id}
              setLoginClose={setLoginClose}
              comapanyName={warehouse.companyName}
              address={warehouse.Adress}
              storageCharges={warehouse.storageCharges}
              Id={warehouse.id}
            />
          ))}
      </div>
    </form>
  );
}

export default SearchAndFilter;
