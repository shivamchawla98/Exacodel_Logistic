'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import countries from '../data/country';
import SelectComponet from './SelectComponent';
import companyType from '@/app/vendor-registration/data/typeOfCompany';

const validationSchema = Yup.object({
  gst: Yup.string()
    .required('Enter gst if you have or choose alternate')
    .matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Enter valid gst number'),
  userType: Yup.string().required('select user type'),
  country: Yup.string().required('Enter Country name'),
  company: Yup.string().required('Enter company name'),
});

function StarterForm() {
  const initialValues = {
    gst: '',
    company: '',
    userType: '',
    country: '',
  };

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <>
      <h2 className="text-xl font-semibold leading-7 text-gray-900 pl-11 pt-11">
        Start your Shipping with us
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-2 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          {/* user type */}
          <div className="mt-2">
            <SelectComponet options={companyType} id={'userType'} title={'Select User Type'} />
          </div>
          {/* country */}
          <div className="mt-2">
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
              className="error-message  text-rose-600"
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
            <ErrorMessage name="gst" component="span" className=" text-rose-600" />
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
            <ErrorMessage name="company" component="span" clasName=" text-rose-600" />
          </div>

          {/* buttons */}
          <div className="end-end-2">
            <button
              type="submit"
              className="text-sm font-semibold leading-6 text-gray-900 mr-7"
            >
              Don&apos;t have GST Number ?
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Confirm
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default StarterForm;
