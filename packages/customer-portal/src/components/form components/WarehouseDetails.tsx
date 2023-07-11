import { ErrorMessage, Field } from 'formik';
import WarehouseCapacity from './WarehouseCapacity';
import SelectComponent from './SelectComponent';
import { useState } from 'react';

interface WarehouseDetailsProps {}

const WarehouseDetails: React.FC<WarehouseDetailsProps> = ({}) => {
  const [tempSelection, setTempSelection] = useState(false);
  const [hazardSelection, setHazardSelection] = useState(false);
  return (
    <div className='mt-10 grid grid-cols-1 col-span-3 gap-x-6 gap-y-8 sm:grid-cols-6'>

      <WarehouseCapacity
        id="totalStorageArea"
        labelTitle="Total Storage Area"
        unit='ft²'
      />
      <WarehouseCapacity
        id="totalAvailableArea"
        labelTitle="Total Available Area"
        unit='ft²'
      />
      <WarehouseCapacity id="occupiedSpace" labelTitle="Occupied Space" unit='ft²' />
      <WarehouseCapacity id="unoccupiedSpace" labelTitle="Un-occupied Space" unit='ft²' />
      <WarehouseCapacity id="rackedSpace" labelTitle="Racked Space" unit='ft²' />
      <SelectComponent
        options={['Yes', 'No']}
        id="warehouseInsurance"
        title="Warehouse Insurance"
        optionalOption="Warehouse Insurance?"
      />

      {/* coldStorage */}
      <div className='sm:col-span-2'>
        <label
          htmlFor="storageType"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Storage Type
        </label>
        <div className="flex justify-evenly">
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <Field
              onClick={() => setTempSelection(!tempSelection)}
              type="checkbox"
              id="coldStorage"
              name="coldStorage"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="coldStorage"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Cold Storage
            </label>
            <ErrorMessage
              name="coldStorage"
              component={'span'}
              className="text-rose-500"
            />
          </div>
          {tempSelection ? (
            <div className="flex items-center pl-3 pr-3 border border-gray-200 rounded dark:border-gray-700">
              <SelectComponent
                options={[
                  '-18 to +20 Deg Cel.',
                  '-2 to -8 Deg Cel',
                  '-20 to +20 Deg Cel',
                  '-15 to +25 Deg Cel',
                ]}
                id="referigeratedTemp"
                title="Referigerated Temperature"
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {/* hazardousWarehouse  */}
      <div className='sm:col-span-2'>
      <label
          htmlFor="hazardousWarehouse"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Hazard Warehouse
        </label>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <Field
            onClick={() => setHazardSelection(!hazardSelection)}
            type="checkbox"
            id="hazardousWarehouse"
            name="hazardousWarehouse"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="hazardousWarehouse "
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Hazardous Warehouse
          </label>
          <ErrorMessage
            name="hazardousWarehouse"
            component={'span'}
            className="text-rose-500"
          />
        </div>
        {hazardSelection ? (
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
              id="hazardousGrade"
              title="Hazardous Grade"
            />
          </div>
        ) : (
          ''
        )}
      </div>

      <WarehouseCapacity id="storageCharges" labelTitle="Storage Charges"  unit='ft²'/>
      <WarehouseCapacity id="storagePerPallet" labelTitle="Storage Charges" unit='per pallet'/>
      <WarehouseCapacity id="minimumStorageAreaPerPallet" labelTitle="Minimum Storage Area" unit='ft²'/>
      <WarehouseCapacity id="storageCharges" labelTitle="Minimum Storage Area" unit='per pallet'/>
      <WarehouseCapacity id="minimumStorageRent" labelTitle="Minimum Storage Rent" unit='ft²'/>
      <WarehouseCapacity id="minimumStorageChargesPerPallet" labelTitle="Minimum Storage Charges" unit='per pallet'/>

      
    </div>
  );
};

export default WarehouseDetails;
