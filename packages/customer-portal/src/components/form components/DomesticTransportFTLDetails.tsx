import SelectComponet from './SelectComponent';
import TextField from './TextField';
import {
  truckName,
  maxPayLoad,
  states,
  pincode,
  basisOfCharges,
} from '../data/dropdownData';

function DomesticTransportFTLDetails(prefix: any) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  col-span-full gap-6'>
      <h2 className="font-semibold text-gray-900 col-span-full">
        Uploading Trucking Rates (FTL)
      </h2>
      <SelectComponet
        options={['FTL', 'LTL']}
        id={`${prefix}.typeOfTransport`}
        title={'Type Of Transport'}
      />
      <SelectComponet
        options={truckName}
        id={`${prefix}.typeOfVehicle`}
        title={'Type Of Vehicle'}
      />
      <SelectComponet
        options={maxPayLoad}
        id={`${prefix}.maxPayload`}
        title={'Max Acceptable Payload'}
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
    </div>
  );
}

export default DomesticTransportFTLDetails;
