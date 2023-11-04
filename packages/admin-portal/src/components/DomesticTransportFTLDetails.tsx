import SelectComponet from './SelectComponent';
import TextField from './TextField';
import { ErrorMessage, Field } from 'formik';
import {
  truckName,
  maxPayLoad,
  states,
  pincode,
  basisOfCharges,
} from './data/dropdownData';

function DomesticTransportFTLDetails({setIsFTLFalse}: any) {
  return (
    <>
      <h2 className="font-semibold text-gray-900 col-span-3">
        Uploading Trucking Rates (FTL)
      </h2>

      <div>
        <label
          htmlFor="typeOfTransport"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Type Of Transport
        </label>
        <Field
          as="select"
          name="typeOfTransport"
          onChange={(e: any) => {
            if (e.currentTarget.value === 'LTL') {
              setIsFTLFalse()
            }
          }}
          className="block px-4 w-full rounded-md border-0 py-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
        >
          <option value=""></option>
          {['FTL', 'LTL'].map((element) => (
            <option className='text-sm' key={element} value={element}>
              {element}
            </option>
          ))}
        </Field>
        <ErrorMessage name="typeOfTransport" component="span" className='text-xs text-rose-600' />
      </div>
      <SelectComponet
        options={truckName}
        id={`typeOfVehicle`}
        title={'Type Of Vehicle'}
      />
      <SelectComponet
        options={maxPayLoad}
        id={`maxPayload`}
        title={'Max Acceptable Payload'}
      />
      <SelectComponet
        options={states}
        id={`pickupCityState`}
        title={'Pickup City State'}
      />
      <SelectComponet
        options={pincode}
        id={`pickupPincode`}
        title={'Pickup City Pin Code'}
      />
      <SelectComponet
        options={states}
        id={`dropCityState`}
        title={'Drop City State'}
      />
      <SelectComponet
        options={pincode}
        id={`dropPincode`}
        title={'Drop City Pin Code'}
      />
      <TextField
        id={`transportCharges`}
        title={'Transport Charges'}
        type={'number'}
      />
      <SelectComponet
        options={basisOfCharges}
        id={`basisOfCharges`}
        title={'Type Of Transport'}
      />
    </>
  );
}

export default DomesticTransportFTLDetails;
