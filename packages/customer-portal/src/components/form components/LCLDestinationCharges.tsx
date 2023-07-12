import TextField from './TextField';

function LCLDestinationCharges({ prefix }) {
  return (
    <>
      <h2 className="text-base col-span-3 font-semibold leading-7 text-gray-900">
        Upload Sea Rates
      </h2>
      <TextField
        id={`${prefix}.destinationDOCharges`}
        title={'Destination DO Charges'}
        type={'number'}
      />
      <TextField id={`${prefix}.dadFees`} title={'DAD Fees'} type={'number'} />
      <TextField id={`${prefix}.itFees`} title={'IT Fees'} type={'number'} />
      <TextField id={`${prefix}.shipping`} title={'Shipping'} type={'number'} />
      <TextField
        id={`${prefix}.portSecurity`}
        title={'Port Security'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.chassisFees`}
        title={'Chassis Fees'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.ipiOverweightFee`}
        title={'IPI Overweight Fees'}
        type={'number'}
      />
      <TextField
        id={`${prefix}.exchangeRates`}
        title={'Excahange Rate'}
        type={'number'}
      />
    </>
  );
}

export default LCLDestinationCharges;
