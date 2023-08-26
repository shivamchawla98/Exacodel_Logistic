import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Formik, FormikHelpers, FormikValues, useFormik } from 'formik';
import countries from '../data/country'

const validate = (values) => {
  const errors = {};
console.log(countries);

  if (!values.customerName) {
    errors.customerName = 'Required';
  } else if (values.customerName.length < 3) {
    errors.customerName = 'Must be 3 or greater characters or less';
  }

  if (!values.companyNames) {
    errors.companyNames = 'Required';
  } else if (values.companyNames.length < 3) {
    errors.companyNames = 'Must be 3 or greater characters or less';
  }

  if (!values.website) {
    errors.website = 'Required';
  } else if (
    !/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i.test(
      values.website
    )
  ) {
    errors.website = 'Invalid Email Address';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!values.regNum) {
    errors.regNum = 'Required';
  } else if (values.regNum.length < 3) {
    errors.regNum = 'Must be 3 or greater characters or less';
  }

  if (!values.country) {
    errors.country = 'Required';
  } else if (values.country.length < 3) {
    errors.country = 'Must be 3 or greater characters or less';
  }

  if (!values.streetAaddress) {
    errors.streetAaddress = 'Required';
  } else if (values.streetAaddress.length < 3) {
    errors.streetAaddress = 'Must be 3 or greater characters or less';
  }

  if (!values.region) {
    errors.region = 'Required';
  } else if (!/[A-Z][a-z]+(?: +[A-Z][a-z]+)*/.test(values.region)) {
    errors.region = 'Enter Valid state';
  }

  if (!values.city) {
    errors.city = 'Required';
  } else if (!/[A-Z][a-z]+(?: +[A-Z][a-z]+)*/.test(values.city)) {
    errors.city = 'Enter appropriate city';
  }

  if (!values.postalCode) {
    errors.postalCode = 'Required';
  } else if (!/^[1-9][0-9]{5}$/i.test(values.postalCode)) {
    errors.postalCode = 'Wrong postal code';
  }

  return errors;
};

function CompanyBasicInfo() {
  const formik = useFormik({
    initialValues: {
      customerName: '',
      companyName: '',
      website: '',
      email: '',
      regNum: '',
      country: '',
      streetAaddress: '',
      region: '',
      city: '',
      postalCode: '',
    },

    validate,
    onSubmit: (values) => {
      console.log(values);

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Logo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* customer name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="customerName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Customer name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="customerName"
                  id="customerName"
                  autoComplete="given-name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.customerName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.companyName && formik.errors.customerName ? (
                  <span className=" text-red-700  mt-8">
                    {formik.errors.customerName}
                  </span>
                ) : null}
              </div>
            </div>

            {/* company name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  autoComplete="family-name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <span className=" text-red-700 mt-8">
                    {formik.errors.companyName}
                  </span>
                ) : null}
              </div>
            </div>

            {/*website field  */}
            <div className="sm:col-span-3">
              <label
                htmlFor="website"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Website
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="website"
                  id="website"
                  autoComplete="family-name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.website}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.website && formik.errors.website ? (
                  <span className=" text-red-700 rounded mt-8">
                    {formik.errors.website}
                  </span>
                ) : null}
              </div>
            </div>

            {/* company registration number */}
            <div className="sm:col-span-3">
              <label
                htmlFor="regNum"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company resgistration number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="regNum"
                  id="regNum"
                  autoComplete="family-name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.regNum}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.regNum && formik.errors.regNum ? (
                  <span className=" text-red-700 mt-8">
                    {formik.errors.regNum}
                  </span>
                ) : null}
              </div>
            </div>

            {/* company email */}
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className=" text-red-700  mt-8">
                    {formik.errors.email}
                  </span>
                ) : null}
              </div>
            </div>

            {/* country field id = country */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  onBlur={formik.handleBlur}
                  autoComplete="country-name"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {countries.map((country) => <option key={country}> {country} </option>)}

                </select>
                {formik.touched.country && formik.errors.country ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded mt-8">
                    {formik.errors.country}
                  </span>
                ) : null}
              </div>
            </div>

            {/* street address id = streetAaddress */}
            <div className="col-span-full">
              <label
                htmlFor="streetAaddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAaddress"
                  id="streetAaddress"
                  onBlur={formik.handleBlur}
                  autoComplete="streetAaddress"
                  onChange={formik.handleChange}
                  value={formik.values.streetAaddress}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.streetAaddress &&
                formik.errors.streetAaddress ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded mt-8">
                    {formik.errors.streetAaddress}
                  </span>
                ) : null}
              </div>
            </div>

            {/* city field id = city*/}
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  onBlur={formik.handleBlur}
                  autoComplete="address-level2"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.city && formik.errors.city ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded mt-8">
                    {formik.errors.city}
                  </span>
                ) : null}
              </div>
            </div>

            {/* state provience id = region*/}
            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.region}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.region && formik.errors.region ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded mt-8">
                    {formik.errors.region}
                  </span>
                ) : null}
              </div>
            </div>

            {/* zip code id = postalCode */}
            <div className="sm:col-span-2">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  autoComplete="postalCode"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.postalCode}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.postalCode && formik.errors.postalCode ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded mt-8">
                    {formik.errors.postalCode}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default CompanyBasicInfo;
