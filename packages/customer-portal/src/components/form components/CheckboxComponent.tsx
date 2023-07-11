import { ErrorMessage, Field } from 'formik';

interface CheckboxComponentProps {
  id: string;
  title: string;
}

const CheckboxComponent: React.FC <CheckboxComponentProps> = ({id, title}) => {
  return (
    <div>
      <label htmlFor={id}>
        <Field
          type="checkbox"
          id={id}
          name={id}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        {title}
      </label>
      <ErrorMessage name={id} component="span" className="text-rose-500"/>
    </div>
  );
}

export default CheckboxComponent;
