import SelectComponet from "./SelectComponent"
import TextField from "./TextField"

function UploadClearenceChargesOverseasUpdate({prefix}) {
  return (
    <>
    <SelectComponet options={["1","2","3"]} id={`${prefix}.portOfClearence`} title={"Port OF Clearence"} />
    <SelectComponet options={["1","2","3"]} id={`${prefix}.commodity`} title={"Commodity"} />
    <SelectComponet options={["1","2","3"]} id={`${prefix}.clearence`} title={"Clearence"} />
    <SelectComponet options={["1","2","3"]} id={`${prefix}.mediumType`} title={"Medium Type"} />
    <TextField id={`${prefix}.clearenceCharges`} title={"Clearence Chares"} type={"number"} />
    {/* cost breakdown */}
    <TextField id={`${prefix}.agencyCharges`} title={"Agency Charges"} type={"number"} />
    <TextField id={`${prefix}.documentationCharges`} title={"Clearence Chares"} type={"number"} />
    <TextField id={`${prefix}.ediCmcCharges`} title={"EDI / CMC Chares"} type={"number"} />
    <TextField id={`${prefix}.handlingCharges`} title={"Handling Chares"} type={"number"} />

    </>

  )
}

export default UploadClearenceChargesOverseasUpdate