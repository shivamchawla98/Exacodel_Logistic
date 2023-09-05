/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


const userProfile = [
  { fieldName: "Company Name", data: "Fora" },
  { fieldName: "Full name", data: "Tom Cook" },
  { fieldName: "Email address", data: "tom.cook@example.com" },
  { fieldName: "Designation", data: "Human Resources Manager" },
];

const companyProfile = [
  { fieldName: "City ", data: "Gurugram" },
  { fieldName: "State", data: "Haryana" },
  { fieldName: "Country", data: "India" },
  { fieldName: "Pin/Zip", data: "122001" },
  { fieldName: "E-mail Id", data: "xyz@gmail.com" },
  { fieldName: "Company website", data: "Hum.com" },
];

const companyInfo = [
  { fieldName: "Type Of Company ", data: "Tom Cook" },
  { fieldName: "Industry Type", data: "tom.cook@example.com" },
  { fieldName: "Products", data: "Clothing" },
  { fieldName: "Main Market", data: "Wearable" },
  { fieldName: "Company Registration Number", data: "cin39439rfjd" },
  { fieldName: "Tax Id Number ", data: "gstcjnef2343" },
  { fieldName: "Pan Number", data: "gstcjnef2343" },
  { fieldName: "Annual Turn Over ", data: "20 cr" },
  { fieldName: "Date Of Incorporation ", data: "12/5/2023" },
];

const FactoryAddress = [
  { fieldName: "City ", data: "Gurugram" },
  { fieldName: "State", data: "Haryana" },
  { fieldName: "Country", data: "India" },
  { fieldName: "Pin/Zip", data: "122001" },
  { fieldName: "E-mail Id", data: "xyz@gmail.com" },
  { fieldName: "Company website", data: "Hum.com" },
];

const WarehouseAddress = [
  { fieldName: "City ", data: "Gurugram" },
  { fieldName: "State", data: "Haryana" },
  { fieldName: "Country", data: "India" },
  { fieldName: "Pin/Zip", data: "122001" },
  { fieldName: "E-mail Id", data: "xyz@gmail.com" },
  { fieldName: "Company website", data: "Hum.com" },
];

const billingAddress = [
  { fieldName: "Director Contact", data: "3498758934" },
  { fieldName: "Name", data: "tom cook" },
  { fieldName: "Job Title", data: "director" },
  { fieldName: "mobile", data: "987435897" },
  { fieldName: "E-mail Id", data: "xyz@gmail.com" },
];

const mainContact = [
  { fieldName: "Director Contact", data: "3498758934" },
  { fieldName: "Name", data: "tom cook" },
  { fieldName: "Job Title", data: "director" },
  { fieldName: "mobile", data: "987435897" },
  { fieldName: "E-mail Id", data: "xyz@gmail.com" },
];

const secondaryContact = [
  { fieldName: "Director Contact", data: "3498758934" },
  { fieldName: "Name", data: "tom cook" },
  { fieldName: "Job Title", data: "director" },
  { fieldName: "mobile", data: "987435897" },
  { fieldName: "E-mail Id", data: "xyz@gmail.com" },
];



const userImage =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const UserAvtar = ({
  user = "John Doe",
  company = "abc company",
  userImage,
}: any) => {
  return (
    <>
      <div className="flex bg-white flex-col justify-center shadow-sm rounded-sm p-8 items-center">
        <img
          className="inline-block h-14 w-14 rounded-full"
          src={userImage}
          alt="User Image"
        />
        <p className="text-2xl text-gray-900 dark:text-white">{user}</p>
        <p className="text-base text-gray-900 dark:text-white">{company}</p>
      </div>
    </>
  );
};

const FieldInProfileSection = ({ fieldName, data }: any) => {
  return (
    <div className="pt-6 sm:flex">
      <dt className="font-medium text-gray-800 sm:w-64 sm:flex-none sm:pr-6">
        {fieldName}
      </dt>
      <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto lg:mr-96">
        <div className="text-gray-700">{data}</div>
        <button
          type="button"
          className="font-semibold text-sky-700 hover:text-sky-500"
        >
          Update
        </button>
      </dd>
    </div>
  );
};

const ProfileInfoSection = ({ children, title = "Profile", id, showField, setShowField}: any) => {
  // const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    // setIsOpen(!isOpen);
    // isOpen ? setShowField(true) : setShowId(false);
    setShowField(id)

  };
  return (
    <div className="bg-white shadow-md rounded-sm mx-auto max-w-2xl p-8 space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none py-5 mb-4">
      <div>
        <div className="flex">
          <div className="w-11/12">
            {" "}
            <h2 className="text-xl font-medium leading-7 text-gray-700">
              {title}
            </h2>
          </div>
          <div>
            <ChevronDownIcon
              onClick={toggleDropdown}
              id={id}
              className="-mr-1 h-7 w-7 text-gray-400 hover:text-sky-600 rounded-md hover:border-sky-600 cursor-pointer hover:border-2"
              aria-hidden="true"
            />
          </div>
        </div>

        {showField == id && (
          <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
            {children}
          </dl>
        )}
      </div>
    </div>
  );
};



const AllInfoFields = () => {
  const [showField, setShowField] = useState("profileInfo"); 
  return (
    <>
     <ProfileInfoSection title="Profile Information" id = "profileInfo" showField={showField} setShowField={setShowField}>
        {userProfile.map((item) => {
          return (
            <FieldInProfileSection
              key={item.fieldName}
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>

      <ProfileInfoSection title="Company Profile" id = "companyPro" showField={showField} setShowField={setShowField}>
        {companyProfile.map((item) => {
          return (
            <FieldInProfileSection
              key={item.fieldName}
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>

      <ProfileInfoSection title="Company Information" id = "compInfo" showField={showField} setShowField={setShowField}>
        {companyInfo.map((item) => {
          return (
            <FieldInProfileSection
              key={item.fieldName}
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>

      <ProfileInfoSection title="Factory Address" id = "factoAddr" showField={showField} setShowField={setShowField}>
        {FactoryAddress.map((item) => {
          return (
            <FieldInProfileSection
              key={item.fieldName}
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>

      <ProfileInfoSection title="Warehouse Address" id = "wareAddr" showField={showField} setShowField={setShowField}>
        {WarehouseAddress.map((item) => {
          return (
            <FieldInProfileSection
              key={item.fieldName}
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>

      <ProfileInfoSection title="Billing Address" id = "billinAddr" showField={showField} setShowField={setShowField}>
        {billingAddress.map((item) => {
          return (
            <FieldInProfileSection
              key={item.fieldName}
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>
      
      <ProfileInfoSection title="Main Contact" id = "mainContact" showField={showField} setShowField={setShowField}>
        {mainContact.map((item) => {
          return (
            <FieldInProfileSection
              key={item.fieldName}
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>
      
      <ProfileInfoSection title="Secondary Contact" id = "seconContact" showField={showField} setShowField={setShowField}>
        {secondaryContact.map((item) => {
          return (
            <FieldInProfileSection
              key={item.fieldName}
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>
    </>
  )
}


function page() {


  return (
    <div className="bg-white">
      {/* <h2 style={{paddingLeft: "73px", paddingTop: "29px", paddingBottom: "29px"}} className='font-InterFont font-semibold text-2xl bg-blueGray-50 w-screen text-sky-900'>My Account</h2>
        <div className='flex w-full'>
            <LeftbarUser />
            <UserDetails />
        </div> */}

      <UserAvtar
        user="John Doe"
        company="awadh enterprise"
        userImage={userImage}
      />
      <AllInfoFields />
     
    </div>
  );
}

export default page;
