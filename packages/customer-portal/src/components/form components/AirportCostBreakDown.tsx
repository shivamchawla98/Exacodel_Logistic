import React from 'react';
import TextField from './TextField';

function AirportCostBreakDown({ prefix }) {
  return (
    <>
      <TextField id={`${prefix}.awbFees`} title={'AWB Fees'} type={'number'} />
      <TextField id={`${prefix}.dca`} title={'DCA'} type={'number'} />
      <TextField id={`${prefix}.ams`} title={'AMS'} type={'number'} />
      <TextField
        id={`${prefix}.fuelSurcharges`}
        title={'Fuel Surcharges (FSC)'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.securitySurcharges`}
        title={'Security Surgcharges (SSC)'}
        type={'number'}
      />
    </>
  );
}

export default AirportCostBreakDown;
