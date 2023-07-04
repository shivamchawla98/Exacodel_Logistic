import Image from 'next/image';
import {MdDirectionsBoat} from 'react-icons/md'

function DealCard({ flag, country, containerType, amount }) {
  return (
    <div className="relative m-6 flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <span className="bg-slate-200 w-30 ml-32 font-semibold rounded-bl-md rounded-tr-md text-center">Starting from</span>
      <div className="p-3 flex justify-start pt-4">
        <Image src={flag} width={40} alt="flag" />
        <h5 className="mb-2 ml-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {country}
        </h5>

      </div>
      <div className='flex justify-evenly p-6 pt-2'>
        <div className="flex justify-center">
            <MdDirectionsBoat size={20} color='blue'/>
            <p>{containerType}</p>
        </div>
        <h3 className="dark:text-l font-medium rounded-sm text-rose-500">USD {amount}</h3>
      </div>
    </div>
  );
}

export default DealCard;
