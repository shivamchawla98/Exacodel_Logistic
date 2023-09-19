'use-client'
import { useDispatch, useSelector } from "react-redux"
import { updateEmail } from "@/features/user/user-slice"
import { useState } from "react"


function OtpVerification() {
    let email = useSelector((state: any) => state.user.email)
    const [sendOtpClicked, setSendOtpClicked] = useState(false);
    const dispatch = useDispatch();

  return (
    <div className="h-3/4 bg-white py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-lg  sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div className="mt-5 w-full sm:flex sm:items-center">
        <div className="w-11/12 mx-auto sm:max-w-xs py-8">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => dispatch(updateEmail(e.target.value))}
              className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="button"
            onClick={(e) =>{
                setSendOtpClicked(true)
            } }
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:ml-3 sm:mt-0 sm:w-auto"
          >
            Send OTP
          </button>           
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400">
            {sendOtpClicked ? <p>We have sent a code to your email {email}</p> : <p>Enter email and verify you mail to be one step ahead</p> }
          
        </div>
      </div>
      <div>
        <form action="" method="post">
          <div className="flex flex-col space-y-16 mt-3">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">

              <div className="w-12 h-12 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-sky-700"
                  type="text"
                  name=""
                  id=""
                  maxLength={1}
                />
              </div>
              <div className="w-12 h-12 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-sky-700"
                  type="text"
                  name=""
                  id=""
                  maxLength={1}
                />
              </div>
              <div className="w-12 h-12">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-sky-700"
                  type="text"
                  name=""
                  id=""
                  maxLength={1}
                />
              </div>
              <div className="w-12 h-12 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-sky-700"
                  type="text"
                  name=""
                  id=""
                  maxLength={1}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div>
                <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-sky-700 border-none text-white text-sm shadow-sm">
                  Verify Account
                </button>
              </div>
              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p>{" "}
                <a
                  className="flex flex-row items-center text-sky-600"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resend
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default OtpVerification