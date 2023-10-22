import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import LIST_INITIAL_REGISTRATION from "@/graphql/query/listInitialRegistration";


const userType = ["CUSTOMER", "VENDOR", "OVERSEAS_AGENT"];
const customerSubtype = ["MANUFACTURER", "MERCHANT_TRADER", "MANUFACTURER_EXPORTER", "MERCHANT_EXPORTER"];
const vendorSubtype = ["WAREHOUSE_COMPANY", "COLD_STORAGE_COMPANY"];
const overseasSubtype = ["FOREIGN_AGENT"];

function TruckingReview({isApproved, onApprovalClick, setApprovalIndex }: any) {
  const { loading, error, data, refetch} = useQuery(LIST_INITIAL_REGISTRATION);
  const [isLoading, setIsLoading] = useState(true);
  const [userTypeFilter, setUserTypeFilter] = useState("All");
  const [subUserTypeFilter, setSubUserTypeFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page


  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    refetch();
  }, isApproved)

  console.log(data);


  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let approvedUsers = data?.listInitialRegistrations.filter((user: any) => user.isapproved === 'Approval_pending');

  const totalPages = Math.ceil(data?.listInitialRegistrations.filter((user: any) => user.isapproved === 'Approval_pending').length / itemsPerPage);

  // Filter data based on search query
  const filteredData = data?.listInitialRegistrations.filter((person: any) => {
    const fullName = `${person.first_name} ${person.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div className="flex justify-between items-center flex-wrap mb-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="userTypeFilter" className="text-sm font-semibold">
            User Type Filter:
          </label>
          <select
            id="userTypeFilter"
            className="border rounded-md px-2 py-1 text-left text-sm font-semibold text-gray-900"
            value={userTypeFilter}
            onChange={(e) => setUserTypeFilter(e.target.value)}
          >
            <option className="text-left text-sm tex font-medium text-gray-900" value="All">
              All
            </option>
            {userType.map((type: any) => (
              <option key={type} className="text-left text-sm tex font-medium text-gray-900" value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="subUserTypeFilter" className="text-sm font-semibold">
            Sub User Type Filter:
          </label>
          <select
            id="subUserTypeFilter"
            className="border rounded-md px-2 py-1 text-left text-sm font-semibold text-gray-900"
            value={subUserTypeFilter}
            onChange={(e) => setSubUserTypeFilter(e.target.value)}
          >
            <option className="text-left text-sm tex font-medium text-gray-900" value="All">
              All
            </option>
            {[...customerSubtype, ...vendorSubtype, ...overseasSubtype].map((type) => (
              <option key={type} className="text-left text-sm tex font-medium text-gray-900" value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            id="search"
            className="border focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 px-3"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
            <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
            <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
          </div>
        ) : error ? (
          <p>Error loading data</p>
        ) : (
          <>
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    User type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Approval
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {!error &&
                  !loading &&
                  approvedUsers
                    .slice(startIndex, endIndex)
                    .map((person: any, index: any) => (
                      <>
                        {console.log("isApproved : ", person.isapproved)}

                        {((userTypeFilter === person.userType && (
                          userTypeFilter === "CUSTOMER" &&
                          subUserTypeFilter === person.customerSubType ||
                          userTypeFilter === "VENDOR" &&
                          subUserTypeFilter === person.vendorSubType ||
                          userTypeFilter === "OVERSEAS_AGENT" &&
                          subUserTypeFilter === person.overseasAgentSubType ||
                          subUserTypeFilter === "All"
                        )) || userTypeFilter === "All") && (
                            <tr key={person.email}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                {person.first_name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.userType}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.email}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                                <button
                                  onClick={() => {
                                    console.log("vendor : ", person.id);

                                    setApprovalIndex(person.id);
                                    onApprovalClick();
                                  }}
                                  type="button"
                                  className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
                                >
                                  Review
                                </button>
                              </td>
                    
                            </tr>
                          )}
                      </>
                    ))}
              </tbody>
            </table>
            {/* Pagination controls */}
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2 justify-evenly my-4">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className=" underline cursor-pointer text-gray-600 hover:text-gray-500 rounded-md font-medium text-sm  py-1 px-2 mx-2"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={endIndex >= approvedUsers.length}
                  className="underline cursor-pointer text-gray-600 hover:text-gray-500 rounded-md font-medium text-sm  py-1 px-2 mx-2"
                >
                  Next
                </button>
              </div>
              <div className="pr-2 shadow-sm text-xs  text-gray-600 rounded-md font-medium  py-2 px-4 mx-2">
                Page <strong> {currentPage} </strong> of {totalPages}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TruckingReview;
