"use client";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";
import ApprovedPopup from "./components/ApprovedPopup";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import WAREHOUSE_REJECT from "@/graphql/mutation/rejectWarehouse";
import { ToastContainer, toast } from "react-toastify";

const GET_WAREHOUSE_BY_ID = gql`
  query GET_WAREHOUSE_BY_ID($id: Int!) {
    getWarehouseById(id: $id) {
      id
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
      user {
        id
      }
    }
  }
`;

const SEND_REVIEW = gql`
  mutation SEND_WAREHOUSE_TO_REVIEW($userId: Int!, $warehouseId: Int!) {
    sendforreveiwingWarehouse(userid: $userId, warehouseid: $warehouseId) {
      id
    }
  }
`;

const APPROVE_WAREHOUSE = gql`
  mutation APPROVE_WAREHOUSE($id: Float!, $input: ApprovedWarehouseInput!) {
    approveWarehouse(warehouseid: $id, approvedinput: $input) {
      companyName
    }
  }
`;

const DELETE_WAREHOUSE = gql`
  mutation DELETE_WAREHOUSE($id: Int!) {
    deleteWarehouse(id: $id)
  }
`;

const warehouseType = [
  "Cold Storage Facility",
  "General Warehouse",
  "Refrigerated Warehouse",
  "Fulfillment Center",
  "Petroleum Warehouse",
  "Bonded Warehouse",
  "Hazardous Cargo Warehouse",
];

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

const temperatureCapacities = [
  "MINUS_Eighteen_Degree_to_twenty_degree_celcius",
  "MINUS_Two_Degree_to_MINUS_Eight_degree_celcius",
  "MINUS_Twenty_Degree_to_twenty_degree_celcius",
  "fifteen_Degree_to_twentyfive_degree_celcius",
];

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

const temperatureTypes = ["Active", "Passive"];

function WarehouseEdit({ Id, setActiveItem }: any) {
  const [userId, setUserId] = useState<String>("");
  const searchParams = useSearchParams();
  const token: any = searchParams.get("id");
  useEffect(() => {
    try {
      const decodedToken: any = jwtDecode(token);
      setUserId(decodedToken?.id);
    } catch (error) {
      console.log("token error hi : ", error);
    }
  }, []);

  const { loading, error, data, refetch } = useQuery(GET_WAREHOUSE_BY_ID, {
    variables: {
      id: Id * 1,
    },
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [userType, setUserType] = useState("");
  const [gst_no, setGstNo] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [selectedWarehouseType, setSelectedWarehouseType] = useState("");
  const [selectedHazardousType, setSelectedHazardousType] = useState("");
  const [selectedTemperatureType, setSelectedTemperatureType] = useState("");
  const [selectedTemperatureCapacities, setSelectedTemperatureCapacities] =
    useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [operation, setOperation] = useState("Approved");
  const [approveWarehouse] = useMutation(APPROVE_WAREHOUSE);
  const [warehousereject] = useMutation(WAREHOUSE_REJECT);
  const [sendforreveiwingWarehouse] = useMutation(SEND_REVIEW);

  useEffect(() => {
    if (!loading && data && data.getWarehouseById) {
      refetch();
      console.log("data", data);
      console.log("loading", error);
      let warehouse = data.getWarehouseById;
      setUserType(warehouse.userType);
      setGstNo(warehouse.gst_no);
      console.log(
        "warehouse type : ",
        warehouse.temperatureCapacity,
        selectedTemperatureCapacities
      );

      if (warehouse) {
        setSelectedWarehouseType(warehouse.warehouseType);
        setSelectedHazardousType(warehouse.hazardousStorageType);
        setSelectedTemperatureType(warehouse.temperatureType);
        setSelectedTemperatureCapacities(warehouse.temperatureCapacity);
        setFormData({
          companyName: warehouse.companyName,
          Adress: warehouse.Adress,
          State: warehouse.State,
          City: warehouse.City,
          Pincode: warehouse.Pincode,
          Country: warehouse.Country,
          "Warehouse Type":
            warehouseTypeMapping[selectedWarehouseType] ||
            selectedWarehouseType,
          "Total Square Area": warehouse.totalSquareArea,
          "Total Availiable Area": warehouse.totalAvailiableArea,
          "Occupied Space": warehouse.occupiedSpace,
          "Unoccupied Space": warehouse.unoccupiedSpace,
          "Racked Space": warehouse.rackedSpace,
          "Minimum Storage Rent": warehouse.minimumStorageRent,
          "Minimum Storage Charges (*per pallet)":
            warehouse.minimumStorageCharges_per_pallet,
          "Minimum Storage Area": warehouse.minimumStorageArea,
          "Minimum Storage Area (*per pallet)":
            warehouse.minimumstorageArea_per_pallet,
          "Storage Charges": warehouse.storageCharges,
          "Storage Charges (*per pallet)": warehouse.storageCharges_per_pallet,
          "Hazardous Storage Type": selectedHazardousType,
          "Temperature Type": selectedTemperatureType,
          "Temperature Capacity":
            temperatureCapacityMapping[selectedTemperatureCapacities] ||
            selectedTemperatureCapacities,
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

  const handleApprove = async () => {
    console.log("Id of warehouse : ", Id);
    console.log(data);

    try {
      await approveWarehouse({
        variables: {
          id: data.getWarehouseById.id * 1,
          input: {
            companyname: formData["companyName"],
            Adress: formData["Adress"],
            State: formData["State"],
            city: formData["City"],
            pincode: formData["Pincode"],
            country: formData["Country"],
            WarehouseType: selectedWarehouseType,
            totalsquareArea: formData["totalSquareArea"],
            totalavailiableareas: formData["totalAvailiableArea"],
            occupied_spaces: formData["occupiedSpace"],
            unoccupied_spaces: formData["unoccupiedSpace"],
            racked_spaces: formData["rackedSpace"],
            minimumstoragerent: formData["minimumStorageRent"] * 1,
            minimum_storages_charges_per_pallet:
              formData["minimumStorageCharges_per_pallet"] * 1,
            minimum_storage_Area: formData["minimumStorageArea"],
            minimum_storage_area_per_pallet:
              formData["minimumstorageArea_per_pallet"],
            storage_charges: formData["storageCharges"] * 1,
            storage_charges_per_pallet:
              formData["storageCharges_per_pallet"] * 1,
            HazardousStorageType: selectedHazardousType,
            TempaeratureType: selectedTemperatureType,
            TemperatureCapacity: selectedTemperatureCapacities,
            remarks: "Approved this with valid condition",
          },
        },
      });

      // console.log("this is : ", data);
      setOperation("Approved");
      setShowPopUp(true);
    } catch (error: any) {
      toast.error(error.message);
      console.error("error in update : ", error);
    }
  };

  const handleReject = async () => {
    console.log("id ", data.getWarehouseById.id * 1);
    try {
      const rejectedData = await warehousereject({
        variables: {
          warehouseId: data.getWarehouseById.id * 1,
          remarks: "Rejected",
        },
      });
      setOperation("Rejected");
      setShowPopUp(true);
      console.log("rejected warehouse ", rejectedData);
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleReview = async () => {
    // console.log("user id : ", data.getWarehouseById.user.id * 1);
    console.log(data.getWarehouseById);

    try {
      const reviewData = await sendforreveiwingWarehouse({
        variables: {
          userId: data.getWarehouseById.user.id * 1,
          warehouseId: data.getWarehouseById.id * 1,
        },
      });
      setOperation("Sended to review");
      setShowPopUp(true);
      console.log("rejected warehouse ", reviewData);
    } catch (error: any) {
      toast(error.message);
      console.log("error from review ", error);
    }
  };

  return (
    <div className=" ">
      <ToastContainer />

      {showPopUp && (
        <ApprovedPopup
          name={formData["companyName"]}
          onApprovalClick={() => {
            setShowPopUp(false);
            setActiveItem("Approve Warehouse");
          }}
          operation={operation}
          forType="Warehouse of "
        />
      )}
      <div className="overflow-hidden relative my-10  lg:my-0 mx-auto bg-white sm:rounded-lg w-full lg:w-full rounded-md shadow-md">
        <div className="px-4 py-6 sm:px-6">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-base font-semibold leading-7 text-gray-900 items-baseline">
              Applicant Information
            </h3>
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100 grid grid-cols-1 lg:grid-cols-3">
            {Object.entries(formData).map(([label, value]: any[]) => (
              <div
                className="grid grid-cols-3 items-center py-4 px-6"
                key={label}
              >
                <div className="col-span-full">
                  <div className="">
                    <dt className="text-xs pb-2 font-medium text-gray-700">
                      {label}
                    </dt>
                  </div>
                  <div className="">
                    {label === "Warehouse Type" ? (
                      <select
                        value={selectedWarehouseType}
                        onChange={(e) =>
                          setSelectedWarehouseType(e.target.value)
                        }
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Warehouse Type</option>
                        {Object.entries(warehouseTypeMapping).map(
                          ([value, label]: any) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          )
                        )}
                      </select>
                    ) : label === "Hazardous Storage Type" ? (
                      <select
                        value={selectedHazardousType}
                        onChange={(e) =>
                          setSelectedHazardousType(e.target.value)
                        }
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Type of Company</option>
                        {hazardousTypes.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === "Temperature Type" ? (
                      <select
                        value={selectedTemperatureType}
                        onChange={(e) =>
                          setSelectedTemperatureType(e.target.value)
                        }
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">warehouse Types</option>
                        {temperatureTypes.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === "Temperature Capacity" ? (
                      <select
                        value={selectedTemperatureCapacities}
                        onChange={(e) =>
                          setSelectedTemperatureCapacities(e.target.value)
                        }
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Temperature</option>
                        {Object.entries(temperatureCapacityMapping).map(
                          ([value, label]: any) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          )
                        )}
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          handleInputChange(label, e.target.value)
                        }
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-end w-full my-6">
          <button
            onClick={() => {
              handleApprove();
            }}
            type="button"
            className="rounded-md mx-4 bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
          >
            Approve<span className="sr-only">, Approve </span>
          </button>
          <button
            onClick={() => {
              handleReject();
            }}
            type="button"
            className="rounded-md bg-sky-500 px-3 mx-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
          >
            Reject<span className="sr-only">, Reject </span>
          </button>
          <button
            onClick={() => {
              handleReview();
            }}
            type="button"
            className="rounded-md bg-sky-500 px-3 mx-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
          >
            Send for Review<span className="sr-only"> Send for Review</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseEdit;
