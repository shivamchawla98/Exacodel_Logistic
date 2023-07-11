import { ErrorMessage } from 'formik';

const UploadComponentUnit = ({ field, form }) => {
  const handleFileChange = (event) => {
    form.setFieldValue(field.name, event.currentTarget.files[0]);
  };

  return (
    <div>
      <input
        id={field.name}
        name={field.name}
        type="file"
        onChange={handleFileChange}
      />
      <ErrorMessage name={field.name} component="div" />
    </div>
  );
};

export default UploadComponentUnit