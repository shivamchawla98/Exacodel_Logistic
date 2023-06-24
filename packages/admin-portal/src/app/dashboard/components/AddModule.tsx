function AddModule() {
  return (
    <div className="space-y-6 sm:px-6 lg:w-full mt-24 lg:px-0 flex items-center justify-center flex-col">
      <div className="w-11/12">
        <h3 className="text-2xl text-center font-semibold  leading-6 text-gray-900">
          Create New Module
        </h3>
        <form action="#" method="POST" className="lg:w-full ">
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-xl font-medium  text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>

          {/* radio buttons */}
          <div className="flex items-center mb-4 mt-6">
            <input
              id="default-radio-1"
              type="radio"
              defaultValue=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Active
            </label>
          </div>
          <div className="flex items-center">
            <input
              defaultChecked=""
              id="default-radio-2"
              type="radio"
              defaultValue=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              InActive
            </label>
          </div>

          <div className="mt-8 px-4 py-3 text-right sm:px-6 flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Module
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModule;
