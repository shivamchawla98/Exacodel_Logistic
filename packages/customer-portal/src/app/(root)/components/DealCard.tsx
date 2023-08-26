import Image from 'next/image';
import {MdDirectionsBoat} from 'react-icons/md'

function DealCard({ flag, country, containerType, amount }: any) {
  return (
    <div className="relative m-6 flex w-60 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <span className="bg-gray-600 text-white w-30 ml-32 font-semibold rounded-bl-md text-base rounded-tr-md text-center">Starting from</span>
      <div className="p-3 flex justify-start pt-4">
        <Image src={flag} width={40} alt="flag" />
        <h5 className="mb-2 ml-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {country}
        </h5>

      </div>
      <div className='flex justify-evenly p-3 pt-2'>
        <div className="flex justify-center">
            <MdDirectionsBoat size={20} className='text-blue-500'/>
            <p>{containerType}</p>
        </div>
        <h3 className="dark:text-l font-medium rounded-sm text-rose-400">USD {amount}</h3>
      </div>
    </div>
  );
}

export default DealCard;
