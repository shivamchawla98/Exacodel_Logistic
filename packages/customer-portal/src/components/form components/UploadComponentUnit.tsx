import { ErrorMessage } from 'formik';
import { PhotoIcon } from '@heroicons/react/24/solid'

const UploadComponentUnit = ({ field, form }: any) => {
  const handleFileChange = (event: any) => {
    form.setFieldValue(field.name, event.currentTarget.files[0]);
  };

  return (
    <div className="col-span-full">
      <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
        Cover photo
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 hover:text-sky-500"
            >
              <span>Upload a file</span>
              <input id={field.name} onChange={handleFileChange} name={field.name} type="file" className="sr-only" />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default UploadComponentUnit