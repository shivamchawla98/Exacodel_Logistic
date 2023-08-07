'use client'
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const userProfile = [
  { fieldName: 'Full name', data: 'Tom Cook' },
  { fieldName: 'Email address', data: 'tom.cook@example.com' },
  { fieldName: 'Designation', data: 'Human Resources Manager' },
];

const userImage =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

const UserAvtar = ({
  user = 'John Doe',
  company = 'abc company',
  userImage,
}) => {
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

const FieldInProfileSection = ({ fieldName, data }) => {
  return (
    <div className="pt-6 sm:flex">
      <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
        {fieldName}
      </dt>
      <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
        <div className="text-gray-900">{data}</div>
        <button
          type="button"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Update
        </button>
      </dd>
    </div>
  );
};

const ProfileInfoSection = ({ children, title="Profile" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white shadow-sm rounded-sm mx-auto max-w-2xl p-8 space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none py-5 mb-4">
      <div>
        <div className="flex">
          <div className='w-11/12'>
            {' '}
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              {title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div>
            <ChevronDownIcon
              onClick={toggleDropdown}
              className="-mr-1 h-7 w-7 text-gray-400 hover:text-purple-600 rounded-md hover:border-purple-600 cursor-pointer hover:border-2"
              aria-hidden="true"
            />
          </div>
        </div>

        {isOpen && <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          {children}
        </dl>}
      </div>
    </div>
  );
};

function page() {
  return (
    <div className="bg-gray-100">
      {/* <h2 style={{paddingLeft: "73px", paddingTop: "29px", paddingBottom: "29px"}} className='font-InterFont font-semibold text-2xl bg-blueGray-50 w-screen text-sky-900'>My Account</h2>
        <div className='flex w-full'>
            <LeftbarUser />
            <UserDetails />
        </div> */}

      <UserAvtar
        user="Ram Doe"
        company="awadh enterprise"
        userImage={userImage}
      />
      <ProfileInfoSection title='Profile Information'>
        {userProfile.map((item) => {
          return (
            <FieldInProfileSection
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>

      <ProfileInfoSection title='Company Information'>
        {userProfile.map((item) => {
          return (
            <FieldInProfileSection
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>
      <ProfileInfoSection title='Documents'>
        {userProfile.map((item) => {
          return (
            <FieldInProfileSection
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>
      <ProfileInfoSection title='Notification Setting'>
        {userProfile.map((item) => {
          return (
            <FieldInProfileSection
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>
      <ProfileInfoSection title='Verified Documents'>
        {userProfile.map((item) => {
          return (
            <FieldInProfileSection
              fieldName={item.fieldName}
              data={item.data}
            />
          );
        })}
      </ProfileInfoSection>
    </div>
  );
}

export default page;
