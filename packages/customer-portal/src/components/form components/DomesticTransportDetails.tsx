import SelectComponet from "./SelectComponent"
import TextField from "./TextField"
import { truckType, maxPayLoad,states, pincode, basisOfCharges } from "../data/dropdownData"

function DomesticTransportDetails(prefix) {
  return (
    <>
        <SelectComponet options={["FTL", "LTL"]} id={`${prefix}.typeOfTransport`} title={"Type Of Transport"} />
        <SelectComponet options={truckType} id={`${prefix}.typeOfVehicle`} title={"Type Of Vehicle"} />
        <SelectComponet options={maxPayLoad} id={`${prefix}.maxPayload`} title={"Max Acceptable Payload"} />
        <SelectComponet options={states} id={`${prefix}.pickupCityState`} title={"Pickup City State"} />
        <SelectComponet options={pincode} id={`${prefix}.pickupPincode`} title={"Pickup City Pin Code"} />
        <SelectComponet options={states} id={`${prefix}.dropCityState`} title={"Drop City State"} />
        <SelectComponet options={pincode} id={`${prefix}.dropPincode`} title={"Drop City Pin Code"} />
        <TextField id={`${prefix}.transportCharges`} title={"Transport Charges"} type={"number"} />
        <SelectComponet options={basisOfCharges} id={`${prefix}.basisOfCharges`} title={"Type Of Transport"} />

    </>
  )
}

export default DomesticTransportDetails