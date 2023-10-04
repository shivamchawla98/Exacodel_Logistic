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
import { useMutation } from '@apollo/client';
import jwt from 'jsonwebtoken';
import { AnyARecord } from 'dns';
import jwt_decode from "jwt-decode";
import { decode } from 'punycode';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'



const LOGIN_MUTATION = gql`
  mutation Login($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput) {
      access_token
    }
  }
`;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

import { XCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

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


function page() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false)
  const { email, password } = useSelector((state: any) => state.form);
  const { signUpClicked } = useSelector((state: any) => state.selectForm);
  const [login] = useMutation(LOGIN_MUTATION);
  console.log(LOGIN_MUTATION?.loc?.source?.body);

  const initialValues = {
    email: email || '', // Ensure a default value if email is undefined
    password: password || '', // Ensure a default value if password is undefined
  };
  const dispatch = useDispatch();



  const handleSubmit = async (values: any) => {
    // Handle form submission logic here
    dispatch(updateEmail(values.email));
    dispatch(updatePassword(values.password));
    console.log("password : ", values.password);

    try {
      const response = await login({
        variables: {
          loginUserInput: {
            email: values.email,
            password: values.password,
          },
        },
      });


      // Handle the response as needed
      console.log("Mutation response:", response.data);


      const decoded =  jwt_decode(response?.data?.login);
      console.log(decoded);
      Cookies.set('jwtToken', response.data.login, { expires: 7 });
      dispatch(updateIsLogedIn(true))

      // // 'decoded' now contains the payload of the JWT token.
      // console.log(decoded);

      const jwtToken = Cookies.get('jwtToken');
      console.log("from token : ", jwtToken);
      if ( Cookies.get('jwtToken')) {
        router.push("./")
      }





      // You may want to perform actions like setting tokens or redirecting on success
    } catch (error) {
      // Handle any errors
      // console.log(error);
      setShowAlert(true);

      console.error("Mutation error: ", error);
    }


  };
  // api login logic ends and login ui starts

  return (
    <div className="h-3/4 bg-white py-6 flex flex-col justify-center sm:py-12">
      <RolePopup />
      {showAlert && <Alert />}
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
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
                console.log("password : ", values.password);
            
                try {
                  const response = await login({
                    variables: {
                      loginUserInput: {
                        email: values.email,
                        password: values.password,
                      },
                    },
                  });
            
            
                  // Handle the response as needed
                  console.log("Mutation response:", response.data);
            
            
                  const decoded =  jwt_decode(response?.data?.login);
                  console.log(decoded);
                  Cookies.set('jwtToken', response.data.login, { expires: 7 });
                  dispatch(updateIsLogedIn(true))
            
                  // // 'decoded' now contains the payload of the JWT token.
                  // console.log(decoded);
            
                  const jwtToken = Cookies.get('jwtToken');
                  console.log("from token : ", jwtToken);
                  if ( Cookies.get('jwtToken')) {
                    router.push("./")
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
                          href="/registration"
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


export default page;
