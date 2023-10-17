'use client';

import '../globals.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { XCircleIcon, CogIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { updateIsLoggedIn, updateFirstName, updateLastName } from '@/features/login/login-slice';
import loginImage from '../../asset/img/login.png'
import Image from 'next/image';
import { url } from 'inspector';



const LOGIN_MUTATION = gql`
mutation Login($loginUserInput:LoginUserInput!){
  login(loginUserInput:$loginUserInput) {
    access_token
  }
}
`;

const GET_USER_BY_ID = gql`
query GET_USER_ID($id: Int!){
  getUserById(userId: $id) {
    isapproved
    last_name
    first_name
    userType
  }
}
`

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});



function Alert() {
  const router = useRouter();
  return (
    <div className="rounded-md bg-red-50 p-4 cursor-pointer">
      <div
        onClick={() => {
          router.push("./")
        }}
        className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Please wait for your approval, we will send you mail when you are approved</h3>
          <h3 className="text-sm font-medium text-red-800">If not registered please register to move forward</h3>
          <h3 className="text-base font-medium text-green-800">Click On alert to move to home page</h3>
        </div>
      </div>
    </div>
  )
}

const LoginStatus = ({ id, open, setOpen }: any) => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: id,
    },
  });

  try {
    const jwtToken: any = Cookies.get('jwtToken');
    console.log("from token : ", jwtToken);
    const decoded: any = jwt_decode(jwtToken)

    console.log(" getUserById Data ", decoded);
    // if (typeof (decoded?.id) === 'number') {
    //   setOpen(false)
    //   router.push("/")
    //   return;
    // }
  } catch (error) {
    console.log();

  }



  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative " onClose={() => setOpen(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  {loading ? (
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      {/* Replace the following with your loader component or Tailwind CSS loader */}
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                  ) : (
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      {(data?.getUserById?.isapproved === 'Approval_pending') && <CogIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />}
                      {(data?.getUserById?.isapproved === 'Rejected') && <CogIcon className="h-6 w-6 text-rose-600" aria-hidden="true" />}
                      {(data?.getUserById?.isapproved === 'Approved') && <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />}

                    </div>
                  )}

                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      {loading ? "Loading..." : data?.getUserById?.isapproved}
                    </Dialog.Title>
                    {loading ? (
                      <div className="mt-2">
                        {/* You can customize the loading message */}
                        <p className="text-sm text-gray-500">Hi {data?.getUserById.first_name}</p>
                        <p className="text-sm text-gray-500">Your&apos;e {data?.getUserById.userType}</p>
                      </div>
                    ) : (
                      <div className="mt-2">

                        {(data?.getUserById.isapproved === 'Approval_pending') && <p className="text-sm text-gray-500">Your Approval is Pendeing please wait for some time to be approved, You&apos;ll get Confirmation message on your email</p>}
                        {(data?.getUserById.isapproved === 'Rejected') && <p className="text-sm text-gray-500">Rejected by admin due to some wrong data entered by you please check mail for reentering info </p>}
                        {(data?.getUserById.isapproved === 'Approved') && <p className="text-sm text-gray-500">You are approved User but not a vendor</p>}

                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => {
                      setOpen(false)
                      if (data.getUserById.isapproved === 'Approval_pending' || data?.getUserById.isapproved === 'Rejected') {
                        router.push("/")
                      }
                    }
                    }
                  >
                    Go back to dashboard
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}


function Page() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false)
  const { isLoggedIn, email, name } = useSelector((state: any) => state.loginSlice)
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [login] = useMutation(LOGIN_MUTATION);
  const { loading, error, data, refetch } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: id,
    }
  });
  // console.log(LOGIN_MUTATION?.loc?.source?.body);


  const initialValues = {
    email: '', // Ensure a default value if email is undefined
    password: '', // Ensure a default value if password is undefined
  };
  const dispatch = useDispatch();


  // api login logic ends and login ui starts

  return (
    <div className=" flex justify-center items-center sm:py-12 w-full h-screen bg-white">
      <LoginStatus id={id} open={open} setOpen={setOpen} />
      {showAlert && <Alert />}

      <div className="w-full md:w-10/12 lg:w-10/12 justify-evenly rounded-lg border-8 border-white  flex items-center bg-white ">
        <div className=" w-full md:w-1/3 lg:md:w-1/4 rounded-lg px-6 py-2 mx-auto bg-white">
          <div className='mb-2 mt-4'>
            <h3 className="text-lg font-semibold my-2 ml-2">Sign In</h3>
            {/* <p className='text-sm font-normal text-gray-400'>Please sign in to your account</p> */}
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values: any) => {
              // Handle form submission logic here



              try {
                const response = await login({
                  variables: {
                    loginUserInput: {
                      email: values.email,
                      password: values.password,
                    },
                  },
                });




                const decoded: any = jwt_decode(response?.data?.login.access_token);
                console.log(decoded.id);


                setId(decoded.id)
                const { data } = await refetch(
                  {
                    id: decoded.id
                  }
                )
                const user = data.getUserById
                setId(decoded.id)


                if (user.isapproved === 'Approved' && user.userType === 'VENDOR') {
                  console.log("data inside approved", user);
                  router.push("/approval")
                  Cookies.set('jwtToken', response.data.login, { expires: 7 });
                  dispatch(updateFirstName(user.first_name))
                  dispatch(updateLastName(user.last_name))
                  dispatch(updateIsLoggedIn(true))
                } else if (user.isapproved === 'Approval_pending' || user.isapproved === 'Rejected' || user.userType === "CUSTOMER") {
                  setOpen(true)
                }

                // You may want to perform actions like setting tokens or redirecting on success
              } catch (error) {
                // Handle any errors
                // console.log(error);
                setShowAlert(true);

                console.error("Mutation error: ", error);
              }


            }}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form>
                <div className="py-6 text-base grid gap-4 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                  <div className="relative group">
                    <label
                      htmlFor="email"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900 group-focus-within:text-sky-600"
                    >
                      Email Address
                    </label>
                    <Field
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 pl-3 ring-inset focus:~email ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      placeholder="Email address"
                    // onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(email, e.target.value) }
                    // value={email}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>


                  <div className="relative group">
                    <label
                      htmlFor="password"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900 group-focus-within:text-sky-600"
                    >
                      Email Address
                    </label>
                    <Field
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="block w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 pl-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      placeholder="Password"
                    // onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(email, e.target.value) }
                    // value={email}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="w-full flex ml-1 items-center">
                    <button
                      type="submit"
                      className="bg-sky-600 hover:bg-sky-500 text-white rounded-md px-6 py-1 w-4/5"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Signing in...' : 'Sign In'}
                    </button>
                  </div>
                  <div>
                    <p className="mb-0 mt-2 pt-1 text-sm font-medium">
                      <Link
                        href="/registration"
                        className="text-danger transition text-xs duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 pl-1 text-sky-600"
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
        <div className="w-1/3 hidden md:block h-3/4 rounded-md"  >
          <img src="https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="login image"  className=' bg-centerw-full bg-cover rounded-md' />
  {/* Content goes here */}
</div>
      </div>
    </div>
  );

}


export default Page;
