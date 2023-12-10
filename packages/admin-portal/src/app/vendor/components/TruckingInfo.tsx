import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import GET_WAREHOUSE_BY_ID from '@/graphql/query/getWarehouseById';


export default function TruckingInfo({ Id }: any) {

  const { data, loading, error } = useQuery(GET_WAREHOUSE_BY_ID, {
    variables: {
      id: Id*1
    }
  })



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
          "companyName": warehouse.companyName,
          "Adress": warehouse.Adress,
          "State": warehouse.State,
          "City": warehouse.City,
          "Pincode": warehouse.Pincode,
          "Country": warehouse.Country,
          "Warehouse Type": warehouse.warehouseType,
          "Total Square Area": warehouse.totalSquareArea,
          "Total Availiable Area": warehouse.totalAvailiableArea,
          "Occupied Space": warehouse.occupiedSpace,
          "Unoccupied Space": warehouse.unoccupiedSpace,
          "Racked Space": warehouse.rackedSpace,
          "Minimum Storage Rent": warehouse.minimumStorageRent,
          "Minimum Storage Charges Per Pallet": warehouse.minimumStorageCharges_per_pallet,
          "Minimum Storage Area": warehouse.minimumStorageArea,
          "Minimum Storage Area Per Pallet": warehouse.minimumstorageArea_per_pallet,
          "Storage Charges": warehouse.storageCharges,
          "Storage Charges Per Pallet": warehouse.storageCharges_per_pallet,
          "Hazardous Storage Type": warehouse.hazardousStorageType,
          "Temperature Type": warehouse.temperatureType,
          "Temperature Capacity": warehouse.temperatureCapacity
        });


      }
    }
  }, [loading, data, Id]);
  console.log("warehouse : ", data);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
        <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
        <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
      </div>
    ) 
  }

  if (error) {
    return (
      <p>Error loading data</p>
    )
  }


  return (
    <div className=' '>
      <div className="overflow-hidden relative my-16 mx-auto bg-white sm:rounded-lg w-3/4 rounded-md shadow-md">
        <div className="px-4 py-6 sm:px-6">
          <div className='w-full flex justify-between items-center'>
            <h3 className="text-base font-semibold leading-7 text-gray-900 items-baseline">Applicant Information</h3>
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {Object.
              entries(
                data?.getWarehouseById).
              map(([label, value]: any[]) => !(label === "__typename") && (
            
                <div className="grid grid-cols-12 items-center py-4 px-6" key={label}>
                  {/* {console.log("label: ", label)} */}
                  <>
                    <div className="col-span-4">
                      <dt className="text-sm font-medium text-gray-900">{label}</dt>
                    </div>
                    <div className="col-span-8">

                      <input
                        type="text"
                        disabled
                        value={value}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      />

                    </div>
                  </>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </div>
  );

}