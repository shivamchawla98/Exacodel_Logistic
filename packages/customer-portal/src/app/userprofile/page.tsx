import React from 'react'
import UserDetails from '@/components/UserDetails'
import LeftbarUser from '@/components/LeftbarUser'

function page() {
  return (
    <div className='w-full bg-blue-100'>
        <h2 style={{paddingLeft: "73px", paddingTop: "29px", paddingBottom: "29px"}} className='font-InterFont font-semibold text-2xl bg-blueGray-50 w-screen text-sky-900'>My Account</h2>
        <div className='flex'>
            <LeftbarUser />
            <UserDetails />
        </div>
    </div>
  )
}

export default page