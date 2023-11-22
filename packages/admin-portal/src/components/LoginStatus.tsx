
import '../app/globals.css'
import { useQuery } from '@apollo/client';
import {jwtDecode} from "jwt-decode";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, CogIcon } from '@heroicons/react/24/outline'
import GET_USER_BY_ID from '@/graphql/query/getUserById';



const LoginStatus = ({ id, open, setOpen }: any) => {
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_USER_BY_ID, {
        variables: {
            id: id,
        },
    });

    try {
        const jwtToken: any = Cookies.get('jwt');
        console.log("from token : ", jwtToken);
        const payload: any = jwtDecode(jwtToken)

        console.log(" getUserById Data ", payload);
        if (typeof (payload?.id) === 'number') {
            setOpen(false)
            router.push("/")
            return;
        }
    } catch (error) {
        console.log();
    }

    if (loading) {
        return <>loading ....</>
    }
    if (error) {
        return <>eroor :(</>
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

export default LoginStatus;