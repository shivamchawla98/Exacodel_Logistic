"use client";
import React from "react";
import HotDeals from "./components/HotDeals";
import Hero from "./components/Hero";
import Service from "./components/Service";
import GetStarted from "./components/GetStarted";
import Feature from "./components/Feature";
import Brand from "./components/Brand";
import HomeBlogSection from "./components/HomeBlogSection";
import Descript from "./components/Descript";
import { useSelector } from "react-redux";
import RolePopup from "@/components/form components/RolePopup";
import Slider from "./components/search bar component/Slider";

export default function Home() {
  const signupclicked = useSelector(
    (state: any) => state.selectForm.signUpClicked
  );
  console.log("env variable", process.env.customKey);

  return (
    <>
      {signupclicked && <RolePopup />}
      <Hero />
      <HotDeals />
      <Descript />
      <GetStarted />
      <Service />
      <Slider />
      <Feature />
      <Brand />
      <HomeBlogSection />
    </>
  );
}
