import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import GET_ALL_WAREHOUSE from "@/graphql/query/getAllWarehouse";




function AllWarehouse({setActiveItem, setApprovalIndex}:any) {
  const { loading, error, data, refetch} = useQuery(GET_ALL_WAREHOUSE);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 28; // Number of items to display per page
  let [isApproved, setIsApproved] = useState<any>(false);
 


  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    refetch();
  }, [isApproved])

  console.log(data);


  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let warehouse = data?.getAllWarehouses;

  const totalPages = Math.ceil(data?.getAllWarehouses.length / itemsPerPage);

  // Filter data based on search query
  const filteredData = data?.getAllWarehouses.filter((person: any) => {
    const fullName = `${person.first_name} ${person.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
                    ID
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Company Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Warehouse Type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    State
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {!error &&
                  !loading &&
                  warehouse
                    .slice(startIndex, endIndex)
                    .map((person: any, index: any) => (
                      <>
                    
                            <tr key={person.email}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                {person.id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.companyName}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.warehouseType}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.State}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                                <button
                                  onClick={() => {
                                    // console.log("warehouse : ", person.id);
                                    setApprovalIndex(person.id)
                                    setActiveItem("warehouseInfo");
                                    
                                  }}
                                  type="button"
                                  className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
                                >
                                  More Info
                                </button>
                              </td>
                    
                            </tr>
                    
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
                  disabled={endIndex >= warehouse.length}
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

export default AllWarehouse;
