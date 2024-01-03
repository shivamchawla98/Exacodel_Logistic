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
      <div className="w-screen h-screen flex justify-center items-center backdrop-blur-sm z-50  fixed ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="justify-center  object-center absolute p-6 rounded-md shadow-md items-center w-full bg-white  rounded-lgpx-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto"
        >
          <div>
            <h1 className="text-xl font-semibold my-4">Login to Continue</h1>
          </div>
          <div className="w-full p-2 justify-start flex flex-col">
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <input
                defaultValue=""
                {...register("email")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-sky-600 hover:text-sky-500"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
              className="px-4 py-2 rounded bg-sky-400 text-white hover:bg-sky-700 my-4 w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginModal;
