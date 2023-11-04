'use client';

import '../globals.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { updateEmail, updatePassword, updateIsLogedIn } from '@/features/login/form-slice';
import Link from 'next/link';
import RolePopup from '@/components/form components/RolePopup';
import { updateSignUpclicked } from '@/features/select-form/selectForm-slice';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';

import jwt_decode from "jwt-decode";
import { decode } from 'punycode';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { XCircleIcon, CogIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';


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
    first_name
  }
}
`

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
  // recaptcha: Yup.string().required('reCAPTCHA is required'),
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

const LoginStatus = ({id, open, setOpen}: any) => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: id,
    },
  });

  try {
    const jwtToken: any = Cookies.get('jwtToken');
    console.log("from token : ", jwtToken);
    const decoded:any = jwt_decode(jwtToken)
  
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
                      </div>
                    ) : (
                      <div className="mt-2">
                        
                        {(data?.getUserById.isapproved === 'Approval_pending') && <p className="text-sm text-gray-500">Your Approval is Pendeing please wait for some time to be approved, You&apos;ll get Confirmation message on your email</p>}
                      {(data?.getUserById.isapproved === 'Rejected') && <p className="text-sm text-gray-500">Rejected by admin due to some wrong data entered by you please check mail for reentering info </p>}
                      {(data?.getUserById.isapproved === 'Approved') && <p className="text-sm text-gray-500">You are approved User</p>}
                        
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() =>{
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
  const { email, password } = useSelector((state: any) => state.form);
  const { signUpClicked } = useSelector((state: any) => state.selectForm);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [login] = useMutation(LOGIN_MUTATION);
  const {loading, error, data, refetch} = useQuery(GET_USER_BY_ID, {
    variables: {
      id: id,
    }
  });
  // console.log(LOGIN_MUTATION?.loc?.source?.body);


  const initialValues = {
    email: email || '', // Ensure a default value if email is undefined
    password: password || '', // Ensure a default value if password is undefined
  };
  const dispatch = useDispatch();


  // api login logic ends and login ui starts

  return (
    <div className="h-3/4 bg-white py-6 flex flex-col justify-center sm:py-12">
      <RolePopup />
      <LoginStatus id={id} open={open} setOpen={setOpen} />
      {showAlert && <Alert />}
      <ToastContainer />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto  lg:w-4/12">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-sky-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values: any) => {
                // Handle form submission logic here
                dispatch(updateEmail(values.email));
                dispatch(updatePassword(values.password));
                
            
                try {
                  const response = await login({
                    variables: {
                      loginUserInput: {
                        email: values.email,
                        password: values.password,
                      },
                    },
                  });
            
            
            
            
                  const decoded: any =  jwt_decode(response?.data?.login.access_token);
                  console.log(decoded.id);
                  
                  
                  setId(decoded.id)
                  const {data} = await refetch(
                    {
                      id: decoded.id
                    }
                  )
                  const user = data.getUserById
                  setId(decoded.id)
                  
                  console.log(user);
                if (user.isapproved === 'Approved') {
                  router.push("/")
                  Cookies.set('jwToken', response.data.login, { expires: 7 });
                  dispatch(updateIsLogedIn(true))
                } else if (user.isapproved === 'Approval_pending' || user.isapproved === 'Rejected' ) {
                  setOpen(true)
                }
                  
                  // You may want to perform actions like setting tokens or redirecting on success
                } catch (error: any) {
                  // Handle any errors
                  // console.log(error);
                  // setShowAlert(true);
                  if (error.networkError) {
                    toast.error('There is network error come after some time', {
                      position: toast.POSITION.TOP_CENTER,
                    });
                  } else {
                    toast.error('There is some Internal Server error Please Check after some time', {
                      position: toast.POSITION.TOP_CENTER,
                    });
                  }
                  console.error("Mutation error: ", error);
                }
            
            
              }}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form>
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <Field
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="text"
                        className="peer placeholder-transparent text-sm h-10 w-full border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:border-sky-500"
                        placeholder="Email address"
                      // onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(email, e.target.value) }
                      // value={email}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Field
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-sky-500"
                        placeholder="Password"
                      // value={password}
                      // onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(password, e.target.value) }
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="my-4">
                        {/* <ReCAPTCHA
                          sitekey="6LexSekoAAAAAFt_Rek8-mHLbGpwWVZNsZhIsDJ0"
                          onChange={(value) => setFieldValue('recaptcha', value)}
                        /> */}
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-sky-600 hover:bg-sky-500 text-white rounded-md px-6 py-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Loging in...' : 'Login'}
                      </button>
                    </div>
                    <div>
                      <p className="mb-0 mt-2 pt-1 text-sm font-medium">
                        <Link
                          href="/reset-password"
                          className="text-danger transition text-xs duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 pl-1 text-sky-700"
                        >
                          Forget password !
                        </Link>
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                        Don&apos;t have an account?{' '}
                        <Link
                          href="/registration"
                          onClick={() => {
                            dispatch(updateSignUpclicked(!signUpClicked))
                          }}
                          className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 pl-1 text-sky-700"
                        >
                          Register
                        </Link>
                      </p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );

}


export default Page;
