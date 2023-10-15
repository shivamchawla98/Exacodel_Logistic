'use client'
import React from 'react'
import HotDeals from './components/HotDeals'
import Hero from './components/Hero'
import Service from './components/Service'
import GetStarted from './components/GetStarted'
import Feature from './components/Feature'
import Brand from './components/Brand'
import HomeBlogSection from './components/HomeBlogSection'
import Descript from './components/Descript'
import { useSelector } from 'react-redux'
import RolePopup from '@/components/form components/RolePopup'

export default function Home() {
  const signupclicked = useSelector((state: any) => state.selectForm.signUpClicked)
  
  return (
    <>
       {signupclicked && <RolePopup />}
        <Hero />
        <HotDeals />
        <Descript />
        <Service />
        <GetStarted />
        <Feature />
        <Brand />
        <HomeBlogSection />
    </>
  )
}
