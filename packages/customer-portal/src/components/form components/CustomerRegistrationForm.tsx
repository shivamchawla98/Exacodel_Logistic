'use client';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import countries from '../data/country';
import SubmitButtons from './SubmitButtons';
import SelectComponet from './SelectComponent';
import { companyTypes, industryTypes, turnOver, typeOfCompanies } from '../data/dropdownData';
import TextField from './TextField';
import { useDispatch, useSelector } from 'react-redux';
import { updatesRegisterButtonClicked } from '@/features/registrationConf/registrationConf-slice'
import {    setBillingCode,
  setUserType,
  setCompanyType,
  setIndustryType,
  setCompanyName,
  setCompanyRegNum,
  setCountry,
  setStreetAddress,
  setCity,
  setState,
  setPostalCode,
  setCompanyPanNum,
  setAnnualTurnover,
  setGstNum,
  setFirstName,
  setLastName,
  setDesignation,
  setEmail,
  setPhoneNum,
  setPhnCountryCode,
  setCompanyWebsite,
  setTermAndCondition,
  reset} from '../../features/customerRegForm/customerRegForm-slice'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import axios from 'axios'


  const FINAL_REGISTRATION_MUTATION = gql`
  mutation FinalRegistration(
    $input: Finalreg!
    $userId: Float!
    $userInput: UpdateUsertype!
  ) {
    finalreg(input: $input, userId: $userId, userInput: $userInput) {
      id
      companyName
    }
  }
`;


const validationSchema = Yup.object({
  postalCode: Yup.string()
    .required('enter postal code')
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, 'enter valid postal code'),
  gst: Yup.string()
    .required('Enter gst if you have or choose alternate')
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      'Enter valid gst number'
    ),
    companyBillingCode: Yup.string(),
    userType: Yup.string().required('User Type is required'),
    companyType: Yup.string().required('Company Type is required'),
    industryType: Yup.string().required('Industry Type is required'),
    country: Yup.string().required('Country is required'),
    companyName: Yup.string().required('Company Name is required'),
    streetAddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('Region is required'),
    panNumber: Yup.string().matches(/^[A-Z]{5}\d{4}[A-Z]$/, 'Invalid PAN Number').required("pan number is required"),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    designation: Yup.string().required("Fill the Degisnation here"),
    phnNumber: Yup.string().required('Phone Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    website: Yup.string().required('webiste required'),
    checkBox: Yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
});

function CustomerRegistrationForm() {
  const { userType, identification } = useSelector((state: any) => state.starterSlice)
  const { email, userId } = useSelector((state: any) => state.user)
  const [apiResponse, setApiResponse] = useState(false);
  const [finalRegistration] = useMutation(
    FINAL_REGISTRATION_MUTATION
  );
  const initialValues = {
    companyBillingCode: '',
    companyRegistrationNumber: '',
    userType: userType,
    companyType: '',
    industryType: '',
    country: '',
    companyName: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    panNumber: '',
    gst: '',
    firstName: '',
    lastName: '',
    designation: '',
    phnNumber: '',
    email: email,
    website: '',
    checkBox: false,
    turnover: '',
    countryPhnCode: '91',
  };
  const dispatch = useDispatch();

  const handleSubmit = async (values: any, actions: any) => {

    try {
      // Validate the form data using Yup schema
      await validationSchema.validate(values, { abortEarly: false });

      // If validation succeeds, you can proceed with the form submission
      // Place your form submission logic here
      console.log('Form submitted successfully');
    } catch (validationErrors) {}

     // Dispatch actions for each field with the corresponding values
        dispatch(setBillingCode(values.companyBillingCode));
        dispatch(setUserType(values.userType));
        dispatch(setCompanyType(values.companyType));
        dispatch(setIndustryType(values.industryType));
        dispatch(setCompanyName(values.companyName));
        dispatch(setCompanyRegNum(values.companyRegistrationNumber));
        dispatch(setCountry(values.country));
        dispatch(setStreetAddress(values.streetAddress));
        dispatch(setCity(values.city));
        dispatch(setState(values.state));
        dispatch(setPostalCode(values.postalCode));
        dispatch(setCompanyPanNum(values.panNumber));
        dispatch(setAnnualTurnover(values.turnover));
        dispatch(setGstNum(values.gst));
        dispatch(setFirstName(values.firstName));
        dispatch(setLastName(values.lastName));
        dispatch(setDesignation(values.designation));
        dispatch(setEmail(values.email));
        dispatch(setPhoneNum(values.phnNumber));
        dispatch(setPhnCountryCode(values.countryPhnCode));
        dispatch(setCompanyWebsite(values.website));
        dispatch(setTermAndCondition(values.checkBox));

        // to show registration confirmed popup
        dispatch(updatesRegisterButtonClicked(true))

        try {
          const response = await finalRegistration({
            variables: {
              input: {
                companyType: values.companyType,
                industryType: values.industryType,
                state: values.region, // Assuming region corresponds to state
                city: values.city,
                country: values.country,
                company_reg_no: values.companyRegistrationNumber,
                annualTurnover: values.turnover,
                gst_no: values.gst,
                first_name: values.firstName,
                last_name: values.lastName,
                Designation: values.designation,
                mobile: values.phnNumber,
                website: values.website,              
              },
              userId: userId * 1,
              userInput: {
                userType: identification,
              }
            }
          })
          console.log("final resopnse : ", response.data);
          console.log(values);
          
        } catch (error) {
          console.log(error);
          
        }
    
        // Reset the form or perform any other necessary actions
        // actions.resetForm();
 
  };


  const handleButtonClick = async ( values: any) => {
    // Access formik.values to get the current form values
    
    
    const options = {
      method: 'GET',
      url: 'https://gst-details-api-documentation.p.rapidapi.com/GetGSTDetails',
      params: {
        GST: values.gst,
      },
      // abhi: c483e89227mshdfc3034632465e6p1b7c58jsna6081d0bc39f key
      headers: {
        'X-RapidAPI-Key': '1e813430e5msh40d34a4b2c7d493p14bb1bjsn9c0bf76d2618',
        'X-RapidAPI-Host': 'gst-details-api-documentation.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      if (response) {
        values.region = response.data[3][1];
        values.companyName = response.data[5][1];
        setApiResponse(true)
      }
    } catch (error) {
      console.error(error);
    }
    // Perform actions with the values as needed
  };

  return (
    <div className='lg:w-2/3 mx-auto shadow-md rounded-lg my-10'>
      <h2 className="text-xl font-semibold leading-7 text-gray-700 text-center pt-11">
        Customer Registration Form
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }: any) => (
        <Form className=" lg:p-16 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
          
          {/* gst numer */}
          <div>
            <TextField id={'gst'} title={'GST Number'} type={'text'} />
          </div>
          {!apiResponse &&
          
          <button
      
            type="button"
            onClick={() => handleButtonClick(values)}
            className="mt-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Save GST
          </button>
          
          }

{apiResponse &&  (<>


          {/* billing Code of a company */}
          <div>
            <label
              htmlFor="companyBillingCode"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Billing Code of Company
            </label>
            <Field
              type="text"
              id="companyBillingCode"
              name="companyBillingCode"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="companyBillingCode" component="span" className="text-xs text-rose-600" />
          </div>

          {/* user type */}
          <div>
            <SelectComponet
              options={companyTypes}
              id={'userType'}
              title={'Select User Type'}
            />
          </div>

          {/* companyType */}
          <div>

         <SelectComponet options={typeOfCompanies} id={'companyType'} title={'Type Of Company'} />
          </div>

          {/* Industry Type */}
          <div>
            <SelectComponet
              options={industryTypes}
              id={'industryType'}
              title={'Industry Type'}
            />
          </div>

          {/* **company name */}
          <div>
            <TextField id={'companyName'} title={'Company Name'} type={'text'} />
          </div>

          {/* company registration number */}
          <div>
            <label
              htmlFor="companyRegistrationNumber"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Company Registration Number (C.R.N)
            </label>
            <Field
              type="text"
              id="companyRegistrationNumber"
              name="companyRegistrationNumber"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="companyRegistrationNumber" component="span" className="text-xs text-rose-600" />
          </div>

          {/* address */}

          {/* country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Country
            </label>
            <Field
              as="select"
              id="country"
              name="country"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
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
              className="text-xs text-rose-600"
            />
          </div>

          {/* stree address streetAddress */}
          <div>
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Street address
            </label>
            <Field
              type="text"
              name="streetAddress"
              id="streetAddress"
              autoComplete="streetAddress"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage
              name="streetAddress"
              component="span"
              className="text-xs text-rose-600"
            />
          </div>

          {/* city */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              City
            </label>
            <Field
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="city" component="span"  className='text-xs text-rose-600'/>
          </div>

          {/* region */}
          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              State / Province
            </label>
            <Field
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="region" component="span" className='text-xs text-rose-600'/>
          </div>

          {/* postal code */}
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              ZIP / Postal code
            </label>
            <Field
              type="text"
              name="postalCode"
              autoComplete="postalCode"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="postalCode" component="span" className='text-xs text-rose-600'/>
          </div>

          {/* adress end */}

          {/* company pan number panNumer*/}
          <div>
            <label
              htmlFor="panNumber"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Company Pan Number
            </label>
            <Field
              type="text"
              name="panNumber"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
            />
            <ErrorMessage name="panNumber" component="span" className='text-xs text-rose-600'/>
          </div>

          {/* Annual Turn Over */}
          <div>
            <SelectComponet
              options={turnOver}
              id={'turnover'}
              title={'Annual Turnover*'}
            />
          </div>

          {/* firstName */}
          <div>
            <TextField id={'firstName'} title={'First Name'} type={'text'} />
          </div>

          {/* lastName */}
          <div>
          <TextField id={'lastName'} title={'Last Name'} type={'text'} />
          </div>

          {/* designation */}
          <div>
          <TextField id={'designation'} title={'Designation'} type={'text'} />
          </div>

          {/* contact */}

          {/* email */}
          <div>
            <TextField id={'email'} title={'E-Mail'} type={'text'} />
          </div>

          {/* phnNumber */}
          <div>
            <label
              htmlFor="phnNumber"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Phone Number
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Field
                  as="select"
                  name="countryPhnCode"
                  autoComplete="countryPhnCode"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>+91</option>
                  <option>+1</option>
                  <option>+11</option>
                </Field>
                <ErrorMessage name="countryPhnCode" component="span" />
              </div>
              <Field
                type="text"
                name="phnNumber"
                className="peer pl-4 text-center placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm"
                placeholder="      +1 (555) 987-6543"
              />
              <ErrorMessage
                name="phnNumber"
                component="span"
                className="text-rose-400"
              />
            </div>
          </div>

          {/* website*/}
          <div>
          <TextField id={'website'} title={'Comapny Website'} type={'text'} />
          </div>

                    {/* contact end */}

          {/* buttons */}
          <div className="end-end-2">
            <div className="flex items-center">
              <Field
                id="checkbox"
                name='checkBox'
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
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
            </div>
            <div className="col-span-3">
              <button
              // onClick={handleSubmit}
                type="submit"
                className="mt-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                submit
              </button>
            </div>
          </div>
          </>)
}


        </Form>)}
      </Formik>
    </div>
  );
}

export default CustomerRegistrationForm;
