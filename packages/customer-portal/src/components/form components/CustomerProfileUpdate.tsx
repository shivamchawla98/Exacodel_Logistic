'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

import * as Yup from 'yup';
import { useState } from 'react';
import Address from './Address';
import CompanyContact from './CompanyContact';
import Upload from './UploadComponentUnit';
import UploadComponent from './UploadComponent';

// formik validation
const validationSchema = Yup.object({
  billingAddress: Yup.string().required('Select an option'),
  address1: Yup.object().shape({
    country: Yup.string().required('Enter country'),
    region: Yup.string().required('Enter region'),
    city: Yup.string().required('Enter city'),
    streetAddress: Yup.string().required('Enter street address'),
    postalCode: Yup.string().required('Enter postal code'),
  }),
  address2: Yup.object().shape({
      country: Yup.string().required('Enter country'),
      region: Yup.string().required('Enter region'),
      city: Yup.string().required('Enter city'),
      streetAddress: Yup.string().required('Enter street address'),
      postalCode: Yup.string().required('Enter postal code'),
    }),
  warehouseAddress: Yup.string().required('Select an option'),
  firstName: Yup.string().required('Enter first name'),
  lastName: Yup.string().required('Enter last name'),
  designation: Yup.string().required('Enter designation'),
  email: Yup.string().email('Enter a valid email').required('Enter email'),
  country: Yup.string().required('Enter country'),
  file1: Yup.mixed().required('Upload a file'),
  file2: Yup.mixed().required('Upload a file'),
  termsAccepted: Yup.boolean().oneOf([true], 'Accept the terms and conditions'),
  companyFirstName: Yup.string().required('First Name is required'),
  companyLastName: Yup.string().required('Last Name is required'),
  companyDesignation: Yup.string().required('Designation is required'),
  companyEmail: Yup.string().email('Invalid email address').required('Email is required'),
  companyCountry: Yup.string().required('Country is required'),
  companyPhoneNumber: Yup.string().required('Phone Number is required'),
});

function CustomerProfileUpdate() {
  const [showAddressField, setShowAdressField] = useState(false);
  const [showWarehouseAddress, setShowWarehouseAddress] = useState(false);

  const initialValues = {
    billingAddress: '',
    address1: {
      country: '',
      region: '',
      city: '',
      streetAddress: '',
      postalCode: '',
    },
    address2: {
      country: '',
      region: '',
      city: '',
      streetAddress: '',
      postalCode: '',
    },
    warehouseAddress: '',
    firstName: '',
    lastName: '',
    designation: '',
    email: '',
    country: '',
    file1: null,
    file2: null,
    termsAccepted: false,
    companyFirstName: '',
    companyLastName: '',
    companyDesignation: '',
    companyEmail: '',
    companyCountry: '',
    companyPhoneNumber: '',
  };
  const handleBillingAddress = (values:any) => {
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
      <h2 className="text-2xl font-semibold leading-7 text-gray-900 pl-11 pt-11">
        Customer Profile Update
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-2 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          <div className="flex justify-evenly col-span-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Is Corporate is same as Billing Address
            </h2>
            <label>
              <Field
                onClick={() => setShowAdressField(false)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                name="billingAddress"
                value="yes"
              />
              Yes
            </label>
            <label>
              <Field
                onClick={() => setShowAdressField(true)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                name="billingAddress"
                value="no"
              />
              No
            </label>

            <ErrorMessage name="billingAddress" component="div" />
          </div>

          {/* address */}
          {/* country */}
          {showAddressField && <Address prefix="address1" />}
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          {/*  Ware house address*/}
          <div className="flex justify-evenly col-span-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Do you have warehouse
            </h2>
            <label>
              <Field
                onClick={() => setShowWarehouseAddress(true)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                name="warehouseAddress"
                value="yes"
              />
              Yes
            </label>
            <label>
              <Field
                onClick={() => setShowWarehouseAddress(false)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                name="warehouseAddress"
                value="no"
              />
              No
            </label>

            <ErrorMessage name="warehouseAddress" component="div" />
          </div>
          {showWarehouseAddress && <Address prefix="address2" />}
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* company contact */}
          <div className="col-span-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Add company contact
            </h2>
            <CompanyContact />
          </div>

          {/* Upload section */}
          <UploadComponent />

          {/* buttons */}
          <div className="col-span-3">
            <div className="flex items-center">
              <Field
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
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
              <ErrorMessage name="termsAccepted" component="div" />
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

export default CustomerProfileUpdate;
