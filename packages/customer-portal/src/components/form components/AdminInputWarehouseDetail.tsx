import React from 'react';
import SelectComponet from './SelectComponent';
import TextField from './TextField';

function AdminInputWarehouseDetail({ prefix }) {
  return (
    <>
      <SelectComponet
        options={['cold Storage', 'Warm Storage']}
        id={`${prefix}.typeOfWarehoue`}
        title={'Type Of Warehouse'}
      />
      <TextField
        id={`${prefix}.totalStorageArea`}
        title={'Total Storage Area (Sq Feet)'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.totalAvailableArea`}
        title={'Total Available Area (Sq Feet)'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.occupiedSpace`}
        title={'Occupied Space (Sq Feet)'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.unOccupiedSpace`}
        title={'Un-Occupied Space (Sq Feet)'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.rackedSpace`}
        title={'Racked Space (Sq Feet)'}
        type={'number'}
      />
      <SelectComponet
        options={['Yes', 'No']}
        id={`${prefix}.wareHouseInsurance`}
        title={'Warehouse Insurance'}
      />
      <SelectComponet
        options={['Active', 'Passive']}
        id={`${prefix}.activePassive`}
        title={'Temperature Capcity (Active/Passive)'}
      />
      <SelectComponet
        options={[
          '-18 to +20 Deg Cel.',
          '-2 to -8 Deg Cel.',
          '-20 to +20 Deg Cel.',
          '+15 to 25 Deg Cel.',
        ]}
        id={`${prefix}.temperatureCapacity`}
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
        id={`${prefix}.hazardousStorageCapacity`}
        title={'Hazardous Storage Capacity'}
      />
        <TextField
        id={`${prefix}.storageChargesPerSqFt`}
        title={'Storage Charges (Sq. ft)'}
        type={'number'}
      />
              <TextField
        id={`${prefix}.storageChargesPerPallet`}
        title={'Storage Charges (per pellet)'}
        type={'number'}
      />
                    <TextField
        id={`${prefix}.minimumStorageAreaPerSqFt`}
        title={'Minimum Storage Area (Sq. ft)'}
        type={'number'}
        />
        <TextField
        id={`${prefix}.minimumStorageAreaPerPallet`}
        title={'Minimum Storage Area (per pellet)'}
        type={'number'}
      />
              <TextField
        id={`${prefix}.minimumStorageRentPerSqFt`}
        title={'Minimum Storage Rent (Sq. ft)'}
        type={'number'}
        />
        <TextField
        id={`${prefix}.minimumStorageChargesPerPallet`}
        title={'Minimum Storage Rent Charges (per pallet)'}
        type={'number'}
      />
    </>
  );
}

export default AdminInputWarehouseDetail;
