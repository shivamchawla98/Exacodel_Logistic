import TextField from "./TextField";

function LCLCostBreakDown({prefix}) {
  return (
    <>
      {/* cost break down */}
      <h2 className="text-base col-span-3 font-semibold leading-7 text-gray-900">
        Cost Break Down
      </h2>
      <TextField
        id={`${prefix}.basicFreight`}
        title={'Basic Freight'}
        type={'number'}
      />
      <TextField id={`${prefix}.blFees`} title={'B / L Fees'} type={'number'} />
      <TextField
        id={`${prefix}.sealCharges`}
        title={'Seal Charges'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.mucSurcharges`}
        title={'MUC Surcharges'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.adminFees`}
        title={'Admin Fees'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.emeCharces`}
        title={'EME Charges'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.amsCharces`}
        title={'AMS Charges'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.ensCharces`}
        title={'ENS Charges'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.terminalHandlig`}
        title={'Terminal Handling'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.inlandHaulage`}
        title={'Inland Haulage'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.exchangeRate`}
        title={'Excange Rate'}
        type={'number'}
      />
    </>
  );
}

export default LCLCostBreakDown;
