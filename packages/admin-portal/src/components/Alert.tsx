import { useRouter } from "next/navigation";
import { XCircleIcon } from '@heroicons/react/20/solid'

export default function Alert() {
    const router = useRouter();
    return (
        <div className="fixed top-0 left-0 right-0 z-50 rounded-md bg-red-50 cursor-pointer p-4">
            <div onClick={() => router.push("./")} className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                        Please wait for your approval, we will send you mail when you are approved
                    </h3>
                    <h3 className="text-sm font-medium text-red-800">
                        If not registered, please register to move forward
                    </h3>
                    <h3 className="text-base font-medium text-green-800">
                        Click On alert to move to the home page
                    </h3>
                </div>
            </div>
        </div>

    )
}