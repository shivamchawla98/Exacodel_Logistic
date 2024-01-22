import { useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import GET_WAREHOUSE_BY_ID from "@/graphql/query/getWarehouseById";
import { RectangleGroupIcon } from "@heroicons/react/20/solid";

const temperatureCapacityMapping: any = {
  MINUS_Eighteen_Degree_to_twenty_degree_celcius: "Between -18°C and 20°C",
  MINUS_Two_Degree_to_MINUS_Eight_degree_celcius: "Between -2°C and -8°C",
  MINUS_Twenty_Degree_to_twenty_degree_celcius: "Between -20°C and 20°C",
  fifteen_Degree_to_twentyfive_degree_celcius: "Between 15°C and 25°C",
};

const warehouseTypeMapping: any = {
  coldStorageFacility: "Cold Storage Facility",
  generalWarehouse: "General Warehouse",
  referigeratedWarehouse: "Refrigerated Warehouse",
  fullFilmentCenter: "Fulfillment Center",
  petroleumWarehouse: "Petroleum Warehouse",
  bondedWarehouse: "Bonded Warehouse",
  hazCargoWarehouse: "Hazardous Cargo Warehouse",
};

export default function WarehouseInfo({ Id }: any) {
  const { data, loading, error } = useQuery(GET_WAREHOUSE_BY_ID, {
    variables: {
      id: Id * 1,
    },
  });

  console.log("id  => ", Id);

  console.log("GraphQL Query:", GET_WAREHOUSE_BY_ID?.loc?.source?.body);

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (!loading && data && data?.getWarehouseById) {
      console.log("data", data);
      let warehouse = data.getWarehouseById;

      console.log("list of intitial users ", warehouse);

      if (warehouse) {
        setFormData({
          "Company Name": warehouse.companyName,
          Adress: warehouse.Adress,
          State: warehouse.State,
          City: warehouse.City,
          Pincode: warehouse.Pincode,
          Country: warehouse.Country,
          "Warehouse Type":
            warehouseTypeMapping[warehouse.warehouseType] ||
            warehouse.warehouseType,
          "Total Square Area": warehouse.totalSquareArea,
          "Total Availiable Area": warehouse.totalAvailiableArea,
          "Occupied Space": warehouse.occupiedSpace,
          "Unoccupied Space": warehouse.unoccupiedSpace,
          "Racked Space": warehouse.rackedSpace,
          "Minimum Storage Rent": warehouse.minimumStorageRent,
          "Minimum Storage Charges Per Pallet":
            warehouse.minimumStorageCharges_per_pallet,
          "Minimum Storage Area": warehouse.minimumStorageArea,
          "Minimum Storage Area Per Pallet":
            warehouse.minimumstorageArea_per_pallet,
          "Storage Charges": warehouse.storageCharges,
          "Storage Charges Per Pallet": warehouse.storageCharges_per_pallet,
          "Hazardous Storage Type": warehouse.hazardousStorageType,
          "Temperature Type": warehouse.temperatureType,
          "Temperature Capacity":
            temperatureCapacityMapping[warehouse.temperatureCapacity] ||
            warehouse.temperatureCapacity,
        });
      }
    }
  }, [loading, data, Id]);
  console.log("warehouse : ", data);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-primary-500 rounded-full"></div>
        <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-primary-500 rounded-full"></div>
        <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-primary-500 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      {/* Right Side */}
      <div className="w-full md:w-11/12 mx-2 h-64">
        {/* Profile tab */}
        {/* About Section */}
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 my-6">
            <span className="text-primary-500">
              <RectangleGroupIcon className="h-6 w-6" />
            </span>
            <span className="tracking-wide">Warehouse Details</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-xs">
              {Object.entries(formData).map(([label, value]: any) => (
                <div className="grid grid-cols-2" key={label}>
                  <div className="px-4 py-2 font-semibold">{label}</div>
                  <div className="px-4 py-2">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End of about section */}
      </div>
    </>
  );
}
