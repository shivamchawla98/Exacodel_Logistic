'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
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

// formik validation
const validationSchema = Yup.object({
  billingAddress: Yup.string(),
});

function OverseasAgentProfileUpdate() {
  const [showAddressField, setShowAdressField] = useState(false);
  const [showWarehouseAddress, setShowWarehouseAddress] = useState(false);

  const handleBillingAddress = (values) => {
    // Access values here
    setShowAdressField(!showAddressField); // Accessing individual field value

    // Perform additional logic or API calls with the values
    // ...
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

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold leading-7 text-gray-900 pl-11 pt-11">
        Overseas Profile Update
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
              Do you have Branch Offices
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

          {/* check box specialization*/}
          <h2 className="text-xl col-span-3 font-semibold text-gray-900">
            Service Details
          </h2>
          <ServiceDetailsOverseasUpdate />
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* check box specialization */}
          <h2 className="text-xl col-span-3 font-semibold text-gray-900">
            Specialization Details
          </h2>
          <SpecializationDetailsOverseas />
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* check box Network and membership */}
          <h2 className="text-xl col-span-3 font-semibold text-gray-900">
            Network And Membership Details
          </h2>
          <NetworkMembershipDetailsOvarseasUpdate />
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* airport details */}
          <h2 className="text-xl col-span-3 font-semibold text-gray-900">
            Network And Membership Details
          </h2>
          <AirportDetails prefix={'airport1'} />
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* clearence Charges */}
          <h2 className="text-xl col-span-3 font-semibold text-gray-900">
            Upload clearence Chareges
          </h2>
          <UploadClearenceChargesOverseasUpdate prefix={'clearenceChareges1'} />
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* Upload Domestic Trucking */}
          <h2 className="text-xl col-span-3 font-semibold text-gray-900">
            Upload Domestic Trucking
          </h2>
          <UploadDomesticTruking prefix={"trucking1"} />
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

export default OverseasAgentProfileUpdate;
