import {Field, ErrorMessage } from 'formik';

const CustomField = ({title, id, type}: any) => {
    return (
      <div className="relative group">
      <label
        htmlFor="password"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900 group-focus-within:text-sky-600"
      >
        {title}
      </label>
      <Field
        id={id}
        name={id}
        type={type}
        className="block w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 pl-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
        placeholder="Password"
      />
      <ErrorMessage
        name={id}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
    )
  }

export default CustomField;