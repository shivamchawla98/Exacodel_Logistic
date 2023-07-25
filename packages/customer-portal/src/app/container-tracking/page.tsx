'use client';
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const incentives = [
  {
    name: 'Free Shipping',
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Support',
    description:
      'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Gift Cards',
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
  },
];

const Incentive = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {incentives.map((incentive) => (
            <div key={incentive.name}>
              <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {incentive.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {incentive.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InteractiveMap = () => {
  return (
    <div className="h-screen flex justify-end items-center">
      {/* Set the height to full screen height and center-align the content */}
      <MapContainer center={[51.505, -0.09]} zoom={13} className="w-5/6 h-full">
        {/* Set the width and height to full container size */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>A sample marker with a popup.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

const Desp = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-22 lg:px-4">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              We built our business on great customer service
            </h2>
            <p className="mt-4 text-gray-500">
              At the beginning at least, but then we realized we could make a
              lot more money if we kinda stopped caring about that. Our new
              strategy is to write a bunch of things that look really good in
              the headlines, then clarify in the small print but hope people
              don't actually read it.
            </p>
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
            <img
              src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
              alt=""
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Desp2 = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-22 lg:px-4">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
            <img
              src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
              alt=""
              className="object-cover object-center"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              We built our business on great customer service
            </h2>
            <p className="mt-4 text-gray-500">
              At the beginning at least, but then we realized we could make a
              lot more money if we kinda stopped caring about that. Our new
              strategy is to write a bunch of things that look really good in
              the headlines, then clarify in the small print but hope people
              don't actually read it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PromotionSignUp = () => {
  return (
    <section
      aria-labelledby="sale-heading"
      className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2
          id="sale-heading"
          className="text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl"
        >
          Get 25% off during our one-time sale
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
          Most of our products are limited releases that won&apos;t come back.
          Get your favorite items while they're in stock.
        </p>
        <a
          href="#"
          className="mt-6 inline-block w-full rounded-md border border-transparent bg-sky-900 px-8 py-3 font-medium text-white hover:bg-sky-800 sm:w-auto p-6"
        >
          Buy It
        </a>
        <a
          href="#"
          className="mt-6 inline-block w-full rounded-md border border-transparent bg-sky-500 px-8 py-3 font-medium text-white hover:bg-sky-400 sm:w-auto lg:ml-6"
        >
          Request Demo
        </a>
      </div>
    </section>
  );
};

const HowItWorks = () => {
    return (
        <div className="bg-white">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
            <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
              <div className="px-6 lg:px-0 lg:pt-4">
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Supercharge your web applications
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                      amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Documentation
                      </a>
                      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        View on GitHub <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                <div
                  className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                  aria-hidden="true"
                />
                <div className="shadow-lg md:rounded-3xl">
                  <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                    <div
                      className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                      aria-hidden="true"
                    />
                    <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                      <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                            <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                NotificationSetting.jsx
                              </div>
                              <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                            </div>
                          </div>
                          <div className="px-6 pb-14 pt-6">{/** here our illustration */}</div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>
        </div>
      )
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="">
        {/* Static sidebar for desktop */}
        <div className="lg:h-screen lg:inset-y-0 lg:z-50 lg:flex lg:w-4/12 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-slate-200 pb-4">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li className="w-full">
                  <ul role="list" className="-mx-2 space-y-1 p-6 rounded-sm">
                    <form
                      className="relative flex flex-1 h-6"
                      action="#"
                      method="GET"
                    >
                      <label htmlFor="search-field" className="sr-only">
                        Enter Container Number
                      </label>
                      <MagnifyingGlassIcon
                        className="pointer-events-none absolute inset-y-0 top-2 left-1 h-full w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        id="search-field"
                        className="block w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm h-10 rounded-md"
                        placeholder="Enter Container Number..."
                        type="search"
                        name="search"
                      />
                    </form>
                  </ul>
                </li>
                <li>
                  <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700 " />
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    <p className="mt-6 text-base leading-7 text-gray-700 px-10">
                      Aliquet nec orci mattis amet quisque ullamcorper neque,
                      nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                      aliquam. Quisque id at vitae feugiat egestas.
                    </p>
                  </ul>
                </li>

                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400"></div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    <p className="mt-6 text-xl leading-8 text-gray-700 px-10">
                      Aliquet nec orci mattis amet quisque ullamcorper neque,
                      nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                      aliquam. Quisque id at vitae feugiat egestas.
                    </p>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <main className="">
            <InteractiveMap />
          </main>
        </div>
      </div>
      <PromotionSignUp />
      <Incentive />
      <Desp />
      <Desp2 />
      <HowItWorks />
    </>
  );
}
