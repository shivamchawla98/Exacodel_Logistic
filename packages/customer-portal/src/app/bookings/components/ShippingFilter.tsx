"use client";

import { BsFillCalendarFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { TbArrowsExchange2, TbRoad } from "react-icons/tb";
import { LuWaves } from "react-icons/lu";
import { RiCloudWindyLine } from "react-icons/ri";
import { SetStateAction, useState } from "react";
import ContainerInputBar from "@/components/small components/ContainerInputBar";
import ports from "../../../components/mockdata/ports.json";
import Suggestion from "@/components/small components/Suggestion";
import { useForm, SubmitHandler } from "react-hook-form";

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

// interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
//   target: HTMLInputElement;
// }
type Inputs = {
  from: string;
  to: string;
  date: Date;
};

function ShippingFilter() {
  const [show, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!show);
    console.log(show);
  };

  // suggetion code

  const [inputValueTo, setInputValueTo] = useState("");
  const [inputValueFrom, setInputValueFrom] = useState("");
  const [suggestionsFrom, setSuggestionsFrom] = useState<Suggestions>([]);
  const [suggestionsTo, setSuggestionsTo] = useState<Suggestions>([]);
  // let count = 0;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("data : ", data);

  const handleChange = async (event: any) => {
    if (!event.target) {
      return; // Exit early if event.target is null
    }
    const value = event.target.value;

    if (event.target.id === "from") {
      setInputValueFrom(value);
    } else {
      setInputValueTo(value);
    }

    // Generate suggestions based on the input value
    const generatedSuggestions = await generateSuggestions(value);
    console.log(generatedSuggestions);

    // eslint-disable-next-line react/jsx-key
    if (event.target.id === "from") {
      setSuggestionsFrom(generatedSuggestions as Suggestions);
    } else {
      setSuggestionsTo(generatedSuggestions as Suggestions);
    }

    // event.target.id === 'from'
    //   ? setSuggestionsFrom(generatedSuggestions)
    //   : setSuggestionsTo(generatedSuggestions);
  };

  const handleSelectTo = (selectedValue: string) => {
    setInputValueTo(selectedValue);
    console.log(selectedValue);
    setValue("to", selectedValue);
    setSuggestionsTo([]);
  };

  const closeSuggestion = () => {
    setSuggestionsTo([]);
    setSuggestionsFrom([]);
  };

  const handleSelectFrom = (selectedValue: string) => {
    setInputValueFrom(selectedValue);
    console.log(selectedValue);
    setValue("from", selectedValue);
    setSuggestionsFrom([]);
  };

  const generateSuggestions = async (inputValue: any) => {
    // Generate or fetch suggestions based on the input value
    // Example: You can make an API call to fetch suggestions from a backend endpoint
    // For simplicity, using a static list of suggestions here
    const staticSuggestions = await Object.entries(ports);

    return staticSuggestions.filter((suggestion) =>
      suggestion[1].name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const [route, setRoute] = useState("sea");
  const handleRoute = (e: any) => {
    e.preventDefault();
    setRoute(e.currentTarget.id);
  };

  return (
    <form
      onClick={closeSuggestion}
      onSubmit={handleSubmit(onSubmit)}
      className=" shadow flex-wrap flex justify-center item-center pt-12 px-2 pb-12 bg-white w-auto"
    >
      <div className="flex justify-evenly mx-2">
        <button
          onClick={handleRoute}
          id="sea"
          className="flex bg-white h-10 mt-2 rounded-md justify-center items-center hover:scale-105 px-2 shadow-md"
        >
          <LuWaves
            className={`hover:scale-105 bg-white ${
              route === "sea" ? "text-primary-500" : "text-gray-600"
            }`}
            size={22}
          />
        </button>
        <button
          onClick={handleRoute}
          id="road"
          className="flex bg-white h-10 mt-2 rounded-md justify-center items-center hover:scale-105 px-2 shadow-md"
        >
          <TbRoad
            className={` hover:scale-105 bg-white ${
              route === "road" ? "text-primary-500" : "text-gray-600"
            }`}
            size={22}
          />
        </button>
        <button
          onClick={handleRoute}
          id="air"
          className="flex bg-white h-10 mt-2 rounded-md justify-center items-center hover:scale-105 px-2 shadow-md"
        >
          <RiCloudWindyLine
            className={` hover:scale-105 bg-white ${
              route === "air" ? "text-primary-500" : "text-gray-600"
            }`}
            size={22}
          />
        </button>
      </div>

      <div className="w-11/12 md:w-3/12 lg:w-3/12 relative mt-2 bg-white rounded-md shadow-sm px-3.5 py-2.5 h-10 border-2 hover:border-gray-300">
        <div className="pointer-events-none absolute inset-y-0 z-10 left-0 flex items-center pl-3">
          <HiLocationMarker
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          id="from"
          {...(register("from"), { required: true })}
          className="block w-full absolute inset-y-0 left-0  rounded-md font-medium border-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
          placeholder="Origin Of Shipment"
          onChange={handleChange}
          value={inputValueFrom}
        />
        <div
          id="suggestion"
          className="left-0 absolute z-20 mt-4 w-full overflow-hidden rounded-md bg-white"
        >
          {Array.isArray(suggestionsFrom)
            ? suggestionsFrom?.slice(0, 5).map(([key, data]) => (
                <div
                  key={key}
                  onClick={() => handleSelectFrom(data.name)}
                  className="cursor-pointer py-2 px-3 hover:bg-slate-100 z-20"
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

      <button className="flex justify-center items-center hover:scale-105 px-2">
        <TbArrowsExchange2 className=" text-gray-400 bg-white" size={30} />
      </button>

      <div className="w-60 mx-2 relative mt-2 bg-white rounded-md shadow-sm px-3.5 py-2.5 h-10 border-2 hover:border-gray-300">
        <div className="pointer-events-none absolute inset-y-0 z-10 right-0 flex items-center pr-3">
          <HiLocationMarker
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          {...register("to", { required: true })}
          value={inputValueTo}
          onChange={handleChange}
          className="block w-full rounded-md absolute inset-y-0 right-0 border-0 py-1.5 pl-10 font-medium text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
          placeholder="Destination Of Shipment"
        />
        <div
          id="suggestion"
          className="left-0 absolute z-20 mt-4 w-full overflow-hidden rounded-md bg-white"
        >
          {Array.isArray(suggestionsTo)
            ? suggestionsTo?.slice(0, 5).map(([key, data]) => (
                <div
                  key={key}
                  onClick={() => handleSelectTo(data.name)}
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

      <div className="w-60 mx-2 relative mt-2 bg-white rounded-md shadow-sm px-3.5 py-2.5 h-10 border-2 hover:border-gray-300 ">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 z-10">
          <BsFillCalendarFill className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="date"
          {...register("date", { required: true })}
          className="block w-full absolute inset-y-0 right-0 rounded-md border-0 py-1.5 pl-10 text-gray-600 font-medium placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
          placeholder="Select date"
        />
      </div>

      <div className=" flex justify-center items-center">
        <button
          onClick={() => clickHandler()}
          type="button"
          className="rounded-md w-23 h-10 mt-2 ml-4 px-3 py-2 text-sm font-semibold text-white shadow-sm bg-primary-500 hover:bg-fuchsia-700 items-center my-auto relative"
        >
          Add Quantity
        </button>
      </div>
      <div className=" z-20">
        {show ? <ContainerInputBar register={register} /> : ""}
      </div>
    </form>
  );
}

export default ShippingFilter;
