"use client";

import { useState } from "react";
import Image from "next/image";
import easy from '../asset/icons/easy.png'
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {AiFillCreditCard, AiFillFile} from 'react-icons/ai'
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  departure: string;
  arrival: string;
  readyToLoad: string;
  typeOfDelivery: string;
  cargoDetail: string;
}

const plans = [
  {
    id: "clearence",
    name: "Do you need clearence",
    descriptio: "lorem ipusm dgjsnv svjsnv",
  },
  {
    id: "insurance",
    name: "Do you need Insurance",
    description: "lorem ipusm dgjsnv svjsnv",
  },
  {
    id: "inspection",
    name: "Do you need pre shipment inspection service",
    description: "dsvsv",
  },
];

const songs = [
  {
    id: 1,
    name: "MSC",
    globalName: "MSC BEIJING",
    code: "IV332R",
    date: "2023-08-26",
  },
  {
    id: 2,
    name: "MSC",
    globalName: "MSC BEIJING",
    code: "IV332R",
    date: "2023-08-26",
  },
  {
    id: 3,
    name: "MSC",
    globalName: "MSC BEIJING",
    code: "IV332R",
    date: "2023-08-26",
  },
  {
    id: 4,
    name: "MSC",
    globalName: "MSC BEIJING",
    code: "IV332R",
    date: "2023-08-26",
  },
];

const countryCodes = [
    { code: '+91', label: 'India (+91)' },
    { code: '+1', label: 'United States (+1)' },
    { code: '+44', label: 'United Kingdom (+44)' },
    // Add more country codes as needed
  ];


const PaymentModeSelect = () => {
    const [selectedMode, setSelectedMode] = useState('Pay with Invoice');
  
    const handleModeChange = (mode: any) => {
      setSelectedMode(mode);
    };
  
    return (
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg shadow p-6 lg:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Select Payment Mode</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-2 mx-auto">
            <label className="flex items-center space-x-2 mx-4">
              <input
                type="radio"
                value="invoice"
                checked={selectedMode === 'invoice'}
                onChange={() => handleModeChange('invoice')}
                className="form-radio"
              />
              <AiFillFile size={35} className="text-blue-600"/>
              <span className="font-medium text-gray-700 text-lg">Pay with Invoice</span>
            </label>
            <label className="flex items-center space-x-2 mx-4">
              <input
                type="radio"
                value="creditCard"
                checked={selectedMode === 'creditCard'}
                onChange={() => handleModeChange('creditCard')}
                className="form-radio"
              />
              <AiFillCreditCard size={35} className="text-blue-600"/>
              <span className="font-medium text-gray-700 text-lg">Pay with credit card</span>
            </label>
          </div>
          <p className="mt-4 text-xs text-gray-600">* To apply for priority booking and facilitate booking confirmation, please proceed with the credit card payment. Non-prepaid bookings will be handled in regular regime subject to space & equipment.</p>
        </div>
      </div>
    );
  };

function Addons() {
  return (
    <fieldset className="">
      <legend className="sr-only">Plan</legend>
      <div className="w-full flex flex-col justify-center items-center">
        {plans.map((plan) => (
          <div className=" w-10/12 flex py-6 my-2 justify-evenly bg-gray-50 shadow-sm rounded-sm lg:w-1/2" key={plan.id}>

            <div className="w-12 h-12 rounded-full border-2">
                <Image
                src={easy}
                alt={`image of ${plan.id}`}
                width={45}
                height={45}
                
                />
            </div>

            <div className="mx-auto text-sm flex pt-4 ">
              <label
                htmlFor="helper-checkbox"
                className="text-gray-400 font-medium uppercase"
              >
                {plan.name}
              </label>
            </div>

            <div className="flex items-center px-4">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                value=""
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

const ContactForm = () => {
    const validationSchema = Yup.object().shape({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string()
        .matches(/^\d+$/, 'Invalid phone number')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone is required'),
      description: Yup.string(),
    });
  
    const formik = useFormik({
      initialValues: {
        fullName: '',
        email: '',
        phone: '',
        description: '',
        countryCode: '+91',
      },
      validationSchema,
      onSubmit: (values) => {
        // Handle form submission
        console.log(values);
      },
    });
  
    return (
      <div className="max-w-lg md:max-w-lg lg:max-w-lg mx-auto">
        <h2 className="text-lg font-semibold mb-4">Contact Form</h2>
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4 p-8">
          <div className="mb-4 col-span-3 md:col-span-1 lg:col-span-1">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...formik.getFieldProps('fullName')}
              className={`mt-1 p-2 w-full rounded-md border ${
                formik.touched.fullName && formik.errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
            )}
          </div>
          <div className="mb-4 col-span-3 md:col-span-1 lg:col-span-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
              className={`mt-1 p-2 w-full rounded-md border ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-4 col-span-3 ">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <div className="flex space-x-2 items-center">
            <select
              id="countryCode"
              {...formik.getFieldProps('countryCode')}
              className="mt-1 p-2 rounded-md border border-gray-100"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="phone"
              {...formik.getFieldProps('phone')}
              className={`mt-1 p-2 w-full rounded-md border ${
                formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </div>
          <div className="mb-4 col-span-3">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description (Optional)
            </label>
            <textarea
              id="description"
              {...formik.getFieldProps('description')}
              className="mt-1 p-2 w-full rounded-md border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  departure='',
  arrival='',
}) => {
  const [count, setCount] = useState(1);
  const [selectedSong, setSelectedSong] = useState(null);
  if (!isOpen) return null;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  const handleSongSelect = (songId: any) => {
    setSelectedSong(songId);
  };

  return (
    <div className="fixed pt-96 lg:pt-40 z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center  overflow-auto ">
      <div className="bg-white pt-96 mt-96 pr-10 pb-6 p-6 rounded lg:w-10/12 shadow-md">
        <div className="full flex justify-end pt-96">
          <button
            onClick={onClose}
            className="mt-4 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-200"
          >
            Close
          </button>
        </div>
        <h2 className="text-2xl font-semibold">Your Shipment Information</h2>

        <div className="grid grid-cols-2 w-1/2 col-span-2 mx-auto gap-y-4 pt-12">
          <div>
            <p className="text-gray-400 uppercase">departure</p>
            <p className="text-lg text-gray-800 font-medium">Balti More, US</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium uppercase">arrival</p>
            <p className="text-lg text-gray-800 font-medium">Tuticorin, IN</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium uppercase">Ready To Load</p>
            <p className="text-lg text-gray-800 font-medium">16 AUG, 2023</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium uppercase">
              Type Of Delivery
            </p>
            <p className="text-lg text-gray-800 font-semibold">FCL</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium uppercase">Cargo Details</p>
            <p className="text-lg text-gray-800 font-medium">20 Standard</p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-x-1">
              <button
                onClick={decrement}
                className="bg-gray-50 text-gray-700 shadow-lg font-medium py-2 w-10   hover:bg-gray-300 rounded"
              >
                -
              </button>
              <p className="bg-gray-100 text-gray- rounded font-medium py-2 w-10  hover:bg-gray-300">
                {count}
              </p>
              <button
                onClick={increment}
                className="bg-gray-50 text-gray-700 shadow-lg  font-medium py-2 w-10  hover:bg-gray-300 rounded "
              >
                +
              </button>
            </div>
          </div>
        </div>

        <hr className="h-px my-12 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className=" px-4  flex justify-center ">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-left p-6 bg-gray-100">
              Schedule
            </h2>
            <table className=" divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <tbody className="bg-gray-50 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {songs.map((song) => (
                  <tr
                    className="w-screen md:w-full  grid grid-cols-5"
                    key={song.id}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <input
                        type="radio"
                        name="songSelection"
                        value={song.id}
                        checked={selectedSong === song.id}
                        onChange={() => handleSongSelect(song.id)}
                      />
                    </td>
                    <td className="text-lg text-gray-800 font-medium">
                      {song.name}
                    </td>
                    <td className="text-lg text-gray-800 font-medium">
                      {song.globalName}
                    </td>
                    <td className="text-lg text-sky-800 font-medium">
                      {song.code}
                    </td>
                    <td className="text-lg text-gray-800 font-medium">
                      {song.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr className="h-px my-12 bg-gray-200 border-0 dark:bg-gray-700 "></hr>

        <Addons />
        <hr className="h-px my-12 bg-gray-200 border-0 dark:bg-gray-700 "></hr>

        <PaymentModeSelect />

        <hr className="h-px my-12 bg-gray-200 border-0 dark:bg-gray-700 "></hr>

        <ContactForm />
      </div>
    </div>
  );
};

export default Modal;
