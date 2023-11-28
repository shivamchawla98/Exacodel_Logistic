import { ErrorMessage, Field } from 'formik';
import countries from './data/country';

function Address() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  col-span-full gap-6'>
            <h2 className="font-semibold text-gray-900 col-span-3">
        Address
      </h2>
      {/* country */}
      <div>
        <label
          htmlFor={`country`}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Country
        </label>
        <Field
          as="select"
          id={`country`}
          name={`country`}
          placeholder={`country`}
          className="block w-full rounded-md border-0 px-4 py-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
        >
          <option value="">Select a country</option>
          {countries.map((country: any) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name={`country`}
          component="span"
          className="error-message text-xs text-rose-600"
        />
      </div>
      {/* stree address streetAddress */}
      <div>

        <label
          htmlFor={`streetAddress`}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Street address
        </label>
        <Field type="text" id={`streetAddress`} placeholder={"Address"} name={`streetAddress`} className="block w-full px-4 rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        <ErrorMessage
         name={`streetAddress`}
          component="div"
          className="error-message text-xs text-rose-600"
          />
      </div>

      {/* city */}
      <div>
        <label
          htmlFor={`city`}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          City
        </label>
        <Field type="text" id={`city`} name={`city`} placeholder={"city"} className="block w-full px-4 rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        <ErrorMessage 
        name={`city`}
         component="div"
         className="error-message text-xs text-rose-600"
         />
      </div>

      {/* region */}
      <div>
        <label
          htmlFor={`region`}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          State / Province
        </label>
        <Field type="text" id={`region`} placeholder="State" name={`region`} className="block px-4 w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        <ErrorMessage name={`region`} component="span"
        className="error-message text-xs text-rose-600"
        />
      </div>

      {/* postal code */}
      <div>
        <label
          htmlFor={`postalCode`}
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          ZIP / Postal code
        </label>
        <Field placeholder="Pincode" type="text" id={`postalCode`} name={`postalCode`} className="block w-full px-4 rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        <ErrorMessage name={`postalCode`} component="span" 
        className="error-message text-xs text-rose-600"
        />
      </div>
      <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </div>
  );
}

export default Address;
