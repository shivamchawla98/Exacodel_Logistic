
import SelectComponet from './SelectComponent';
import TextField from './TextField';

interface AirportDetailProps {
  prefix: string;
}

const AirportDetails: React.FC<AirportDetailProps> = ({ prefix }) => {
  return (
  <div className='mt-10 grid grid-cols-2  col-span-3 gap-x-6 gap-y-8'>
  {/* airportOfOrigin */}
  <div className='sm:col-span-2 lg:col-span-1'>
    <SelectComponet options={["Adelide", "Brisbane"]} id={`${prefix}.airportOfOrigin`} title={'Airport Of Origin'} />
  </div>

  <div className='sm:col-span-2 lg:col-span-1'>
    <SelectComponet options={["Adelide", "Brisbane"]} id={`${prefix}.airportOfDestination`} title={'Airport Of Destination'} />
  </div>

  <div>
    <SelectComponet options={["Express", "Normal"]} id={`${prefix}.typeOfService`} title={'Type Of Service'} />
  </div>

  <div>
    <SelectComponet options={["Express", "Normal"]} id={`${prefix}.airline`} title={'Type Of Airline'} />
  </div>

  <div>
    <SelectComponet options={["Express", "Normal"]} id={`${prefix}.commodity`} title={'Commodity'} />
  </div>

  <TextField id={`${prefix}.weight`} title={'Weight'} type={'number'}/>
  <TextField id={`${prefix}.allInclusiveFreight`} title={'All Inclusive Freight'} type={'text'}/>
  {/* validity is of text type or number if number then in month or year */}
  <TextField id={`${prefix}.validity`} title={'Validity'} type={'text'} />
  <TextField id={`${prefix}.routing`} title={'Routing'} type={'text'} />
  <TextField id={`${prefix}.transitTime`} title={'Transit Time'} type='datetime-local' />
  
  </div>)
}

export default AirportDetails;