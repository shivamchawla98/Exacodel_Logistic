'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import countries from '../data/country';
import SubmitButtons from './SubmitButtons';
import SelectComponet from './SelectComponent';
import { companyTypes, industryTypes, turnOver, typeOfCompanies } from '../data/dropdownData';
import TextField from './TextField';

const validationSchema = Yup.object({
  postalCode: Yup.string()
    .required('enter postal code')
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, 'enter valid postal code'),
  gst: Yup.string()
    .required('Enter gst if you have or choose alternate')
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      'Enter valid gst number'
    ),
    companyBillingCode: Yup.string(),
    userType: Yup.string().required('User Type is required'),
    companyType: Yup.string().required('Company Type is required'),
    industryType: Yup.string().required('Industry Type is required'),
    country: Yup.string().required('Country is required'),
    companyName: Yup.string().required('Company Name is required'),
    streetAddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('Region is required'),
    panNumber: Yup.string().matches(/^[A-Z]{5}\d{4}[A-Z]$/, 'Invalid PAN Number').required('PAN Number is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    designation: Yup.string().required("Fill the Degisnation here"),
    phoneNumber: Yup.string().required('Phone Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    website: Yup.string().url('Invalid URL'),
    checkBox: Yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
});

function CustomerRegistrationForm() {
  const initialValues = {
    companyBillingCode: '',
    userType: '',
    companyType: '',
    industryType: '',
    country: '',
    companyName: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    panNumer: '',
    gst: '',
    firstName: '',
    lastName: '',
    designation: '',
    phnNumber: '',
    email: '',
    website: '',
    checkBox: '',
  };

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <>
      <h2 className="text-xl font-semibold leading-7 text-gray-900 pl-11 pt-11">
        Customer Registration Form
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-2 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          {/* billing Code of a company */}
          <div>
            <label
              htmlFor="companyBillingCode"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Billing Code of Company
            </label>
            <Field
              type="text"
              id="companyBillingCode"
              name="companyBillingCode"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="companyBillingCode" component="span" />
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
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Registration Number (C.R.N)
            </label>
            <Field
              type="text"
              id="companyRegistrationNumber"
              name="companyRegistrationNumber"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="companyRegistrationNumber" component="span" />
          </div>

          {/* address */}

          {/* country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <Field
              as="select"
              id="country"
              name="country"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              className="error-message"
            />
          </div>

          {/* stree address streetAddress */}
          <div>
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              autoComplete="streetAddress"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="streetAddress"
              component="span"
              className="error-message"
            />
          </div>

          {/* city */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="city" component="span" />
          </div>

          {/* region */}
          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="region" component="span" />
          </div>

          {/* postal code */}
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              autoComplete="postalCode"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="postalCode" component="span" />
          </div>

          {/* adress end */}

          {/* company pan number panNumer*/}
          <div>
            <label
              htmlFor="panNumer"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Pan Number
            </label>
            <Field
              type="text"
              id="panNumer"
              name="panNumer"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="panNumer" component="span" />
          </div>

          {/* Annual Turn Over */}
          <div>
            <SelectComponet
              options={turnOver}
              id={'turnover'}
              title={'Annual Turnover*'}
            />
          </div>

          {/* gst numer */}
          <div>
            <TextField id={'gst'} title={'GST Number'} type={'text'} />
          </div>

          {/* firstName */}
          <div>
            <TextField id={'firstName'} title={'First Name'} type={'text'} />
          </div>

          {/* lastName */}
          <div>
          <TextField id={'lastName'} title={'Last Name'} type={'text'} />
          </div>

          {/* designation */}
          <div>
          <TextField id={'designation'} title={'Designation'} type={'text'} />
          </div>

          {/* contact */}

          {/* email */}
          <div>
            <TextField id={'email'} title={'E-Mail'} type={'text'} />
          </div>

          {/* phnNumber */}
          <div>
            <label
              htmlFor="phnNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
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
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ErrorMessage name="countryPhnCode" component="span" />
              </div>
              <input
                type="text"
                name="phnNumber"
                id="phnNumber"
                className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="      +1 (555) 987-6543"
              />
              <ErrorMessage
                name="phnNumber"
                component="span"
                className="text-rose-400"
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
              <input
                id="checkbox"
                name='checkBox'
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
            <SubmitButtons
              id1={'back'}
              title1={'Back'}
              id2={'submit'}
              title2={'Submit'}
            />
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default CustomerRegistrationForm;
