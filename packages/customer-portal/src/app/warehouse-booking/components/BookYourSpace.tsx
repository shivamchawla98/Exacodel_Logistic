"use client";
import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import TotalCostCard from "./ToatalCostCard";
import { useForm, SubmitHandler, set } from "react-hook-form";
import CREATE_BOOKING from "@/graphql/mutation/createBooking";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import createBooking from "@/graphql/mutation/createBooking";
import router from "next/router";

interface BookYourSpaceInput {
  // name: string;
  // email: string;
  moveInDate: string;
  moveOutDate: string;
  // phone: string;
  // companyName: string;
  // gstNum: string;
}

function BookYourSpace() {
  const router = useRouter();
  const [createBooking] = useMutation(CREATE_BOOKING);
  const [userId, setUserId] = useState(-1);
  const [localWarehouseId, setLocalWarehouseId] = useState<any>(null);
  const [localSpaceReq, setLocalSpaceReq] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BookYourSpaceInput>();

  useEffect(() => {
    try {
      let retrieviedStorageId: any = localStorage.getItem("warehouseId");
      let retrieviedStorageRequiredSpace: any =
        localStorage.getItem("requiredSpace");
      let token: any = Cookies.get("jwToken");
      console.log("warehouseLocalStorageId", JSON.parse(retrieviedStorageId));

      if (retrieviedStorageId && retrieviedStorageRequiredSpace) {
        // warehouseLocalStorageId *= 1;
        setLocalSpaceReq(JSON.parse(retrieviedStorageRequiredSpace));
        setLocalWarehouseId(JSON.parse(retrieviedStorageId));
        console.log("local warehousid : >>> ", localWarehouseId);
      }
      if (token) {
        const decodedToken: any = jwtDecode(token);
        console.log("decoded token", decodedToken);
        setUserId(decodedToken.id);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log("Error in creating Booking", error);
    }
  }, []);
  // submit function
  const onSubmit: SubmitHandler<BookYourSpaceInput> = async (data) => {
    console.log("submit in submit", data);
    try {
      const response = await createBooking({
        variables: {
          input: {
            moveInDate: data.moveInDate,
            moveOutDate: data.moveOutDate,
            spaceMaterialType: "Glass",
            specialInstructions: "Handle with care",
            warehouseId: localWarehouseId * 1,
            userId: userId * 1,
          },
        },
      });

      router.push("/profile");
      console.log("data ", response);
      toast.success("Bokking placed sucessfully");
      console.log("form data : ", data);
    } catch (error: any) {
      toast.error(error.message);
      console.log("Error in creating Booking", error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Book Your Space
          </h2>
          <TotalCostCard
            warehouseId={localWarehouseId}
            requiredSpace={localSpaceReq}
          />
        </div>

        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="first-name"
                    autoComplete="given-name"
                    {...register("name", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-fuchsia-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-500">
                      This field is required
                    </span>
                  )}
                </div>
              </div> */}

              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-fuchsia-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                  {errors.email?.message && (
                    <span className="text-xs text-rose-500">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
              </div> */}
              <div className="sm:col-span-4">
                <DatePicker
                  register={register}
                  errors={errors}
                  setValue={setValue}
                />
              </div>
              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    type="tel"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-fuchsia-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                  {errors.phone?.message && (
                    <span className="text-xs text-rose-500">
                      Phone number is required
                    </span>
                  )}
                </div>
              </div> */}

              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    id="companyName"
                    {...register("companyName", {
                      required: "Email is required",
                    })}
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-fuchsia-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                  {errors.companyName?.message && (
                    <span className="text-xs text-rose-500">
                      Required field
                    </span>
                  )}
                </div>
              </div> */}

              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="gstNum"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  GST Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("gstNum", {
                      required: "Email is required",
                    })}
                    id="gstNum"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-fuchsia-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                  {errors.gstNum?.message && (
                    <span className="text-xs text-rose-500">
                      {errors.gstNum?.message}
                    </span>
                  )}
                </div>
              </div> */}
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              onClick={(e) => {
                console.log("button submit");
                // onSubmit(data)
                handleSubmit(onSubmit)(e);
              }}
              className="rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookYourSpace;
