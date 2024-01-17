import { ErrorMessage, Field } from "formik";

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
        className="block mt-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
      >
        <option value="">
          {optionalOption !== "undefined" ? optionalOption : ""}
        </option>
        {options.map((element: any) => (
          <option className="text-sm" key={element.value} value={element.value}>
            {element.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={id}
        component="span"
        className="text-xs text-rose-600"
      />
    </div>
  );
};

export default SelectComponet;
