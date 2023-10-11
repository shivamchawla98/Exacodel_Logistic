import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserType, updateIdentification } from '@/features/starter-form/starter-slice'
import { updateSignUpclicked } from '@/features/select-form/selectForm-slice'
import { useRouter } from 'next/navigation';
import { companyTypes } from '../data/dropdownData'

const vendorSubtype = ["WAREHOUSE_COMPANY", "COLD_STORAGE_COMPANY"];
const overseasAgentSubtypes = ["FOREIGN_AGENT"];

const subTypes = {
  "CUSTOMER": companyTypes,
  "VENDOR": vendorSubtype,
  "OVERSEAS_AGENT": overseasAgentSubtypes,
}

const identifications = [
  { name: "I'm Customer", value: 'CUSTOMER', current: true },
  { name: "I'm Vendor", value: 'VENDOR', current: false },
  // { name: "I'm Overseas Agent", value: 'OVERSEAS_AGENT', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function RolePopup() { 
  
  const open = useSelector((state: any) => state.selectForm.signUpClicked);
  const {identification, userType} = useSelector((state: any) => state.starterSlice);
  const {signUpClicked} = useSelector((state: any) => state.selectForm)
  const router = useRouter();
  const [tabs, setTabs] = useState(identifications) 

    const dispatch = useDispatch();
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            
            <div className="flex justify-end w-full">
              <div
                 onClick={() => {
                        dispatch(updateSignUpclicked(!signUpClicked))
                  }}
              className="w-10 h-10 flex justify-center items-center bg-sky-200 rounded-full cursor-pointer">
                <XMarkIcon className='w-6 h-6 text-sky-400 hover:text-sky-500' />
              </div>
            </div>

              <div

                className='border-sky-500 group inline-flex items-center border-b-2 py-2 px-1 text-base font-medium mb-10'
              >
                <span className='text-gray-700'>Start Shiping ...</span>
              </div>
            
              <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-sky-500 focus:ring-sky-500"
          defaultValue={tabs.find((tab) => tab.current)?.value}
   
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.value}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
          {tabs.map((tab, tabIdx) => (
            <button
              key={tab.name}
              id={tab.value}
              onClick={(e) => {
                const updatedTabs = tabs.map((tab) => ({
                  ...tab,
                  current: tab.value === e.currentTarget.id,
                }));
                dispatch(updateIdentification(e.currentTarget.id));
                setTabs(updatedTabs); 
              }}
              className={classNames(
                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-xs font-medium hover:bg-gray-50 focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-sky-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
   {/* User type */}
   <div className="mt-6">
              <label
                htmlFor="userType"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                UserType
              </label>
              <select
                id="userType"
                name="userType"
                className="block w-full bg-white rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  dispatch(updateUserType(selectedValue));
                }}
             >
                <option value="">Select a user type</option>
                {Array.from(subTypes[identification]).map((type: any) => (
                  <option
                   key={type} 
                   value={type}
                  
                   >
                    {type}
                  </option>
                ))}
              </select>
              </div>
              <div className='w-full flex justify-center mt-6 mb-8'>

              <button type="submit"
              onClick={() => {
                if (!identification && !userType) {
                  alert("Enter values to proceed")
                  return;
                }
                dispatch(updateSignUpclicked(false))
                router.push("./registration")
              }}
              className="w-4/5 mt-6 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none
               focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                Go ahead and save</button>
              </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
