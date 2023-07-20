import Navbar from '@/components/Navbar'
import React from 'react'
import HotDeals from './components/HotDeals'
import Hero from './components/Hero'
import Service from './components/Service'
import GetStarted from './components/GetStarted'
import Feature from './components/Feature'
import Brand from './components/Brand'
import HomeBlogSection from './components/HomeBlogSection'

function page() {
  return (
    <>
        <Navbar />
        <Hero />
        <HotDeals />
        <Service />
        <GetStarted />
        <Feature />
        <Brand />
        <HomeBlogSection />
    </>
  )
}

export default page