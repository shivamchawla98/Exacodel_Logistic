import GET_USER_BY_ID from "@/graphql/query/getUserById";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

// Map the enum values to human-readable items
const companyTypeMap: { [key: string]: string } = {
  Partnership: "Partnership",
  private_limited: "Private Limited",
  public_limited: "Public Limited",
  limited_liability_partnership: "Limited Liability Partnership",
  Non_profit_cooperation: "Non-Profit Cooperation",
  Inc: "Inc",
  Cooperation: "Cooperation",
  LLC: "Limited Liability Company",
};

const annualTurnoverMap: { [key: string]: string } = {
  UP_TO_10000: "Up to $10,000",
  FROM_10000_TO_50000: "$10,000 to $50,000",
  FROM_50000_TO_100000: "$50,000 to $100,000",
  FROM_100000_TO_500000: "$100,000 to $500,000",
  FROM_500000_TO_1000000: "$500,000 to $1,000,000",
  FROM_1000000_TO_1500000: "$1,000,000 to $1,500,000",
  FROM_1500000_TO_2500000: "$1,500,000 to $2,500,000",
  FROM_2500000_TO_5000000: "$2,500,000 to $5,000,000",
  FROM_5000000_TO_10000000: "$5,000,000 to $10,000,000",
  ABOVE_10000000: "Above $10,000,000",
};

// Map the enum values to human-readable items
const industryTypeMap: { [key: string]: string } = {
  Apparels_and_garments: "Apparels and Garments",
  Building_and_Construction: "Building and Construction",
  Electronic_and_Electical: "Electronic and Electrical",
  Drugs_and_pharms: "Drugs and Pharmaceuticals",
  Industrial_Machines: "Industrial Machines",
  Industrial_suppplies: "Industrial Supplies",
  Food_and_Beverages: "Food and Beverages",
  Hospital_and_Medicalsupplies: "Hospital and Medical Supplies",
};

function Prompt({
  isPromptOpen,
  remarks,
  setPromptOpen,
  setRemarks,
  handleApprove,
  handleReviw,
  whichAction,
  userID,
}: any) {
  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userID * 1,
    },
  });
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (!loading && data && data.getUserById) {
      const user = data?.getUserById;
      if (user) {
        setFormData({
          "Company Name": user.companyName,
          "GST Number": user.gst_no,
          "Full name": user.first_name + " " + user.last_name,
          "Email address": user.email,
          "Annual Turn Over":
            annualTurnoverMap[user.annualTurnover] || user.annualTurnover,
          "User Type": user.userType,
          "Type of Company":
            companyTypeMap[user.companyType] || user.companyType,
          Industry: industryTypeMap[user.industryType] || user.industryType,
          State: user.state,
          Pincode: user.pincode,
          Address: user.Adress,
          City: user.city,
          Country: user.country,
          "Company Registration Number": user.company_reg_no,
          "Company Pan Number": user.company_pan_no,
          Designation: user.Designation,
          "Contact Number": user.mobile,
          Website: user.website,
        });
      }
    }
  }, [userID, loading, data]);

  const closePrompt = () => {
    setPromptOpen(false);
  };

  const openPrompt = () => {
    setPromptOpen(true);
  };

  const reviewAndReject = (whichAction: any) => {
    console.log("whichAction ", whichAction);

    if (whichAction === "Review") {
      handleReviw();
      setPromptOpen(false);
    } else {
      handleApprove();
      setPromptOpen(false);
    }
  };

  const handleRemarksChange = (e: any) => {
    let value = e.target.value;
    console.log("remarks", remarks);
    setRemarks(value);
  };
  console.log("which Action", whichAction);

  return (
    <div>
      {isPromptOpen && (
        <div className="fixed z-10 mt-10 inset-0 overflow-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block lg:ml-60 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                  {" "}
                  {whichAction === "Rejected"
                    ? "I want to Reject User"
                    : whichAction === "Review"
                      ? "I want to send User for Review"
                      : "Please check the details before Approving User"}
                </h3>
                {whichAction !== "Approved" && (
                  <>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Add Remarks To remind{" "}
                        {whichAction === "Rejected"
                          ? "Rejection cause"
                          : "Review Issues"}
                      </p>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="remarks"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Remarks for{" "}
                        {whichAction === "Rejected" ? "Rejection" : "Review"}
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
                )}

                {whichAction === "Approved" && (
                  <>
                    <div className="   h-full mx-2">
                      {/* Profile tab */}
                      {/* About Section */}
                      <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="text-gray-700">
                          <div className="grid md:grid-cols-2 text-xs">
                            {Object.entries(formData).map(
                              ([label, value]: any) => (
                                <div className="grid grid-cols-2" key={label}>
                                  <div className="px-4 py-1 font-semibold">
                                    {label}
                                  </div>
                                  <div className="px-4 py-1 ">{value}</div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      {/* End of about section */}
                    </div>
                  </>
                )}
              </div>
              <div className="bg-gray-50 px-4 pb-4 sm:px-6 sm:flex w-full sm:flex-row-reverse">
                {whichAction !== "Approved" ? (
                  <button
                    onClick={() => reviewAndReject(whichAction)}
                    disabled={remarks.trim() === ""} // Disable the close button if remarks are empty
                    className={`w-full inline-flex justify-center rounded-md px-4 mx-6 py-2 focus:outline-none sm:w-auto sm:text-sm ${
                      remarks.trim() === ""
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-sky-500 hover:bg-sky-700 text-base font-medium text-white"
                    }`}
                  >
                    Confirm
                  </button>
                ) : (
                  <button
                    onClick={() => reviewAndReject(whichAction)}
                    className={`w-full inline-flex justify-center rounded-md mx-6 px-4 py-2 focus:outline-none sm:w-auto sm:text-sm bg-sky-500 hover:bg-sky-700 text-base font-medium text-white`}
                  >
                    Confirm
                  </button>
                )}

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
  );
}

export default Prompt;
