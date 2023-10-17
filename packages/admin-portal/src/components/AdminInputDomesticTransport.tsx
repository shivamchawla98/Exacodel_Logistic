'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SubmitButtons from './SubmitButtons';
import Address from './Address';
import DomesticTransportFTLDetails from './DomesticTransportFTLDetails';
import DomesticTransporLTLtDetails from './DomesticTransportLCLDetails';

const validationSchema = Yup.object({
  billingAddress: Yup.string(),
});

function AdminInputDomesticTransport() {
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
      <h2 className="text-lg font-semibold leading-7 text-gray-900 pl-11 pt-11">
      DOMESTIC TRANSPORT & TRUCKING DETAILS
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-2 grid lg:grid-cols-3 gap-6 p-12 gap-y-8">
            <Address prefix={'address1'} />
            <DomesticTransportFTLDetails prefix="flt1"/>
            <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <DomesticTransporLTLtDetails prefix="ltl1" />
            <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <SubmitButtons id1={'addMoreRates'} title1={"Add More Rates"} id2={'save'} title2={'Save'} />
        </Form>
      </Formik>
    </>
  );
}

export default AdminInputDomesticTransport;
