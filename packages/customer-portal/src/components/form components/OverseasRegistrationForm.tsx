'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import * as Yup from 'yup';
import countries from '../data/country';
import SelectComponet from './SelectComponent';
import { companyTypes, industryTypes, typeOfCompanies } from '../data/dropdownData';
import TextField from './TextField';
import {    setBillingCode,
  setUserType,
  setCompanyType,
  setIndustryType,
  setCompanyName,
  setCompanyRegNum,
  setCountry,
  setStreetAddress,
  setCity,
  setState,
  setPostalCode,
  setCompanyTaxIdNum,
  setAnnualTurnover, 
  setMajorTradeLane,
  setFirstName,
  setLastName,
  setDesignation,
  setEmail,
  setPhoneNum,
  setPhnCountryCode,
  setCompanyWebsite,
  reset,
  setTermAndCondition,} from '../../features/overseasRegForm/overseasReg-slice'
import { updatesRegisterButtonClicked } from '@/features/registrationConf/registrationConf-slice';
 
const validationSchema = Yup.object({
  postalCode: Yup.string()
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, 'Enter valid postal code').required('Enter postal code'),
    companyTaxIdNumber: Yup.string()
    .required('Enter gst if you have or choose alternate'),
    companyBillingCode: Yup.string(),
    userType: Yup.string().required('User Type is required'),
    companyType: Yup.string().required('Company Type is required'),
    industryType: Yup.string().required('Industry Type is required'),
    country: Yup.string().required('Country is required'),
    companyName: Yup.string().required('Company Name is required'),
    streetAddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('Region is required'),
    majorTradeLane: Yup.string().required("please select lane"),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    designation: Yup.string().required("Fill the Degisnation here"),
    phnNumber: Yup.string().required('Phone Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    website: Yup.string().url('Invalid URL'),
    checkBox: Yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
    countryPhnCode: Yup.string().required("Enter Country phone code")
});

function OverseasRegistrationForm() {
  const initialValues = {
    companyBillingCode: '',
    userType: '',
    companyName: '',
    industryType: '',
    country: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    companyTaxIdNumber: '',
    companyRegistrationNumber: '',
    turnover: '',
    majorTradeLane: '',
    firstName: '',
    lastName: '',
    designation: '',
    email: '',
    countryPhnCode: 91,
    phnNumber: '',
    website: '',
    checkBox: false,
  };

  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    // Handle form submission
        // Dispatch actions for each field or action
        dispatch(setBillingCode(values.billingCode));
        dispatch(setUserType(values.userType));
        dispatch(setCompanyType(values.companyType));
        dispatch(setIndustryType(values.industryType));
        dispatch(setCompanyName(values.companyName));
        dispatch(setCompanyRegNum(values.companyRegNum));
        dispatch(setCountry(values.country));
        dispatch(setStreetAddress(values.streetAddress));
        dispatch(setCity(values.city));
        dispatch(setState(values.state));
        dispatch(setPostalCode(values.postalCode));
        dispatch(setCompanyTaxIdNum(values.companyTaxIdNum));
        dispatch(setAnnualTurnover(values.annualTurnover));
        dispatch(setMajorTradeLane(values.majorTradeLane));
        dispatch(setFirstName(values.firstName));
        dispatch(setLastName(values.lastName));
        dispatch(setDesignation(values.designation));
        dispatch(setEmail(values.email));
        dispatch(setPhoneNum(values.phoneNum));
        dispatch(setPhnCountryCode(values.phnCountryCode));
        dispatch(setCompanyWebsite(values.companyWebsite));
        dispatch(setTermAndCondition(values.termAndCondition));
           // to show registration confirmed popup
           dispatch(updatesRegisterButtonClicked(true))
    console.log(values);
  };

  return (
    <div className='lg:w-2/3 mx-auto shadow-md rounded-lg my-10'>
      <h2 className="text-xl font-semibold leading-7 text-gray-700 text-center pt-11">
        Overseas Registration 
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="lg:p-16 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          {/* billing Code of a company */}
          <div>
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
            <ErrorMessage name="companyBillingCode"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* user type */}
          <div>
            <SelectComponet
              options={companyTypes}
              id={'userType'}
              title={'Select User Type'}
            />
          </div>

          {/* companyType */}
          <div>

         <SelectComponet options={typeOfCompanies} id={'companyType'} title={'Type Of Company'} />
          </div>

          {/* Industry Type */}
          <div>
            <SelectComponet
              options={industryTypes}
              id={'industryType'}
              title={'Industry Type'}
            />
          </div>

          {/* **company name */}
          <div>
            <TextField id={'companyName'} title={'Company Name'} type={'text'} />
          </div>

          {/* company registration number */}
          <div>
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
            <ErrorMessage name="companyRegistrationNumber"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* address */}

          {/* country */}
          <div>
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
               component="span" className="text-xs text-rose-600"
            />
          </div>

          {/* stree address streetAddress */}
          <div>
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
               component="span" className="text-xs text-rose-600"
            />
          </div>

          {/* city */}
          <div>
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
            <ErrorMessage name="city"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* region */}
          <div>
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
            <ErrorMessage name="region"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* postal code */}
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              ZIP / Postal code
            </label>
            <Field
              type="text"
              name="postalCode"
              autoComplete="postalCode"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="postalCode"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* adress end */}

          {/* company pan number panNumer*/}
          <div>
            <label
              htmlFor="companyTaxIdNumber"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Company Tax Id Number
            </label>
            <Field
              type="text"
              id="companyTaxIdNumber"
              name="companyTaxIdNumber"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="companyTaxIdNumber"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* Annual Turn Over */}
          <div>
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
              name="country"
               component="span" className="text-xs text-rose-600"
            />
          </div>

          {/* Major trade lane */}
          <div>
            <label
              htmlFor="majorTradeLane"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Major Trade Lane
            </label>
            <Field
              as="select"
              id="majorTradeLane"
              name="majorTradeLane"
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
              name="majorTradeLane"
               component="span" className="text-xs text-rose-600"
            />
          </div>

          {/* firstName */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              First name
            </label>

            <Field
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="firstName"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* lastName */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Last name
            </label>

            <Field
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="given-name"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="lastName"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* designation */}
          <div>
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
            <ErrorMessage name="designation"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* contact */}

          {/* email */}
          <div>
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
            <ErrorMessage name="email"  component="span" className="text-xs text-rose-600" />
          </div>

          {/* phone number */}
          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Phone Number
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
              <Field
                  as="select"
                  name="countryPhnCode"
                  autoComplete="countryPhnCode"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>91</option>
                  <option>01</option>
                  <option>11</option>
                </Field>
                <ErrorMessage name="countryPhnCode"  component="span" className="text-xs text-rose-600" />
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
                 component="span" className="text-xs text-rose-600"
              />
            </div>
          </div>

          {/* website*/}
          <div>
          <TextField id={'website'} title={'Comapny Website'} type={'text'} />
          </div>

          {/* contact end */}

          {/* buttons */}
          <div className="end-end-2">
          <div className="flex items-center">
              <Field
                name='checkBox'
                type="checkBox"
                className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkBox"
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
            <button
              type="submit"
              className="mt-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default OverseasRegistrationForm;
