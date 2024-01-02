"use client";
import { useQuery } from "@apollo/client";
import USER_BOOKINGS from "@/graphql/query/userBookings";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export default function Booking() {
  const [userID, setUserID] = useState<number>(-1);
  const token: any = Cookies.get("jwToken");
  useEffect(() => {
    try {
      console.log("Token ", token);
      const decodedToken: any = jwtDecode(token);
      setUserID(decodedToken.id * 1);
    } catch (error) {
      console.log("genereal token : ", error);
    }
  }, [userID, token]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useQuery(USER_BOOKINGS, {
    variables: {
      userId: userID,
    },
  });
  console.log(data);

  if (error) {
    return <>error occuered refresh or re-try this page : (</>;
  }
  if (loading) {
    return <>Loading ...</>;
  }
  return (
    <>
      {!loading && (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Warehouse Bookings
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the Warehouse Bookings in your inventory.
              </p>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Warehouse Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Move In Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Move Out Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Instructions
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data.bookingsByUserId.map((warehouse: any) => (
                      <tr key={warehouse.uniquecode}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {warehouse.uniquecode}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {warehouse.moveInDate}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {warehouse.moveOutDate}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {warehouse.specialInstructions}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a
                            href="#"
                            className="text-sky-600 hover:text-sky-900"
                          >
                            Locate on Map<span className="sr-only"></span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
