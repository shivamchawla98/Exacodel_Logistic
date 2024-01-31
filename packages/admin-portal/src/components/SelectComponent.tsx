import { ErrorMessage, Field } from "formik";

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
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-600"
      >
        {title}
      </label>
      <Field
        as="select"
        name={id}
        className="block px-4 w-full rounded-md border-0 py-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
      >
        <option value="">
          {optionalOption !== "undefined" ? optionalOption : ""}
        </option>
        {options.map((element) => (
          <option className="text-sm" key={`ftl ${element}`} value={element}>
            {element}
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
