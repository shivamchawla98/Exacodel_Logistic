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
      <div className='col-span-2'>
        <div className='flex justify-start '>

        <label htmlFor ={id} className="block text-sm font-medium leading-6 text-gray-900" >{labelTitle}</label>
        <span className='text-xs text-gray-500'>{unit}</span>
        </div>
        <Field
          type="number"
          id={id}
          name={id}
          className="block w-full focus:outline-none rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-sky-600 sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={id} component="span" className="text-rose-500" />
      </div>
    </>
  );
};

export default WarehouseCapacity;
