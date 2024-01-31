"use client";
import { useState } from "react";
import AlertBanner from "./components/alertBanner";
import { useSelector } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { useLazyQuery, useMutation } from "@apollo/client";
import CREATE_BOOKING_FREIGHT from "@/graphql/mutation/freightBooking";
import CREATE_BOOKING_CONTACT from "@/graphql/mutation/createBookingContactFreightInfo";
const accounts = [
  { id: "maersk", name: "Maersk", description: "2024-01-24" },
  { id: "cosco", name: "Cosco", description: "2024-01-29" },
];
export default function Page() {
  const [counter, setCounter] = useState(1);
  const { isLogedIn } = useSelector((state: any) => state.form);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const searchParams = useSearchParams();
  const id = searchParams.get("shipmentId") ?? "0";
  const departure = searchParams.get("departure") ?? "shangoi";
  const arrival = searchParams.get("arrival") ?? "shangai";
  const readytoload = searchParams.get("date") ?? "23/02/2024";
  const typeofdelivery = searchParams.get("fclOrLcl") ?? "fCl";
  const cargo_details = searchParams.get("cargo_details") ?? "ST20'";
  const price = searchParams.get("price") ?? "330";
  const [filled, setFilled] = useState(true);
  const router = useRouter();
  const [createBookingshipping, { data: data1 }] = useMutation(
    CREATE_BOOKING_FREIGHT
  );
  const [createbookingcontact, { data: data2 }] = useMutation(
    CREATE_BOOKING_CONTACT
  );

  const count = searchParams.get("val1") ?? "0";
  console.log("ye hi value : ", count);

  const setValues = (e: any, setFunc: any) => {
    setFilled(true);
    setFunc(e.target.value);
  };

  const handleBookNow = async () => {
    console.log("phone ", phone);
    console.log("phone ", fullName);
    console.log("phone ", product);
    console.log("phone ", email);
    if (
      phone.length === 0 &&
      fullName.length === 0 &&
      product.length === 0 &&
      email.length === 0
    ) {
      setFilled(false);
      return;
    }
    try {
      let { data } = await createBookingshipping({
        variables: {
          input: {
            departure: departure,
            arrival: arrival,
            readytoload: readytoload,
            typeofdelivery: typeofdelivery,
            cargo_details: cargo_details,
            price: price,
          },
        },
      });
      let { data: data3 } = await createbookingcontact({
        variables: {
          input: {
            firstname: fullName,
            lastname: "",
            phoneno: phone,
            email: email,
            description: product,
          },
        },
      });
      if (isLogedIn) {
        router.push("/");
      } else {
        router.push("/profile");
      }
      console.log("successfully data arrived : ", data);
    } catch (error) {
      console.log("Error produced while crerating booking : ", error);
    }
  };

  return (
    <main className="bg-white px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-xl">
          <p className="mt-2 text-4xl font-bold tracking-tight">
            Shipment Details
          </p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Shipement Id</dt>
            <dd className="mt-2 text-orange-500">{id}</dd>
          </dl>
        </div>

        <section
          aria-labelledby="order-heading"
          className="mt-10 border-t border-gray-200"
        >
          <div className="sm:ml-40 sm:pl-6">
            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900 uppercase">
                  Departure
                </dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{departure}</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 uppercase">Arrival</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{arrival}</span>
                  </address>
                </dd>
              </div>
            </dl>

            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900 cap uppercase">
                  READY to load
                </dt>
                <dd className="mt-2 text-gray-700">
                  <p> {readytoload}</p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 uppercase">
                  Type of Delivery
                </dt>
                <dd className="mt-2 text-gray-700">
                  <p>{typeofdelivery}</p>
                </dd>
              </div>
            </dl>

            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900 uppercase">
                  Cargo Details
                </dt>
                <dd className="mt-2 text-gray-700">
                  <p>{cargo_details}</p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 cap uppercase">
                  Number of Container
                </dt>
                <dd className="mt-2 text-gray-700 flex-start pl-12">
                  <button
                    onClick={() => {
                      if (counter === 1) {
                        return;
                      }
                      setCounter(counter - 1);
                    }}
                    className="px-4 py-4 flex-center w-8 h-8 text-sm font-medium shadow-md text-gray-600"
                  >
                    -
                  </button>

                  <div className="text-sm px-4 w-8 flex-center h-8 py-4 font-medium text-gray-600 shadow-md">
                    {counter}
                  </div>
                  <button
                    onClick={() => setCounter(counter + 1)}
                    className="px-4 py-4 w-8 text-sm h-8 flex-center font-medium shadow-md text-gray-600"
                  >
                    +
                  </button>
                </dd>
              </div>
              <div></div>
            </dl>

            <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">₹ {price}</dd>
              </div>
            </dl>
          </div>
          <div className=""></div>
        </section>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="max-w-xl">
          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Schedule</dt>
          </dl>
        </div>

        <section
          aria-labelledby="order-heading"
          className="mt-10 border-t border-gray-200"
        >
          <div className="sm:ml-40 sm:pl-6">
            <fieldset className="mt-2">
              <div className="divide-y divide-gray-200">
                {accounts.map((account, accountIdx) => (
                  <div
                    key={accountIdx}
                    className="relative flex items-start pb-4 pt-3.5"
                  >
                    <div className="min-w-0 flex-1 text-sm leading-6">
                      <label
                        htmlFor={`account-${account.id}`}
                        className="font-medium text-gray-900"
                      >
                        {account.name}
                      </label>
                      <p
                        id={`account-${account.id}-description`}
                        className="text-gray-500"
                      >
                        {account.description}
                      </p>
                    </div>
                    <div className="ml-3 flex h-6 items-center">
                      <input
                        id={`account-${account.id}`}
                        aria-describedby={`account-${account.id}-description`}
                        name="account"
                        type="radio"
                        defaultChecked={account.id === "checking"}
                        className="h-4 w-4 border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-10">
            {!isLogedIn && <AlertBanner />}
            <h2 className="text-lg font-medium text-gray-900">
              Shipping information
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="full-name"
                    onChange={(e) => setValues(e, setFullName)}
                    name="full-name"
                    placeholder="Full name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    onChange={(e) => setValues(e, setEmail)}
                    name="email-address"
                    placeholder="xyz@email.com"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => setValues(e, setPhone)}
                    placeholder="91+ 12345*****"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    onChange={(e) => setValues(e, setProduct)}
                    name="product"
                    id="product"
                    placeholder="HSN Code"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>
              {!filled && (
                <div
                  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span className="font-medium">Please fill all details! </span>
                </div>
              )}

              <div className="flex justify-end w-full sm:col-span-1 mt-4">
                <button
                  onClick={handleBookNow}
                  className="body-medium leading-6 z-40 bg-primary-500 px-3 rounded-md shadow-sm  text-white hover:bg-fuchsia-700 hover:scale-95 py-1"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
