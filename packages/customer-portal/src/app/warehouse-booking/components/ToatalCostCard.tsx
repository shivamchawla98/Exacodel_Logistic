const items = [
  { id: 1, name: "Warehouse", value: "Amazon" },
  { id: 2, name: "Required Space", value: "43 SQFT" },
  { id: 3, name: "Move-in Date", value: "16 Dec 2023" },
  { id: 4, name: "Move-out Date", value: "15 Dec 2024" },
  { id: 5, name: "Monthly Rental", value: "₹3,044.00" },
  { id: 6, name: "Discount", value: "₹0.00" },
  { id: 7, name: "GST @ 18%", value: "₹548.00" },
  // More items...
];

export default function TotalCostCard() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow mt-6">
      <li className="px-6 py-2 bg-sky-200 flex justify-evenly items-center ">
        <p className="text-lg font-medium text-gray-700">Your Booking</p>
      </li>
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-2">
            <p className="text-sm text-gray-600">
              {item.name} : <strong>{item.value}</strong>
            </p>
          </li>
        ))}
        <li className="px-6 py-2 bg-sky-200 flex justify-evenly items-center ">
          <p className="text-base font-medium text-gray-700">Total</p>
          <span className="text-green-500 pl-10 text-lg">₹ 3500</span>
        </li>
      </ul>
    </div>
  );
}
