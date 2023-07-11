'use client'
import React from 'react'
import CheckboxComponent from './CheckboxComponent'


function ServiceDetailsOverseasUpdate() {
  return (
    <>
        <CheckboxComponent id={"airFrieght"} title={"Air Freight"} />
        <CheckboxComponent id={"trucking"} title={"Trucking"} />
        <CheckboxComponent id={"projects"} title={"Projects"} />
        <CheckboxComponent id={"oceanFreight"} title={"Ocean Freight"} />
        <CheckboxComponent id={"integratedLogistics"} title={"Integrated Logistics"} />
        <CheckboxComponent id={"oceanFreight"} title={"Ocean Freight"} />
        <CheckboxComponent id={"timeCritical"} title={"Time Critical"} />
        <CheckboxComponent id={"relocation"} title={"Relocation"} />
        <CheckboxComponent id={"pharma"} title={"Pharma"} />
        <CheckboxComponent id={"lclConsolidation"} title={"LCL Consolidation"} />
        <CheckboxComponent id={"perishabale"} title={"perishable"} />

        <CheckboxComponent id={"warehousing"} title={"Warehousing"} />
        <CheckboxComponent id={"railFreight"} title={"Rail Freight"} />
        <CheckboxComponent id={"brokerage"} title={"Brockerage"} />
        <CheckboxComponent id={"dangerousGoods"} title={"Dangerous Goods"} />
        <CheckboxComponent id={"liveAnimal"} title={"Live Animal"} />
        <CheckboxComponent id={"ecommerce"} title={"E Commerce"} />
    </>
  )
}

export default ServiceDetailsOverseasUpdate