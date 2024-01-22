"use client";
import "../globals.css";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useMutation, useQuery } from "@apollo/client";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  updateIsLoggedIn,
  updateFirstName,
  updateLastName,
} from "@/features/login/login-slice";
import GET_USER_BY_ID from "@/graphql/query/getUserById";
import LOGIN_MUTATION from "@/graphql/mutation/loginMutation";
import Alert from "@/components/Alert";
import CustomField from "@/components/CustomField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReCAPTCHA from 'react-google-recaptcha';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Page() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const { isLoggedIn, email, name } = useSelector(
    (state: any) => state.loginSlice
  );
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [submiting, setSubmiting] = useState<boolean>(false);
  const [login] = useMutation(LOGIN_MUTATION);
  const { error, data, refetch } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: id,
    },
  });

  const initialValues = {
    email: "", // Ensure a default value if email is undefined
    password: "", // Ensure a default value if password is undefined
  };
  const dispatch = useDispatch();
  try {
    const token = Cookies.get("jwtToken");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime: any = Date.now() / 1000;
      // Check token expiration
      if (decodedToken?.exp && currentTime < decodedToken?.exp) {
        // Token is expired, redirect to the login page
        switch (decodedToken?.userType) {
          case "VENDOR":
            router.push("/vendor");
            break;
          case "ADMIN":
            router.push("/admin");
            break;
          default:
            router.push("/");
            break;
        }
        // Redirect to the login page
      }
    }
  } catch (error) {
    console.log("token error hai : ", error);
  }

  // api login logic ends and login ui starts

  return (
    <div className=" flex justify-center items-center sm:py-12 w-full h-screen bg-white">
      {/* {showAlert && <Alert />} */}
      <ToastContainer />
      {/* <LoginStatus id={id} open={open} setOpen={setOpen} /> */}
      <div className="w-full md:w-10/12 lg:w-10/12 justify-evenly rounded-lg border-8 border-white  flex items-center bg-white ">
        <div className=" w-full md:w-1/3 lg:md:w-1/4 rounded-lg px-6 py-2 mx-auto bg-white">
          <div className="mb-2 mt-4">
            <h3 className="text-lg font-semibold my-2 ml-2">Sign In</h3>
            {/* <p className='text-sm font-normal text-gray-400'>Please sign in to your account</p> */}
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              // Handle form submission logic here
              try {
                setSubmiting(true);
                const response = await login({
                  variables: {
                    loginUserInput: {
                      email: values.email,
                      password: values.password,
                    },
                  },
                });
                const newToken = response?.data?.login.access_token;
                const payload: any = jwtDecode(newToken);
                setId(payload?.id);
                const { data } = await refetch({
                  id: payload.id,
                });
                const user = data.getUserById;
                setId(payload.id);

                console.log("user ", user);

                //
                if (
                  user?.isapproved === "Approved" &&
                  user?.userType === "Admin"
                ) {
                  console.log("data inside admin", user);
                  Cookies.set("jwtToken", newToken, {
                    expires: payload.exp - Math.floor(Date.now() / 1000),
                  });
                  dispatch(updateFirstName(user.first_name));
                  dispatch(updateLastName(user.last_name));
                  dispatch(updateIsLoggedIn(true));

                  router.push("/admin");
                }
                if (
                  user?.isapproved === "Approved" &&
                  user?.userType === "VENDOR"
                ) {
                  console.log("data inside approved", user);
                  Cookies.set("jwtToken", newToken, {
                    expires: payload.exp - Math.floor(Date.now() / 1000),
                  });
                  dispatch(updateFirstName(user.first_name));
                  dispatch(updateLastName(user.last_name));
                  dispatch(updateIsLoggedIn(true));

                  router.push("/vendor");
                }
                if (
                  user?.isapproved === "Approved" &&
                  user?.userType === "OVERSEAS_AGENT"
                ) {
                  console.log("data inside approved", user);
                  Cookies.set("jwtToken", newToken, {
                    expires: payload.exp - Math.floor(Date.now() / 1000),
                  });
                  dispatch(updateFirstName(user.first_name));
                  dispatch(updateLastName(user.last_name));
                  dispatch(updateIsLoggedIn(true));

                  router.push("/overseas");
                } else if (
                  user.isapproved === "Approval_pending" ||
                  user.isapproved === "Rejected" ||
                  user.userType === "CUSTOMER"
                ) {
                  setOpen(true);
                }

                // You may want to perform actions like setting tokens or redirecting on success
              } catch (error: any) {
                console.error("Mutation error: ", error);
                if (error.networkError) {
                  toast.error("There is network error come after some time", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                } else {
                  toast.error(
                    "There must be user name or password entered wrong try again",
                    {
                      position: toast.POSITION.TOP_CENTER,
                    }
                  );
                }
              }
            }}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form>
                <div className="py-6 text-base grid gap-4 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <CustomField title="Email Address" id="email" type="text" />
                  <CustomField title="Password" id="password" type="password" />
                  <div className="w-full flex ml-1 items-center">
                    <button
                      type="submit"
                      className="bg-primary-500 hover:bg-fuchsia-800 text-white rounded-md px-6 py-1 w-4/5"
                      // disabled={isSubmitting}
                    >
                      {submiting ? "Signing in..." : "Sign In"}
                    </button>
                  </div>
                  <div>
                    <p className="mb-0 mt-2 pt-1 text-sm font-medium">
                      <Link
                        href="/reset-password"
                        className="text-danger transition text-xs duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 pl-1 text-primary-500"
                      >
                        Forget password !
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="w-1/3 hidden md:block h-3/4 rounded-md">
          <img
            src="https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="login image"
            className=" bg-centerw-full bg-cover rounded-md"
          />
          {/* Content goes here */}
        </div>
      </div>
    </div>
  );
}

export default Page;
