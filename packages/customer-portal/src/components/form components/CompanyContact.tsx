import { ErrorMessage, Field } from 'formik';

function CompanyContact() {
  return (
    <div className="mt-10 grid grid-cols-1 col-span-3 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-2">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          First Name
        </label>
        <div className="mt-2">
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage name="firstName" component="div" />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage name="lastName" component="div" />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="designation"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Designation
        </label>
        <div className="mt-2">
          <Field
            type="text"
            id="designation"
            name="designation"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage name="designation" component="div" />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <Field
            type="email"
            id="email"
            name="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage name="email" component="span" />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Phone Number
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <Field
              as="select"
              id="country"
              name="country"
              autoComplete="country"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </Field>
          </div>
          <Field
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="      +1 (555) 987-6543"
          />
          <ErrorMessage name="phoneNumber" component="div" />
        </div>
      </div>
    </div>
  );
}

export default CompanyContact;
