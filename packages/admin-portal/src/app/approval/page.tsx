"use client"
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  XMarkIcon,
  CursorArrowRaysIcon,
  UserGroupIcon,
  
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, HomeModernIcon, ArchiveBoxXMarkIcon, TruckIcon } from '@heroicons/react/20/solid'
import Vendors from './components/Vendors'
import Approval from '@/components/Approval'
import ApprovedPopup from './components/ApprovedPopup'
import { useRouter } from 'next/navigation'
import Approved from '@/components/Approved'
import RejectedUsers from '@/components/RejectedUsers'
 import { useSelector } from 'react-redux'
import AdminInputWarehouse from '@/components/WarehouseForm'
import Trucking from '@/components/Trucking'
import AllWarehouse from './components/AllWarehouse'
import {FaWarehouse} from 'react-icons/fa'
import WarehouseInfo from './components/WarehouseInfo'
import WarehouseActionCenter from './components/WarehouseActionCenter'
import WarehouseReview from './components/WarehouseEdit'
import TruckingReview from './components/TruckingReview'
import TruckingEdit from './components/TruckingEdit'
import AllTruckingInfo from './components/AllTrucking'
import TruckingInfo from './components/TruckingInfo'
import Cookies from 'js-cookie'
import GET_USER_BY_ID from '@/graphql/query/getUserById'
import jwt_decode from "jwt-decode";


const navigation = [
  {
    name: 'Vendor', href: '#', icon: CursorArrowRaysIcon, current: true,
    subNav:
      [
        { name: 'Vendor Review', href: '#', icon: CursorArrowRaysIcon, current: false },
        { name: 'Approved', href: '#', icon: UserGroupIcon, current: false },
        { name: 'Rejected', href: '#', icon: ArchiveBoxXMarkIcon, current: false },
      ],
  },

  {
    name: 'Warehouse', href: '#', icon: FaWarehouse, current: true,
    subNav:
      [
        { name: 'Warehouse Review', href: '#', icon: ArchiveBoxXMarkIcon, current: false },
        { name: 'Add Warehouse', href: '#', icon: UserGroupIcon, current: false },
        { name: 'All warehouses', href: '#', icon: ArchiveBoxXMarkIcon, current: false },
      ],
  },

  {
    name: 'Trucking', href: '#', icon: CursorArrowRaysIcon, current: true,
    subNav:
      [
        { name: 'Trucking Review', href: '#', icon: ArchiveBoxXMarkIcon, current: false },
        { name: 'Add Trucking', href: '#', icon: UserGroupIcon, current: false },
        { name: 'All Trucking', href: '#', icon: ArchiveBoxXMarkIcon, current: false },
      ],
  },

]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [approval, setApproval] = useState(false)
  const [approvalIndex, setApprovalIndex] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [userName, setUserName] = useState('');
  const [operation, setOperation] = useState('')
  const [activeItem, setActiveItem] = useState('Vendor Review');
  const {firstName, lastName} = useSelector((state: any) => state.loginSlice)
  const router = useRouter();

  
  {console.log(activeItem)}
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=sky&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-sky-600'
                                      : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-sky-600' : 'text-gray-400 group-hover:text-sky-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-sky-600"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-sky-600"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
         
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=sky&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                {
                  navigation.map((navItems, index : any) => {

                    return (
                      <li key={navItems.name}>
                    
                        <button
                          id={navItems.name}
                          onClick={(e) => {
                            setActiveItem(e.currentTarget.id)
                            console.log("herre : ", e.currentTarget.id);
                            
                             }}

                          className={`group flex gap-x-3 rounded-md p-2 -mx-2 space-y-1 text-sm leading-6 font-medium w-full ${activeItem === navItems.name  ? 'bg-gray-50 text-sky-600'
                          : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'} `}
                        >
                          <navItems.icon
                            className={classNames(
                              activeItem === navItems.name ? 'text-sky-600' : 'text-gray-400 group-hover:text-sky-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {navItems.name}
                        </button>
                    

                      <ul key={index} role="list" className="ml-4">
                      {
                        navigation[index].subNav.map((childNav: any) => {
                        return  ( <li
                        key={childNav.name}
                        >
                          <button
                          id={childNav.name}
                            onClick={(e: any) => {
                              setActiveItem(e.currentTarget.id)
                             }}
  
                            className={`group flex gap-x-3 rounded-md  text-sm leading-6  font-normal w-full ${activeItem === childNav.name  ? 'bg-gray-50 text-sky-600'
                            : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'} `}
                          >
                            {
                             childNav.icon && <childNav.icon
                              className={classNames(
                                activeItem === childNav.name ? 'text-sky-600' : 'text-gray-400 group-hover:text-sky-600',
                                'h-4 w-4 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            }
                            {childNav.name}
                          </button>
                        </li>)
                        })
                      }

                      </ul>

                      </li>
                    )

                  })
                }
                  
                
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-sky-600"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-sky-600"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900 capitalize" aria-hidden="true">
                        {firstName} {" "} {lastName}
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      
                        <Menu.Item key="yourProfile">
                          {({ active }) => (
                            <button
                              type="button"
                              onClick={() =>  {                        
                                setApproval(!approval) 
                              }}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              Your Profile
                            </button>
                          )}
                        </Menu.Item>

                        <Menu.Item key="signOut">
                          {({ active }) => (
                            <button
                              type="button"
                              onClick={() => {
                                router.push("/")
                                Cookies.remove("jwtToken");
                              }  }
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                    
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
               {activeItem === 'Vendor Review' && <Vendors isApproved={isApproved} setApprovalIndex = {setApprovalIndex} onApprovalClick={() => setActiveItem("more info")} />}
               {activeItem === 'more info' && <Approval setName={setUserName} setOperation={setOperation} Id={approvalIndex} isApproved = {() => setActiveItem("approved popup")} onApproveClick={() =>{ setActiveItem("Vendor Review")    } } 
                />} 
               {activeItem === "approved popup" && <ApprovedPopup name={userName} operation={operation} onApprovalClick={()=> setActiveItem("Vendor Review")} />}
               {activeItem === 'Approved' && <Approved />}
               {activeItem === 'Rejected' && <RejectedUsers />}
              
              {/* warehouse */}
               {activeItem === 'Add Warehouse' && <AdminInputWarehouse setActiveItem={setActiveItem}/>}
               {activeItem === 'Warehouse Review' && <WarehouseActionCenter setApprovalIndex = {setApprovalIndex} Id={approvalIndex}  setActiveItem={setActiveItem} />}
               {activeItem === "warehouseEdit" && <WarehouseReview Id={approvalIndex} setActiveItem={setActiveItem}/>}
               {activeItem === 'All warehouses' && <AllWarehouse setActiveItem={setActiveItem} setApprovalIndex = {setApprovalIndex}  />}
               {activeItem === 'warehouseInfo' && <WarehouseInfo  Id={approvalIndex}/>}
             
             {/* trucking */}
               {activeItem === 'Trucking Review' && <TruckingReview  setApprovalIndex = {setApprovalIndex} onApprovalClick={() => setActiveItem("truckingEdit")} />}
               {activeItem === 'truckingEdit' && <TruckingEdit Id={approvalIndex} setActiveItem={setActiveItem}/>}
               {activeItem === 'Add Trucking' && <Trucking />}
               {activeItem === 'All Trucking' && <AllTruckingInfo setActiveItem={setActiveItem} setApprovalIndex = {setApprovalIndex}/>}
               {activeItem === 'truckingInfo' && <TruckingInfo Id={approvalIndex} />}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

