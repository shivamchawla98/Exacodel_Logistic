import { ErrorMessage, Field } from 'formik';
import countries from './data/country';

function CompanyDetails({prefix}: any) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  col-span-full gap-6'>
      {/* stree address companyName */}
      <div>

        <label
          htmlFor={`companyName`}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Company Name
        </label>
        <Field type="text" id={`companyName`} name={`companyName`} className="block w-full px-4 rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        <ErrorMessage name={`companyName`} component="div" />
      </div>

      {/* billingCode */}
      <div>
        <label
          htmlFor={`billingCode`}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Billing Code
        </label>
        <Field type="text" id={`billingCode`} name={`billingCode`} className="block w-full px-4 rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        <ErrorMessage name={`billingCode`} component="div" />
      </div>

      {/* gstNumber */}
      <div>
        <label
          htmlFor={`gstNumber`}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Gst Number
        </label>
        <Field type="text" id={`gstNumber`} name={`gstNumber`} className="block px-4 w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        <ErrorMessage name={`gstNumber`} component="span" />
      </div>

      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-300 col-span-full"></hr>
    </div>
  );
}

export default CompanyDetails;
