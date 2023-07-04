function ContainerFilter() {
  return (
    <>

    <ul className="mt-14 w-50 pt-6 m-4 md:ml-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <p className="p-1 text-xl font-semibold text-gray-900 dark:text-white text-center">
      Choose Container Size
    </p>
      <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
          <input
            id="20-standard"
            type="radio"
            defaultValue=""
            name="list-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="20-standard"
            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            20 &apos; Standard
          </label>
        </div>
      </li>
      <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
          <input
            id="40-standard"
            type="radio"
            defaultValue=""
            name="list-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="40-standard"
            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            40 &apos; Standard
          </label>
        </div>
      </li>
      <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
          <input
            id="40-high-cube"
            type="radio"
            defaultValue=""
            name="list-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="40-high-cube"
            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            40 &apos; High Cube
          </label>
        </div>
      </li>
      <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
          <input
            id="45-high-cube"
            type="radio"
            defaultValue=""
            name="list-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="45-high-cube"
            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            45 &apos; High Cube
          </label>
        </div>
      </li>
    </ul>
  </>
  );
}

export default ContainerFilter;
