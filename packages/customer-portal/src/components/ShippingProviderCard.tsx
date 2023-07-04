import Image from 'next/image';
import maersk from '../asset/images/maersk.png';
import {LuShip} from 'react-icons/lu'
import {AiOutlineArrowRight} from 'react-icons/ai'

function ShippingProviderCard({img, fromDestination, toDestination}) {
  return (
    <div
      style={{ marginTop: '56px' }}
      className=" 
      h-44 w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700
      flex justify-center
      "
    >
      <div className="w-11/12 md:w-3/6 lg:w-1/2 sm:w-3/6 mx-auto">
        <div className="w-full flex justify-center border-b-2 border-slate-100 pb-2">
          <Image src={maersk} width={100} height={60} alt="maersk" />
        </div>

        <ol className="flex items-center w-full mt-2">
          <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <LuShip />
            </span>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <LuShip />
            </span>
          </li>
        </ol>

        <div className="w-full flex justify-between mt-3">
            <h2 className="font-semibold text-gray-800 dark:text-white">{fromDestination}</h2>
            <AiOutlineArrowRight size={20} className='text-blue-600'/>
            <h2 className='font-semibold text-gray-800 dark:text-white'>{toDestination}</h2>
        </div>
      </div>
      <div className="flex justify-center my-auto">
        <button className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded h-12">
          BOOk NOW
        </button>
      </div>
    </div>
  );
}

export default ShippingProviderCard;
