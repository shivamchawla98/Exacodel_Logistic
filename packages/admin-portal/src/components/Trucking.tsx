import { useState } from 'react'
import AdminInputDomesticTransport from './AdminInputDomesticTransport'
import OverseasTruckingDetails from './OverseasTruckingDetails'
import AdminInputOverseasTransport from './AdminInputOverseasTransport'
import { Switch } from '@headlessui/react'

function Trucking() {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  const [isOverseas, setIsOverseas] = useState(false);


  return (
    <>
        <Switch.Group as="div" className="flex items-center">
        <Switch.Label as="span" className="mr-3 text-sm">
        <span className={`font-medium ${isOverseas ?  "text-gray-900" : "text-sky-600"}`}>Domestic Transport</span>{' '}
      </Switch.Label>
      <Switch
        checked={isOverseas}
        onChange={setIsOverseas}
        className={classNames(
          isOverseas ? 'bg-sky-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isOverseas ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3 text-sm">
        <span className={`font-medium  ${!isOverseas ?  "text-gray-900" : "text-sky-600"}`}>Overseas Transport</span>{' '}
      
      </Switch.Label>
    </Switch.Group>
    {isOverseas && <AdminInputOverseasTransport />}
    {!isOverseas && <AdminInputDomesticTransport />}
    </>
  ) 
}

export default Trucking