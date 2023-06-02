'use client';

import UserData from '../components/UserData'
import { useState } from 'react';
import Card from '../components/Card';
import LeftbarUser from '../components/LeftBar';
import { MdOutlineArrowBackIos } from 'react-icons/md';


export default function page() {
  const [isHidden, setIsHidden] = useState(true);
  let [adminView, setAdminView] = useState(false);
  let [customerView, setCustomerView] = useState(true);


  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const toggleView = () => {
    setAdminView(adminView = true);
    setCustomerView(customerView = false);
  }

  return (
    <section className="flex justify-center h-screen">
      {isHidden && <LeftbarUser change={toggleView} />}
      <MdOutlineArrowBackIos
        onClick={handleClick}
        className=" hover:bg-gray-600 hover:text-blue-600 cursor-pointer mt-10 ml-5 "
        color="#0f172a"
        size={51}
      />

      <section className="flex flex-col justify-center w-3/4">
   

        { adminView ? <UserData /> : customerView ? "" : ""}
      </section>
    </section>
  );
}
