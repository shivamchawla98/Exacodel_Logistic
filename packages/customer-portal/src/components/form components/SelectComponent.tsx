import { ErrorMessage, Field } from 'formik';

interface SelectComponetProps {
  options: Array<Object | string>;
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
        className="block text-sm font-medium leading-6 text-gray-600"
      >
        {title}
      </label>
      <Field
        as="select"
        name={id}
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
      >
        <option value="">{optionalOption !== 'undefined' ? optionalOption : ''}</option>
        {options.map((element: any) => (
          <option className='text-sm' key={element.value} value={element.value}>
            {element.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={id} component="span" className='text-xs text-rose-600' />
    </div>
  );
};

export default SelectComponet;
