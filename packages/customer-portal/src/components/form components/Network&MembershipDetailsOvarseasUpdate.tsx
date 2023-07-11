import React from 'react';
import CheckboxComponent from './CheckboxComponent';
import TextField from './TextField';

function NetworkMembershipDetailsOvarseasUpdate() {
  return (
    <>
      <CheckboxComponent id={'wca'} title={'WCA'} />
      <CheckboxComponent id={'pln'} title={'PLN'} />
      <CheckboxComponent id={'x2elite'} title={'X2 ELITE'} />
      <CheckboxComponent id={'parnity'} title={'PARINITY'} />
      <CheckboxComponent id={'jctrans'} title={'JC TRANS'} />
      <CheckboxComponent id={'w3ln'} title={'OCEAN FREIGHT'} />
      <CheckboxComponent id={'g7n'} title={'G7N'} />
      <CheckboxComponent id={'bling'} title={'BLING'} />
      <CheckboxComponent id={'wpa'} title={'WPA'} />
      <CheckboxComponent id={'cln'} title={'CLN'} />
      <CheckboxComponent id={'gpln'} title={'GPLN'} />

      <CheckboxComponent id={'twig'} title={'TWIG'} />
      <CheckboxComponent id={'fnc'} title={'FNC'} />
      <CheckboxComponent id={'gla'} title={'GLA'} />
      <CheckboxComponent id={'globalia'} title={'GLOBALIA'} />
      <CheckboxComponent id={'Americas Alliance'} title={'AMERICAS ALLIANCE'} />
      <CheckboxComponent id={'aln'} title={'ALN'} />
      <CheckboxComponent id={'alpha'} title={'ALPHA'} />
      <CheckboxComponent id={'lognet'} title={'LOG NET'} />
      <CheckboxComponent id={'atlas'} title={'ATLAS'} />
      <TextField id={'other'} title={'Other'} type={'text'} />
    </>
  );
}

export default NetworkMembershipDetailsOvarseasUpdate;
