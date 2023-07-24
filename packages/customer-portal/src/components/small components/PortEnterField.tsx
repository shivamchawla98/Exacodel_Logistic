import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ImLocation } from 'react-icons/im';


function PortEnterField() {

    const [fieldActive, setFieldActive] = useState(false);

    const options = [
      'Option 1',
      'Option 2',
      'Option 3',
      // Add more options as needed
    ];
  
    const onSubmit = (values) => {
      console.log(values.selectedOption);
    };
  
    const handleBlur = (event, setFieldValue) => {
      setFieldActive(false)
      const { value } = event.target;
      const matchingOption = options.find((option) => option.toLowerCase() === value.toLowerCase());
  
      if (!matchingOption) {
        setFieldValue('selectedOption', ''); // Clear the field value
      }
    };
  
    const handleClick = () => {
      setFieldActive(true);
    }

  return (
    <>
    <Field name="selectedOption" >
    {({ field, form }) => (
      <div className='relative'>
        <ImLocation className={`absolute -right-0.5 top-2 ${fieldActive ? 'text-blue-300' : ''}`} size={25}/>
        <input
        onClick = {() => {setFieldActive(true)}}
        onBlur={() => {}}
        className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-lg ring-1 ring-inset text-center ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-5"
        placeholder="you@example.com"
          type="text"
          {...field}
          list="optionsList"
          autoComplete="off"
          onBlur={(e) => handleBlur(e, form.setFieldValue)}
        />
        <datalist id="optionsList">
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </div>
    )}
  </Field>
  <ErrorMessage name="selectedOption" component="div" />
  </>
  )
}

export default PortEnterField