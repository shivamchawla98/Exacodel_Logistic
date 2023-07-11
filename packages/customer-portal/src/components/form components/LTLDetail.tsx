import { ErrorMessage, Field } from 'formik';
import SelectComponet from './SelectComponent';

interface LTLDetailProps {
  prefix: string;
}

const LTLDetail: React.FC<LTLDetailProps> = ({ prefix }) => {
  return (
    <>
      <h2 className="col-span-3">Upload LTL Rates</h2>

      {/* typesOfTransport */}
      <div>
        <SelectComponet
          options={['FTL', 'LCL']}
          id={`${prefix}.typesOfTransport`}
          title={'Type of Transport'}
        />
      </div>

      {/* pickUpState */}
      <div>
        <SelectComponet
          options={['Andhra Pradesh', 'Arunachal Pradesh']}
          id={`${prefix}.pickUpState`}
          title={'Pick Up State'}
        />
      </div>

      {/* pickUpCityPincode */}
      <div>
        <SelectComponet
          options={['122001', '22102']}
          id={`${prefix}.pickUpCityPincode`}
          title={'Pick Up City Pincode'}
        />
      </div>

      {/* dropState */}
      <div>
        <SelectComponet
          options={['Andhra Pradesh', 'Arunachal Pradesh']}
          id={`${prefix}.dropState`}
          title={'Drop State'}
        />
      </div>

      {/* DropCityPincode */}
      <div>
        <SelectComponet
          options={['122001', '22102']}
          id={`${prefix}.DropCityPincode`}
          title={'Drop City Pincode'}
        />
      </div>

      {/* chargesOfTransport */}
      <div>
        <label
          htmlFor={`${prefix}.chargesOfTransport`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Charges Of Transport
        </label>
        <Field
          name={`${prefix}.chargesOfTransport`}
          placeholder={`${prefix}.chargesOfTransport`}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ErrorMessage
          name={`${prefix}.chargesOfTransport`}
          component="span"
          className="text-rose-500"
        />
      </div>

      {/* basisOfCharges */}
      <div>
        <SelectComponet
          options={['Per kG', 'Per Vehicle']}
          id={`${prefix}.basisOfCharges`}
          title={'Basis Of Charges'}
        />
      </div>
    </>
  );
};

export default LTLDetail;
