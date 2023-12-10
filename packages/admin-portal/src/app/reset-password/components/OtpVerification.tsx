import { useState, useRef, useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updateToken } from "@/features/login/login-slice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import ReCAPTCHA from "react-google-recaptcha";
import GET_USER_BY_ID from "@/graphql/query/getUserById";

const RESET_PASSWORD_TOKEN = gql`
mutation RESET_PASSWORD_TOKEN($email: String!){
    reset_password_token(email: $email)
  }
`;

const RESET_PASSWORD_VERIFY = gql`
mutation RESET_PASSWORD_VERIFY($mail: String!, $token: String!) {
    reset_password_verify(email: $mail, resettoken: $token)
  }`


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


function OtpVerification({ setNext}: any) {
    const email = useSelector((state: any) => state.loginSlice.email);
    const [sendOtpClicked, setSendOtpClicked] = useState(false);
    const [resendDisabled, setResendDisabled] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [verificationLoading, setVerificationLoading] = useState(false);
    const [timer, setTimer] = useState(0); // Added timer state
    const [reset_password_token] = useMutation(RESET_PASSWORD_TOKEN);
    const [reset_password_verify] = useMutation(RESET_PASSWORD_VERIFY)
    const dispatch = useDispatch();
    const inputRefs: any = useRef(Array(6).fill(0).map(() => createRef()));
    const [Email, setEmail] = useState('');
    const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);
    // const [data, error, loading, refetch] = useQuery(GET_USER_BY_ID,
    //     {
    //         variables: {
    //             userId: 
    //         }
    //     }
    //     );

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
        console.log(index);

        if (value && index < 5) { // Check if the value is not empty and the index is less than 5 (0 to 4)
            inputRefs.current[index + 1].current.focus();
        } else if (!value && index > 0) { // Check if the value is empty and the index is greater than 0 (1 to 5)
            inputRefs.current[index - 1].current.focus();
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
            const response = await reset_password_token({
                variables: {
                    email: Email,
                },
            });

            console.log("Email : ", Email);

            console.log(response?.data?.sendOTP);

            if (response?.data?.reset_password_token === "One time password has been sent to reset the password.") {
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
        setIsEmailSubmitting(true);
        dispatch(updateEmail(values.email));
        setEmail(values.email);
        try {
            const response = await reset_password_token({
                variables: {
                    email: values.email,
                },
            });

            console.log("Response : ",response?.data?.reset_password_token);

            if (response?.data?.reset_password_token === "One time password has been sent to reset the password.") {
                setSendOtpClicked(true);
                setResendDisabled(true);
                setOtpSent(true);
                setTimer(120); // Set the timer to 2 minutes
            }
        } catch (error: any) {
            if (error.message === "User not found") {
                toast.error('User not found !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        } finally {
            setIsEmailSubmitting(false);
        }
    };

    const verifyAccount = async () => {
        let otp = inputRefs.current.map((ref: any) => ref.current.value).join('');
            setNext()
            console.log(inputRefs);
            
    
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
                            {sendOtpClicked ? <p>Reset Password</p> : <p>Enter Email to reset Password</p>}
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
                                            let otp = inputRefs.current.map((ref: any) => ref.current.value).join('');
                                           try {
                                            const response = await reset_password_verify({
                                                variables: {
                                                   mail: email,
                                                   token: otp 
                                                }
                                            }) 
                                           } catch (error: any) {
                                            if(error?.message === "otp not valid") {
                                                toast.error("otp not valid", {
                                                    position: toast.POSITION.TOP_RIGHT
                                                })
                                            }
                                           }

                                            dispatch(updateToken(otp));
                                            
                                            setSubmitting(false);
                                            verifyAccount();
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <div className="flex flex-row items-center justify-evenly mx-auto w-full max-w-xs">
                                                    {Array.from({ length: 6 }, (_, index) => (
                                                        <div className="w-12 h-12" key={index}>
                                                            <input
                                                                className="peer placeholder-transparent h-10 w-10 border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-sky-600 text-sm pl-2"
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

                                                <div className={`flex flex-row items-center mt-4 justify-between text-center text-sm font-medium space-x-1 ${resendDisabled ? "text-gray-300" : "text-gray-500"}`}>
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
                                                        sitekey="6LeCE-4oAAAAABSp8AP59gU3QPI3_bPNnS5i2BAd"
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
