import { useState, useCallback } from 'react';
import { Field, FieldProps } from 'formik';
import FileUpload from './UploadComponentUnit';


// Example usage of FileUpload component
const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);  
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    console.log(file);
    
  };
  return (
    <div className="col-span-3">
      <div className="my-6">
        <label htmlFor="file1" className="block text-sm font-medium text-gray-700">
          File 1:
        </label>
        <Field name={`file`}>
          {({ field }: { field: any }) => (
            <FileUpload
            label = "etx"
             doc= "just"
              // Pass the callback function
            />
          )} 
        </Field>
      </div>
    </div>
  );
};

export default UploadComponent;
