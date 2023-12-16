import { useEffect, useState } from "react";
import GET_USER_BY_ID from "@/graphql/query/getUserById";
import { useQuery } from "@apollo/client";

// Map the enum values to human-readable items
const companyTypeMap: any = {
  Partnership: "Partnership",
  private_limited: "Private Limited",
  public_limited: "Public Limited",
  limited_liability_partnership: "Limited Liability Partnership",
  Non_profit_cooperation: "Non-Profit Cooperation",
  Inc: "Inc",
  Cooperation: "Cooperation",
  LLC: "Limited Liability Company",
};

const annualTurnoverMap: any = {
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
const industryTypeMap: any = {
  Apparels_and_garments: "Apparels and Garments",
  Building_and_Construction: "Building and Construction",
  Electronic_and_Electrical: "Electronic and Electrical",
  Drugs_and_pharms: "Drugs and Pharmaceuticals",
  Industrial_Machines: "Industrial Machines",
  Industrial_suppplies: "Industrial Supplies",
  Food_and_Beverages: "Food and Beverages",
  Hospital_and_Medicalsupplies: "Hospital and Medical Supplies",
};

const getFileNameFromLink = (link: string): string => {
  if (typeof link !== "string") {
    return link;
  }
  const startIndex = link?.lastIndexOf("/") + 1; // Get the index after the last '/'
  // Extract the file name without extension
  const fileNameWithExtension = link?.substring(startIndex);
  const name = fileNameWithExtension?.substring(
    fileNameWithExtension.indexOf("=") + 1
  );

  return name;
};

interface UserMoreInfoProps {
  userID: number;
}

const UserMoreInfo: React.FC<UserMoreInfoProps> = ({ userID }) => {
  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userID,
    },
  });
  const [files, setFiles] = useState<any>({});

  const [corporateAddress, setCorporateAddress] = useState<any>({});
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (!loading && data && data.getUserById) {
      const user = data?.getUserById;
      if (user) {
        console.log(user);

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
        setCorporateAddress({
          Address: user.corporateAddress?.address || "",
          State: user.corporateAddress?.state || "",
          City: user.corporateAddress?.city || "",
          pincode: user.corporateAddress?.pincode || "",
          Country: user.corporateAddress?.country || "",
        });
        setFiles({
          "Certificate Of Registration": user.kyc.certificate_of_registration,
          "Company Pan Card": user.kyc.company_pan_card,
          "Aadhaar Card": user.kyc.aadhar_card,
          "Pan Card": user.kyc.pan_card,
          "ISO Certificate": user.kyc.iso_certificate,
          "AEO Certificate": user.kyc.aeo_certificate,
          "IATA Certificate": user.kyc.iata_certificate,
          "DUNS Certificate": user.kyc.duns_certificate,
          "Manufacturing Lisence": user.kyc.manufacturing_license,
          "Any Other Trading License": user.kyc.any_other_trading_license,
        });
      }
    }
  }, [userID, loading, data]);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
          <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
          <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-sky-500 rounded-full"></div>
        </div>
      </>
    );
  }

  if (error) {
    console.log(error);

    return <p>Error encountered : (</p>;
  }
  console.log(files);

  return (
    <>
      {/* Right Side */}
      <div className="w-full md:w-11/12 mx-2 h-64">
        {/* Profile tab */}
        {/* About Section */}
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 my-6">
            <span className="text-sky-500">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="tracking-wide">User Details</span>
          </div>
          <div className="text-gray-700">
            <div className="grid text-xs md:grid-cols-2">
              {Object.entries(formData).map(([label, value]: any) => (
                <div className="grid grid-cols-2" key={label}>
                  <div className="px-4 py-2 font-semibold">{label}</div>
                  <div className="px-4 py-2">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End of about section */}

        {/* company contact */}
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="">
          <h2 className="text-sm  font-semibold leading-7 my-4 text-gray-900 items-baseline pl-6">
            Corporate Address
          </h2>
          <dl className="divide-y font-normal text-xs divide-gray-100 grid grid-cols-1 lg:grid-cols-3">
            {Object.entries(corporateAddress).map(([label, value]: any[]) => (
              <div className="grid grid-cols-2" key={label}>
                <div className="px-4 py-2 font-semibold">{label}</div>
                <div className="px-4 py-2">{value}</div>
              </div>
            ))}
          </dl>
        </div>

        {/* Kyc docs */}
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="w-full">
          <h2 className="text-sm  font-semibold leading-7 text-gray-900 items-baseline pl-6">
            KYC Documents
          </h2>
          <dl className="divide-y divide-gray-100 grid grid-cols-1 lg:grid-cols-2">
            {Object.entries(files).map(([label, value]: any[]) => (
              <>
                {value !== null && value.length !== 0 ? (
                  <div
                    className="grid grid-cols-3 items-center justify-evenly py-4 px-6"
                    key={value}
                  >
                    <div className="col-span-full">
                      <div className="">
                        <dt className="text-xs pb-2 font-medium text-gray-700">
                          {label}
                        </dt>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <button
                          onClick={() =>
                            window.open(
                              `https://globextrade.s3.ap-south-1.amazonaws.com/${value}`,
                              "_blank"
                            )
                          }
                          className="px-1.5 py-2 text-xs rounded-md bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
                          type="button"
                        >
                          Preview
                        </button>
                        <a
                          href={`https://globextrade.s3.ap-south-1.amazonaws.com/${value}`}
                          download={getFileNameFromLink(value)}
                          target="_blank"
                          className="px-4 py-2  text-xs font-normal text-center text-gray-500 hover:bg-sky-200 focus:outline-none focus:bg-sky-600"
                        >
                          Download {" " + getFileNameFromLink(value)}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default UserMoreInfo;
