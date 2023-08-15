'use client';

import { BsFillCalendarFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { TbArrowsExchange2 } from 'react-icons/tb';
import { useState } from 'react';
import ContainerInputBar from '@/components/small components/ContainerInputBar';
import ports from './mockdata/ports.json';

function ShippingFilter() {
  const [show, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!show);
    console.log(show);
  };

  // suggetion code

  const [inputValueTo, setInputValueTo] = useState('');
  const [inputValueFrom, setInputValueFrom] = useState('');
  const [suggestionsFrom, setSuggestionsFrom] = useState([]);
  const [suggestionsTo, setSuggestionsTo] = useState([]);
  let count = 0;

  const handleChange = async (event: { target: { value: any } }) => {
    const value = event.target.value;
    event.target.id === 'from'
      ? setInputValueFrom(value)
      : setInputValueTo(value);
    console.log('event id >>', event.target.id);

    // Generate suggestions based on the input value
    const generatedSuggestions = await generateSuggestions(value);
    console.log('generated suggestions : ', generateSuggestions);
    // eslint-disable-next-line react/jsx-key
    event.target.id === 'from'
      ? setSuggestionsFrom(generatedSuggestions)
      : setSuggestionsTo(generatedSuggestions);
  };

  const handleSelectTo = (selectedValue: SetStateAction<string>) => {
    setInputValueTo(selectedValue);
    console.log(selectedValue);

    setSuggestionsTo([]);
  };

  const closeSuggestion = () => {
    setSuggestionsTo([]);
    setSuggestionsFrom([]);
    console.log(">>>>>>>>>> ",inputValueTo);
    
  }

  const handleSelectFrom = (selectedValue: SetStateAction<string>) => {
    setInputValueFrom(selectedValue);
    console.log(selectedValue);

    setSuggestionsFrom([]);
  };

  const generateSuggestions = async (inputValue) => {
    // Generate or fetch suggestions based on the input value
    // Example: You can make an API call to fetch suggestions from a backend endpoint
    // For simplicity, using a static list of suggestions here
    const staticSuggestions = await Object.entries(ports);
    console.log('length of data : ', staticSuggestions);

    return staticSuggestions.filter((suggestion) =>
      suggestion[1].name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <form onClick={closeSuggestion} className="w-full flex-wrap flex justify-center item-center pt-12 pb-12">
      <div className="w-11/12 md:w-3/12 lg:w-3/12  relative mt-2 bg-white ml-2 mr-2 rounded-md shadow-sm px-3.5 py-2.5">

      </div>
      <div className="w-11/12 md:w-3/12 lg:w-3/12  relative mt-2 bg-white ml-2 mr-2 rounded-md shadow-sm px-3.5 py-2.5">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <HiLocationMarker
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="from"
          id="from"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
          placeholder="From"
          onChange={handleChange}
          value={inputValueFrom}
        />
        <div
          id="suggestion"
          className="left-0 absolute z-50 mt-4 w-full overflow-hidden rounded-md bg-white"
        >
          {Array.isArray(suggestionsFrom)
            ? suggestionsFrom?.slice(0, 5).map(([key, data]) => (
                <div
                  key={key}
                  onClick={() => handleSelectFrom(data.name)}
                  className="cursor-pointer py-2 px-3 hover:bg-slate-100"
                >
                  <p className="text-sm font-medium text-gray-600">
                    {data.name}
                  </p>
                  <p className="text-sm text-gray-500">{data.country}</p>
                </div>
              ))
            : null}
        </div>
      </div>

      <button className="flex justify-center items-center hover:rotate-180 ">
        <TbArrowsExchange2 className="h-6 w-7 text-gray-400" />
      </button>

      <div className="w-11/12 md:w-3/12 lg:w-3/12 relative mt-2 ml-2 mr-2 bg-white rounded-md shadow-sm px-3.5 py-2.5">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <HiLocationMarker
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="to"
          id="to"
          value={inputValueTo}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
          placeholder="To"
        />
        <div
          id="suggestion"
          className="left-0 absolute z-50 mt-4 w-full overflow-hidden rounded-md bg-white"
        >
          {Array.isArray(suggestionsTo)
            ? suggestionsTo?.slice(0, 5).map(([key, data]) => (
                <div
                  key={key}
                  onClick={() => handleSelectTo(data.name)}
                  className="cursor-pointer py-2 px-3 hover:bg-slate-100 z-40"
                >
                  <p className="text-sm font-medium text-gray-600">
                    {data.name}
                  </p>
                  <p className="text-sm text-gray-500">{data.country}</p>
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="w-11/12 md:w-3/12 lg:w-3/12 relative mt-2 bg-white rounded-md shadow-sm px-3.5 py-2.5 h-14">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <BsFillCalendarFill className="h-5 w-5 text-gray-400" />
        </div>
        <input
          datepicker=""
          type="date"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
          placeholder="Select date"
        />
      </div>

      <div className=" flex justify-center flex-col items-center">
        <button
          onClick={() => clickHandler()}
          type="button"
          className="rounded-md w-23 h-12 ml-4 mt-3 px-3 py-2 text-sm font-semibold text-white shadow-sm bg-rose-500 hover:bg-rose-400 items-center my-auto relative"
        >
          Book Now
        </button>
      </div>
      <div className=" z-20">{show ? <ContainerInputBar /> : ''}</div>
    </form>
  );
}

export default ShippingFilter;
