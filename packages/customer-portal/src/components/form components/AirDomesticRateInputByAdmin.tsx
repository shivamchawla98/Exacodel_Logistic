'use client';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import AirportDetails from './AirportDetails';
import AirportCostBreakDown from './AirportCostBreakDown';

// formik validation
const validationSchema = Yup.object({
  billingAddress: Yup.string(),
});

function AirDomesticRateInputByAdmin() {
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
          <AirportDetails prefix={'domesticAir1'} />
          <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <h2 className="col-span-3">Cost Break Down</h2>
          <AirportCostBreakDown prefix={'domesticAir1'} />
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

export default AirDomesticRateInputByAdmin;
