import { ErrorMessage, Field } from 'formik';

interface SelectComponetProps {
  options: Array<number | string>;
  id: string;
  title: string;
  optionalOption?: string;
}

const SelectComponet: React.FC<SelectComponetProps> = ({
  options,
  id,
  title,
  optionalOption,
}) => {
  return (
    <div>
      <label
        htmlFor="warehouseInsurance"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <Field
        as="select"
        id={id}
        name={id}
        className="block bg-white w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
      >
        <option value="">{optionalOption !== 'undefined' ? optionalOption : ''}</option>
        {options.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </Field>
      <ErrorMessage name={id} component="span" className="text-rose-500" />
    </div>
  );
};

export default SelectComponet;
