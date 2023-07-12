import React from 'react';
import TextField from './TextField';
import SelectComponet from './SelectComponent';

function LCLSeaRates({ prefix }) {
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
          id={`${prefix}.commodity`}
          title={'Commodity'}
        />
      </div>
      
      <div>
        <SelectComponet
          options={['Express', 'Normal']}
          id={`${prefix}.basisOfCharges`}
          title={'Basis Of Charges'}
        />
      </div>

      <div>
        <SelectComponet
          options={['Express', 'Normal']}
          id={`${prefix}.coLoaderDetails`}
          title={'Co-Loader Details'}
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
    </>
  );
}

export default LCLSeaRates;
