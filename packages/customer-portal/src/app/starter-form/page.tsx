"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import countries from "../../components/data/country";
import companyType from "@/app/vendor-registration/data/typeOfCompany";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIdentification,
  updateUserType,
  updateCountry,
  updateGstNumber,
  updateCompanyName,
  resetForm,
} from "@/features/starter-form/starter-slice";

const validationSchema = Yup.object({
  identification: Yup.string().required("Please select an option"),
  gst: Yup.string().required("Enter gst if you have or choose alternate")
      .matches(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
        "Enter valid gst number"
      ),
  userType: Yup.string().required("Select user type"),
  country: Yup.string().required("Enter Country name"),
  company: Yup.string().required("Enter company name"),
});

function Page() {
    const {  identification, userType, country, gstNumber, companyName} = useSelector((state: any) => state.starterSlice)
  const dispatch = useDispatch();
  const initialValues = {
    identification, // Set your initial values here
    gst: gstNumber,
    userType,
    country,
    company: companyName,
  };

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log("Form values:", values);

    // Dispatch actions to update Redux store if needed
    dispatch(updateIdentification(values.identification));
    dispatch(updateUserType(values.userType));
    dispatch(updateCountry(values.country));
    dispatch(updateGstNumber(values.gst));
    dispatch(updateCompanyName(values.company));
    console.log(identification);
    
  };

  return (
    <div className="lg:px-6">
      <h2 className="text-xl font-semibold leading-7 text-gray-900 pl-11 pt-11">
        Start your Shipping with us
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="mt-2 grid lg:grid-cols-3 gap-6 p-12 gap-y-8">
            {/* Identification */}
            <div className="mt-2 col-span-3 lg:px-12">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Identification
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {/* Radio buttons */}
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      type="radio"
                      id="horizontal-list-radio-customer"
                      name="identification"
                      value="I am a customer"
                      onChange={() => {
                        setFieldValue("identification", "I am a Customer");
                      }}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-customer"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I am a customer
                    </label>
                  </div>
                </li>

                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      type="radio"
                      id="horizontal-list-radio-customer"
                      name="identification"
                      value="I am a Vendor"
                      onChange={() => {
                        setFieldValue("identification", "I am a Vendor");
                      }}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-customer"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I am a Vendor
                    </label>
                  </div>
                </li>

                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      type="radio"
                      id="horizontal-list-radio-customer"
                      name="identification"
                      value="I am a Overseas Agent"
                      onChange={() => {
                        setFieldValue("identification", "I am a Overseas Agent");
                      }}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="horizontal-list-radio-customer"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I am a Overseas Agent
                    </label>
                  </div>
                </li>
                {/* Add similar radio buttons for other options */}
              </ul>
              <ErrorMessage
                name="identification"
                component="span"
                className="text-rose-600"
              />
            </div>

            {/* User type */}
            <div className="mt-2">
              <label
                htmlFor="userType"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                UserType
              </label>
              <Field
                as="select"
                id="userType"
                name="userType"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select a user type</option>
                {companyType.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="userType"
                component="span"
                className="error-message text-rose-600"
              />
            </div>

            {/* Country */}
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
                className="error-message text-rose-600"
              />
            </div>

            {/* GST number */}
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
              <ErrorMessage
                name="gst"
                component="span"
                className="text-rose-600"
              />
            </div>

            {/* Company name */}
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
              <ErrorMessage
                name="company"
                component="span"
                className="text-rose-600"
              />
            </div>

            {/* Buttons */}
            <div className="end-end-2 col-span-3 mx-auto mt-3">
              <button className="text-sm font-semibold leading-6 text-gray-900 mr-7">
                Don't have GST Number?
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Confirm
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Page;
