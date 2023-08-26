'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CustomClearenceFCLDetails from './CustomClearenceFCLDetails';
import SubmitButtons from './SubmitButtons';

const validationSchema = Yup.object({
  billingAddress: Yup.string(),
});

function CustomClearenceFCLAdminInput() {
  const handleSubmit = (values: any) => {
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
        RATES INPUT (CUSTOMS BROKERAGE - FCL) BY ADMIN
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-2 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          <CustomClearenceFCLDetails prefix={'fcl1'} />

          <SubmitButtons id1={'addMoreRates'} title1={"Add More Rates"} id2={'save'} title2={"Save"} />

        </Form>
      </Formik>
    </>
  );
}

export default CustomClearenceFCLAdminInput;
