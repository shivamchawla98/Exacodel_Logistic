"use client";
import { useState } from "react";
import Stepper from "./components/Stepper";
import BookYourSpace from "./components/BookYourSpace";
import BillingAddress from "./components/BillingAddress";

function Page() {
  const [steps, setSteps] = useState<any[]>([
    {
      id: "01",
      name: "Book Your Space",
      href: "Book Your Space",
      status: "current",
    },
    // {
    //   id: "02",
    //   name: "Billing Address",
    //   href: "Billing Address",
    //   status: "current",
    // },
    { id: "02", name: "Payment", href: "Payment", status: "upcoming" },
  ]);

  const [activePage, setActivePage] = useState("Book Your Space");
  console.log("active page", activePage);
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-11/12">
          {/* <Stepper steps={steps} setActivePage={setActivePage} /> */}
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        {activePage === "Book Your Space" && <BookYourSpace />}
      </div>

      {/* <div className="w-full flex justify-center items-center">
        {activePage === "Billing Address" && <BillingAddress />}
      </div> */}
    </>
  );
}

export default Page;
