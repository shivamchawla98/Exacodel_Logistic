import { useQuery } from "@apollo/client";
import LIST_INITIAL_REGISTRATION from "@/graphql/query/listInitialRegistration";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { EyeIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";

export default function Vendors({ onInfoClick, setApprovalIndex }: any) {
  const { userId } = useSelector((state: any) => state.loginSlice);
  const { loading, error, data, refetch } = useQuery(LIST_INITIAL_REGISTRATION);
  const [sorting, setSorting] = useState<any>([]);
  const [filtering, setFiltering] = useState<any>("");
  const myData = useMemo(() => {
    return data?.listInitialRegistrations.filter(
      (user: any) => user.isapproved === "Rejected"
    );
  }, [data?.listInitialRegistrations]);
  /**
   @type import("@tanstack/react-table").columndDef<any>
   */
  const columns = useMemo(
    () => [
      {
        accessorKey: "userType",
        header: "User Type",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "first_name",
        header: "Name",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "companyName",
        header: "Company Name",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "action",
        header: "Approval Status",
        cell: (cell: any) => (
          <div className="flex justify-evenly items-center">
            <XMarkIcon className="h-4 w-4 text-rose-500" />
          </div>
        ),
      },
      {
        accessorKey: "id",
        header: "Actions",
        cell: (cell: any) => (
          <div
            className="flex justify-evenly items-center"
            onClick={() => {
              setApprovalIndex(cell.row.original.id);
              console.log("cell id : ", cell.row.original.id);
              onInfoClick();
            }}
          >
            <EyeIcon className="h-4 w-4 text-sky-500" />
          </div>
        ),
      },
    ],
    [setApprovalIndex]
  );

  const table = useReactTable({
    data: myData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <div className="relative py-8">
          <input
            type="text"
            className="border absolute top-0 max-w-sm right-0 rounded-ee-md rounded-tr-md border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
            onChange={(e) => setFiltering(e.currentTarget.value)}
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-2" />
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
            <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
            <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
          </div>
        ) : error ? (
          <p>Error loading data</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr id={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      scope="col"
                      key={header.id}
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer shadow bg-gray-100"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {
                        { asc: "▲", desc: "▼" }[
                          (header.column.getIsSorted() as "asc" | "desc") ??
                            null
                        ]
                      }
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {table.getRowModel().rows.map((row) => (
                <tr id={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* Pagination controls */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2 justify-evenly my-4">
            <button
              onClick={() => table.setPageIndex(0)}
              className=" underline cursor-pointer text-gray-600 hover:text-gray-500 rounded-md font-medium text-sm  py-1 px-2 mx-2"
            >
              First Page
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={table.getState().pagination.pageIndex === 0}
              className=" underline cursor-pointer text-gray-600 hover:text-gray-500 rounded-md font-medium text-sm  py-1 px-2 mx-2"
            >
              Previous
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={
                table.getState().pagination.pageIndex >=
                table.getPageCount() - 1
              }
              className="underline cursor-pointer text-gray-600 hover:text-gray-500 rounded-md font-medium text-sm  py-1 px-2 mx-2"
            >
              Next
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              className="underline cursor-pointer text-gray-600 hover:text-gray-500 rounded-md font-medium text-sm  py-1 px-2 mx-2"
            >
              Last Page
            </button>
          </div>
          <div className="pr-2 shadow-sm text-xs  text-gray-600 rounded-md font-medium  py-2 px-4 mx-2">
            Page <strong> {table.getState().pagination.pageIndex + 1} </strong>{" "}
            of {table.getPageCount()}
          </div>
        </div>
      </div>
    </div>
  );
}
