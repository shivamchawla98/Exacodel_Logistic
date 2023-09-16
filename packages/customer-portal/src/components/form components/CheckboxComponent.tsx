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
          name={id}
          className="h-4 w-4 mr-2 rounded-full border-gray-300 text-sky-600 focus:ring-sky-600"
        />
        {title}
      </label>
      <ErrorMessage name={id} component="span" className="text-rose-500"/>
    </div>
  );
}

export default CheckboxComponent;
