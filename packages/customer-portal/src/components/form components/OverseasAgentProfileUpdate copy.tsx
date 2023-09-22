'use client';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';

import * as Yup from 'yup';
import { useState } from 'react';
import Address from './Address';
import CompanyContact from './CompanyContact';
import Upload from './UploadComponentUnit';
import UploadComponent from './UploadComponent';
import ServiceDetailsOverseasUpdate from './ServiceDetailsOverseasUpdate';
import SpecializationDetailsOverseas from './SpecializationDetailsOverseas';
import NetworkMembershipDetailsOvarseasUpdate from './Network&MembershipDetailsOvarseasUpdate';
import AirportDetails from './AirportDetails';
import UploadClearenceChargesOverseasUpdate from './UploadClearenceChargesOverseasUpdate';
import UploadDomesticTruking from './UploadDomesticTruking';
import { countries } from '../data/dropdownData';
import CheckboxComponent from './CheckboxComponent';
import country_list from '../data/country';
import UploadComponentUnit from './UploadComponentUnit';

// formik validation
const validationSchema = Yup.object({
  isCorporateIsBillingAddress: Yup.string().required('This field is required'),
  billingAddress: Yup.object().shape({
    country: Yup.string().required('Country is required'),
    streetAddress: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('State/Province is required'),
    postalCode: Yup.string().required('ZIP/Postal code is required'),
  }),
  termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});
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
  isThereAnyBranchAddress: 'no',
  branchOffices: [{}],
  serviceDetails: [
    { id: "airFreight", title: "Air Freight", checked: false },
    { id: "trucking", title: "Trucking", checked: false },
    { id: "projects", title: "Projects", checked: false },
    { id: "oceanFreight", title: "Ocean Freight", checked: false },
    { id: "integratedLogistics", title: "Integrated Logistics", checked: false },
    { id: "oceanFreight", title: "Ocean Freight", checked: false },
    { id: "timeCritical", title: "Time Critical", checked: false },
    { id: "relocation", title: "Relocation", checked: false },
    { id: "pharma", title: "Pharma", checked: false },
    { id: "lclConsolidation", title: "LCL Consolidation", checked: false },
    { id: "perishable", title: "Perishable", checked: false },
    { id: "warehousing", title: "Warehousing", checked: false },
    { id: "railFreight", title: "Rail Freight", checked: false },
    { id: "brokerage", title: "Brokerage", checked: false },
    { id: "dangerousGoods", title: "Dangerous Goods", checked: false },
    { id: "liveAnimal", title: "Live Animal", checked: false },
    { id: "ecommerce", title: "E Commerce", checked: false },
  ],
  specializationDetails: [
    { id: "automotive", title: "Automotive", checked: false },
    { id: "aerospace&Aviation", title: "Aerospace & Aviation", checked: false },
    { id: "ecommerce", title: "Ecommerce", checked: false },
    { id: "pharmaceutical", title: "Pharmaceutical", checked: false },
    { id: "timeCritical", title: "Time Critical", checked: false },
    { id: "chratering&Project", title: "Charetering & Project", checked: false },
    { id: "dangerousGoods", title: "Dangerous Goods", checked: false },
    { id: "retail logistics", title: "Retail Logistics", checked: false },
    { id: "liquidChemicals", title: "Liquid Chemicals", checked: false },
    { id: "other", title: "Other", text: '' },
  ],
  networkMembershipDetails: [
    { id: 'wca', title: 'WCA', checked: false },
    { id: 'pln', title: 'PLN', checked: false },
    { id: 'x2elite', title: 'X2 ELITE', checked: false },
    { id: 'parnity', title: 'PARINITY', checked: false },
    { id: 'jctrans', title: 'JC TRANS', checked: false },
    { id: 'w3ln', title: 'OCEAN FREIGHT', checked: false },
    { id: 'g7n', title: 'G7N', checked: false },
    { id: 'bling', title: 'BLING', checked: false },
    { id: 'wpa', title: 'WPA', checked: false },
    { id: 'cln', title: 'CLN', checked: false },
    { id: 'gpln', title: 'GPLN', checked: false },
    { id: 'twig', title: 'TWIG', checked: false },
    { id: 'fnc', title: 'FNC', checked: false },
    { id: 'gla', title: 'GLA', checked: false },
    { id: 'globalia', title: 'GLOBALIA', checked: false },
    { id: 'Americas Alliance', title: 'AMERICAS ALLIANCE', checked: false },
    { id: 'aln', title: 'ALN', checked: false },
    { id: 'alpha', title: 'ALPHA', checked: false },
    { id: 'lognet', title: 'LOG NET', checked: false },
    { id: 'atlas', title: 'ATLAS', checked: false },
    { id: 'other', title: 'Other', text: '' },
  ],
  airportDetails: [{}],
  clearenceCharges: [{}],
  trucking: [{}],
  companyContacts: [{}, {}],
  documentsUpload: [{}, {}, {}, {}, {}, {}, {}, {}],
  termsAccepted: false,

};

function OverseasAgentProfileUpdate() {
  const [showAddressField, setShowAdressField] = useState(false);
  const [showBranchOfficeAddress, setshowBranchOfficeAddress] = useState(false);
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


  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <>
      <h2 className="text-xl text-gray-800 my-auto  font-medium pt-11 pl-11">
        Overseas Profile Update
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
            {/* billingAddress */}
            <div className="w-full col-span-3 grid grid-cols-2">
              <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Is Corporate is same as Billing Address ?
              </h2>
              <div className='flex justify-center sm:flex-wrap flex-nowrap'>
                <div>
                  <label className='mx-3'>
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

                </div>
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
                    className="block w-full bg-white rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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

            {/*  Branch Office  address*/}
            <div className=" grid  grid-cols-2 col-span-3">
              <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Do you have Branch Offices ?
              </h2>
              <div className='flex justify-center sm:flex-wrap flex-nowrap'>
                <label className='mx-6'>
                  <Field
                    onClick={() => setshowBranchOfficeAddress(true)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isThereAnyBranchAddress"
                    value="yes"
                  />
                  <strong className='ml-2.5'>
                    Yes

                  </strong>
                </label>
                <label className='mx-6'>
                  <Field
                    onClick={() => setshowBranchOfficeAddress(false)}
                    className="w-4 h-4  bg-gray-100 border-gray-300 rounded text-sky-600 focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio"
                    name="isThereAnyBranchAddress"
                    value="no"
                  />
                  <strong className='ml-2'>

                    No
                  </strong>
                </label>
              </div>
              <ErrorMessage name="isWarehouseAddress" component="div" />
            </div>
            {showBranchOfficeAddress &&
              <>
                <FieldArray
                  name='branchOffices'
                  render={(arrayHelpers) => {
                    return (
                      <div className='col-span-3'>
                        {formik.values.branchOffices.map((branchOffices, index) => (
                          <>
                            <div className='col-span-3 grid grid-cols-2 gap-x-6 gap-y-8' key={index}>
                              <div className='col-span-3 flex justify-end'>
                              {
                                formik.values.branchOffices.length > 1 && <button
                                  onClick={() => arrayHelpers.remove(index)}
                                  type="button"
                                  className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                                >
                                  Remove X
                                </button>
                              }
                              </div>
                              <h2 className='col-span-3 -mt-10  text-sm font-semibold py-4  text-gray-700'>Branch Office<strong className='px-2'>{index + 1}</strong> </h2>

                              {/* country */}
                              <div className="">
                                <label
                                  htmlFor={`branchOffices.${index}.country`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Country
                                </label>
                                <Field
                                  as="select"
                                  id={`branchOffices.${index}.country`}
                                  name={`branchOffices.${index}.country`}
                                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2"
                                >
                                  <option value="">Select a country</option>
                                  {countries.map((country) => (
                                    <option key={country} value={country}>
                                      {country}
                                    </option>
                                  ))}
                                </Field>
                                <ErrorMessage
                                  name={`branchOffices.${index}.country`}
                                  component="span"
                                  className="error-message"
                                />
                              </div>
                              {/* stree address streetAddress */}
                              <div className="col-span-2">

                                <label
                                  htmlFor={`branchOffices.${index}.streetAddress`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Street address
                                </label>
                                <Field type="text" id={`branchOffices.${index}.streetAddress`} name={`branchOffices.${index}.streetAddress`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                                <ErrorMessage name={`branchOffices.${index}.streetAddress`} component="div" />
                              </div>

                              {/* city */}
                              <div className="">
                                <label
                                  htmlFor={`branchOffices.${index}.city`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  City
                                </label>
                                <Field type="text" id={`branchOffices.${index}.city`} name={`branchOffices.${index}.city`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                                <ErrorMessage name={`branchOffices.${index}.city`} component="div" />
                              </div>

                              {/* region */}
                              <div className="">
                                <label
                                  htmlFor={`branchOffices.${index}.region`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  State / Province
                                </label>
                                <Field type="text" id={`branchOffices.${index}.region`} name={`branchOffices.${index}.region`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                                <ErrorMessage name={`branchOffices.${index}.region`} component="span" />
                              </div>

                              {/* postal code */}
                              <div className="">
                                <label
                                  htmlFor={`branchOffices.${index}.postalCode`}
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  ZIP / Postal code
                                </label>
                                <Field type="text" id={`branchOffices.${index}.postalCode`} name={`branchOffices.${index}.postalCode`} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 focus:outline-none" />
                                <ErrorMessage name={`branchOffices.${index}.postalCode`} component="span" />
                              </div>
                            </div>
                            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                          </>
                        )
                        )}

                        <div className='mt-8 col-span-3 flex justify-end'>
                          <button
                            onClick={() => arrayHelpers.insert(formik.values.branchOffices.length + 1, {})}
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
            {/* whitespace-nowrap  text-sm font-medium text-gray-900  */}
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            {/* check box specialization*/}
            <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3 col-span-3">
              Service Details
            </h2>

            <FieldArray
              name="serviceDetails"
              render={(arrayHelpers) =>
                <>
                  {formik.values.serviceDetails.map((service, index) => (
                    <div key={service.id}>
                      <label htmlFor={service.id} className='text-xs font-medium'>
                        <Field
                          type="checkbox"
                          name={`serviceDetails.${index}.checked`} // Use the correct path
                          className="h-4 w-4 mr-2 rounded-full border-gray-300 text-sky-600 focus:ring-sky-600"
                          id={service.id}
                          checked={service.checked}
                          onChange={(e: any) => {
                            // Toggle the checked field
                            formik.setFieldValue(`serviceDetails.${index}.checked`, e.target.checked);
                          }}
                        />
                        {service.title}
                      </label>
                      <ErrorMessage name={service.id} component="span" className="text-rose-500" />
                    </div>
                  ))}
                </>
              }
            />
            {/* <ServiceDetailsOverseasUpdate /> */}
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            {/* check box specialization */}
            <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3 col-span-3">
              Specialization Details
            </h2>

            <FieldArray
              name="serviceDetails"
              render={(arrayHelpers) =>
                <>
                  {formik.values.specializationDetails.map((service, index) => (
                    <div key={service.id}>
                      <label htmlFor={service.id} className='text-xs font-medium'>
                        <Field
                          type="checkbox"
                          name={`serviceDetails.${index}.checked`} // Use the correct path
                          className="h-4 w-4 mr-2 rounded-full border-gray-300 text-sky-600 focus:ring-sky-600"
                          id={service.id}
                          checked={service.checked}
                          onChange={(e: any) => {
                            // Toggle the checked field
                            formik.setFieldValue(`specializationDetails.${index}.checked`, e.target.checked);
                          }}
                        />
                        {service.title}
                      </label>
                      <ErrorMessage name={service.id} component="span" className="text-rose-500" />
                    </div>
                  ))}
                </>
              }
            />
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            {/* check box Network and membership */}
            <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3 col-span-3">
              Network And Membership Details
            </h2>
            <FieldArray
              name="serviceDetails"
              render={(arrayHelpers) =>
                <>
                  {formik.values.networkMembershipDetails.map((service, index) => (
                    <div key={service.id}>
                      <label htmlFor={service.id} className='text-xs font-medium'>
                        <Field
                          type="checkbox"
                          name={`serviceDetails.${index}.checked`} // Use the correct path
                          className="h-4 w-4 mr-2 rounded-full border-gray-300 text-sky-600 focus:ring-sky-600"
                          id={service.id}
                          checked={service.checked}
                          onChange={(e: any) => {
                            // Toggle the checked field
                            formik.setFieldValue(`networkMembershipDetails.${index}.checked`, e.target.checked);
                          }}
                        />
                        {service.title}
                      </label>
                      <ErrorMessage name={service.id} component="span" className="text-rose-500" />
                    </div>
                  ))}
                </>
              }
            />
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            {/* airport details */}
            <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3 col-span-3">
              Upload Air Rates
            </h2>
            <FieldArray
              name="airportDetails"
              render={(arrayHelpers) =>
                <div className='col-span-3'>
                  {formik.values.airportDetails.map((service, index) => (
                    <>
                      <div className='col-span-3 flex justify-end'>
                        {
                          formik.values.airportDetails.length > 1 && <button
                            onClick={() => arrayHelpers.remove(index)}
                            type="button"
                            className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                          >
                            Remove X
                          </button>
                        }
                      </div>
                      <h2 className='col-span-3 -mt-10 pl-1  text-sm font-semibold pt-4  text-gray-700'>Air Rate<strong className='px-2'>{index + 1}</strong> </h2>
                      <AirportDetails key={index} prefix={`airportDetails.${index}`} />
                      <hr className="my-12 col-span-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                    </>

                  ))}
                  <div className='mt-8 col-span-3 flex justify-end'>
                    <button
                      onClick={() => arrayHelpers.insert(formik.values.airportDetails.length + 1, {})}
                      type="button"
                      className="mx-4 rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Add +
                    </button>

                  </div>
                </div>
              }
            />

            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            {/* clearence Charges */}
            <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3 col-span-3">
              Upload clearence Chareges
            </h2>
            <FieldArray
              name="clearenceCharges"
              render={(arrayHelpers) =>
                <div className='col-span-3 grid'>
                  {formik.values.clearenceCharges.map((service, index) => (
                    <>
                      <div className='col-span-3 flex justify-end'>
                        {
                          formik.values.clearenceCharges.length > 1 && <button
                            onClick={() => arrayHelpers.remove(index)}
                            type="button"
                            className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                          >
                            Remove X
                          </button>
                        }
                      </div>
                      <h2 className='col-span-3  text-sm font-semibold py-6  text-gray-700'>Clearence charge<strong className='px-2'>{index + 1}</strong> </h2>
                      <UploadClearenceChargesOverseasUpdate key={index} prefix={`clearenceCharges.${index}`} />
                      <hr className="my-12 col-span-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                    </>

                  ))}
                  <div className='mt-8 col-span-3 flex justify-end'>
                    <button
                      onClick={() => arrayHelpers.insert(formik.values.clearenceCharges.length + 1, {})}
                      type="button"
                      className="mx-4 rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Add +
                    </button>
                  </div>
                </div>
              }
            />
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            {/* Upload Domestic Trucking */}
            <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3 col-span-3">
              Upload Domestic Trucking
            </h2>
            <FieldArray
              name="trucking"
              render={(arrayHelpers) =>
                <div className='col-span-3 grid'>
                  {formik.values.trucking.map((service, index) => (
                    <>
                                          <div className='col-span-3 flex justify-end'>
                        {
                          formik.values.trucking.length > 1 && <button
                            onClick={() => arrayHelpers.remove(index)}
                            type="button"
                            className="mx-4 mt-10 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                          >
                            Remove X
                          </button>
                        }
                      </div>
                      <h2 className='col-span-3   text-sm font-semibold py-6  text-gray-700'>Trucking charge <strong className='px-2'>{index + 1}</strong> </h2>

                      <UploadDomesticTruking key={index} prefix={`trucking.${index}`} />
                      <hr className="my-12 col-span-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                    </>
                  ))}
                  <div className='mt-8 col-span-3 flex justify-end'>
                    <button
                      onClick={() => arrayHelpers.insert(formik.values.trucking.length + 1, {})}
                      type="button"
                      className="mx-4 rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Add +
                    </button>

                  </div>
                </div>
              }
            />
            <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            {/* company contact */}
            <div className="col-span-3">

              <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3 col-span-3">
                Add company contact
              </h2>
              <FieldArray
                name='companyContacts'
                render={(arrayHelpers) => (
                  <div className='col-span-3'>
                    {
                      formik.values.companyContacts.map((contact, index) => (

                        <div className="grid col-span-3 grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 " key={index}>
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
                          <h2 className="col-span-2 mt-4 text-xs font-semibold py-4">Company Contact {index + 1}</h2>

                          <div className="">
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

                          <div className="">
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

                          <div className="">
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

                          <div className="">
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

                          <div className="">
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
                                  className="w-12 rounded-md border-0 bg-transparent py-0 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm"
                                >
                                  <option value="91"></option>
                                  {["+91", "+1"].map((element) => (
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
                                className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                        Add +
                      </button>

                      {

                        formik.values.companyContacts.length > 2 && <button
                          onClick={() => arrayHelpers.remove(formik.values.companyContacts.length - 1)}
                          type="button"
                          className="mx-4 rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                        >
                          Remove
                        </button>
                      }

                    </div>
                  </div>
                )}

              />
            </div>

            {/* Upload section */}
            <h2 className="text-left text-sm font-semibold text-gray-900 sm:pl-3 col-span-3">
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


            {/* buttons */}
            {/* buttons */}
            <div className="">
              <div className="grid grid-cols-1">
                <div>

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
                      className="text-sky-600 dark:text-sky-500 hover:underline"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
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
    </>
  );
}

export default OverseasAgentProfileUpdate;
