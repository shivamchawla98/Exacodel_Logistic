'use client';

import { GiCargoShip } from 'react-icons/gi';
import { SetStateAction, useState } from 'react';
import ports from '../mockdata/ports.json';
import Suggestion from './Suggestion';
import { Anek_Malayalam } from 'next/font/google';

function SearchBar() {
  type Location = {
    name: string;
    city: string;
    country: string;
    alias: string[];
    regions: string[];
    coordinates: number[];
    province: string;
    timezone: string;
    unlocs: string[];
    code: string;
  };
  
  type Suggestions = [string, Location][];
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestions>([]);
  let count = 0;

  const handleChange = async (event: { target: { value: any } }) => {
    const value = event.target.value;
    setInputValue(value);
    // Generate suggestions based on the input value
    const generatedSuggestions = await generateSuggestions(value);
    console.log('generated suggestions : ', generateSuggestions);
    // eslint-disable-next-line react/jsx-key
    setSuggestions(generatedSuggestions as Suggestions);
  };

  const handleSelect = (selectedValue: SetStateAction<string>) => {
    setInputValue(selectedValue);
    console.log(selectedValue);
    
    setSuggestions([]);
  };

  const generateSuggestions = async (inputValue: any) => {
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
    <div className="translate-y-1/3">
      <div className="relative w-96 max-w-lg">
        <form>
          <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
            <span className="m-1 inline-flex cursor-pointer items-center rounded-md bg-indigo-600 px-2 py-2 hover:bg-indigo-700">
              <GiCargoShip size={32} color="white" />
            </span>
            <input
              id='from'
              onChange={handleChange}
              type="text"
              className="block w-full flex-1 py-2 px-3 focus:outline-none"
              placeholder="Ships From"
              value={inputValue}
            />
          </div>
        </form>
        <div
          id="suggestion"
          className="absolute mt-2 w-full overflow-hidden rounded-md bg-white"
        >
          {
          Array.isArray(suggestions)
            ? suggestions?.slice(0,5).map(([key, data]) => (
              <div 
              key={key}
              onClick={() => handleSelect(data.name)}
              className="cursor-pointer py-2 px-3 hover:bg-slate-100"
              >
              <p className="text-sm font-medium text-gray-600">{data.name}</p>
              <p className="text-sm text-gray-500">
                {data.country}
              </p>
            </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
