function Prompt({ isPromptOpen, remarks, setPromptOpen, setRemarks, handleApprove, handleReviw, whichAction }: any) {

  const closePrompt = () => {

    setPromptOpen(false);
  };

  const openPrompt = () => {
    setPromptOpen(true);
  };

  const reviewAndReject = (whichAction: any) => {
    console.log("whichAction ", whichAction)

    if (whichAction === 'Review') {
      handleReviw()
      setPromptOpen(false)
    }
    else {
      handleApprove()
      setPromptOpen(false)
    }
  }

  const handleRemarksChange = (e: any) => {
    setRemarks(e.target.value);
  };
console.log("which Action", whichAction);

  return (
    <div>
      {isPromptOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900">I want to {whichAction === "Rejected" ? "Reject" : whichAction === "Review" ? "send User for Review" : "Approve User"} !</h3>
                {
                  whichAction !== "Approved" &&
                  <>

                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Add Remarks To remind {whichAction === "Rejected" ? "Rejection cause" : "Review Issues"}
                      </p>
                    </div>
                    <div className="mt-4">

                      <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
                        Remarks for {whichAction === "Rejected" ? "Rejection" : "Review"}
                      </label>
                      <textarea
                        id="remarks"
                        name="remarks"
                        value={remarks}
                        onChange={handleRemarksChange}
                       
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                        placeholder="Add remarks..."
                      ></textarea>

                    </div>
                  </>
                }


              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex w-full sm:flex-row-reverse">

                {
                  whichAction !== "Approved" ? (
                    <button
                      onClick={() => reviewAndReject(whichAction)}
                      disabled={remarks.trim() === ''} // Disable the close button if remarks are empty
                      className={`w-full inline-flex justify-center rounded-md px-4 mx-6 py-2 focus:outline-none sm:w-auto sm:text-sm ${remarks.trim() === '' ? 'bg-gray-300 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-700 text-base font-medium text-white'
                        }`}
                    >
                      Confirm
                    </button>
                  ) : (<button
                    onClick={() => reviewAndReject(whichAction)}

                    className={`w-full inline-flex justify-center rounded-md mx-6 px-4 py-2 focus:outline-none sm:w-auto sm:text-sm bg-sky-500 hover:bg-sky-700 text-base font-medium text-white`}
                  >
                    Confirm
                  </button>)
                }

                <button
                  onClick={closePrompt}
                  className={`w-full inline-flex justify-center rounded-md mx-6 px-4 py-2 focus:outline-none sm:w-auto sm:text-sm bg-sky-400 hover:bg-sky-600 text-base font-medium text-white
                  `}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Prompt