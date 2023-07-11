import { ErrorMessage, Field } from 'formik';

interface WarehouseCapacityProps {
  id: string;
  labelTitle: string;
  unit: string
}

const WarehouseCapacity: React.FC<WarehouseCapacityProps> = ({
  id,
  labelTitle,
  unit,
}) => {
  return (
    <>
      <div className='sm:col-span-2'>
        <label htmlFor ={id} className="block text-sm font-medium leading-6 text-gray-900" >{labelTitle}</label>
        <span>{unit}</span>
        <Field
          type="number"
          id={id}
          name={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={id} component="span" className="text-rose-500" />
      </div>
    </>
  );
};

export default WarehouseCapacity;
