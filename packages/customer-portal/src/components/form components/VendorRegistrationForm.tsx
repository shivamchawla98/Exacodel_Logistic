"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as Yup from "yup";
import countries from "../../components/data/country";
import SelectComponet from "../../components/form components/SelectComponent";
import {
  updateCompanyBillingCode,
  updateUserType,
  updateCompany,
  updateIndustryType,
  updateCountry,
  updateStreetAddress,
  updateCity,
  updateRegion,
  updatePostalCode,
  updatePanNumber,
  updateGST,
  updateFirstName,
  updateLastName,
  updateDesignation,
  updatePhoneNumber,
  updateEmail,
  updateWebsite,
  updateCheckBox,
  updateCompanyRegistrationNumber,
} from "../../features/vendorRegForm/vendorReg-slice";
import {
  industryTypeOptions,
  turnOverOptions,
  typeOfCompanyOptions,
} from "../data/dropdownData";
import TextField from "../form components/TextField";
import { updatesRegisterButtonClicked } from "@/features/registrationConf/registrationConf-slice";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import FINALREGISTRATION from "@/graphql/mutation/finalReg";
import CompanyContact from "./CompanyContact";
import FileUpload from "./UploadComponentUnit";
import Address from "./Address";
import { UploadState } from "@/features/uploads/upload-slice";

const validationSchema = Yup.object({
  companyBillingCode: Yup.string().required("Enter Billing Code"),
  userType: Yup.string().required("Select user type"),
  company: Yup.string().required("Enter company name"),
  industryType: Yup.string().required("Select Industry type"),
  country: Yup.string().required("Select a country"),
  streetAddress: Yup.string().required("Enter street address"),
  city: Yup.string().required("Enter city"),
  region: Yup.string().required("Enter region"),
  postalCode: Yup.string()
    .required("Enter postal code")
    .matches(/^[0-9]{6}$/, "PIN code must be a 6-digit number"),
  panNumber: Yup.string()
    .required("Enter PAN number")
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Enter valid PAN number"),
  gst: Yup.string()
    .required("Enter GST number or choose alternate")
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Enter valid GST number"
    ),
  firstName: Yup.string().required("Enter first name"),
  lastName: Yup.string().required("Enter last name"),
  designation: Yup.string().required("Enter designation"),
  phnNumber: Yup.string().required("Enter phone number"),
  website: Yup.string().required("Enter a webiste"),
  checkBox: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const response = [
  [],
  ["GST Number", "24AAKCS0993B2ZF"],
  ["Trade Name", "sarita infotech pvt ltd."],
  ["State", "Gujarat"],
  ["Business Type", "Private Limited Company"],
  ["Legal Name", "SARITA INFOTECH PRIVATE LIMITED"],
  ["Major Business Nature", "Supplier of Services, Others"],
  ["Dealer Type", "Regular"],
  ["Registered on", "13/08/2019"],
];
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
  "Any Other Trade License": "other_license",
};

function VendorRegistrationForm() {
  const dispatch = useDispatch();
  const { userType, identification } = useSelector(
    (state: any) => state.starterSlice
  );
  const { email, userId } = useSelector((state: any) => state.user);
  const [apiResponse, setApiResponse] = useState(false);
  const [showAddressField, setShowAdressField] = useState(false);
  const {
    userImage,
    cert_of_registration,
    pancard_company,
    aadhaar_card,
    isoCertificate,
    pancard_auth,
    AEO_cert,
    IATA_cert,
    DUNS_cert,
    manufacturing_license,
    other_license,
  } = useSelector((state: any): UploadState => state.uploadSlice);

  // const {  companyBillingCode,
  //     companyRegistrationNumber,
  //     userType,
  //     company,
  //     industryType,
  //     country,
  //     streetAddress,
  //     city,
  //     region,
  //     postalCode,
  //     panNumber,
  //     gst,
  //     firstName,
  //     lastName,
  //     designation,
  //     phnNumber,
  //     email,
  //     website,
  //     checkBox, } = useSelector((state: any) => state.vendorRegistration);
  const initialValues = {
    companyBillingCode: "",
    userType: userType,
    companyRegistrationNumber: "",
    company: "",
    industryType: "",
    country: "",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
    panNumber: "",
    gst: "",
    firstName: "",
    lastName: "",
    designation: "",
    phnNumber: "",
    email: email,
    website: "",
    checkBox: false,
    turnover: "",
    corporateAddress: {
      country: undefined,
      region: undefined,
      city: undefined,
      streetAddress: undefined,
      postalCode: undefined,
    },
    // companyContact: {
    //   designation: "",
    //   email: "",
    //   firstName: "",
    //   lastName: "",
    //   phoneNumber: ""
    // },
    isBillingSameAsCorp: "yes",
  };

  const [finalRegistration] = useMutation(FINALREGISTRATION);

  const handleButtonClick = async (values: any) => {
    // Access formik.values to get the current form values

    // const options = {
    //   method: 'GET',
    //   url: 'https://gst-details-api-documentation.p.rapidapi.com/GetGSTDetails',
    //   params: {
    //     GST: values.gst
    //   },
    //   // abhi : c483e89227mshdfc3034632465e6p1b7c58jsna6081d0bc39f key
    //   // abhi : gst-details-api-documentation.p.rapidapi.com host
    //   headers: {
    //     'X-RapidAPI-Key': '1e813430e5msh40d34a4b2c7d493p14bb1bjsn9c0bf76d2618',
    //     'X-RapidAPI-Host': 'gst-details-api-documentation.p.rapidapi.com'
    //   }
    // };

    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    if (response) {
      // values.region = response.data[3][1];
      // values.company = response.data[5][1];
      // values.region = response[3][1];
      // values.companyName = response[5][1];
      console.log("company: ", values);

      setApiResponse(true);
    }
    // } catch (error) {
    //   console.error(error);
    // }
    // Perform actions with the values as needed
  };

  const handleSubmit = async (values: any) => {
    dispatch(updateCompanyBillingCode(values.companyBillingCode));
    dispatch(updateCompanyRegistrationNumber(values.companyRegistrationNumber));
    dispatch(updateUserType(values.userType));
    dispatch(updateCompany(values.company));
    dispatch(updateIndustryType(values.industryType));
    dispatch(updateCountry(values.country));
    dispatch(updateStreetAddress(values.streetAddress));
    dispatch(updateCity(values.city));
    dispatch(updateRegion(values.region));
    dispatch(updatePostalCode(values.postalCode));
    dispatch(updatePanNumber(values.panNumber));
    dispatch(updateGST(values.gst));
    dispatch(updateFirstName(values.firstName));
    dispatch(updateLastName(values.lastName));
    dispatch(updateDesignation(values.designation));
    dispatch(updatePhoneNumber(values.phnNumber));
    dispatch(updateEmail(values.email));
    dispatch(updateWebsite(values.website));
    dispatch(updateCheckBox(values.checkBox));
    console.log("values : ", values);
    console.log(
      "verification : ",
      cert_of_registration,
      pancard_company,
      aadhaar_card,
      isoCertificate
    );
    try {
      const response = await finalRegistration({
        variables: {
          input: {
            companyType: values.companyType,
            industryType: values.industryType,
            companyName: values.company,
            state: values.region,
            city: values.city,
            country: values.country,
            pincode: values.postalCode,
            Address: values.streetAddress,
            company_reg_no: values.companyRegistrationNumber,
            company_pan_no: values.panNumber,
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
          },
          compcontact: {
            firstName: values.firstName,
            lastName: values.lastName,
            designation: values.designation,
            mobileNo: values.phnNumber,
            emailId: email,
          },
          kycin: {
            certificate_of_registration: cert_of_registration,
            company_pan_card: pancard_company,
            aadhar_card: aadhaar_card,
            pan_card: pancard_auth,
            iso_certificate: isoCertificate,
            aeo_certificate: AEO_cert,
            iata_certificate: IATA_cert,
            duns_certificate: DUNS_cert,
            manufacturing_license: manufacturing_license,
            warehouse_insurance: "not gonna needed in final reg",
            any_other_trading_license: other_license,
          },
          corpad: {
            address:
              values.corporateAddress.streetAddress || values.streetAddress,
            state: values.corporateAddress.region || values.state,
            city: values.corporateAddress.city || values.city,
            pincode: values.corporateAddress.postalCode || values.postalCode,
            country: values.corporateAddress.country || values.country,
          },
        },
      });

      console.log("final resopnse : ", response.data);
    } catch (error) {
      console.log(error);
    }
    console.log(values);
    // to show registration confirmed popup
    dispatch(updatesRegisterButtonClicked(true));
    // Handle form submission
  };

  return (
    <div className="lg:w-2/3 mx-auto shadow-md rounded-lg my-10">
      <h2 className="text-xl font-semibold leading-7 text-gray-700 text-center pt-11">
        Vendor Registration Form
      </h2>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="lg:p-16 grid lg:grid-cols-2 gap-6 p-12 gap-y-8">
            {/* billing Code of a company */}

            {/* gst numer */}
            <div>
              <label
                htmlFor="gst"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                GST Number
              </label>
              <Field
                type="text"
                id="gst"
                name="gst"
                placeholder="GST Number"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
              />
              <ErrorMessage
                className="text-xs text-rose-600"
                name="gst"
                component="span"
              />
            </div>
            {!apiResponse && (
              <button
                type="button"
                onClick={() => handleButtonClick(values)}
                className="mt-8 rounded-md bg-fuchsia-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-800"
              >
                Save GST
              </button>
            )}

            {apiResponse && (
              <>
                {/* <div >
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
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="companyBillingCode" component="span" />
          </div> */}

                {/* user type
          <div >
            <SelectComponet
              options={["WAREHOUSE_COMPANY", "COLD_STORAGE_COMPANY"]}
              id={'userType'}
              title={'Select User Type'}
            />
          </div> */}

                {/* companyType */}
                <div>
                  <SelectComponet
                    options={typeOfCompanyOptions}
                    id={"companyType"}
                    title={"Type Of Company"}
                  />
                </div>

                {/* Industry Type */}
                <div>
                  <SelectComponet
                    options={industryTypeOptions}
                    id={"industryType"}
                    title={"Industry Type"}
                  />
                </div>

                {/* **company name */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium leading-6 text-gray-600"
                  >
                    Company Name
                  </label>
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    placeholder="company"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="company"
                    component="span"
                  />
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
                    placeholder="Company Reg Number"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="companyRegistrationNumber"
                    component="span"
                  />
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
                    placeholder="Country"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
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
                    placeholder="address"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
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
                    placeholder="city"
                    autoComplete="address-level2"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="city"
                    component="span"
                  />
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
                    placeholder="state"
                    autoComplete="address-level1"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="region"
                    component="span"
                  />
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
                    placeholder="pincode"
                    id="postalCode"
                    autoComplete="postalCode"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="postalCode"
                    component="span"
                  />
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
                    id="panNumber"
                    name="panNumber"
                    placeholder="pan number"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="panNumber"
                    component="span"
                  />
                </div>

                {/* Annual Turn Over */}

                <div>
                  <SelectComponet
                    options={turnOverOptions}
                    id={"turnover"}
                    title={"Annual Turnover"}
                  />
                </div>

                {/* firstName */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-600"
                  >
                    First Name
                  </label>

                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    placeholder="first name"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="firstName"
                    component="span"
                  />
                </div>

                {/* lastName */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-600"
                  >
                    Last Name
                  </label>

                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="given-name"
                    placeholder="last name"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="lastName"
                    component="span"
                  />
                </div>

                {/* designation */}
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium leading-6 text-gray-600"
                  >
                    Designation
                  </label>
                  <Field
                    type="text"
                    name="designation"
                    id="designation"
                    placeholder="designation"
                    autoComplete="given-name"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                  />
                  <ErrorMessage
                    className="text-xs text-rose-600"
                    name="designation"
                    component="span"
                  />
                </div>

                {/* contact */}

                {/* email */}
                {/* <div >
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Email address
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
            />
            <ErrorMessage className='text-xs text-rose-600' name="email" component="span" />
          </div> */}

                {/* phone number */}
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium leading-6 text-gray-600"
                  >
                    Phone Number
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="countryPhnCode"
                        name="countryPhnCode"
                        autoComplete="countryPhnCode"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option>91</option>
                        <option>01</option>
                        <option>11</option>
                      </select>
                      <ErrorMessage
                        className="text-xs text-rose-600"
                        name="countryPhnCode"
                        component="span"
                      />
                    </div>
                    <Field
                      type="text"
                      name="phnNumber"
                      id="phnNumber"
                      className="peer text-center placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-fuchsia-800 text-sm pl-2"
                      placeholder="      +1 (555) 987-6543"
                    />
                    <ErrorMessage
                      name="phnNumber"
                      component="span"
                      className="text-xs text-rose-600"
                    />
                  </div>
                </div>

                {/* website*/}
                <div>
                  <TextField
                    id={"website"}
                    title={"Comapny Website"}
                    type={"text"}
                  />
                </div>
                <hr className="my-6 h-0.5 col-span-2 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                {/* contact end */}
                {/* corporate address */}
                <div className="w-full col-span-2 grid grid-cols-2">
                  <h2 className="text-sm col-span-1 font-semibold text-gray-700">
                    Is Corporate is same as Billing Address
                  </h2>
                  <div>
                    <label className="mx-6">
                      <Field
                        onClick={() => setShowAdressField(false)}
                        className="w-4 h-4 text-fuchsia-800 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-fuchsia-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="radio"
                        name="isBillingSameAsCorp"
                        value="yes"
                      />
                      Yes
                    </label>
                    <label className="mx-6">
                      <Field
                        onClick={() => setShowAdressField(true)}
                        className="w-4 h-4 text-fuchsia-800 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-fuchsia-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="radio"
                        name="isBillingSameAsCorp"
                        value="no"
                      />
                      No
                    </label>
                  </div>

                  <ErrorMessage
                    name="isBillingSameAsCorp"
                    className="text-xs text-rose-500"
                    component="p"
                  />
                </div>
                <hr className="my-6 h-0.5 col-span-full border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

                {/* address */}
                {/* country */}
                {showAddressField && <Address prefix="corporateAddress" />}

                {/* company contact */}
                {/* <div className="col-span-3">
                <h2 className="text-sm col-span-1 font-semibold text-gray-700">
                  Add company contact
                </h2>
                <CompanyContact prefix="companyContact" name="file" />
              </div>
              <hr className="my-6 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" /> */}

                {/* Upload section */}
                {/* <UploadComponent  /> */}
                <h2 className="text-sm font-semibold mb-3 col-span-full text-gray-700">
                  Upload four documnets here out of eight and pan cards is
                  compulsion.
                </h2>
                <div className="col-span-full">
                  {Object.entries(uploads).map(([label, doc]) => (
                    <FileUpload key={doc} label={label} doc={doc} />
                  ))}
                </div>

                {/* buttons */}
                <div className="end-end-2 col-span-full">
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 rounded focus:ring-fuchsia-800 dark:text-fuchsia-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        className="text-primary-500 dark:text-fuchsia-800 hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSubmit(values)}
                    className="mt-8 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-800"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default VendorRegistrationForm;
