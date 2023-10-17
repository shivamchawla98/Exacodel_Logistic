import SelectComponet from './SelectComponent';
import TextField from './TextField';

function AdminInputWarehouseDetail({ prefix }: any) {
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  col-span-full gap-6' >
                  <h2 className="font-semibold text-gray-900 col-span-3">
        Warehouse Details
      </h2>
      <SelectComponet
        options={['cold Storage', 'Warm Storage']}
        id={`typeOfWarehoue`}
        title={'Type Of Warehouse'}
      />
      <TextField
        id={`totalStorageArea`}
        title={'Total Storage Area (Sq Feet)'}
        type={'number'}
      />
      <TextField
        id={`totalAvailableArea`}
        title={'Total Available Area (Sq Feet)'}
        type={'number'}
      />
      <TextField
        id={`occupiedSpace`}
        title={'Occupied Space (Sq Feet)'}
        type={'number'}
      />
      <TextField
        id={`unOccupiedSpace`}
        title={'Un-Occupied Space (Sq Feet)'}
        type={'number'}
      />
      <TextField
        id={`rackedSpace`}
        title={'Racked Space (Sq Feet)'}
        type={'number'}
      />
      <SelectComponet
        options={['Yes', 'No']}
        id={`wareHouseInsurance`}
        title={'Warehouse Insurance'}
      />
      <SelectComponet
        options={['Active', 'Passive']}
        id={`activePassive`}
        title={'Temperature Capcity (Active/Passive)'}
      />
      <SelectComponet
        options={[
          '-18 to +20 Deg Cel.',
          '-2 to -8 Deg Cel.',
          '-20 to +20 Deg Cel.',
          '+15 to 25 Deg Cel.',
        ]}
        id={`temperatureCapacity`}
        title={'Temperature Capcity'}
      />
      <SelectComponet
        options={[
          'Class 1',
          'Class 2',
          'Class 3',
          'Class 4',
          'Class 5',
          'Class 6',
          'Class 7',
          'Class 8',
          'Class 9 ',
          'Class 1 to 9',
          'OTHER',
        ]}
        id={`hazardousStorageCapacity`}
        title={'Hazardous Storage Capacity'}
      />
        <TextField
        id={`storageChargesPerSqFt`}
        title={'Storage Charges (Sq. ft)'}
        type={'number'}
      />
              <TextField
        id={`storageChargesPerPallet`}
        title={'Storage Charges (per pellet)'}
        type={'number'}
      />
                    <TextField
        id={`minimumStorageAreaPerSqFt`}
        title={'Minimum Storage Area (Sq. ft)'}
        type={'number'}
        />
        <TextField
        id={`minimumStorageAreaPerPallet`}
        title={'Minimum Storage Area (per pellet)'}
        type={'number'}
      />
              <TextField
        id={`minimumStorageRentPerSqFt`}
        title={'Minimum Storage Rent (Sq. ft)'}
        type={'number'}
        />
        <TextField
        id={`minimumStorageChargesPerPallet`}
        title={'Minimum Storage Rent Charges (per pallet)'}
        type={'number'}
      />
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-300 col-span-full"></hr>
    </div>
  );
}

export default AdminInputWarehouseDetail;
