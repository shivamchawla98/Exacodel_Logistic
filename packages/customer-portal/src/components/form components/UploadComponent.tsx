import { Field } from "formik";
import UploadComponentUnit from "./UploadComponentUnit";

const UploadComponent = () => {
    return (
      <div className="col-span-3 ">
        <div className="w-full my-6">
          <label htmlFor="file1">File 1:</label>
          <Field name="file1" component={UploadComponentUnit} />
        </div>
  
        <div className="w-full my-6">
          <label htmlFor="file2">File 2:</label>
          <Field name="file2" component={UploadComponentUnit} />
        </div>
  
        {/* Add more upload fields as needed */}
      </div>
    );
  };
  

export default UploadComponent;

  
  
  
  
  
  
  