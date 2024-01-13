import GET_WARE_HOUSE_BY_ID from "@/graphql/query/getWarehouseById";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TotalCostCard({ warehouseId, requiredSpace }: any) {
  const { moveInDate, moveOutDate } = useSelector(
    (state: any) => state.warehouseSlice
  );
  // move in day format
  let moveInDay = moveInDate.getUTCDate();
  let moveInMonth = moveInDate.getUTCMonth();
  let moveInYear = moveInDate.getUTCFullYear();
  // move out day format
  let moveOutDay = moveOutDate.getUTCDate();
  let moveOutMonth = moveOutDate.getUTCMonth();
  let moveOutYear = moveOutDate.getUTCFullYear();
  // day difference
  function getTotalDays(moveInDate: any, moveOutDate: any) {
    let totalSecond = Math.abs(moveOutDate - moveInDate) / 1000;
    let dayDifference = Math.floor(totalSecond / (60 * 60 * 24));
    return dayDifference;
  }

  console.log(moveInDay);
  const { data, error, loading, refetch } = useQuery(GET_WARE_HOUSE_BY_ID, {
    variables: {
      id: warehouseId * 1,
    },
  });
  console.log(data, warehouseId);

  return (
    <div className="overflow-hidden rounded-md bg-white shadow mt-6">
      {loading && <>Loading ...</>}
      {error && <>Error ...</>}
      <li className="px-6 py-2 bg-fuchsia-100 flex justify-evenly items-center ">
        <p className="text-base body-semibold text-gray-900">Your Booking</p>
      </li>
      <ul role="list" className="divide-y divide-gray-200">
        <li className="px-6 py-2">
          <p className="text-sm text-gray-600">
            Warehouse : <strong>{data?.getWarehouseById?.uniqueid}</strong>
          </p>
        </li>
        <li className="px-6 py-2">
          <p className="text-sm text-gray-600">
            Required Space : <strong>{requiredSpace * 1} Sq. Ft.</strong>
          </p>
        </li>
        <li className="px-6 py-2">
          <p className="text-sm text-gray-600">
            Montly rental :{" "}
            <strong className="text-sm paragraph-semibold">
              ₹{requiredSpace * data?.getWarehouseById?.storageCharges * 28}
            </strong>
          </p>
        </li>
        <li className="px-6 py-2">
          <p className="text-sm text-gray-600">
            Move in :{" "}
            <strong>{`${moveInDay} / ${moveInMonth} / ${moveInYear}`}</strong>
          </p>
        </li>
        <li className="px-6 py-2">
          <p className="text-sm text-gray-600">
            Move out date :{" "}
            <strong>{`${moveOutDay} / ${moveOutMonth} / ${moveOutYear}`}</strong>
          </p>
        </li>
        <li className="px-6 py-2">
          <p className="text-sm text-gray-600">
            Discount : <strong>₹{0.0}</strong>
          </p>
        </li>
        <li className="px-6 py-2">
          <p className="text-sm text-gray-600">
            Total Bookings Day :{" "}
            <strong>{getTotalDays(moveInDate, moveOutDate)}</strong>
          </p>
        </li>

        <li className="px-6 py-2 bg-fuchsia-100 flex justify-evenly items-center ">
          <p className="text-base font-medium text-gray-900">Total</p>
          <span className="text-primary-500 pl-10 text-base body-semibold">
            ₹{" "}
            {getTotalDays(moveInDate, moveOutDate) *
              data?.getWarehouseById?.storageCharges *
              requiredSpace}
          </span>
        </li>
      </ul>
    </div>
  );
}
