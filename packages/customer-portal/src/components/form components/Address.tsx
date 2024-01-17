import { ErrorMessage, Field } from "formik";
import React from "react";
import countries from "../data/country";

function Address({ prefix }: any) {
  return (
    <>
      {/* country */}
      <div>
        <label
          htmlFor={`${prefix}.country`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Country
        </label>
        <Field
          as="select"
          id={`${prefix}.country`}
          name={`${prefix}.country`}
          className="block mt-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name={`${prefix}.country`}
          component="span"
          className="error-message"
        />
      </div>
      {/* stree address streetAddress */}
      <div>
        <label
          htmlFor={`${prefix}.streetAddress`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Street address
        </label>
        <Field
          type="text"
          id={`${prefix}.streetAddress`}
          name={`${prefix}.streetAddress`}
          className="block mt-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={`${prefix}.streetAddress`} component="div" />
      </div>

      {/* city */}
      <div>
        <label
          htmlFor={`${prefix}.city`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          City
        </label>
        <Field
          type="text"
          id={`${prefix}.city`}
          name={`${prefix}.city`}
          className="block mt-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={`${prefix}.city`} component="div" />
      </div>

      {/* region */}
      <div>
        <label
          htmlFor={`${prefix}.region`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          State / Province
        </label>
        <Field
          type="text"
          id={`${prefix}.region`}
          name={`${prefix}.region`}
          className="block mt-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={`${prefix}.region`} component="span" />
      </div>

      {/* postal code */}
      <div>
        <label
          htmlFor={`${prefix}.postalCode`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ZIP / Postal code
        </label>
        <Field
          type="text"
          id={`${prefix}.postalCode`}
          name={`${prefix}.postalCode`}
          className="block mt-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={`${prefix}.postalCode`} component="span" />
      </div>
    </>
  );
}

export default Address;
