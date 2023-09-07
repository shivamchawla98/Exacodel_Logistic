import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ title, children }: any) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="">
      <div className="border-b border-gray-900/10 pb-12 my-12 "/>
    <h2 className=" text-lg font-semibold leading-7 text-gray-900 text-center py-4">{title}</h2>


      {children}
    </div>
  );
}
