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
          className="justify-center  object-center absolute rounded-md shadow-md items-center w-full bg-white  rounded-lgpx-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto"
        >
          {/* This is an example component */}
          <div className="flex justify-end items-center w-full pr-8 mt-4 cursor-pointer">
            <XMarkIcon
              onClick={() => {
                setLoginClose(true);
              }}
              className="h-6 w-6 z-50 text-sky-600"
            />
          </div>
          <h2 className="text-2xl my-4">Login</h2>
          <div
            id="whoobe-h90kl"
            className="w-full p-2 justify-start flex flex-col"
          >
            <div id="whoobe-7izhv" className=" flex flex-row">
              <span
                id="whoobe-plfl9"
                className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
              >
                <UserIcon className="text-gray-500 h-6 w-6" />
              </span>
              <input
                defaultValue=""
                {...register("email")}
                className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-sky-400 w-full pl-1"
                placeholder="username"
              />
              {errors.email && (
                <span className="text-xs text-rose-400">
                  This field is required
                </span>
              )}
            </div>
            <div id="whoobe-l6k6r" className="my-4 flex flex-row">
              <span
                id="whoobe-4occ6"
                className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
              >
                <KeyIcon className="text-gray-500 h-6 w-6" />
              </span>
              <input
                type="password"
                defaultValue=""
                {...register("password", { required: true })}
                className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-sky-300 w-full pl-1"
                placeholder="password"
              />
              {errors.password && (
                <span className="text-rose-400 text-xs">
                  This field is required
                </span>
              )}
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
