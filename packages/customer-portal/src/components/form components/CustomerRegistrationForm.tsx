'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import countries from '../data/country';

const validationSchema = Yup.object({
  companyBillingCode: Yup.string().required('Enter Billing Code'),
  userType: Yup.string().required('select user type'),
  company: Yup.string().required('Enter company name'),
  industryType: Yup.string().required('Select Industry type'),
  country: Yup.string().required('Enter Country name'),
  streetAddress: Yup.string().required('Enter Country name'),
  city: Yup.string().required('Enter Country name'),
  region: Yup.string().required('Enter Country name'),
  postalCode: Yup.string()
    .required('enter postal code')
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, 'enter valid postal code'),
  panNumer: Yup.string()
    .required('Enter pan number name')
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'enter valid pan number'),
  gst: Yup.string()
    .required('Enter gst if you have or choose alternate')
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      'Enter valid gst number'
    ),
});

function CustomerRegistrationForm() {
  const initialValues = {
    companyBillingCode: '',
    userType: '',
    company: '',
    industryType: '',
    country: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    panNumer: '',
    gst: '',
  };

  const handleSubmit = (values) => {
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
            <label
              htmlFor="userType"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Select User Type
            </label>
            <Field
              as="select"
              id="userType"
              name="userType"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select a country</option>
              <option value="customer">CUSTOMER</option>
              <option value="vendor">VENDOR</option>
              <option value="overseasAgent">OVERSEAS AGENT</option>
            </Field>
            <ErrorMessage
              name="userType"
              component="span"
              className="error-message"
            />
          </div>

          {/* company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Name
            </label>
            <Field
              type="text"
              id="company"
              name="company"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="company" component="span" />
          </div>

          {/* Industry Type */}
          <div>
            <label
              htmlFor="industryType"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Industry Type
            </label>
            <Field
              as="select"
              id="industryType"
              name="industryType"
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
              name="industryType"
              component="span"
              className="error-message"
            />
          </div>

          {/* **company name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Name
            </label>
            <Field
              type="text"
              id="companyName"
              name="companyName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="companyName" component="span" />
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
            <label
              htmlFor="turnover"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Annual Turnover
            </label>
            <Field
              as="select"
              id="turnover"
              name="turnover"
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

          {/* gst numer */}
          <div>
            <label
              htmlFor="gst"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              GST Number
            </label>
            <Field
              type="text"
              id="gst"
              name="gst"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="gst" component="span" />
          </div>

          {/* firstName */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Customer name
            </label>

            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="firstName" component="span" />
          </div>

          {/* lastName */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Customer name
            </label>

            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="lastName" component="span" />
          </div>

          {/* designation */}
          <div>
            <label
              htmlFor="designation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Designation
            </label>
            <input
              type="text"
              name="designation"
              id="designation"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="designation" component="span" />
          </div>

          {/* contact */}

          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="email" component="span" />
          </div>

          {/* phone number */}
          <div>
            <label
              htmlFor="phone-number"
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

          {/* company email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
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
              type="submit"
              className="mt-8 mr-8 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back
            </button>
            <button
              type="submit"
              className="mt-8 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default CustomerRegistrationForm;
