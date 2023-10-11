import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const WAITING_FOR_APPROVAL_QUERY = gql`
  query {
    listInitialRegistrations {
      email
      userType
      first_name
      customerSubType
      vendorSubType
      overseasAgentSubType
      id
    }
  }
`;

const REJECT_USER_MUTATION = gql`
  mutation RejectUser($userId: Int!) {
    rejectUser(userId: $userId) {
      id
      # Include other User fields you want in the response...
    }
  }
`;

const userType = ["CUSTOMER", "VENDOR", "OVERSEAS_AGENT"];
const customerSubtype = ["MANUFACTURER", "MERCHANT_TRADER", "MANUFACTURER_EXPORTER", "MERCHANT_EXPORTER"];
const vendorSubtype = ["WAREHOUSE_COMPANY", "COLD_STORAGE_COMPANY"];
const overseasSubtype = ["FOREIGN_AGENT"];

function Vendors({ onApprovalClick, setApprovalIndex }: any) {
  const { loading, error, data } = useQuery(WAITING_FOR_APPROVAL_QUERY);
  const [isLoading, setIsLoading] = useState(true);
  const [userTypeFilter, setUserTypeFilter] = useState("All");
  const [subUserTypeFilter, setSubUserTypeFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 28; // Number of items to display per page

  const [rejectUser] = useMutation(REJECT_USER_MUTATION);

  const handleRejectUser = async (userId: any) => {
    try {
      const { data } = await rejectUser({
        variables: {
          userId: userId,
        },
      });

      console.log('User rejected:', data.rejectUser);
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
  }, [loading]);

  console.log(data);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(data?.listInitialRegistrations.length / itemsPerPage);

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
              <option className="text-left text-sm tex font-medium text-gray-900" value={type}>
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
              <option className="text-left text-sm tex font-medium text-gray-900" value={type}>
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
                  filteredData
                    .slice(startIndex, endIndex)
                    .map((person: any, index: any) => (
                      <>
                        {console.log("customer ", person.customerSubType)}
                        {(userTypeFilter === person.userType && (
                          userTypeFilter === "CUSTOMER" &&
                          subUserTypeFilter === person.customerSubType ||
                          userTypeFilter === "VENDOR" &&
                          subUserTypeFilter === person.vendorSubType ||
                          userTypeFilter === "OVERSEAS_AGENT" &&
                          subUserTypeFilter === person.overseasAgentSubType ||
                          subUserTypeFilter === "All"
                        )) || userTypeFilter === "All" ? (
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
                                  console.log("vendor : ",index);
                                  
                                  setApprovalIndex(index);
                                  onApprovalClick();
                                }}
                                type="button"
                                className="bg-sky-400 hover:bg-sky-500 text-white text-xs rounded-md shadow-sm py-2 px-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:ring-sky-200"
                              >
                                Approve<span className="sr-only">, {person.first_name}</span>
                              </button>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <button
                                type="button"
                                onClick={(userId = person.id) =>  handleRejectUser(userId)}
                                className="bg-rose-400 hover:bg-rose-500 text-white text-xs rounded-md shadow-sm py-2 px-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:ring-rose-200"
                              >
                                Reject<span className="sr-only">, {person.first_name}</span>
                              </button>
                            </td>
                          </tr>
                        ) : null}
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
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium shadow-md py-1 px-4 mx-2"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={endIndex >= filteredData.length}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium shadow-md py-1 px-4 mx-2"
                >
                  Next
                </button>
              </div>
              <div className="pr-2">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Vendors;
