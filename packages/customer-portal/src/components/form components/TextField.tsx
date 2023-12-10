'use client'

import { ErrorMessage, Field } from "formik";

interface TextFieldProps {
    id: string;
    title: string;
    type: string;
}

const TextField: React.FC<TextFieldProps> = ({id, title, type}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <Field
        type={type}
        id={id}
        name={id}
        placeholder={title}
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-sky-600 text-sm pl-2"
      />
      <ErrorMessage name={id} component="div" className='text-xs text-rose-600'/>
    </div>
  );
};

export default TextField;
