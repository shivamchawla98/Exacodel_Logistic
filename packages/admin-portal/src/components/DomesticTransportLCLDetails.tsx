import SelectComponet from "./SelectComponent";
import TextField from "./TextField";
import { states, pincode, basisOfCharges } from "./data/dropdownData";
import { ErrorMessage, Field } from "formik";

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

function DomesticTransporLTLtDetails({ setIsFTLTrue }: any) {
  return (
    <>
      <h2 className="font-semibold text-gray-900 col-span-3">
        Uploading Trucking Rates (LTL)
      </h2>
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

export default DomesticTransporLTLtDetails;
