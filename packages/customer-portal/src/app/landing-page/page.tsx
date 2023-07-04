import Navbar from '@/components/Navbar'
import React from 'react'
import HotDeals from './components/HotDeals'
import Hero from './components/Hero'
import Service from './components/Service'

function page() {
  return (
    <>
        <Navbar />
        <Hero />
        <HotDeals />
        <Service />
    </>
  )
}

export default page