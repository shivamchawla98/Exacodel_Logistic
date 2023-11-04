import SelectComponet from './SelectComponent';
import SelectComponet2 from './SelectComponent2';
import TextField from './TextField';

function AdminInputWarehouseDetail({ prefix }: any) {
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  col-span-full gap-6' >
                  <h2 className="font-semibold text-gray-900 col-span-3">
        Warehouse Details
      </h2>
      <SelectComponet2
        options={[
          { value: 'coldStorageFacility', label: 'Cold Storage Facility' },
          { value: 'generalWarehouse', label: 'General Warehouse' },
          { value: 'referigeratedWarehouse', label: 'Referigerated Warehouse' },
          { value: 'fullFilmentCenter', label: 'Fullfilment Center' },
          { value: 'petroleumWarehouse', label: 'Petroleum Warehouse' },
          { value: 'bondedWarehouse', label: 'Bonded Warehouse' },
          { value: 'hazCargoWarehouse', label: 'Hazardous Cargo Warehouse' }
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
      <SelectComponet2
        options={[
          { value: "MINUS_Eighteen_Degree_to_twenty_degree_celcius", label: "-18°C to 20°C" },
          { value: "MINUS_Two_Degree_to_MINUS_Eight_degree_celcius", label: "-2°C to -8°C" },
          { value: "MINUS_Twenty_Degree_to_twenty_degree_celcius", label: "-20°C to 20°C" },
          { value: "fifteen_Degree_to_twentyfive_degree_celcius", label: "15°C to 25°C" }         
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
                    
        id={`minimumStorageArea`}
        title={'Minimum Storage Area (Sq. ft)'}
        type={'number'}
        />
        <TextField
        id={`minimumstorageArea_per_pallet`}
        title={'Minimum Storage Area (per pellet)'}
        type={'number'}
      />
              <TextField
        id={`minimumStorageRent`}
        title={'Minimum Storage Rent (Sq. ft)'}
        type={'number'}
        />
        <TextField
        id={`minimumStorageCharges_per_pallet`}
        title={'Minimum Storage Rent Charges (per pallet)'}
        type={'number'}
      />
      <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </div>
  );
}

export default AdminInputWarehouseDetail;
