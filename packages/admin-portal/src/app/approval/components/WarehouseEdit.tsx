import { useQuery, useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";
import ApprovedPopup from "./ApprovedPopup";

const GET_WAREHOUSE_BY_ID  = gql`query GET_WAREHOUSE_BY_ID($id: Int!) {
    getWarehouseById(id: $id) {
      companyName
      Adress
      State
      City
      Pincode
      Country
      warehouseType
      totalSquareArea
      totalAvailiableArea
      occupiedSpace
      unoccupiedSpace
      rackedSpace
    	minimumStorageRent
    minimumStorageCharges_per_pallet
    minimumStorageArea
    minimumstorageArea_per_pallet
    storageCharges
    storageCharges_per_pallet
    minimumstorageArea_per_pallet
    hazardousStorageType
    temperatureType
    temperatureCapacity
    }
  }
`

const UPDATE_WAREHOUSE = gql`
mutation UPDATE_WAREHOUSE($id: Int!, $input: WarehouseInput!) {
    updateWarehouse(id: $id, input: $input) {
      companyName
          id
    }
  }
`

const DELETE_WAREHOUSE = gql`
mutation DELETE_WAREHOUSE($id: Int!) {
  deleteWarehouse(id: $id)
}
`

const warehouseType = [
    "Cold Storage Facility",
    "General Warehouse",
    "Refrigerated Warehouse",
    "Fulfillment Center",
    "Petroleum Warehouse",
    "Bonded Warehouse",
    "Hazardous Cargo Warehouse"
  ]

const hazardousTypes = [
    "Class1",
    "Class2",
    "Class3",
    "Class4",
    "Class5",
    "Class6",
    "Class7",
    "Class8"
  ]

  const temperatureCapacities = [
    "MINUS_Eighteen_Degree_to_twenty_degree_celcius",
    "MINUS_Two_Degree_to_MINUS_Eight_degree_celcius",
    "MINUS_Twenty_Degree_to_twenty_degree_celcius",
    "fifteen_Degree_to_twentyfive_degree_celcius"
  ]

  const temperatureTypes = ["Active",    "Passive"]

function WarehouseEdit({Id, setActiveItem}: any) {

    const { loading, error, data, refetch } = useQuery(GET_WAREHOUSE_BY_ID, {
        variables: {
          id: Id*1
        },
      });
      const [editMode, setEditMode] = useState(false);
      const [formData, setFormData] = useState<any>({});
      const [userType, setUserType] = useState('');
      const [gst_no, setGstNo] = useState('');
      const [showAlert, setShowAlert] = useState(false);
    
      const [selectedWarehouseType, setSelectedWarehouseType] = useState('');
      const [selectedHazardousType, setSelectedHazardousType] = useState('');
      const [selectedTemperatureType, setSelectedTemperatureType] = useState('');
      const [selectedTemperatureCapacities, setSelectedTemperatureCapacities] = useState('');
      const[showPopUp, setShowPopUp] = useState(false);
      const [operation, setOperation] = useState("Approved");
    
      const [updateWarehouse] = useMutation(UPDATE_WAREHOUSE);
      const [deleteWarehouse] = useMutation(DELETE_WAREHOUSE)
    
      useEffect(() => {  
        if (!loading && data && data.getWarehouseById) {
          refetch();
          console.log("data", data);
          console.log("loading", error);
          let warehouse =  data.getWarehouseById;        
          setUserType(warehouse.userType);
          setGstNo(warehouse.gst_no);
    
          if (warehouse) {
            setSelectedWarehouseType(warehouse.annualTurnover);
            setSelectedHazardousType(warehouse.hazardousStorageType);
            setSelectedTemperatureType(warehouse.temperatureType);
            setSelectedTemperatureCapacities(warehouse.temperatureCapacity)
            setFormData({
                "companyName": warehouse.companyName,
                "Adress": warehouse.Adress,
                "State": warehouse.State,
                "City": warehouse.City,
                "Pincode": warehouse.Pincode,
                "Country": warehouse.Country,
                "warehouseType": selectedWarehouseType,
                "totalSquareArea": warehouse.totalSquareArea,
                "totalAvailiableArea": warehouse.totalAvailiableArea,
                "occupiedSpace": warehouse.occupiedSpace,
                "unoccupiedSpace": warehouse.unoccupiedSpace,
                "rackedSpace": warehouse.rackedSpace,
                "minimumStorageRent": warehouse.minimumStorageRent,
                "minimumStorageCharges_per_pallet": warehouse.minimumStorageCharges_per_pallet,
                "minimumStorageArea": warehouse.minimumStorageArea,
                "minimumstorageArea_per_pallet": warehouse.minimumstorageArea_per_pallet,
                "storageCharges": warehouse.storageCharges,
                "storageCharges_per_pallet": warehouse.storageCharges_per_pallet,
                "hazardousStorageType": selectedHazardousType,
                "temperatureType": selectedTemperatureType,
                "temperatureCapacity": selectedTemperatureCapacities
            });
    
    
          }
        }
      }, [loading, data, Id, showPopUp]);
    
      const handleInputChange = (field: string, value: string) => {
        setFormData((prevData: any) => ({
          ...prevData,
          [field]: value,
        }));
      };
    
      function Alert() {
        return (
          <div className="rounded-md bg-red-50 p-4 cursor-pointer">
            <div
              onClick={() => {
                setShowAlert(false);
              }}
              className="flex">
              <div className="flex-shrink-0">
                <BiErrorCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error caused in Approve</h3>
                <div className="my-2 text-sm text-red-700">
                  <ul role="list" className="list-disc space-y-1 pl-5">
                    <li>Some fields are left for filling</li>
                    <li>Or you have entered wrong inputs in the fields</li>
                  </ul>
                </div>
                <h3 className="text-base font-medium text-green-800">Click On alert and continue Approving</h3>
              </div>
            </div>
          </div>
        )
      }
    
      const handleApprove = async (approvedOrReject: String) => {

        console.log("Id : ", Id);  
        if (approvedOrReject === "approve") {
          try {
            const { data: approvalData } = await updateWarehouse({
              variables: {
                id: Id * 1,
                input: {
                  companyName: formData['companyName'],
                  Adress: formData['Adress'],
                  State: formData['State'],
                  City: formData['City'],
                  Pincode: formData['Pincode'],
                  Country: formData['Country'],
                  warehouseType: selectedWarehouseType,
                  totalSquareArea: formData['totalSquareArea'],
                  totalAvailiableArea: formData['totalAvailiableArea'],
                  occupiedSpace: formData['occupiedSpace'],
                  unoccupiedSpace: formData['unoccupiedSpace'],
                  rackedSpace: formData['rackedSpace'],
                  minimumStorageRent: formData['minimumStorageRent'],
                  minimumStorageCharges_per_pallet: formData['minimumStorageCharges_per_pallet'],
                  minimumStorageArea: formData['minimumStorageArea'],
                  minimumstorageArea_per_pallet: formData['minimumstorageArea_per_pallet'],
                  storageCharges: formData["storageCharges"],
                  storageCharges_per_pallet: formData["storageCharges_per_pallet"],
                  hazardousStorageType: selectedHazardousType,
                  temperatureType: selectedTemperatureType,
                  temperatureCapacity: selectedTemperatureCapacities
                },
              },
            });
            
            console.log("this is : ", data);
            setOperation("Approved")
            setShowPopUp(true)

          } catch (error) {
            setShowAlert(true);
            console.error("error in update : ",error);
          }
          
        } else if (approvedOrReject === "delete") {
          try {
            const {data} = await deleteWarehouse({
              variables: {
                id: Id*1
              }
            })
            console.log("isDeleted : ", data);
            setOperation("Deleted")
            setShowPopUp(true)
          
          } catch (error) {
            setShowAlert(true);
            console.error("error : ",error);
          }
        }
      }
    
      return (
        <div className=' '>
          {showAlert && <Alert />}
          {showPopUp && <ApprovedPopup name={formData["companyName"]} onApprovalClick={() =>{ setShowPopUp(false); setActiveItem('Warehouse Review')}} operation={operation} />}
          <div className="overflow-hidden relative my-10  lg:my-0 mx-auto bg-white sm:rounded-lg w-full lg:w-full rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-6">
              <div className='w-full flex justify-between items-center'>
                <h3 className="text-base font-semibold leading-7 text-gray-900 items-baseline">Applicant Information</h3>
    

              </div>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
            </div>
            <div className="border-t border-gray-100">
              <dl className="divide-y divide-gray-100 grid grid-cols-1 lg:grid-cols-3">
                {Object.entries(formData).map(([label, value]: any[]) => (
                  <div className="grid grid-cols-3 items-center py-4 px-6" key={label}>
                   <div className="col-span-full">
                      <div className="">
                        <dt className="text-xs pb-2 font-medium text-gray-700">{label}</dt>
                      </div>
                      <div className="">
                        {label === 'warehouseType' ? (
                          <select
                            value={selectedWarehouseType}
                            onChange={(e) => setSelectedWarehouseType(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                          >
                            <option value="">Select Warehouse Type</option>
                            {warehouseType.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : label === 'hazardousStorageType' ? (
                          <select
                            value={selectedHazardousType}
                            onChange={(e) => setSelectedHazardousType(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                          >
                            <option value="">Select Type of Company</option>
                            {hazardousTypes.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : label === 'temperatureType' ? (
                          <select
                            value={selectedTemperatureType}
                            onChange={(e) => setSelectedTemperatureType(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                          >
                            <option value="">warehouse Types</option>
                            {temperatureTypes.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : label === 'temperatureCapacity' ? (
                          <select
                            value={selectedTemperatureCapacities}
                            onChange={(e) => setSelectedTemperatureCapacities(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                          >
                            <option value="">Industry</option>
                            {temperatureCapacities.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(label, e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            <div className='flex justify-end w-full my-6'>
                <button
                  onClick={() => {
                    handleApprove("delete")
                  }}
                  type="button" className="rounded-md bg-sky-500 px-3 mx-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400">
                  Reject<span className="sr-only">, Reject </span>
                </button>
                <button
                  onClick={() => {
                    handleApprove("approve")
                  }}
                  type="button" className="rounded-md mx-4 bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400">
                  Approve<span className="sr-only">, Approve </span>
                </button>
    
                </div>
          </div>
        </div>
      );
}

export default WarehouseEdit