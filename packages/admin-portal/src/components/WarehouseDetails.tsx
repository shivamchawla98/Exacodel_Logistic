import SelectComponet from './SelectComponent';
import TextField from './TextField';

function AdminInputWarehouseDetail({ prefix }: any) {
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  col-span-full gap-6' >
                  <h2 className="font-semibold text-gray-900 col-span-3">
        Warehouse Details
      </h2>
      <SelectComponet
        options={[
          'coldStorageFacility',
          'generalWarehouse',
          'referigeratedWarehouse',
          'fullFilmentCenter',
          'petroleumWarehouse',
          'bondedWarehouse',
          'hazCargoWarehouse'
        ]}
        id={`typeOfWarehouse`}
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
            "MINUS_Eighteen_Degree_to_twenty_degree_celcius",
            "MINUS_Two_Degree_to_MINUS_Eight_degree_celcius",
            "MINUS_Twenty_Degree_to_twenty_degree_celcius",
            "fifteen_Degree_to_twentyfive_degree_celcius"
        ]}
        id={`temperatureCapacity`}
        title={'Temperature Capcity'}
      />
      <SelectComponet
        options={[
          "Class1",
          "Class2",
          "Class3",
          "Class4",
          "Class5",
          "Class6",
          "Class7",
          "Class8"
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
      <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </div>
  );
}

export default AdminInputWarehouseDetail;
