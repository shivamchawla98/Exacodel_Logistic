"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsBox2 } from "react-icons/bs";
import { CiGlobe, CiClock2 } from "react-icons/ci";
import { LuShip } from "react-icons/lu";

export function AccordionAlwaysOpen() {
  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className="mt-8">
      <Accordion open={alwaysOpen}>
        <AccordionHeader className="flex-start" onClick={handleAlwaysOpen}>
          <span className=" h-10 w-10 bg-orange-500 mr-4 rounded-full flex-center">
            <BsBox2 className="h-4 w-4 text-black'" />
          </span>
          <p className="">Discover</p>
        </AccordionHeader>
        <AccordionBody>
          <ul className="paragraph-medium pl-8  w-3/4 text-xs list-disc">
            <li>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader className="flex-start" onClick={() => handleOpen(1)}>
          <span className=" h-10 w-10 bg-orange-500 mr-4 rounded-full flex-center">
            <CiGlobe className="h-4 w-4 text-black'" />
          </span>
          <p className="">Plan & Book</p>
        </AccordionHeader>
        <AccordionBody>
          <ul className="paragraph-medium pl-8 w-3/4 text-xs list-disc">
            <li>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader className="flex-start" onClick={() => handleOpen(2)}>
          <span className=" h-10 w-10 bg-orange-500 mr-4 rounded-full flex-center">
            <CiClock2 className="h-4 w-4 text-black'" />
          </span>
          <p className="">Execute</p>
        </AccordionHeader>
        <AccordionBody>
          <ul className="paragraph-medium pl-8 w-3/4 text-xs list-disc">
            <li>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader className="flex-start" onClick={() => handleOpen(2)}>
          <span className=" h-10 w-10 bg-orange-500 mr-4 rounded-full flex-center">
            <LuShip className="h-4 w-4 text-black'" />
          </span>
          <p className="">Execute</p>
        </AccordionHeader>
        <AccordionBody>
          <ul className="paragraph-medium pl-8 w-3/4 text-xs list-disc">
            <li>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
