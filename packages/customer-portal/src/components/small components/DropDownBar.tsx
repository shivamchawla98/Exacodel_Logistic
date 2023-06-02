'use client';

import { FaShip } from 'react-icons/fa';
import { BsFillAirplaneEnginesFill } from 'react-icons/bs';

'use client'

function DropDownBar() {
  return (
    <div className='w-24 ml-9'>
      <select
      defaultValue={'DEFAULT'}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="DEFAULT">
          By Ship
        </option>
        <option value="US">
          By Air
        </option>
      </select>
    </ div>
  );
}

export default DropDownBar;
