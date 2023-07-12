'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import SeaRatesForaFix from './SeaRatesForaFix';
import * as Yup from 'yup';
import CustomClearenceFCLDetails from './CustomClearenceFCLDetails';

const validationSchema = Yup.object({
  billingAddress: Yup.string(),
});

function CustomClearenceFCLAdminInput() {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  // initial values
  const initialValues = {
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
    billingAddress: '',
    warehouseAddress: '',
    firstName: '',
    lastName: '',
    designation: '',
    email: '',
    country: '',
    file1: null,
    file2: null,
    termsAccepted: '',
  };
  return (
    <>
      <h2 className="text-2xl font-semibold leading-7 text-gray-900 pl-11 pt-11">
        Air Domestic Rate Input By Admin
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-2 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          <CustomClearenceFCLDetails prefix={'fcl1'} />

          {/* buttons */}
          <div className="col-span-3">
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

export default CustomClearenceFCLAdminInput;
