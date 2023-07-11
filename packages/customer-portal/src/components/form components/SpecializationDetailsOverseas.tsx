'use client'
import React from 'react'
import CheckboxComponent from './CheckboxComponent'
import TextField from './TextField';


function SpecializationDetailsOverseas() {
  return (
    <>
        <CheckboxComponent id={"automotive"} title={"Automotive"} />
        <CheckboxComponent id={"aerospace&Aviation"} title={"Aerospace & Aviation"} />
        <CheckboxComponent id={"ecommerce"} title={"Ecommerce"} />
        <CheckboxComponent id={"pharmaceutical"} title={"Pharmaceutical"} />
        <CheckboxComponent id={"timeCritical"} title={"Time Critical"} />
        <CheckboxComponent id={"chratering&Project"} title={"Charetering & Project"} />
        <CheckboxComponent id={"dangerousGoods"} title={"Dangerous Goods"} />
        <CheckboxComponent id={"retail logistics"} title={"Retail Logistics"} />
        <CheckboxComponent id={"liquidChemicals"} title={"Liquid Chemicals"} />
        <TextField id={'other'} title={'Other'} type={'text'} />
    </>
  )
}

export default SpecializationDetailsOverseas;