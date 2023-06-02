import {GiCargoShip} from 'react-icons/gi'


function SearchBar() {
  return (
    <div className="relative w-1/3">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <GiCargoShip size={26} color='blue'/>
      </div>
      <input
        id='destination-to'
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        text-center
        rounded-s-none
        "
        placeholder="Search"
        required=""
      />
    </div>
  );
}

export default SearchBar;
