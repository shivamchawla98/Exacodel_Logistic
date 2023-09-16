import { ErrorMessage, Field } from 'formik';
import country_list from '../data/country';

function CompanyContact({ prefix }: any) {
  return (
    <div className="mt-10 grid grid-cols-2  gap-x-6 gap-y-8 ">
      <div className="sm:col-span-2 lg:col-span-1">
        <label
          htmlFor={`${prefix}.firstName`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          First Name
        </label>
        <div className="mt-2">
          <Field
            type="text"
            id={`${prefix}.firstName`}
            name={`${prefix}.firstName`}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage name={`${prefix}.firstName`} component="div" />
        </div>
      </div>

      <div className="sm:col-span-2 lg:col-span-1">
        <label
          htmlFor={`${prefix}.lastName`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Last Name
        </label>
        <div className="mt-2">
          <Field
            type="text"
            id={`${prefix}.lastName`}
            name={`${prefix}.lastName`}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage name={`${prefix}.lastName`} component="div" />
        </div>
      </div>

      <div className="sm:col-span-2 lg:col-span-1">
        <label
          htmlFor={`${prefix}.designation`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Designation
        </label>
        <div className="mt-2">
          <Field
            type="text"
            id={`${prefix}.designation`}
            name={`${prefix}.designation`}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage name={`${prefix}.designation`} component="div" />
        </div>
      </div>

      <div className="sm:col-span-2 lg:col-span-1">
        <label
          htmlFor={`${prefix}.email`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <Field
            type="email"
            id={`${prefix}.email`}
            name={`${prefix}.email`}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage name={`${prefix}.email`} component="span" />
        </div>
      </div>

      <div className="sm:col-span-2 lg:col-span-1">
        <label
          htmlFor={`${prefix}.phoneNumber`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Phone Number
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor={`${prefix}.country`} className="sr-only">
              Country
            </label>
            <Field
              as="select"
              id={`${prefix}.country`}
              name={`${prefix}.country`}
              autoComplete="country"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option value=""></option>
              {country_list.map((element) => (
                <option key={element} value={element}>
                  {element}
                </option>
              ))}
            </Field>
          </div>
          <Field
            type="tel"
            id={`${prefix}.phoneNumber`}
            name={`${prefix}.phoneNumber`}
            className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="      +1 (555) 987-6543"
          />
          <ErrorMessage name={`${prefix}.phoneNumber`} component="div" />
        </div>
      </div>
    </div>
  );
}

export default CompanyContact;
