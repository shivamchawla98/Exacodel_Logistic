'use client';

import React, { useState } from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';

import countries from '../data/country';
import WarehouseCapacity from './WarehouseCapacity';
import SelectComponent from './SelectComponent';
import country_list from '../data/country';
import SelectComponet from './SelectComponent';
import UploadComponent from './UploadComponent';
import UploadComponentUnit from './UploadComponentUnit';
import TextField from './TextField';



// formik validation
const validationSchema = Yup.object().shape({
  isCorporateIsBillingAddress: Yup.string().required('This field is required'),
  billingAddress: Yup.object().shape({
    country: Yup.string().required('Country is required'),
    streetAddress: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('State/Province is required'),
    postalCode: Yup.string().required('ZIP/Postal code is required'),
  }),
  termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  // Add validation rules for other fields if needed
});

function VendorProfileUpdate() {
  const [showAddressField, setShowAdressField] = useState(false);
  const [showWarehouseAddress, setShowWarehouseAddress] = useState(false);
  const [showTransportField, setShowTransportField] = useState(false);
  const [showLTLField, setShowLTLField] = useState(false);
  const [tempSelection, setTempSelection] = useState(false);
  const [hazardSelection, setHazardSelection] = useState(false);

  const handleBillingAddress = (values: any) => {
    // Access values here
    setShowAdressField(!showAddressField); // Accessing individual field value

    // Perform additional logic or API calls with the values
    // ...
  };
  // initial values
  const initialValues = {
    isCorporateIsBillingAddress: "yes",
    billingAddress: {
      country: '',
      streetAddress: '',
      city: '',
      region: '',
      postalCode: '',
    },
    isWarehouseAddress: 'no',
    warehouses: [{}],
    isTransporter: 'no',
    transporters: [{}],
    termsAccepted: false,
    isLtlAvailabilty: 'no',
    ltls: [{}],
    companyContacts: [{}, {}],
    documentsUpload: [{}, {}, {}, {}, {}, {}, {}, {}],
    airRates: [{}],

    // Add initial values for other fields
  };

  return (
    <div >
      <h2 className="text-xl text-gray-800 my-auto  font-medium pt-11 pl-11">
        Vendor Profile Update
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);

        }}
      >
        {(formik) => (

          <Form className="mt-2 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
            <div className="w-full col-span-3 grid grid-cols-2">
              <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Is Corporate is same as Billing Address ?
              </h2>
              <div className='flex justify-center sm:flex-wrap flex-nowrap'>
                <label className='mx-6'>
                  <Field
                    onClick={() => setShowAdressField(false)}
                    className="w-4 px-5 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isCorporateIsBillingAddress"
                    value="yes"
                  />
                  <strong className='ml-2'>

                  Yes
                  </strong>
                </label>
                <label className='mx-6'>
                  <Field
                    onClick={() => setShowAdressField(true)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isCorporateIsBillingAddress"
                    value="no"
                  />
                  <strong className='ml-2'>

                  No
                  </strong>
                </label>
              </div>
              <ErrorMessage name="isCorporateIsBillingAddress" className='text-rose-500 text-xs' component="span" />
            </div>

            {/* address */}
            {/* country */}
            {showAddressField &&

              <div className='col-span-3 grid grid-cols-2 gap-x-6 gap-y-8'>

                {/* country */}
                <div>
                  <label
                    htmlFor={`billingAddress.country`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <Field
                    as="select"
                    id={`billingAddress.country`}
                    name={`billingAddress.country`}
                    className="block w-full bg-white rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none'>Select a country</option>
                    {countries.map((country) => (
                      <option
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none'
                        key={country}
                        value={country}>
                        {country}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name={`billingAddress.country`}
                    component="span"
                    className='text-rose-500 text-xs'
                  />
                </div>
                {/* stree address streetAddress */}
                <div>

                  <label
                    htmlFor={`billingAddress.streetAddress`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <Field type="text" id={`billingAddress.streetAddress`} name={`billingAddress.streetAddress`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                  <ErrorMessage name={`billingAddress.streetAddress`} className='text-rose-500 text-xs' component="div" />
                </div>

                {/* city */}
                <div>
                  <label
                    htmlFor={`billingAddress.city`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <Field type="text" id={`billingAddress.city`} name={`billingAddress.city`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                  <ErrorMessage name={`billingAddress.city`} className='text-rose-500 text-xs' component="div" />
                </div>

                {/* region */}
                <div>
                  <label
                    htmlFor={`billingAddress.region`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <Field type="text" id={`billingAddress.region`} name={`billingAddress.region`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                  <ErrorMessage name={`billingAddress.region`} className='text-rose-500 text-xs' component="span" />
                </div>

                {/* postal code */}
                <div>
                  <label
                    htmlFor={`billingAddress.postalCode`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <Field type="text" id={`billingAddress.postalCode`} name={`billingAddress.postalCode`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                  <ErrorMessage name={`billingAddress.postalCode`} className='text-rose-500 text-xs' component="span" />
                </div>
              </div>
            }
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            {/*  Ware house address*/}
            <div className=" grid grid-cols-2 col-span-3">
              <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Do you have warehouse ?
              </h2>
              <div className='flex justify-center sm:flex-wrap flex-nowrap'>
                <label className='mx-6'>
                  <Field
                    onClick={() => setShowWarehouseAddress(true)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isWarehouseAddress"
                    value="yes"
                  />
                  <strong className='ml-2'>

                  Yes
                  </strong>
                </label>
                <label className='mx-6'>
                  <Field
                    onClick={() => setShowWarehouseAddress(false)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isWarehouseAddress"
                    value="no"
                  />
                  <strong className='ml-2'>

                  No
                  </strong>
                </label>
              </div>
              <ErrorMessage name="isWarehouseAddress" component="div" />
            </div>
            {showWarehouseAddress &&
              <>
                <FieldArray
                  name='warehouses'
                  render={(arrayHelpers) => {
                    return (
                      <div className='col-span-3'>
                        {formik.values.warehouses.map((warehouse, index) => (
                          <>
                            <div className='grid grid-cols-1 col-span-3 gap-x-6 gap-y-8' key={index}>
                            {
                            formik.values.warehouses.length > 1 &&
                            <div className='col-span-3 flex justify-end'>
                              <button
                                onClick={() => arrayHelpers.remove(index)}
                                type="button"
                                className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                              >
                                Remove X
                              </button>
                            </div>
                          }
                          <h2 className='col-span-3  text-sm font-semibold pb-4  text-gray-700'>Warehouse<strong className='px-2'>{index + 1}</strong> </h2>

                              {/* country */}
                              <div className="col-span-3 lg:col-span-1">
                                <label
                                  htmlFor={`warehouses.${index}.country`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Country
                                </label>
                                <Field
                                  as="select"
                                  id={`warehouses.${index}.country`}
                                  name={`warehouses.${index}.country`}
                                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none"
                                >
                                  <option value="">Select a country</option>
                                  {countries.map((country) => (
                                    <option key={country} value={country}>
                                      {country}
                                    </option>
                                  ))}
                                </Field>
                                <ErrorMessage
                                  name={`warehouses.${index}.country`}
                                  component="span"
                                  className="error-message"
                                />
                              </div>
                              {/* stree address streetAddress */}
                              <div className="col-span-3 lg:col-span-1">

                                <label
                                  htmlFor={`warehouses.${index}.streetAddress`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Street address
                                </label>
                                <Field type="text" id={`warehouses.${index}.streetAddress`} name={`warehouses.${index}.streetAddress`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                                <ErrorMessage name={`warehouses.${index}.streetAddress`} component="div" />
                              </div>

                              {/* city */}
                              <div className="col-span-3 lg:col-span-1">
                                <label
                                  htmlFor={`warehouses.${index}.city`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  City
                                </label>
                                <Field type="text" id={`warehouses.${index}.city`} name={`warehouses.${index}.city`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                                <ErrorMessage name={`warehouses.${index}.city`} component="div" />
                              </div>

                              {/* region */}
                              <div className="col-span-3 lg:col-span-1">
                                <label
                                  htmlFor={`warehouses.${index}.region`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  State / Province
                                </label>
                                <Field type="text" id={`warehouses.${index}.region`} name={`warehouses.${index}.region`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                                <ErrorMessage name={`warehouses.${index}.region`} component="span" />
                              </div>

                              {/* postal code */}
                              <div className="col-span-3 lg:col-span-1">
                                <label
                                  htmlFor={`warehouses.${index}.postalCode`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  ZIP / Postal code
                                </label>
                                <Field type="text" id={`warehouses.${index}.postalCode`} name={`warehouses.${index}.postalCode`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                                <ErrorMessage name={`warehouses.${index}.postalCode`} component="span" />
                              </div>
                            </div>
                            {/* warehouse quants added here */}
                            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 col-span-3 gap-x-6 gap-y-8">
                              <WarehouseCapacity
                                id={`warehouses.${index}.totalStorageArea`}
                                labelTitle="Total Storage Area"
                                unit="ft²"
                              />
                              <WarehouseCapacity
                                id={`warehouses.${index}.totalAvailableArea`}
                                labelTitle="Total Available Area"
                                unit="ft²"
                              />
                              <WarehouseCapacity
                                id={`warehouses.${index}.occupiedSpace`}
                                labelTitle="Occupied Space"
                                unit="ft²"
                              />
                              <WarehouseCapacity
                                id={`warehouses.${index}.unoccupiedSpace`}
                                labelTitle="Un-occupied Space"
                                unit="ft²"
                              />
                              <WarehouseCapacity id={`warehouses.${index}.rackedSpace`} labelTitle="Racked Space" unit="ft²" />

                              <div className="col-span-2">

                                <SelectComponent
                                  options={['Yes', 'No']}
                                  id={`warehouses.${index}.warehouseInsurance`}
                                  title="Warehouse Insurance"
                                  optionalOption="Warehouse Insurance?"
                                />
                              </div>

                              {/* coldStorage */}
                              <div className="col-span-2">
                                <label
                                  htmlFor={`warehouses.${index}.coldStorage`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Storage Type
                                </label>

                                <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                  <Field
                                    onClick={() => setTempSelection(!tempSelection)}
                                    type="checkbox"
                                    id={`warehouses.${index}.coldStorage`}
                                    name={`warehouses.${index}.coldStorage`}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor={`warehouses.${index}.coldStorage`}
                                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Cold Storage
                                  </label>
                                  <ErrorMessage
                                    name={`warehouses.${index}.coldStorage`}
                                    component={'span'}
                                    className="text-rose-500"
                                  />
                                </div>
                                {tempSelection && (
                                  <div className="flex items-center pl-3 pr-3 border border-gray-200 rounded dark:border-gray-700">
                                    <SelectComponent
                                      options={[
                                        '-18 to +20 Deg Cel.',
                                        '-2 to -8 Deg Cel',
                                        '-20 to +20 Deg Cel',
                                        '-15 to +25 Deg Cel',
                                      ]}
                                      id={`warehouses.${index}.referigeratedTemp`}
                                      title="Referigerated Temperature"
                                    />
                                  </div>
                                )}
                              </div>

                              {/* hazardousWarehouse  */}
                              <div className="col-span-2">
                                <label
                                  htmlFor={`warehouses.${index}.hazardousWarehouse`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Hazard Warehouse
                                </label>
                                <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                  <Field
                                    onClick={() => setHazardSelection(!hazardSelection)}
                                    type="checkbox"
                                    id={`warehouses.${index}.hazardousWarehouse`}
                                    name={`warehouses.${index}.hazardousWarehouse`}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    checked={hazardSelection}
                                  />
                                  <label
                                    htmlFor={`warehouses.${index}.hazardousWarehouse`}
                                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Hazardous Warehouse
                                  </label>
                                  <ErrorMessage
                                    name={`warehouses.${index}.hazardousWarehouse`}
                                    component="span"
                                    className="text-rose-500"
                                  />
                                </div>
                                {hazardSelection && (
                                  <div className="flex items-center pl-3 pr-3 border border-gray-200 rounded dark:border-gray-700">
                                    <SelectComponent
                                      options={[
                                        'class 1',
                                        'class 2',
                                        'class 3',
                                        'class 4',
                                        'class 5',
                                        'class 6',
                                        'class 7',
                                        'class 8',
                                        'class 9',
                                        'class 1 to 9',
                                        '',
                                      ]}
                                      id={`warehouses.${index}.hazardousGrade`}
                                      title="Hazardous Grade"
                                    />
                                  </div>

                                )}
                              </div>

                              <WarehouseCapacity id={`warehouses.${index}.storageCharges`} labelTitle="Storage Charges" unit="ft²" />
                              <WarehouseCapacity
                                id={`warehouses.${index}.storagePerPallet`}
                                labelTitle="Storage Charges"
                                unit="per pallet"
                              />
                              <WarehouseCapacity
                                id={`warehouses.${index}.minimumStorageAreaPerPallet`}
                                labelTitle="Minimum Storage Area"
                                unit="ft²"
                              />
                              <WarehouseCapacity
                                id={`warehouses.${index}.minimumStorageRent`}
                                labelTitle="Minimum Storage Rent"
                                unit="ft²"
                              />
                              <WarehouseCapacity
                                id={`warehouses.${index}.minimumStorageChargesPerPallet`}
                                labelTitle="Minimum storage charge"
                                unit="per pallet"
                              />
                            </div>
                            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                          </>
                        )
                        )}

                        <div className='mt-8 col-span-3 flex justify-end'>
                          <button
                            onClick={() => arrayHelpers.insert(formik.values.warehouses.length + 1, {})}
                            type="button"
                            className="mx-4 rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                          >
                            Add
                          </button>



                        </div>
                      </div>
                    )
                  }}
                />



              </>

            }
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className="w-full col-span-3 grid grid-cols-2">
              <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Are you a Transporter ?
              </h2>

              <div className='flex justify-center sm:flex-wrap flex-nowrap'>
                <label className='mx-6'>
                  <Field
                    onClick={() => setShowTransportField(true)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isTransporter"
                    value="yes"
                  />
                  <strong className='ml-2'>

                  Yes
                  </strong>
                </label>
                <label className='mx-6'>
                  <Field
                    onClick={() => setShowTransportField(false)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isTransporter"
                    value="no"
                  />
                  <strong className='ml-2'>

                  No
                  </strong>
                </label>
              </div>
              <ErrorMessage name="isTransporter" component="div" />
            </div>
            {showTransportField &&

              <FieldArray
                name='transporters'
                render={(arrayHelpers) => (
                  <div className='col-span-3'>
                    {
                      <div className='col-span-3'>
                        {
                          formik.values.transporters.map((tansporter, index) => {
                            return (
                              <div className='grid grid-cols-1 lg:grid-cols-2 col-span-3 gap-x-6 gap-y-8' key={index}>
                                                          {
                            formik.values.transporters.length > 1 &&
                            <div className='col-span-2 flex justify-end'>
                              <button
                                onClick={() => arrayHelpers.remove(index)}
                                type="button"
                                className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                              >
                                Remove X
                              </button>
                            </div>
                          }
                                <h2 className='col-span-2 text-xs font-semibold py-4  text-gray-700'>Transport <strong className='px-2'>{index + 1}</strong> </h2>

                                {/* typesOfTransport */}
                                <div>
                                  <SelectComponet
                                    options={['FTL', 'LCL']}
                                    id={`transporters.${index}.typesOfTransport`}
                                    title={'Type of Transport'}
                                  />
                                </div>

                                {/* typesOfTruck */}
                                <div>
                                  <SelectComponet
                                    options={[
                                      'TATA ACE',
                                      'ASHOK LEYLAND DOST',
                                      'MAHINDRA BOLERO PICKUP',
                                      'TATA 407',
                                      'EICHER 14 FEET',
                                    ]}
                                    id={`transporters.${index}.typesOfTruck`}
                                    title={'Type of Transport'}
                                  />
                                </div>

                                {/*maxAcceptablePayload*/}
                                <div>
                                  <SelectComponet
                                    options={[
                                      'MAX LOAD 850KG',
                                      'MAX LOAD 1 TON',
                                      'MAX 1.5 TON',
                                      'MAX 2 TON',
                                      'MAX 2.5 TON',
                                    ]}
                                    id={`transporters.${index}.maxAcceptablePayload`}
                                    title={'Max Acceptable Payload'}
                                  />
                                </div>

                                {/*commodity*/}
                                <div>
                                  <SelectComponet
                                    options={[
                                      'GENERAL CARGO',
                                      'DANGEROUS GOODS',
                                    ]}
                                    id={`transporters.${index}.commodity`}
                                    title={'Commodity'}
                                  />
                                </div>

                                {/* pickUpState */}
                                <div>
                                  <SelectComponet
                                    options={['Andhra Pradesh', 'Arunachal Pradesh']}
                                    id={`transporters.${index}.pickUpState`}
                                    title={'Pick Up State'}
                                  />
                                </div>

                                {/* pickUpCityPincode */}
                                <div>
                                  <SelectComponet
                                    options={['122001', '22102']}
                                    id={`transporters.${index}.pickUpCityPincode`}
                                    title={'Pick Up City Pincode'}
                                  />
                                </div>

                                {/* dropState */}
                                <div>
                                  <SelectComponet
                                    options={['Andhra Pradesh', 'Arunachal Pradesh']}
                                    id={`transporters.${index}.dropState`}
                                    title={'Drop State'}
                                  />
                                </div>

                                {/* DropCityPincode */}
                                <div>
                                  <SelectComponet
                                    options={['122001', '22102']}
                                    id={`transporters.${index}.DropCityPincode`}
                                    title={'Drop City Pincode'}
                                  />
                                </div>

                                {/* chargesOfTransport */}
                                <div>
                                  <label
                                    htmlFor={`transporters.${index}.chargesOfTransport`}
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Charges Of Transport
                                  </label>
                                  <Field
                                    name={`transporters.${index}.chargesOfTransport`}
                                    placeholder={`transporters.${index}.chargesOfTransport`}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none"
                                  />
                                  <ErrorMessage
                                    name={`transporters.${index}.chargesOfTransport`}
                                    component="span"
                                    className="text-rose-500"
                                  />
                                </div>

                                {/* basisOfCharges */}
                                <div>
                                  <SelectComponet
                                    options={['Per kG', 'Per Vehicle']}
                                    id={`transporters.${index}.basisOfCharges`}
                                    title={'Basis Of Charges'}
                                  />
                                </div>
                                <hr className="my-12 col-span-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                              </div>
                            )
                          }

                          )
                        }

                        <div className='mt-8 col-span-3 flex justify-end'>
                          <button
                            onClick={() => arrayHelpers.insert(formik.values.transporters.length + 1, {})}
                            type="button"
                            className="mx-4 rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                          >
                            Add
                          </button>

                        </div>
                      </div>
                    }
                  </div>
                )}

              />

            }
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            {/* LTL details update form */}

            <div className="w-full col-span-3 grid grid-cols-2">
              <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Do you have LTL Service ?
              </h2>
              <div className='flex justify-center sm:flex-wrap flex-nowrap'>
                <label className='mx-6'>
                  <Field
                    onClick={() => setShowLTLField(true)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isLtlAvailabilty"
                    value="yes"
                  />
                  <strong className='ml-2'>

                  Yes
                  </strong>
                </label>
                <label className='mx-6'>
                  <Field
                    onClick={() => setShowLTLField(false)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isLtlAvailabilty"
                    value="no"
                  />
                  <strong className='ml-2'>

                  No
                  </strong>
                </label>

              </div>
              <ErrorMessage name="isLtlAvailabilty" component="div" />
            </div>
            {showLTLField &&
              <FieldArray
                name='ltls'
                render={(arrayHelpers) => (
                  <div className='col-span-3'>

                    {
                      <div className='col-span-3'>
                        {
                          formik.values.ltls.map(
                            (ltl, index) => (
                              <div className='col-span-3 grid grid-cols-2 gap-x-6 gap-y-8' key={index}>
                                                          {
                            formik.values.ltls.length > 1 &&
                            <div className='col-span-2 flex justify-end'>
                              <button
                                onClick={() => arrayHelpers.remove(index)}
                                type="button"
                                className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                              >
                                Remove X
                              </button>
                            </div>
                          }
                                <h2 className="col-span-2 text-xs font-semibold py-4">Upload LTL Rates {index + 1}</h2>

                                {/* typesOfTransport */}
                                <div>
                                  <SelectComponet
                                    options={['FTL', 'LCL']}
                                    id={`ltls.${index}.typesOfTransport`}
                                    title={'Type of Transport'}
                                  />
                                </div>

                                {/* pickUpState */}
                                <div>
                                  <SelectComponet
                                    options={['Andhra Pradesh', 'Arunachal Pradesh']}
                                    id={`ltls.${index}.pickUpState`}
                                    title={'Pick Up State'}
                                  />
                                </div>

                                {/* pickUpCityPincode */}
                                <div>
                                  <SelectComponet
                                    options={['122001', '22102']}
                                    id={`ltls.${index}.pickUpCityPincode`}
                                    title={'Pick Up City Pincode'}
                                  />
                                </div>

                                {/* dropState */}
                                <div>
                                  <SelectComponet
                                    options={['Andhra Pradesh', 'Arunachal Pradesh']}
                                    id={`ltls.${index}.dropState`}
                                    title={'Drop State'}
                                  />
                                </div>

                                {/* DropCityPincode */}
                                <div>
                                  <SelectComponet
                                    options={['122001', '22102']}
                                    id={`ltls.${index}.DropCityPincode`}
                                    title={'Drop City Pincode'}
                                  />
                                </div>

                                {/* chargesOfTransport */}
                                <div>
                                  <label
                                    htmlFor={`ltls.${index}.chargesOfTransport`}
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Charges Of Transport
                                  </label>
                                  <Field
                                    name={`ltls.${index}.chargesOfTransport`}
                                    placeholder={`ltls.${index}.chargesOfTransport`}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 outline-none"
                                  />
                                  <ErrorMessage
                                    name={`ltls.${index}.chargesOfTransport`}
                                    component="span"
                                    className="text-rose-500"
                                  />
                                </div>

                                {/* basisOfCharges */}
                                <div>
                                  <SelectComponet
                                    options={['Per kG', 'Per Vehicle']}
                                    id={`ltls.${index}.basisOfCharges`}
                                    title={'Basis Of Charges'}
                                  />
                                </div>
                                <hr className="my-12 col-span-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                              </div>
                            )
                          )
                        }
                      </div>
                    }

                    <div className='mt-8 col-span-3 flex justify-end'>
                      <button
                        onClick={() => arrayHelpers.insert(formik.values.ltls.length + 1, {})}
                        type="button"
                        className="mx-4 rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                      >
                        Add
                      </button>

                    </div>
                  </div>
                )}
              />


            }
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            {/* add company details */}

            <div className="col-span-3">
              <h2 className="text-base col-span-3 font-semibold text-gray-900">
                Add company contact
              </h2>
              <FieldArray
                name='companyContacts'
                render={(arrayHelpers) => (
                  <div className='col-span-3'>
                    {
                      formik.values.companyContacts.map((contact, index) => (

                        <div className="mt-10 grid grid-cols-2  gap-x-6 gap-y-8 " key={index}>
                                                    {
                            formik.values.companyContacts.length > 2 &&
                            <div className='col-span-2 flex justify-end'>
                              <button
                                onClick={() => arrayHelpers.remove(index)}
                                type="button"
                                className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                              >
                                Remove X
                              </button>
                            </div>
                          }
                          <h2 className="col-span-2 text-xs font-semibold py-4">Company Contact {index + 1}</h2>

                          <div className="sm:col-span-2 lg:col-span-1">
                            <label
                              htmlFor={`companyContacts.${index}.firstName`}
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              First Name
                            </label>
                            <div className="mt-2">
                              <Field
                                type="text"
                                id={`companyContacts.${index}.firstName`}
                                name={`companyContacts.${index}.firstName`}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none"
                              />
                              <ErrorMessage name={`companyContacts.${index}.firstName`} component="div" />
                            </div>
                          </div>

                          <div className="sm:col-span-2 lg:col-span-1">
                            <label
                              htmlFor={`companyContacts.${index}.lastName`}
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Last Name
                            </label>
                            <div className="mt-2">
                              <Field
                                type="text"
                                id={`companyContacts.${index}.lastName`}
                                name={`companyContacts.${index}.lastName`}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none"
                              />
                              <ErrorMessage name={`companyContacts.${index}.lastName`} component="div" />
                            </div>
                          </div>

                          <div className="sm:col-span-2 lg:col-span-1">
                            <label
                              htmlFor={`companyContacts.${index}.designation`}
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Designation
                            </label>
                            <div className="mt-2">
                              <Field
                                type="text"
                                id={`companyContacts.${index}.designation`}
                                name={`companyContacts.${index}.designation`}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none"
                              />
                              <ErrorMessage name={`companyContacts.${index}.designation`} component="div" />
                            </div>
                          </div>

                          <div className="sm:col-span-2 lg:col-span-1">
                            <label
                              htmlFor={`companyContacts.${index}.email`}
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email address
                            </label>
                            <div className="mt-2">
                              <Field
                                type="email"
                                id={`companyContacts.${index}.email`}
                                name={`companyContacts.${index}.email`}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none"
                              />
                              <ErrorMessage name={`companyContacts.${index}.email`} component="span" />
                            </div>
                          </div>

                          <div className="sm:col-span-2 lg:col-span-1">
                            <label
                              htmlFor={`companyContacts.${index}.phoneNumber`}
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Phone Number
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                              <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor={`companyContacts.${index}.country`} className="sr-only">
                                  Country
                                </label>
                                <Field
                                  as="select"
                                  id={`companyContacts.${index}.country`}
                                  name={`companyContacts.${index}.country`}
                                  autoComplete="country"
                                  className="w-12 rounded-md border-0 bg-transparent py-0 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                >
                                  <option value=""></option>
                                  {country_list.map((element) => (
                                    <option key={element} value={element}>
                                      {element}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                              <Field
                                type="tel"
                                id={`companyContacts.${index}.phoneNumber`}
                                name={`companyContacts.${index}.phoneNumber`}
                                className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="(555) 987-6543"
                              />
                              <ErrorMessage name={`companyContacts.${index}.phoneNumber`} component="div" />
                            </div>
                          </div>
                          <hr className="my-12 col-span-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                        </div>
                      ))
                    }
                    <div className='mt-8 col-span-3 flex justify-end'>
                      <button
                        onClick={() => arrayHelpers.insert(formik.values.companyContacts.length + 1, {})}
                        type="button"
                        className="mx-4 rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                      >
                        Add
                      </button>

                    </div>
                  </div>
                )}

              />
            </div>

            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />


            {/* Upload section */}
            <h2 className="text-base col-span-3 font-semibold text-gray-900">
              Upload Any Four Documents
            </h2>
            <FieldArray
              name='documentsUpload'
              render={(arrayHelpers) => (
                <div className='col-span-3'>
                  {
                    formik.values.documentsUpload.map((document, index) => {
                      return (
                        <div key={index} className="col-span-3 ">
                          <div className="w-full my-6">
                            <label htmlFor={`documentsUpload.${index}`}>File {index + 1}</label>
                            <Field name={`documentsUpload.${index}`} component={UploadComponentUnit} />
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
              }
            />

            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <h2 className="text-base col-span-3 font-semibold text-gray-900">
              Upload Domestic AirRates
            </h2>
            <FieldArray
              name="airRates"
              render={
                (arrayHelpers) => (
                  <div className='col-span-3'>
                    {
                      formik.values.airRates.map((airRates, index) => (
                        <div className='col-span-3' key={index}>
                          {
                            formik.values.airRates.length > 1 &&
                            <div className='col-span-2 flex justify-end'>
                              <button
                                onClick={() => arrayHelpers.remove(index)}
                                type="button"
                                className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                              >
                                Remove X
                              </button>
                            </div>
                          }
                          <h2 className='col-span-2 text-xs font-semibold py-4'>Input Air Rates {index+1}</h2>
                          <div className='mt-4 grid grid-cols-2  col-span-3 gap-x-6 gap-y-8'>
                            {/* airportOfOrigin */}
                            <div className='sm:col-span-2 lg:col-span-1'>
                              <SelectComponet options={["Adelide", "Brisbane"]} id={`airRates.${index}.airportOfOrigin`} title={'Airport Of Origin'} />
                            </div>

                            <div className='sm:col-span-2 lg:col-span-1'>
                              <SelectComponet options={["Adelide", "Brisbane"]} id={`airRates.${index}.airportOfDestination`} title={'Airport Of Destination'} />
                            </div>

                            <div>
                              <SelectComponet options={["Express", "Normal"]} id={`airRates.${index}.typeOfService`} title={'Type Of Service'} />
                            </div>

                            <div>
                              <SelectComponet options={["Express", "Normal"]} id={`airRates.${index}.airline`} title={'Type Of Airline'} />
                            </div>

                            <div>
                              <SelectComponet options={["Express", "Normal"]} id={`airRates.${index}.commodity`} title={'Commodity'} />
                            </div>

                            <TextField id={`airRates.${index}.weight`} title={'Weight'} type={'number'} />
                            <TextField id={`airRates.${index}.allInclusiveFreight`} title={'All Inclusive Freight'} type={'text'} />
                            {/* validity is of text type or number if number then in month or year */}
                            <TextField id={`airRates.${index}.validity`} title={'Validity'} type={'text'} />
                            <TextField id={`airRates.${index}.routing`} title={'Routing'} type={'text'} />
                            <TextField id={`airRates.${index}.transitTime`} title={'Transit Time'} type='datetime-local' />

                          </div>
                          <hr className="my-12 col-span-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                        </div>
                      ))
                    }
                                        <div className='mt-8 col-span-3 flex justify-end'>
                      <button
                        onClick={() => arrayHelpers.insert(formik.values.airRates.length + 1, {})}
                        type="button"
                        className="mx-4 rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                      >
                        Add
                      </button>

                    </div>
                  </div>
                )
              }



            />

            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />


            {/* buttons */}
            <div className="col-span-3">
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{' '}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
                <ErrorMessage name="termsAccepted" className='text-rose-500 text-xs' component="div" />
              </div>
              <button
                type="submit"

                className="mt-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Submit
              </button>
            </div>
          </Form>)}
      </Formik>
    </div>
  );
}

export default VendorProfileUpdate;
