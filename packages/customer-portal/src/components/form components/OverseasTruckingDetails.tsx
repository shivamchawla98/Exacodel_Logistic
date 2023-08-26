import { basisOfCharges, maxPayLoad, pincode, states, truckTypes } from "../data/dropdownData";
import SelectComponet from "./SelectComponent";
import TextField from "./TextField";

function OverseasTruckingDetails({prefix}: any) {
  return (
    <>
     <h2 className="font-semibold text-gray-900 col-span-3">
        Uploading Trucking Rates Overseas
      </h2>
      <SelectComponet
        options={['FTL', 'LTL']}
        id={`${prefix}.typeOfTransport`}
        title={'Type Of Transport'}
      />
      <SelectComponet
        options={truckTypes}
        id={`${prefix}.typeOfVehicle`}
        title={'Type Of Vehicle'}
      />
        <SelectComponet
        options={maxPayLoad}
        id={`${prefix}.acceptablePayload`}
        title={'Acceptable Payload'}
      />
      <SelectComponet
        options={states}
        id={`${prefix}.pickupCityState`}
        title={'Pickup City State'}
      />
      <SelectComponet
        options={pincode}
        id={`${prefix}.pickupPincode`}
        title={'Pickup City Pin Code'}
      />
      <SelectComponet
        options={states}
        id={`${prefix}.dropCityState`}
        title={'Drop City State'}
      />
      <SelectComponet
        options={pincode}
        id={`${prefix}.dropPincode`}
        title={'Drop City Pin Code'}
      />
      <TextField
        id={`${prefix}.transportCharges`}
        title={'Transport Charges'}
        type={'number'}
      />
      <SelectComponet
        options={basisOfCharges}
        id={`${prefix}.basisOfCharges`}
        title={'Type Of Transport'}
      />
    </>
  )
}

export default OverseasTruckingDetails;