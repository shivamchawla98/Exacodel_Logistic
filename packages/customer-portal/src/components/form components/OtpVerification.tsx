import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail } from "@/features/user/user-slice";
import { updateFormName } from "@/features/select-form/selectForm-slice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { gql, useMutation, useQuery } from "@apollo/client";
import { updateUserId } from "@/features/user/user-slice";
import { updateSignUpclicked, updateSendOtpClicked } from '@/features/select-form/selectForm-slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import ReCAPTCHA from "react-google-recaptcha";

const SEND_OTP_MUTATION = gql`
  mutation SendOTP($email: String!) {
    sendOTP(email: $email)
  }
`;

const INITIAL_REGISTRATION_MUTATION = gql`
  mutation InitialRegistration($userInput: SelectUserTypeAndSubtypeInput!, $emailInput: EmailInput!) {
    initialRegistration(userInput: $userInput, emailInput: $emailInput) {
      id
    }
  }
`;

const CountdownTimer = ({ timer }: any) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    let interval: any;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  return (
    <div className="flex w-full justify-evenly mt-4 items-center mx-auto text-sm font-semibold">
      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-sky-500 text-white font-semibold text-center">
        {countdown > 0 ? countdown : ""}
      </div>
      {countdown > 0 ? (
        <span className="text-sky-500">seconds remaining</span>
      ) : (
        <span className="text-sky-500">Resend available</span>
      )}
    </div>
  );
};


function OtpVerification() {
  const email = useSelector((state: any) => state.user.email);
  const { identification, userType } = useSelector((state: any) => state.starterSlice);
  const [sendOtpClicked, setSendOtpClicked] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [timer, setTimer] = useState(0); // Added timer state

  const dispatch = useDispatch();
  const inputRefs: any = useRef(Array(4).fill(0).map(() => React.createRef()));

  const [Email, setEmail] = useState('');
  const [Otp, setOtp] = useState('');

  const [sendOTPMutation] = useMutation(SEND_OTP_MUTATION);
  const [initialRegistration] = useMutation(INITIAL_REGISTRATION_MUTATION);

  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);

  useEffect(() => {
    if (resendDisabled) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [resendDisabled]);

  useEffect(() => {
    if (timer <= 0) {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (e: any, index: any) => {
    const value = e.target.value;

    if (value && index < 3) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    // recaptcha: Yup.string().required('reCAPTCHA is required'),
  });

  const logEmail = (values: any) => {
    console.log("Email entered:", values.email);
  };

  // resend functionality
  async function reSend() {
    clearOtpFields();
    try {
      const response = await sendOTPMutation({
        variables: {
          email: Email,
        },
      });

      console.log("Email : ", Email);

      console.log(response?.data?.sendOTP);

      if (response?.data?.sendOTP === "OTP sent successfully") {
        setSendOtpClicked(true);
        setResendDisabled(true);

        setOtpSent(true);
        setTimer(120); // Set the timer to 2 minutes
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleEmailSubmit = async (values: any) => {
    if (userType === '') {
      dispatch(updateSignUpclicked(true));
      alert("Please Enter Identification and User type");
      return;
    }
    setIsEmailSubmitting(true);

    dispatch(updateEmail(values.email));
    setEmail(values.email);

    try {
      const response = await sendOTPMutation({
        variables: {
          email: values.email,
        },
      });

      console.log(response?.data?.sendOTP);

      if (response?.data?.sendOTP === "OTP sent successfully") {
        dispatch(updateSendOtpClicked(true));
        setSendOtpClicked(true);
        setResendDisabled(true);
        setOtpSent(true);
        setTimer(120); // Set the timer to 2 minutes
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsEmailSubmitting(false);
    }
  };

  const verifyAccount = async () => {
    let otp = inputRefs.current.map((ref: any) => ref.current.value).join('');
    console.log("otp", otp);
    let customerType = identification === "CUSTOMER" ? userType : null;
    let vendorType = identification === "VENDOR" ? userType : null;
    let overseasType = identification === "OVERSEAS_AGENT" ? userType : null;

    try {
      const response = await initialRegistration({
        variables: {
          userInput: {
            userType: identification,
            customerSubType: customerType,
            vendorSubType: vendorType,
            overseasAgentSubType: overseasType,
          },
          emailInput: {
            email: Email,
            otp: otp,
          },
        },
      });

      dispatch(updateUserId(response.data.initialRegistration.id * 1));
      dispatch(updateFormName("passCreation"));
    } catch (error: any) {
      toast.error('OTP not matched', {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error('Error during registration:', error);
    }
  };

  const clearOtpFields = () => {
    // Loop through the inputRefs and set the value of each input to an empty string
    inputRefs.current.forEach((inputRefs: any) => {
      if (inputRefs.current) {
        inputRefs.current.value = '';
      }
    });
  };

  const reCaptchChange = () => {
    return;
  }

  return (
    <div className="h-3/4 bg-white py-6 flex flex-col justify-center sm:py-12">
      <ToastContainer />
      <div className="relative py-3 sm:max-w-lg sm:mx-auto">
        <div className="absolute max-w-md inset-0 bg-gradient-to-r from-sky-300 to-sky-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 max-w-md  py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
                            {sendOtpClicked ? <p>Verify OTP to set password</p> : <p>Email Verification</p>}
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400 my-6">
                            {sendOtpClicked ? (
                                <p>We have sent a code to your email <strong>{email}</strong></p>
                            ) : (
                                <p>Enter email and verify your mail to be one step ahead</p>
                            )}
                        </div>
            <div className="mt-5 w-full sm:flex sm:items-center">
              <div className="w-11/12 mx-auto sm:max-w-xs py-8">
                {otpSent ? (
                  <Formik
                    initialValues={{ otp: "" }}
                    onSubmit={async (values, { setSubmitting }: any) => {
                      setOtp(values.otp);
                      setSubmitting(false);
                      verifyAccount();
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                          {Array.from({ length: 4 }, (_, index) => (
                            <div className="w-12 h-12" key={index}>
                              <input
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
                                type="text"
                                name={`digit-${index + 1}`}
                                id={`digit-${index + 1}`}
                                maxLength={1}
                                ref={inputRefs.current[index]}
                                onChange={(e) => handleOtpChange(e, index)}
                              />
                            </div>
                          ))}
                        </div>

                        <div className={`flex flex-row items-center mt-4 justify-evenly text-center text-sm font-medium space-x-1 ${resendDisabled ? "text-gray-300" : "text-gray-500"}`}>
                          <p>Didn&apos;t receive the code?</p>{" "}
                          <button
                            className={`flex flex-row items-center ${resendDisabled ? "text-sky-200" : "text-sky-600"} `}
                            disabled={resendDisabled}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();

                              reSend();
                            }}
                          >
                            Resend
                          </button>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="flex flex-row items-center mt-4 justify-center text-center px-4 mx-auto border rounded-lg outline-none py-4 bg-sky-600 border-none text-white text-sm font-semibold shadow-sm"
                            disabled={verificationLoading}
                          >
                            {isSubmitting ? "Verifying..." : "Verify Account"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <Formik
                    initialValues={{ email: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleEmailSubmit}
                  >
                    {({ isSubmitting, setFieldValue }) => (
                      <Form>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          placeholder="you@example.com"
                          disabled={isEmailSubmitting}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm"
                        />

                        {/* <div className="my-4">
                        <ReCAPTCHA
                          sitekey="6LexSekoAAAAAFt_Rek8-mHLbGpwWVZNsZhIsDJ0"
                          onChange={(value) => setFieldValue('recaptcha', value)}
                        />
                        <ErrorMessage
                          name="recaptcha"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        </div> */}

                        <button
                          type="submit"
                          disabled={resendDisabled || isEmailSubmitting}
                          className={` mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:ml-3 sm:w-auto ${resendDisabled ? "bg-sky-200" : "bg-sky-500 hover:bg-sky-400"
                            }`}
                        >
                          {isSubmitting ? (
                            <div className="flex space-x-1 items-center">
                              <div>Loading</div>
                              <div className="animate-bounce">...</div>
                            </div>
                          ) : (
                            "Send OTP"
                          )}
                        </button>
                      </Form>
                    )}
                  </Formik>
                )}
              </div>
            </div>
          </div>

          <div>
            {resendDisabled && (
              <CountdownTimer timer={timer} />
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
