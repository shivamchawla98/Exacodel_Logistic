import SelectComponet from "./SelectComponent"
import TextField from "./TextField"

function CustomClearenceFCLDetails({prefix}) {
  return (
    <>
    <h2 className="col-span-3">Upload Sea Rates</h2>
      <SelectComponet options={[1,2,3,4]} id={`${prefix}.portClearence`} title={"Port Clearence"} />
      <SelectComponet options={[1,2,3,4]} id={`${prefix}.commodity`} title={"Commodity"} />
      <SelectComponet options={[1,2,3,4]} id={`${prefix}.containerType`} title={"Port Clearence"} />
      <SelectComponet options={[1,2,3,4]} id={`${prefix}.commodity`} title={"Commodity"} />
      <SelectComponet options={[1,2,3,4]} id={`${prefix}.clearenceType`} title={"Clearence Type"} />
      <TextField id={`${prefix}.customClearenceCharges`} title={"Custom Clearence Charges"} type={"number"} />
      <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      {/* custom break down */}
      <h2 className="col-span-3">Custom Break Down</h2>
      <TextField id={`${prefix}.agencyCharges`} title={"Agency Charges"} type={"number"} />
      <TextField id={`${prefix}.documentation`} title={"Documentation Charges"} type={"number"} />
      <TextField id={`${prefix}.ediCmcCharges`} title={"EDI / CMC Charges"} type={"number"} />
      <TextField id={`${prefix}.handlingCharges`} title={"Handling Charges"} type={"number"} />

      <TextField id={`${prefix}.professionalFees`} title={"Professional Fees"} type={"number"} />
      <TextField id={`${prefix}.CFS Charges`} title={"CFS Charges"} type={"number"} />
      <TextField id={`${prefix}.railOutFacilation`} title={"Rail-out Facilation"} type={"number"} />
      <TextField id={`${prefix}.containerShiftingCharges`} title={"Container Shifting Charges"} type={"number"} />
      <TextField id={`${prefix}.exchangeRate`} title={"Exchange Rate"} type={"number"} />
    </>
  )
}

export default CustomClearenceFCLDetails