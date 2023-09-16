import React from 'react'
import SelectComponet from './SelectComponent'
import TextField from './TextField'

function UploadDomesticTruking({prefix}: any) {
  return (
<div className="grid col-span-3 grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.typeOfTransport`} title={'Type Of Transport'} />
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.typeOfVehicle`} title={'Type Of Vehicle'} />
    <TextField id={`${prefix}.acceptablePayload`} title={'Acceptable Payload In Kgs'} type={'number'} />
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.pickUpLocation`} title={'Pick Up Location'} />
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.pincode`} title={'Zip / Pin Code'} />
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.transportCharges`} title={'Transport Charges'} />
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.basisOfCharges`} title={'Basis Of Charges'} />
    </div>
  )
}

export default UploadDomesticTruking