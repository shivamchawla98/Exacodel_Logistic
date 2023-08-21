'use client'

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Yup from 'yup'
import TrackingField from "./search bar component/TrackingField";


// const validationSchema = Yup.object().shape({
//     from: Yup.string().required("From is required"),
//     to: Yup.string().required("To is required"),
//     selectedDate: Yup.date().required("Date is required"),
//   });

function SearchBar() {
  const currentDate = new Date();
  const initialDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    const formik = useFormik({
      initialValues: {
        from: "",
        to: "",
        selectedDate: initialDate ,
        tab: "transport",
      },
      // validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    const [activeTab, setActiveTab] = useState(1);
    
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

    useEffect(() => {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
      
      // Set the default value of the date input
      document.getElementById('selectedDate').defaultValue = formattedDate;
    }, [])
  
    return (
      <div className="overflow-hidden block opacity-100 contrast-100 h-72 px-6 w-full">
        <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1 lg:w-1/3 ">
          <li onClick={() => handleTabClick(1)}>
            <a
              href="#page2"
              className={`flex justify-center py-4 ${
                activeTab === 1
                  ? "bg-white rounded-lg shadow text-sky-700"
                  : ""
              } `}
            >
              Freight
            </a>
          </li>
          <li onClick={() => handleTabClick(2)}>
            <a
              href="#page2"
              className={`flex justify-center py-4 ${
                activeTab === 2
                  ? "bg-white rounded-lg shadow text-indigo-900"
                  : ""
              } `}
            >
              Tracking
            </a>
          </li>
          <li onClick={() => handleTabClick(3)}>
            <a
              href="#page2"
              className={`flex justify-center py-4 ${
                activeTab === 3
                  ? "bg-white rounded-lg shadow text-indigo-900"
                  : ""
              } `}
            >
              Warehouse
            </a>
          </li>
        </ul>
  
        {/* Tab 3: Warehouse */}
        {/* <li
              role="tab"
              className={`flex items-center justify-center text-center h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer w-auto ${
                formik.values.tab === "warehouse" ? "bg-white" : ""
              }`}
              data-value="warehouse"
              onClick={() => formik.setFieldValue("tab", "warehouse")}
            >
              <div className="z-20 text-inherit">Warehouse</div>
            </li> */}
        {/* Tab Content */}
        <div className="block w-full relative bg-transparent overflow-hidden">
          {/* Tab 1 Content */}
  
          {activeTab === 1 ? (
            <div
              role="tabpanel"
              className={`w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed px-0 ${
                formik.values.tab === "transport" ? "opacity-1" : "opacity-0"
              } absolute z-2 top-0 left-0`}
              data-value="transport"
              style={{ position: "relative", zIndex: 2, top: "0px", left: "0px" }}
            >
              {/* Search Inputs */}
              <div className="flex items-center flex-col md:flex-row gap-3">
                {/* From Input */}
                <div className="w-72">
                  <div className="relative w-full min-w-[200px] h-10">
                    {/* SVG Icon */}
                    <div className="grid place-items-center absolute text-blue-gray-500 top-2/4 right-3 -translate-y-2/4 w-5 h-5">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                      </svg>
                    </div>
                    {/* Input Field */}
                    <input
                      className={`peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] ${
                        formik.touched.from && formik.errors.from
                          ? "border-red-500"
                          : "border-blue-gray-200"
                      } focus:border-gray-900`}
                      placeholder=" "
                      id="from"
                      name="from"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.from}
                    />
                    {/* Label */}
                    <label
                      className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900`}
                      htmlFor="from"
                    >
                      From
                    </label>
                  </div>
                  {/* Error Message */}
                  {formik.touched.from && formik.errors.from && (
                    <div className="text-red-500 text-[11px] mt-1">
                      {formik.errors.from}
                    </div>
                  )}
                </div>
                {/* intechange icon */}
                <div className="w-8 h-8">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="mx-2"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                    ></path>
                  </svg>
                </div>
                {/* intechange icon */}
                {/* To Input */}
                <div className="w-72">
                  <div className="w-72">
                    <div className="relative w-full min-w-[200px] h-10">
                      {/* SVG Icon */}
                      <div className="grid place-items-center absolute text-blue-gray-500 top-2/4 right-3 -translate-y-2/4 w-5 h-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                        </svg>
                      </div>
                      {/* Input Field */}
                      <input
                        className={`peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] ${
                          formik.touched.from && formik.errors.from
                            ? "border-red-500"
                            : "border-blue-gray-200"
                        } focus:border-gray-900`}
                        placeholder=" "
                        id="to"
                        name="to"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.to}
                      />
                      {/* Label */}
                      <label
                        className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900`}
                        htmlFor="to"
                      >
                        To
                      </label>
                    </div>
                    {/* Error Message */}
                    {formik.touched.from && formik.errors.from && (
                      <div className="text-red-500 text-[11px] mt-1">
                        {formik.errors.from}
                      </div>
                    )}
                  </div>
                </div>
                {/* Date Input */}
                <div className="w-72">
                  <div className="w-72">
                    <div className="relative w-full min-w-[200px] h-10">
                      <input
                        type="date"
                        id="selectedDate"
                        name="selectedDate"
                        className={`peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] ${
                          formik.errors.selectedDate &&
                          formik.touched.selectedDate
                            ? "border-red-500"
                            : "border-blue-gray-200"
                        } focus:border-gray-900`}
                        placeholder=" "
                        value={formik.values.selectedDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label
                        className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900`}
                        htmlFor="selectedDate"
                      >
                        Date{/* */}
                      </label>
                    </div>
                    {formik.errors.selectedDate &&
                      formik.touched.selectedDate && (
                        <div className="text-red-500 text-[11px] mt-1">
                          {formik.errors.selectedDate}
                        </div>
                      )}
                  </div>
                </div>
                {/* Search Button */}
                <button
                  className="align-middle  select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none capitalize text-base"
                  type="button"
                >
                  <div className="flex items-center">
                    Search{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="ml-1"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
  
          {/* Tab 2 Content */}
          {activeTab === 2 ? (
            <div
              role="tabpanel"
              className={`w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed px-0 ${
                formik.values.tab === "tracking" ? "opacity-1" : "opacity-0"
              } absolute z-1 top-0 left-${
                formik.values.tab === "tracking" ? "0" : "100%"
              } transition-opacity`}
              data-value="tracking"
              style={{ position: "absolute", zIndex: 1, top: "0px", left: "0px" }}
            >
              <TrackingField />
            </div>
          ) : (
            ""
          )}
          {/* Tab 3 Content */}
          <div
            role="tabpanel"
            className={`w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed px-0 ${
              formik.values.tab === "warehouse" ? "opacity-1" : "opacity-0"
            } absolute z-1 top-0 left-${
              formik.values.tab === "warehouse" ? "0" : "100%"
            } transition-opacity`}
            data-value="warehouse"
            style={{ position: "absolute", zIndex: 1, top: "0px", left: "0px" }}
          >
            {/* ... (content for the "Warehouse" tab) ... */}
          </div>
        </div>
      </div>
    );
  }

  export default SearchBar;