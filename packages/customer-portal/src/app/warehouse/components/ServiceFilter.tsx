export default function ServiceFilter() {
  return (
    <fieldset className="w-full">
      <legend className="my-2">Notifications</legend>
      <div className=" grid grid-cols-2 w-full">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Fork Lift
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="candidates" className="font-medium text-gray-900">
              Full Time Labour
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Crane
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Pallet
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Office Space
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Supervisor
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
