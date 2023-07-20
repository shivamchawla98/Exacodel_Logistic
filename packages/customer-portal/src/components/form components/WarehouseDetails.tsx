
import { ErrorMessage, Field } from 'formik';
import WarehouseCapacity from './WarehouseCapacity';
import SelectComponent from './SelectComponent';
import { useState } from 'react';
import * as Yup from 'yup';

interface WarehouseDetailsProps {
  prefix: string;
}

const WarehouseDetails: React.FC<WarehouseDetailsProps> = ({ prefix }) => {

  // warehouse validation
  const validationSchema = Yup.lazy((values) => {
    return Yup.object().shape({
      [`${prefix}.coldStorage`]: Yup.boolean(),

      [`${prefix}.hazardousWarehouse`]: Yup.boolean(),
      [`${prefix}.storageCharges`]: Yup.number()
        .positive('Number must be positive')
        .typeError('Storage Charges must be a number')
        .required('Storage Charges is required'),
      [`${prefix}.storagePerPallet`]: Yup.number()
        .positive('Number must be positive')
        .typeError('Storage Charges per pallet must be a number')
        .required('Storage Charges per pallet is required'),
      [`${prefix}.minimumStorageAreaPerPallet`]: Yup.number()
        .positive('Number must be positive')
        .typeError('Minimum Storage Area per pallet must be a number')
        .required('Minimum Storage Area per pallet is required'),
      [`${prefix}.minimumStorageRent`]: Yup.number()
        .positive('Number must be positive')
        .typeError('Minimum Storage Rent must be a number')
        .required('Minimum Storage Rent is required'),
      [`${prefix}.minimumStorageChargesPerPallet`]: Yup.number()
        .positive('Number must be positive')
        .typeError('Minimum Storage Charges per pallet must be a number')
        .required('Minimum Storage Charges per pallet is required'),
    });
  });

  const [tempSelection, setTempSelection] = useState(false);
  const [hazardSelection, setHazardSelection] = useState(false);

  return (
    <div className="mt-10 grid grid-cols-1 col-span-3 gap-x-6 gap-y-8 sm:grid-cols-6">
      <WarehouseCapacity
        id={`${prefix}.totalStorageArea`}
        labelTitle="Total Storage Area"
        unit="ft²"
      />
      <WarehouseCapacity
        id={`${prefix}.totalAvailableArea`}
        labelTitle="Total Available Area"
        unit="ft²"
      />
      <WarehouseCapacity
        id={`${prefix}.occupiedSpace`}
        labelTitle="Occupied Space"
        unit="ft²"
      />
      <WarehouseCapacity
        id={`${prefix}.unoccupiedSpace`}
        labelTitle="Un-occupied Space"
        unit="ft²"
      />
      <WarehouseCapacity id={`${prefix}.rackedSpace`} labelTitle="Racked Space" unit="ft²" />
      <SelectComponent
        options={['Yes', 'No']}
        id={`${prefix}.warehouseInsurance`}
        title="Warehouse Insurance"
        optionalOption="Warehouse Insurance?"
      />

      {/* coldStorage */}
      <div className="sm:col-span-2">
        <label
          htmlFor={`${prefix}.coldStorage`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Storage Type
        </label>
        <div className="flex justify-evenly">
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <Field
              onClick={() => setTempSelection(!tempSelection)}
              type="checkbox"
              id={`${prefix}.coldStorage`}
              name={`${prefix}.coldStorage`}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={`${prefix}.coldStorage`}
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Cold Storage
            </label>
            <ErrorMessage
              name={`${prefix}.coldStorage`}
              component={'span'}
              className="text-rose-500"
            />
          </div>
          {tempSelection && (
            <div className="flex items-center pl-3 pr-3 border border-gray-200 rounded dark:border-gray-700">
              <SelectComponent
                options={[
                  '-18 to +20 Deg Cel.',
                  '-2 to -8 Deg Cel',
                  '-20 to +20 Deg Cel',
                  '-15 to +25 Deg Cel',
                ]}
                id={`${prefix}.referigeratedTemp`}
                title="Referigerated Temperature"
              />
            </div>
          )}
        </div>
      </div>

      {/* hazardousWarehouse  */}
      <div className="sm:col-span-2">
        <label
          htmlFor={`${prefix}.hazardousWarehouse`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Hazard Warehouse
        </label>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <Field
            onClick={() => setHazardSelection(!hazardSelection)}
            type="checkbox"
            id={`${prefix}.hazardousWarehouse`}
            name={`${prefix}.hazardousWarehouse`}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={hazardSelection}
          />
          <label
            htmlFor={`${prefix}.hazardousWarehouse`}
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Hazardous Warehouse
          </label>
          <ErrorMessage
            name={`${prefix}.hazardousWarehouse`}
            component="span"
            className="text-rose-500"
          />
        </div>
        {hazardSelection && (
          <div className="flex items-center pl-3 pr-3 border border-gray-200 rounded dark:border-gray-700">
            <SelectComponent
              options={[
                'class 1',
                'class 2',
                'class 3',
                'class 4',
                'class 5',
                'class 6',
                'class 7',
                'class 8',
                'class 9',
                'class 1 to 9',
                '',
              ]}
              id={`${prefix}.hazardousGrade`}
              title="Hazardous Grade"
            />
          </div>
        )}
      </div>

      <WarehouseCapacity id={`${prefix}.storageCharges`} labelTitle="Storage Charges" unit="ft²" />
      <WarehouseCapacity
        id={`${prefix}.storagePerPallet`}
        labelTitle="Storage Charges"
        unit="per pallet"
      />
      <WarehouseCapacity
        id={`${prefix}.minimumStorageAreaPerPallet`}
        labelTitle="Minimum Storage Area"
        unit="ft²"
      />
      <WarehouseCapacity
        id={`${prefix}.minimumStorageRent`}
        labelTitle="Minimum Storage Rent"
        unit="ft²"
      />
      <WarehouseCapacity
        id={`${prefix}.minimumStorageChargesPerPallet`}
        labelTitle="Minimum Storage Charges"
        unit="per pallet"
      />
    </div>
  );
};

export default WarehouseDetails;
