import SelectComponet from "./SelectComponent";
import TextField from "./TextField";
import { ErrorMessage, Field } from "formik";
import {
  truckName,
  maxPayLoad,
  states,
  pincode,
  basisOfCharges,
} from "./data/dropdownData";
const vehicleType = [
  {
    radableName: "Tata Ace",
    enumName: "TataAce",
  },
  {
    radableName: "Ashok Leyland Dost",
    enumName: "AshokLeylandDost",
  },
  {
    radableName: "Mahindra Bolero Pickup",
    enumName: "MahindraBoleropickup",
  },
  {
    radableName: "Tata 407",
    enumName: "Tata407",
  },
];

const CityType = [
  "Assam",
  "Bihar",
  "Gujarat",
  "Rajesthan",
  "Haryana",
  "Kerala",
  "Karnatka",
];

const pincodeType = [
  "_515004",
  "_515731",
  "_515002",
  "_515766",
  "_515415",
  "_515822",
  "_515455",
  "_515001",
];

function DomesticTransportFTLDetails() {
  return (
    <>
      <h2 className="font-semibold text-gray-900 col-span-3">
        Uploading Trucking Rates (FTL)
      </h2>

      <div>
        <label
          htmlFor={"typeOfVehicle"}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Vehicle Type
        </label>
        <Field
          as="select"
          name={"typeOfVehicle"}
          className="block px-4 w-full rounded-md border-0 py-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
        >
          <option value="">Enter Vehicle</option>
          {vehicleType.map((element) => (
            <option
              className="text-sm"
              key={`ftl ${element.radableName}`}
              value={element.enumName}
            >
              {element.radableName}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name="typeOfVehicle"
          component="span"
          className="text-xs text-rose-600"
        />
      </div>
      <SelectComponet
        options={maxPayLoad}
        id={`maxPayload`}
        title={"Max Acceptable Payload"}
      />
      <SelectComponet
        options={CityType}
        id={`pickupCityState`}
        title={"Pickup City State"}
      />
      <SelectComponet
        options={pincodeType}
        id={`pickupPincode`}
        title={"Pickup City Pin Code"}
      />
      <SelectComponet
        options={CityType}
        id={`dropCityState`}
        title={"Drop City State"}
      />
      <SelectComponet
        options={pincodeType}
        id={`dropPincode`}
        title={"Drop City Pin Code"}
      />
      <TextField
        id={`transportCharges`}
        title={"Transport Charges"}
        type={"number"}
      />
      <SelectComponet
        options={basisOfCharges}
        id={`basisOfCharges`}
        title={"Type Of Transport"}
      />
    </>
  );
}

export default DomesticTransportFTLDetails;
