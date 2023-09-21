const people = [
    { name: 'Lindsay Walton', title: 'Vendor', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Vendor', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Vendor', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Vendor', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Vendor', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]

function Vendors({onApprovalClick}) {
  return (
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
          {people.map((person) => (
            <tr key={person.email}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {person.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> 
              <button
              onClick={onApprovalClick}
              type="button" className="text-sky-600 hover:text-sky-700 rounded-md shadow-md py-2 px-2">
                  Approve<span className="sr-only">, {person.name}</span>
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Vendors