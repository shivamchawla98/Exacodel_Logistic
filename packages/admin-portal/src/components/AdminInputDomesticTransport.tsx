'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SubmitButtons from './SubmitButtons';
import Address from './Address';
import DomesticTransportFTLDetails from './DomesticTransportFTLDetails';
import DomesticTransporLTLtDetails from './DomesticTransportLCLDetails';
import { useState } from 'react';

const validationSchema = Yup.object({
  billingAddress: Yup.string(),
});

function AdminInputDomesticTransport() {
  const [isFTL, setIsFTL] = useState(true)
  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  // initial values
  const initialValues = {
      country: '',
      region: '',
      city: '',
      streetAddress: '',
      postalCode: '',
      typeOfTransport: '',
      typeOfVehicle: '',
      maxPayload: '',
      pickupCityState: '',
      pickupPincode: '',
      dropCityState: '',
      dropPincode: '',
      transportCharges: '',

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
      >{ () => (
        <Form className="mt-2 grid lg:grid-cols-3 gap-6 p-12 gap-y-8">
            <Address />
            {isFTL  && <DomesticTransportFTLDetails setIsFTLFalse={() => setIsFTL(false)}/>}
            <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            {!isFTL && <DomesticTransporLTLtDetails  setIsFTLTrue={() => setIsFTL(true)} />}
            <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <SubmitButtons  id1={'save'} title1={'Save'} />
        </Form>

      )}
      </Formik>
    </>
  );
}

export default AdminInputDomesticTransport;
