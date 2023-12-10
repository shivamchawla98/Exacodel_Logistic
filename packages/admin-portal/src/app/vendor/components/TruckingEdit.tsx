import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import { BiErrorCircle } from 'react-icons/bi';
import GET_USER_ID from '@/graphql/query/getUserById';
import APPROVE_USER_MUTATION from '@/graphql/mutation/approveUser';
import ApprovedPopup from './ApprovedPopup';

const GET_TRUCK_BY_ID = gql `
query GET_TRUCK_BY_ID($id: ID!){
  getTruck(id: $id){
    companyName
    Adress
    State
    City 
		Pincode
    Country
    transportertype
    vehicletype
    maxacceptablepayload
    pickupcity
    pickupcitypincode
    dropcity
    dropcitypincode
    transportcharges
  }
}
`

const CREATE_TRUCK = gql`
mutation CREATE_TRUCK($truckData: TruckDTO!) {
  createTruck(truckData: $truckData) {
    id
    companyName
  }
}
`

const DELETE_TRUCK_BY_ID  =  gql `mutation DELETE_TRUCK_BY_ID($id: ID!) {
  deleteTruck(id: $id)
}`

const  transportType =  [  "FTL",  "LTL" ]

const  vehicleType = [ "TataAce",
  "AshokLeylandDost",
  "MahindraBoleropickup",
  "Tata407"]

const maxacceptablePayload = ['Max_load_850_kgs', 'Max_load_1_Tonne', 'Max_load_onehalf_Tonne'];

const pickupCity = ['Assam', 'Bihar', 'Gujarat', 'Rajesthan', 'Haryana', 'Kerala', 'Karnatka'];
const pickupCityPincode = ['_515004', '_515731', '_515002', '_515766', '_515415', '_515822', '_515455', '_515001'];
const dropCity = ['Assam', 'Bihar', 'Gujarat', 'Rajesthan', 'Haryana', 'Kerala', 'Karnatka'];
const dropCityPincode = ['_515004', '_515731', '_515002', '_515766', '_515415', '_515822', '_515455', '_515001'];


  


export default function TruckingEdit({Id, setActiveItem }: any) {
  const { loading, error, data } = useQuery(GET_TRUCK_BY_ID, {
    variables: {
      id: Id*1
    },
  });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [userType, setUserType] = useState('');
  const [gst_no, setGstNo] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const [selectedTransportType, setSelectedTransportType] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedPayload, setSelectedMaxPayloadType] = useState('');
  const [selectedPickupCity, setSelectedPickupCity] = useState('');
  const [selectedPickupCityPincode, setSelectedPickupCityPincode] = useState('');
  const [selectedDropCity, setSelectedDropCity] = useState('');
  const [selectedDropCityPincode, setSelectedDropCityPincode] = useState('');
  const [showSucess, setShowSucess] = useState(false)
  const [companyName, setCompanyName] = useState('');
  const [operation, setOperation] = useState<any>("");

  const [createTruck] = useMutation(CREATE_TRUCK);
  const [deleteTruck] = useMutation(DELETE_TRUCK_BY_ID);

  useEffect(() => {
    
    if (!loading && data && data.getTruck) {
      console.log("data", data);
      console.log("loading", error);
      let truck =  data.getTruck;

      console.log("list of intitial users ",  truck.id);
    
      setUserType(truck.userType);
      setGstNo(truck.gst_no);

      if (truck) {
        setSelectedTransportType(truck.transportertype);
        setSelectedVehicleType(truck.vehicletype);
        setSelectedMaxPayloadType(truck.maxacceptablepayload);
        setSelectedPickupCity(truck.pickupcity)
        setSelectedPickupCityPincode(truck.pickupcitypincode)
        setFormData({
         "companyName": truck.companyName,
         "Adress": truck.Adress,
         "State": truck.State,
         "City": truck.City, 
         "Pincode": truck.Pincode,
         "Country": truck.Country,
         "Transporter Type": selectedTransportType,
         "Vehicle Type": selectedVehicleType,
         "Max Acceptable Payload": selectedPayload,
         "Pickup City": selectedPickupCity,
         "Pickup City Pincode": selectedPickupCityPincode,
         "Drop City": selectedDropCity,
         "Drop City Pincode": selectedDropCityPincode,
         "Transport Charges": truck.transportcharges,
        });


      }
    }
  }, [loading, data, Id]);

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
    
    if (approvedOrReject === 'Updated') {
      try {
        const { data: approvalData } = await createTruck({
          variables: {
            id: Id * 1,
            truckData: {
            companyName: formData['companyName'],
            Adress: formData[`Adress`],
            State: formData[`State`],
            City: formData[`City`],
            Pincode: formData[`Pincode`],
            Country: formData[`Country`],
            transportertype: selectedTransportType,
            vehicletype: selectedVehicleType,
            maxacceptablepayload: selectedTransportType,
            pickupcity: selectedPickupCity,
            pickupcitypincode: selectedPickupCityPincode,
            dropcity: selectedDropCity,
            dropcitypincode: selectedDropCityPincode,
            transportcharges: formData['Transport Charges']    
            }
          },
        });
        console.log("this is : ", data);
        setCompanyName(formData['companyName']);
        setOperation(approvedOrReject)
        setShowSucess(true)
      } catch (error) {
        setShowAlert(true);
        console.error("error in approving : ",error);
      }
      
    } if (approvedOrReject === 'Delete') {
      try {
        deleteTruck({
          variables: {
            id: Id*1
          }
        })
        setCompanyName(formData['companyName']);
        setOperation(approvedOrReject)
        setShowSucess(true)
      } catch (error2) {
        console.log("error from delete truck", error2);
        setShowAlert(true);
      }
    } 


  }

  if (error) {
    console.log(data);
    
    return <p>Error ; (</p>
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
      <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
      <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
      <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
    </div>
    )
  }

  return (
    <div className=' '>
      {showAlert && <Alert />}
      {showSucess && <ApprovedPopup name={companyName} operation={operation} onApprovalClick={() => setActiveItem('Trucking Review') } />}
      <div className="overflow-hidden relative my-16 mx-auto bg-white sm:rounded-lg w-3/4 rounded-md shadow-md">
        <div className="px-4 py-6 sm:px-6">
          <div className='w-full flex justify-between items-center'>
            <h3 className="text-base font-semibold leading-7 text-gray-900 items-baseline">Applicant Information</h3>

            <div className='flex justify-evenly w-1/2'>
            <button
              onClick={() => {
                handleApprove("Delete")
              }}
              type="button" className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400">
              Reject<span className="sr-only">, Reject </span>
            </button>
            <button
              onClick={() => {
                handleApprove("Updated")
              }}
              type="button" className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400">
              Update<span className="sr-only">, Update </span>
            </button>

            </div>
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {Object.entries(formData).map(([label, value]: any[]) => (
              <div className="grid grid-cols-12 items-center py-4 px-6" key={label}>
                <>
                  <div className="col-span-4">
                    <dt className="text-sm font-medium text-gray-900">{label}</dt>
                  </div>
                  <div className="col-span-8">
                    {label === 'Transporter Type' ? (
                      <select
                        value={selectedTransportType}
                        onChange={(e) => setSelectedTransportType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Transport Type</option>
                        {transportType.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === 'Vehicle Type' ? (
                      <select
                        value={selectedVehicleType}
                        onChange={(e) => setSelectedVehicleType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Vehicle type</option>
                        {vehicleType.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === 'Max Acceptable Payload' ? (
                      <select
                        value={selectedPayload}
                        onChange={(e) => setSelectedMaxPayloadType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select</option>
                        {maxacceptablePayload.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === 'Pickup City' ? (
                      <select
                        value={selectedPickupCity}
                        onChange={(e) => setSelectedPickupCity(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select City</option>
                        {pickupCity.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                    ) 

                    : label === 'Pickup City Pincode' ? (
                      <select
                        value={selectedPickupCityPincode}
                        onChange={(e) => setSelectedPickupCityPincode(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Pincode</option>
                        {pickupCityPincode.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                    ) : label === 'Drop City' ? (
                      <select
                        value={selectedDropCity}
                        onChange={(e) => setSelectedDropCity(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select City</option>
                        {pickupCity.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                    ) 

                    : label === 'Drop City Pincode' ? (
                      <select
                        value={selectedDropCityPincode}
                        onChange={(e) => setSelectedDropCityPincode(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Pincode</option>
                        {pickupCityPincode.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                    )
                    
                    : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(label, e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      />
                    )}
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
