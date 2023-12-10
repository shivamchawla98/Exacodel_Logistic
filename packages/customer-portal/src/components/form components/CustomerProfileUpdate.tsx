'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Address from './Address';
import CompanyContact from './CompanyContact';
import UPDATE_PROFILE_CORPORATE_ADDRESS from '@/graphql/mutation/updateProfileCorporateAddress';
import UPDATE_PROFILE_COMPANY_CONTACT from '@/graphql/mutation/updateProfileCompanyContact';
import { useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import FileUpload from './UploadComponentUnit';
import jwtDecode from 'jwt-decode';





// formik validation
// const validationSchema = Yup.object({
//   // corporateAddress: Yup.object().shape({
//   //   country: Yup.string().required('Enter country'),
//   //   region: Yup.string().required('Enter region'),
//   //   city: Yup.string().required('Enter city'),
//   //   streetAddress: Yup.string().required('Enter street address'),
//   //   postalCode: Yup.string().required('Enter postal code'),
//   // }),

//   //   isWarehouseAddress: Yup.string().required('Select an option'),
//   //   // firstName: Yup.string().required('Enter first name'),
//   //   // lastName: Yup.string().required('Enter last name'),
//   //   // designation: Yup.string().required('Enter designation'),
//   //   // email: Yup.string().email('Enter a valid email').required('Enter email'),
//   //   // country: Yup.string().required('Enter country'),
//   //   // file1: Yup.mixed().required('Upload a file'),
//   //   // file2: Yup.mixed().required('Upload a file'),
//   termsAccepted: Yup.boolean().oneOf([true], 'Accept the terms and conditions'),
//   companyFirstName: Yup.string().required('First Name is required'),
//   companyLastName: Yup.string().required('Last Name is required'),
//   companyDesignation: Yup.string().required('Designation is required'),
//   companyEmail: Yup.string().email('Invalid email address').required('Email is required'),
//   companyCountry: Yup.string().required('Country is required'),
//   companyPhoneNumber: Yup.string().required('Phone Number is required'),
// });

const validationSchema = Yup.object().shape({
  isBillingAddress: Yup.string().required('Select an option'),
  // corporateAddress: Yup.object().when('isBillingAddress', {
  //   is: 'no',
  //   then: Yup.object().shape({
  //     country: Yup.string().required('Enter country'),
  //     region: Yup.string().required('Enter region'),
  //     city: Yup.string().required('Enter city'),
  //     streetAddress: Yup.string().required('Enter street address'),
  //     postalCode: Yup.string().required('Enter postal code'),
  //   }),
  //   otherwise: Yup.object().shape({
  //     country: Yup.string(),
  //     region: Yup.string(),
  //     city: Yup.string(),
  //     streetAddress: Yup.string(),
  //     postalCode: Yup.string(),
  //   }),
  // }),
  companyContact: Yup.object().shape({
    designation: Yup.string().required('Enter designation'),
    email: Yup.string().email('Invalid email').required('Enter email'),
    firstName: Yup.string().required('Enter first name'),
    lastName: Yup.string().required('Enter last name'),
    phoneNumber: Yup.string().required('Enter phone number'),
  }),
  termsAccepted: Yup.boolean().oneOf([true], 'Accept terms and conditions'),
});


const initialValues = {
  isBillingAddress: "yes",
  corporateAddress: {
    country: '',
    region: '',
    city: '',
    streetAddress: '',
    postalCode: '',
  },
  companyContact: {
    designation: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: ""
  },
  termsAccepted: false,
};

function CustomerProfileUpdate({ backToGeneral }: any) {
  const token: any = Cookies.get('jwToken');
  const [showAddressField, setShowAdressField] = useState(false);
  const [showWarehouseAddress, setShowWarehouseAddress] = useState(false);
  const [updateProfilecorporateAdress] = useMutation(UPDATE_PROFILE_CORPORATE_ADDRESS);
  const decodedToken: any = jwtDecode(token);
  const [userID, setUserID] = useState<number>(token ? decodedToken?.id : -1);
  const [updateProfileCompanyContact] = useMutation(UPDATE_PROFILE_COMPANY_CONTACT);
  const { userImage } = useSelector((state: any) => state.uploadSlice);
  const uploads = {
    "Certificate of Registration": "cert_of_registration",
    "Pan Card (company)*": "pancard_company",
    "Aadhaar Card(Auth. Person)*": "aadhaar_card",
    "ISO Certificate": "isoCertificate",
    "Pan Card (Auth. Person)*": "pancard_auth",
    "A.E.O Certificate": "AEO_cert",
    "IATA Certificate": "IATA_cert",
    "D-U-N-S Certificate": "DUNS_cert",
    "Manufacturing License": "manufacturing_license",
    "Any Other Trade License": "other_license"
  }
  const { cert_of_registration, pancard_company, aadhaar_card, isoCertificate, pancard_auth, AEO_cert,
    IATA_cert, DUNS_cert, manufacturing_license, other_license
  } = useSelector((state: any) => state.uploadSlice)

  const allUploadedFiles = [cert_of_registration, pancard_company, aadhaar_card, isoCertificate, pancard_auth, AEO_cert,
    IATA_cert, DUNS_cert, manufacturing_license, other_license
  ]

  console.log(allUploadedFiles);


  const handleSubmit = async (values: any) => {
    // Handle form submission
    console.log("values : ", values);

    try {

      if (values.isBillingAddress !== 'yes') {
        const response = await updateProfilecorporateAdress({
          variables: {
            id: userID,
            input: {
              address: values.corporateAddress.streetAddress,
              state: values.corporateAddress.region,
              city: values.corporateAddress.city,
              pincode: values.corporateAddress.postalCode,
              country: values.corporateAddress.streetAddress
            }
          }
        })
      }
      const response2 = await updateProfileCompanyContact({
        variables: {
          id: userID,
          input: {
            firstName: values.companyContact.firstName,
            lastName: values.companyContact.lastName,
            designation: values.companyContact.designation,
            mobileNo: values.companyContact.email,
            emailId: values.companyContact.phoneNumber,
          }
        }
      })
      console.log("response 1 ", response2);

      toast.success("Success! Profile updated successfully.", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000, // Display duration in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      // backToGeneral()

    } catch (error: any) {

      console.log("error in profile corporate", error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("response 2 ", userImage);
    }
    console.log("values : ", values);
  };



  return (
    <>
      <ToastContainer />
      <h2 className="text-lg font-semibold leading-7 text-gray-700 pl-11 pt-3">
        Customer Profile Update
      </h2>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-2 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          <div className="w-full col-span-3 grid grid-cols-2">
            <h2 className="text-sm col-span-1 font-semibold text-gray-700">
              Is Corporate is same as Billing Address
            </h2>
            <div>
              <label className='mx-6'>
                <Field
                  onClick={() => setShowAdressField(false)}
                  className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="isBillingAddress"
                  value="yes"
                />
                Yes
              </label>
              <label className='mx-6'>
                <Field
                  onClick={() => setShowAdressField(true)}
                  className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="isBillingAddress"
                  value="no"
                />
                No
              </label>

            </div>

            <ErrorMessage name="isBillingAddress" className='text-xs text-rose-500' component="p" />
          </div>

          {/* address */}
          {/* country */}
          {showAddressField && <Address prefix="corporateAddress" />}

          <hr className="my-6 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          {/*  Ware house address*/}
          {/* <div className="w-full col-span-3 grid grid-cols-2">
            <h2 className="text-sm col-span-1 font-semibold text-gray-700">
              Do you have warehouse
            </h2>
            <div>
              <label className='mx-6'>
                <Field
                  onClick={() => setShowWarehouseAddress(true)}
                  className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="isWarehouseAddress"
                  value="yes"
                />
                Yes
              </label>
              <label className='mx-6'>
                <Field
                  onClick={() => setShowWarehouseAddress(false)}
                  className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="isWarehouseAddress"
                  value="no"
                />
                No
              </label>

            </div>

            <ErrorMessage name="isWarehouseAddress" className='text-xs text-rose-500' component="p" />
          </div>
          {showWarehouseAddress && <Address prefix="warehouseAddress" />} */}

          {/* <hr className="my-6 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" /> */}

          {/* company contact */}
          <div className="col-span-3">
            <h2 className="text-sm col-span-1 font-semibold text-gray-700">
              Add company contact
            </h2>
            <CompanyContact prefix="companyContact" name="file" />
          </div>
          <hr className="my-6 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          {/* Upload section */}
          {/* <UploadComponent  /> */}
          <h2 className="text-sm font-semibold lg:col-span-3 mb-3 col-span-full text-gray-700">
            Upload four documnets here out of eight and pan cards is compulsion.
          </h2>
          <div className="col-span-3">
            {Object.entries(uploads).map(([label, doc]) => (
              <FileUpload key={doc} label={label} doc={doc} />
            ))}

          </div>

          {/* buttons */}
          <div className="col-span-3">
            <div className="flex items-center">
              <Field
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{' '}
                <a
                  href="#"
                  className="text-sky-600 dark:text-sky-500 hover:underline"
                >
                  terms and conditions
                </a>
                .
              </label>
              <ErrorMessage name="termsAccepted" className='text-xs text-rose-500' component="p" />
            </div>
            <button
              type="submit"
              className="mt-8 mr-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Back
            </button>
            <button
              type="submit"
              className="mt-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default CustomerProfileUpdate;
