import SelectComponet from './SelectComponent';
import TextField from './TextField';

interface SeaRatesForaFixProps {
  prefix: string;
}

const SeaRatesForaFix: React.FC<SeaRatesForaFixProps> = ({ prefix }) => {
  return (
    <>
      {/* upload sea rates */}
      <h2 className="text-base col-span-3 font-semibold leading-7 text-gray-900">
        Upload Sea Rates
      </h2>
      <div>
        <SelectComponet
          options={['Adelide', 'Brisbane']}
          id={`${prefix}.portOfOrigin`}
          title={'Port Of Origin'}
        />
      </div>

      <div>
        <SelectComponet
          options={['Adelide', 'Brisbane']}
          id={`${prefix}.portOfDestination`}
          title={'Port Of Destination'}
        />
      </div>

      <div>
        <SelectComponet
          options={['Express', 'Normal']}
          id={`${prefix}.shippingLine`}
          title={'Type Of Service'}
        />
      </div>

      <div>
        <SelectComponet
          options={['Express', 'Normal']}
          id={`${prefix}.commodity`}
          title={'Commodity'}
        />
      </div>
      <div>
        <SelectComponet
          options={['Express', 'Normal']}
          id={`${prefix}.containerType`}
          title={'Container Type'}
        />
      </div>

      <TextField id={`${prefix}.freight`} title={'Freight'} type={'number'} />
      <TextField id={`${prefix}.routing`} title={'Routing'} type={'text'} />
      {/* validity is of text type or number if number then in month or year */}
      <TextField
        id={`${prefix}.transitTime`}
        title={'Transit Time'}
        type="datetime-local"
      />
      <TextField id={`${prefix}.validity`} title={'Validity'} type={'text'} />
      <TextField
        id={`${prefix}.destinationFreeTime`}
        title={'Destination Free Time'}
        type={'text'}
      />
      <TextField
        id={`${prefix}.originDetentionFreeDays`}
        title={'Origin Detention Free Days'}
        type={'text'}
      />
      <TextField
        id={`${prefix}.originDetentionFreeDays`}
        title={'Origin Detention Free Days'}
        type={'text'}
      />

      {/* cost break down */}
      <h2 className="text-base col-span-3 font-semibold leading-7 text-gray-900">
        Cost Break Down
      </h2>
      <TextField
        id={`${prefix}.basicFreight`}
        title={'Basic Freight'}
        type={'number'}
      />
        <TextField
        id={`${prefix}.blFees`}
        title={'B / L Fees'}
        type={'number'}
      />
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
        id={`${prefix}.inlandHautage`}
        title={'Inland Hautage'}
        type={'number'}
      />  
      <TextField
        id={`${prefix}.exchangeRate`}
        title={'Excange Rate'}
        type={'number'}
      /> 
    </>
  );
};

export default SeaRatesForaFix;
