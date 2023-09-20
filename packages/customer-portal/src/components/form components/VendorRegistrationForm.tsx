'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import * as Yup from 'yup';
import countries from '../../components/data/country';
import SelectComponet from '../../components/form components/SelectComponent';
import {    updateCompanyBillingCode,
    updateUserType,
    updateCompany,
    updateIndustryType,
    updateCountry,
    updateStreetAddress,
    updateCity,
    updateRegion,
    updatePostalCode,
    updatePanNumber,
    updateGST,
    updateFirstName,
    updateLastName,
    updateDesignation,
    updatePhoneNumber,
    updateEmail,
    updateWebsite,
    updateCheckBox,
    updateCompanyRegistrationNumber,} from '../../features/vendorRegForm/vendorReg-slice'
import {
  companyTypes,
  industryTypes,
  typeOfCompanies,
} from '../data/dropdownData';
import TextField from '../form components/TextField';
import FormWrapper from '@/components/FormWrapper';

const validationSchema = Yup.object({
  companyBillingCode: Yup.string().required('Enter Billing Code'),
  userType: Yup.string().required('Select user type'),
  company: Yup.string().required('Enter company name'),
  industryType: Yup.string().required('Select Industry type'),
  country: Yup.string().required('Select a country'),
  streetAddress: Yup.string().required('Enter street address'),
  city: Yup.string().required('Enter city'),
  region: Yup.string().required('Enter region'),
  postalCode: Yup.string()
    .required('Enter postal code')
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, 'Enter valid postal code'),
  panNumber: Yup.string()
    .required('Enter PAN number')
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Enter valid PAN number'),
  gst: Yup.string()
    .required('Enter GST number or choose alternate')
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      'Enter valid GST number'
    ),
  firstName: Yup.string().required('Enter first name'),
  lastName: Yup.string().required('Enter last name'),
  designation: Yup.string().required('Enter designation'),
  phnNumber: Yup.string().required('Enter phone number'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Enter email address'),
  website: Yup.string().url('Enter a valid URL'),
  checkBox: Yup.boolean().oneOf(
    [true],
    'You must agree to the terms and conditions'
  ),
});



function VendorRegistrationForm() {
    const dispatch = useDispatch();
    const {  companyBillingCode,
        companyRegistrationNumber,
        userType,
        company,
        industryType,
        country,
        streetAddress,
        city,
        region,
        postalCode,
        panNumber,
        gst,
        firstName,
        lastName,
        designation,
        phnNumber,
        email,
        website,
        checkBox, } = useSelector((state: any) => state.vendorRegistration);
  const initialValues = {
    companyBillingCode,
    userType,
    companyRegistrationNumber,
    company,
    industryType,
    country,
    streetAddress,
    city,
    region,
    postalCode,
    panNumber,
    gst,
    firstName,
    lastName,
    designation,
    phnNumber,
    email,
    website,
    checkBox,
  };

  const handleSubmit = (values: any) => {
    
    dispatch(updateCompanyBillingCode(values.companyBillingCode));
    dispatch(updateCompanyRegistrationNumber(values.companyRegistrationNumber));
    dispatch(updateUserType(values.userType));
    dispatch(updateCompany(values.company));
    dispatch(updateIndustryType(values.industryType));
    dispatch(updateCountry(values.country));
    dispatch(updateStreetAddress(values.streetAddress));
    dispatch(updateCity(values.city));
    dispatch(updateRegion(values.region));
    dispatch(updatePostalCode(values.postalCode));
    dispatch(updatePanNumber(values.panNumber));
    dispatch(updateGST(values.gst));
    dispatch(updateFirstName(values.firstName));
    dispatch(updateLastName(values.lastName));
    dispatch(updateDesignation(values.designation));
    dispatch(updatePhoneNumber(values.phnNumber));
    dispatch(updateEmail(values.email));
    dispatch(updateWebsite(values.website));
    dispatch(updateCheckBox(values.checkBox));

    // Handle form submission

  };

  return (
    <div className='lg:w-2/3 mx-auto shadow-md rounded-lg my-10'>
      <h2 className="text-xl font-semibold leading-7 text-gray-700 text-center pt-11">
        Vendor Registration Form
      </h2>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({values}) => (
        <Form className="lg:p-16 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          {/* billing Code of a company */}
            
          <div >
            <label
              htmlFor="companyBillingCode"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Billing Code of Company
            </label>
            <Field
              type="text"
              id="companyBillingCode"
              name="companyBillingCode"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="companyBillingCode" component="span" />
          </div>

          {/* user type */}
          <div >
            <SelectComponet
              options={companyTypes}
              id={'userType'}
              title={'Select User Type'}
            />
          </div>

          {/* companyType */}
          <div >
            <SelectComponet
              options={typeOfCompanies}
              id={'companyType'}
              title={'Type Of Company'}
            />
          </div>

          {/* Industry Type */}
          <div >
            <SelectComponet
              options={industryTypes}
              id={'industryType'}
              title={'Industry Type'}
            />
          </div>

          {/* **company name */}
                      <div >
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Company Name
            </label>
            <Field
              type="text"
              id="company"
              name="company"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="company" component="span" />
          </div>
          {/* company registration number */}
          <div >
            <label
              htmlFor="companyRegistrationNumber"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Company Registration Number (C.R.N)
            </label>
            <Field
              type="text"
              id="companyRegistrationNumber"
              name="companyRegistrationNumber"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="companyRegistrationNumber" component="span" />
          </div>

          {/* address */}

          {/* country */}
          <div >
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Country
            </label>
            <Field
              as="select"
              id="country"
              name="country"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="country"
              component="span"
              className='text-xs text-rose-600'
            />
          </div>

          {/* stree address streetAddress */}
          <div >
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Street address
            </label>
            <Field
              type="text"
              name="streetAddress"
              id="streetAddress"
              autoComplete="streetAddress"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage
              name="streetAddress"
              component="span"
              className='text-xs text-rose-600'
            />
          </div>

          {/* city */}
          <div >
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              City
            </label>
            <Field
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="city" component="span" />
          </div>

          {/* region */}
          <div >
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              State / Province
            </label>
            <Field
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="region" component="span" />
          </div>

          {/* postal code */}
          <div >
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              ZIP / Postal code
            </label>
            <Field
              type="text"
              name="postalCode"
              id="postalCode"
              autoComplete="postalCode"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="postalCode" component="span" />
          </div>

          {/* adress end */}

          {/* company pan number panNumer*/}
          <div >
            <label
              htmlFor="panNumber"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Company Pan Number
            </label>
            <Field
              type="text"
              id="panNumber"
              name="panNumber"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="panNumber" component="span" />
          </div>

          {/* Annual Turn Over */}
          <div >
            <label
              htmlFor="turnover"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Annual Turnover
            </label>
            <Field
              as="select"
              id="turnover"
              name="turnover"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Field>
            <ErrorMessage
            className='text-xs text-rose-600'
              name="country"
              component="span"
            />
          </div>

          {/* gst numer */}
          <div >
            <label
              htmlFor="gst"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              GST Number
            </label>
            <Field
              type="text"
              id="gst"
              name="gst"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="gst" component="span" />
          </div>

          {/* firstName */}
          <div >
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              First Name
            </label>

            <Field
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="firstName" component="span" />
          </div>

          {/* lastName */}
          <div >
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Last Name
            </label>

            <Field
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="given-name"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="lastName" component="span" />
          </div>

          {/* designation */}
          <div >
            <label
              htmlFor="designation"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Designation
            </label>
            <Field
              type="text"
              name="designation"
              id="designation"
              autoComplete="given-name"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="designation" component="span" />
          </div>

          {/* contact */}

          {/* email */}
          <div >
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Email address
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="email" component="span" />
          </div>

          {/* phone number */}
          <div >
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Phone Number
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="countryPhnCode"
                  name="countryPhnCode"
                  autoComplete="countryPhnCode"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>91</option>
                  <option>01</option>
                  <option>11</option>
                </select>
                <ErrorMessage className='text-xs text-rose-600' name="countryPhnCode" component="span" />
              </div>
              <Field
                type="text"
                name="phnNumber"
                id="phnNumber"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
                placeholder="      +1 (555) 987-6543"
              />
              <ErrorMessage
                name="phnNumber"
                component="span"
                className='text-xs text-rose-600'
              />
            </div>
          </div>

          {/* website*/}
          <div >
          <TextField id={'website'} title={'Comapny Website'} type={'text'} />
          </div>

          {/* contact end */}

          {/* buttons */}
          <div className="end-end-2">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
            </div>

            <button
              type="button"
              onClick={() => handleSubmit(values)}
              className="mt-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Submit
            </button>
          </div>

        </Form> 
        )}
      </Formik>
  
    </div>
  );
}

export default VendorRegistrationForm;
