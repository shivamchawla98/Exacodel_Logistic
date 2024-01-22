"use client";
import { KeyIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import LOGIN from "@/graphql/mutation/login";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { updateIsLogedIn } from "@/features/login/form-slice";
import jwtDecode from "jwt-decode";
interface Inputs {
  email: string;
  password: string;
}

function LoginModal({ setLoginClose }: any) {
  const dispatch = useDispatch();
  const [login] = useMutation(LOGIN);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await login({
        variables: {
          input: {
            email: data.email,
            password: data.password,
          },
        },
      });
      console.log(response);
      const decoded: any = jwtDecode(response?.data?.login.access_token);
      console.log(decoded.id);

      //   setId(decoded.id);
      //   const { data } = await refetch({
      //     id: decoded.id,
      //   });
      //   const user = data.getUserById;
      //   setId(decoded.id);

      //   console.log(user);
      //   if (user.isapproved === "Approved") {
      //     router.push("/");
      Cookies.set("jwToken", response?.data?.login.access_token, {
        expires: 7,
      });
      dispatch(updateIsLogedIn(true));
      //   } else if (
      //     user.isapproved === "Approval_pending" ||
      //     user.isapproved === "Rejected"
      //   ) {
      //     setOpen(true);
      //   }
      setLoginClose(true);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="backdrop-blur-sm z-40 fixed w-full flex flex-col justify-center sm:py-12">
        <div className="relative sm:max-w-xl sm:mx-auto  lg:w-4/12">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-300 to-primary-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4  bg-white  h-96 shadow-lg sm:rounded-3xl sm:p-11">
            <div className="flex justify-end">
              <XMarkIcon
                onClick={() => setLoginClose(true)}
                className="w-5 h-5  text-primary-500 rotate-90 hover:rotate-6 ease-in-out transform-gpu cursor-pointer"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" text-base leading-6 space-y-4 h-96 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div className="relative">
                <h1 className="text-xl font-semibold my-4">
                  Login to Continue
                </h1>
              </div>
              <div className="w-full p-2 justify-start flex flex-col relative">
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm paragraph-semibold text-gray-900"
                  >
                    Email Address
                  </label>
                  <input
                    defaultValue=""
                    {...register("email")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    placeholder="username"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm paragraph-semibold  leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-primary-500 hover:text-fuchsia-700"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      type="password"
                      defaultValue=""
                      {...register("password", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                      placeholder="password"
                    />
                    {errors.password && (
                      <span className="text-rose-400 text-xs">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <button
                  value="button"
                  className="px-4 py-1 rounded-md bg-primary-500 text-white hover:bg-fuchsia-700 my-4 w-24"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
