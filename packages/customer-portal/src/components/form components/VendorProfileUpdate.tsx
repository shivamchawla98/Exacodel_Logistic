'use client';

import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import CompanyContact from './CompanyContact';
import Address from './Address';
import UploadComponent from './UploadComponent';
import WarehouseDetails from './WarehouseDetails';
import TransporterDetail from './TransporterDetail';
import LTLDetail from './LTLDetail';
import AirportDetails from './AirportDetails';



// formik validation
const validationSchema = Yup.object({
  billingAddress: Yup.string().required('Billing Address is required'),
  address1: Yup.object().shape({
    country: Yup.string().required('Country is required'),
    region: Yup.string().required('Region is required'),
    city: Yup.string().required('City is required'),
    streetAddress: Yup.string().required('Street Address is required'),
    postalCode: Yup.string().required('Postal Code is required'),
  }),

  address2: Yup.object().shape({
    country: Yup.string().required('Country is required'),
    region: Yup.string().required('Region is required'),
    city: Yup.string().required('City is required'),
    streetAddress: Yup.string().required('Street Address is required'),
    postalCode: Yup.string().required('Postal Code is required'),
  }),

  transport1: Yup.object().shape({
    typesOfTransport: Yup.string().required('Type of Transport is required'),
    typesOfTruck: Yup.string().required('Type of Truck is required'),
    maxAcceptablePayload: Yup.string().required(
      'Max Acceptable Payload is required'
    ),
    commodity: Yup.string().required('Commodity is required'),
    pickUpState: Yup.string().required('Pick Up State is required'),
    pickUpCityPincode: Yup.string().required(
      'Pick Up City Pincode is required'
    ),
    dropState: Yup.string().required('Drop State is required'),
    dropCityPincode: Yup.string().required('Drop City Pincode is required'),
    chargesOfTransport: Yup.string().required(
      'Charges of Transport is required'
    ),
    basisOfCharges: Yup.string().required('Basis of Charges is required'),
  }),

  ltl1: Yup.object().shape({
    typesOfTransport: Yup.string().required('Type of Transport is required'),
    pickUpState: Yup.string().required('Pick Up State is required'),
    pickUpCityPincode: Yup.string().required(
      'Pick Up City Pincode is required'
    ),
    dropState: Yup.string().required('Drop State is required'),
    dropCityPincode: Yup.string().required('Drop City Pincode is required'),
    chargesOfTransport: Yup.string().required(
      'Charges of Transport is required'
    ),
    basisOfCharges: Yup.string().required('Basis of Charges is required'),
  }),

  companyContact1: Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    designation: Yup.string().required('Designation is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    country: Yup.string().required('Country is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
  }),

  warehouse1: Yup.object().shape({
    totalStorageArea: Yup.number().required('Total Storage Area is required'),
    totalAvailableArea: Yup.number().required(
      'Total Available Area is required'
    ),
    occupiedSpace: Yup.number().required('Occupied Space is required'),
    unoccupiedSpace: Yup.number().required('Un-occupied Space is required'),
    rackedSpace: Yup.number().required('Racked Space is required'),
    warehouseInsurance: Yup.string().required(
      'Warehouse Insurance is required'
    ),
    // coldStorage: Yup.boolean('Co'),
    storageCharges: Yup.number().required('Storage Charges is required'),
    storagePerPallet: Yup.number().required(
      'Storage Charges per pallet is required'
    ),
    minimumStorageAreaPerPallet: Yup.number().required(
      'Minimum Storage Area per pallet is required'
    ),
    minimumStorageRent: Yup.number().required(
      'Minimum Storage Rent is required'
    ),
    minimumStorageChargesPerPallet: Yup.number().required(
      'Minimum Storage Charges per pallet is required'
    ),
  }),

  airport1: Yup.object().shape({
    airportOfOrigin: Yup.string().required('Airport of Origin is required'),
    airportOfDestination: Yup.string().required(
      'Airport of Destination is required'
    ),
    typeOfService: Yup.string().required('Type of Service is required'),
    airline: Yup.string().required('Airline is required'),
    commodity: Yup.string().required('Commodity is required'),
    weight: Yup.number().required('Weight is required'),
    allInclusiveFreight: Yup.string().required(
      'All Inclusive Freight is required'
    ),
    validity: Yup.string().required('Validity is required'),
    routing: Yup.string().required('Routing is required'),
    transitTime: Yup.date().required('Transit Time is required'),
  }),
  file1: Yup.mixed().required('File 1 is required'),
  file2: Yup.mixed().required('File 2 is required'),
  termsAccepted: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
  transportAddress: Yup.string().required('Transport Address is required'),
  // Add validation schema for other fields
});

function VendorProfileUpdate() {
  const [showAddressField, setShowAdressField] = useState(false);
  const [showWarehouseAddress, setShowWarehouseAddress] = useState(false);
  const [showTransportField, setShowTransportField] = useState(false);
  const [showLTLField, setShowLTLField] = useState(false);

  const handleBillingAddress = (values) => {
    // Access values here
    setShowAdressField(!showAddressField); // Accessing individual field value

    // Perform additional logic or API calls with the values
    // ...
  };
  // initial values
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
    transport1: {
      typesOfTransport: '',
      typesOfTruck: '',
      maxAcceptablePayload: '',
      commodity: '',
      pickUpState: '',
      pickUpCityPincode: '',
      dropState: '',
      dropCityPincode: '',
      chargesOfTransport: '',
      basisOfCharges: '',
    },
    ltl1: {
      typesOfTransport: '',
      pickUpState: '',
      pickUpCityPincode: '',
      dropState: '',
      dropCityPincode: '',
      chargesOfTransport: '',
      basisOfCharges: '',
    },
    airpot1: {
      airportOfOrigin: '',
      airportOfDestination: '',
      typeOfService: '',
      airline: '',
      commodity: '',
      weight: '',
      allInclusiveFreight: '',
      validity: '',
      routing: '',
      transitTime: '',
    },
    companyContact1: {
      firstName: '',
      lastName: '',
      designation: '',
      email: '',
      country: '',
      phoneNumber: '',
    },
    warehouse1: {
      totalStorageArea: '',
      totalAvailableArea: '',
      occupiedSpace: '',
      unoccupiedSpace: '',
      rackedSpace: '',
      warehouseInsurance: '',
      coldStorage: false,
      referigeratedTemp: '',
      hazardousWarehouse: false,
      hazardousGrade: '',
      storageCharges: '',
      storagePerPallet: '',
      minimumStorageAreaPerPallet: '',
      minimumStorageRent: '',
      minimumStorageChargesPerPallet: '',
    },
    file1: null,
    file2: null,
    termsAccepted: false,
    transportAddress: '',
    // Add initial values for other fields
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };
  return (
    <>
      <h2 className="text-xl font-semibold leading-7 text-gray-900 pl-11 pt-11">
        Vendor Profile Update
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-2 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          <div className="flex justify-evenly col-span-3">
            <h2 className="text-base font-semibold text-gray-900">
              Is Corporate is same as Billing Address ?
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
            <h2 className="text-base font-semibold text-gray-900">
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

          {/* Warehose details form component */}
          <div className="col-span-3">
            <h2 className="text-base font-semibold col-span-3 text-gray-900">
              Warehouse Details
            </h2>
            <WarehouseDetails prefix="warehouse1" />
          </div>
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* Transporter  */}
          <div className="flex justify-evenly col-span-2">
            <h2 className="text-base font-semibold text-gray-900">
              Are you a Transporter ?
            </h2>
            <label>
              <Field
                onClick={() => setShowTransportField(true)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                name="transportService"
                value="yes"
              />
              Yes
            </label>
            <label>
              <Field
                onClick={() => setShowTransportField(false)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                name="transportService"
                value="no"
              />
              No
            </label>

            <ErrorMessage name="transportService" component="div" />
          </div>

          {/* address */}
          {/* country */}
          {showTransportField && <TransporterDetail prefix="transport1" />}

          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* LTL  */}
          <div className="flex justify-evenly col-span-2">
            <h2 className="text-base font-semibold text-gray-900">
              Do you have LTL Service ?
            </h2>
            <label>
              <Field
                onClick={() => setShowLTLField(true)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                name="ltlAvailabilty"
                value="yes"
              />
              Yes
            </label>
            <label>
              <Field
                onClick={() => setShowLTLField(false)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                name="ltlAvailabilty"
                value="no"
              />
              No
            </label>

            <ErrorMessage name="ltlAvailabilty" component="div" />
          </div>

          {/* address */}
          {/* country */}
          {showLTLField && <LTLDetail prefix="ltl1" />}

          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* company contact */}
          <div className="col-span-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Add company contact
            </h2>
            <CompanyContact prefix="companyContact1" />
          </div>
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* Upload section */}
          <h2 className="text-base font-semibold text-gray-900 col-span-3">
            Upload Any Four Documents
          </h2>
          <UploadComponent />
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          {/* Airport details section */}
          <h2 className="text-base font-semibold text-gray-900 col-span-3">
            Upload Domestic AirRates
          </h2>
          <AirportDetails prefix={'airport1'} />
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

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

export default VendorProfileUpdate;
