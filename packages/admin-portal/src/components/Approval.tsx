import { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import GET_USER_ID from '@/graphql/query/getUserById';
import APPROVE_USER_MUTATION from '@/graphql/mutation/approveUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SEND_TO_REVIEW_USER from '@/graphql/mutation/sendToReviewUser';
import Prompt from './Prompt';


// Create a mapping array to map enum values to labels
const annualTurnoverLabels = [
  { value: "UP_TO_10000", label: "Up to $10,000" },
  { value: "FROM_10000_TO_50000", label: "$10,000 to $50,000" },
  { value: "FROM_50000_TO_100000", label: "$50,000 to $100,000" },
  { value: "FROM_100000_TO_500000", label: "$100,000 to $500,000" },
  { value: "FROM_500000_TO_1000000", label: "$500,000 to $1,000,000" },
  { value: "FROM_1000000_TO_1500000", label: "$1,000,000 to $1,500,000" },
  { value: "FROM_1500000_TO_2500000", label: "$1,500,000 to $2,500,000" },
  { value: "FROM_2500000_TO_5000000", label: "$2,500,000 to $5,000,000" },
  { value: "FROM_5000000_TO_10000000", label: "$5,000,000 to $10,000,000" },
  { value: "ABOVE_10000000", label: "Above $10,000,000" },
];

const industryTypeOptions = [
  "Apparels_and_garments",
  "Building_and_Construction",
  "Electronic_and_Electical",
  "Drugs_and_pharms",
  "Industrial_Machines",
  "Industrial_suppplies",
  "Food_and_Beverages",
  "Hospital_and_Medicalsupplies"
];
// Create a mapping object to map enum values to labels
const industryTypeLabels = {
  "Apparels_and_garments": "Apparels and Garments",
  "Building_and_Construction": "Building and Construction",
  "Electronic_and_Electical": "Electronic and Electrical",
  "Drugs_and_pharms": "Drugs and Pharmaceuticals",
  "Industrial_Machines": "Industrial Machines",
  "Industrial_suppplies": "Industrial Supplies",
  "Food_and_Beverages": "Food and Beverages",
  "Hospital_and_Medicalsupplies": "Hospital and Medical Supplies",
};


// Create a mapping array to map enum values to labels
const companyTypeLabels = [
  { value: "Partnership", label: "Partnership" },
  { value: "private_limited", label: "Private Limited" },
  { value: "public_limited", label: "Public Limited" },
  { value: "limited_liability_partnership", label: "Limited Liability Partnership" },
  { value: "Non_profit_cooperation", label: "Non-Profit Cooperation" },
  { value: "Inc", label: "Inc" },
  { value: "Cooperation", label: "Cooperation" },
  { value: "LLC", label: "LLC" },
];

const userTypes = [
  "CUSTOMER",
  "VENDOR",
  "OVERSEAS_AGENT"
  // Add more options as needed
];

const getFileNameFromLink = (link: string): string => {
  const startIndex = link.lastIndexOf('/') + 1; // Get the index after the last '/'
  // Extract the file name without extension
  const fileNameWithExtension = link.substring(startIndex);
  const name = fileNameWithExtension.substring(fileNameWithExtension.indexOf('=') + 1);

  return name;
};
// Function to get the label for a given enum value
const getENUMTypeLabel = (enumKeyValue: any, enumValue: any) => {
  return enumKeyValue[enumValue] || enumValue;
};


export default function Approval({ setName, setOperation, Id, onApproveClick, isApproved }: any) {
  const { loading, error, data } = useQuery(GET_USER_ID, {
    variables: {
      id: Id * 1
    },
  });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [corporateAddress, setCorporateAddress] = useState<any>({});
  const [userType, setUserType] = useState('');
  const [gst_no, setGstNo] = useState('');
  const [selectedAnnualTurnover, setSelectedAnnualTurnover] = useState('');
  const [selectedCompanyType, setSelectedCompanyType] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('');
  const [selectedIndustryType, setSelectedIndustryType] = useState('');
  const [isPromptOpen, setPromptOpen] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [whichAction, setAction] = useState('');
  const [files, setFiles] = useState<any>({});

  const [approveUser] = useMutation(APPROVE_USER_MUTATION);
  const [sendtoreveiwuser] = useMutation(SEND_TO_REVIEW_USER);


  useEffect(() => {

    if (!loading && data && data.getUserById) {
      console.log("data", data);
      console.log("loading", error);
      let user = data.getUserById;

      console.log("list of intitial users ", user.id);

      setUserType(user.userType);
      setGstNo(user.gst_no);

      if (user) {
        setSelectedAnnualTurnover(user.annualTurnover);
        setSelectedCompanyType(user.companyType);
        setSelectedUserType(user.userType);
        setSelectedIndustryType(user.industryType)
        setFormData({
          'Company Name': user.companyName,
          'GST Number': user.gst_no,
          'Full name': user.first_name + ' ' + user.last_name,
          'Email address': user.email,
          // 'Password': user.password,
          'Annual Turn Over': selectedAnnualTurnover,
          // 'Billing Code of company': user.BillingCode,
          'User Type': selectedUserType,
          'Type of Company': selectedCompanyType,
          'Industry': selectedIndustryType,
          'State': user.state,
          'Pincode': user.pincode,
          'Address': user.Adress,
          'City': user.city,
          'Country': user.country,
          'Company Registration Number': user.company_reg_no,
          'Company Pan Number': user.company_pan_no,
          'Designation': user.Designation,
          'Contact Number': user.mobile,
          'Website': user.website,
        });
        setCorporateAddress({
          "Address": user.corporateAddress.address,
          "State": user.corporateAddress.state,
          "City": user.corporateAddress.city,
          "pincode": user.corporateAddress.pincode,
          "Country": user.corporateAddress.country,
        })
        setFiles({
          "Certificate Of Registration": user.kyc.certificate_of_registration,
          "Company Pan Card" : user.kyc.company_pan_card,
          "Aadhaar Card" : user.kyc.aadhar_card,
          "Pan Card" : user.kyc.pan_card,
          "ISO Certificate" : user.kyc.iso_certificate,
          "AEO Certificate": user.kyc.aeo_certificate,
          "IATA Certificate": user.kyc.iata_certificate,
          "DUNS Certificate": user.kyc.duns_certificate,
          "Manufacturing Lisence": user.kyc.manufacturing_license,
          "Any Other Trading License": user.kyc.any_other_trading_license,
      })
      }
    }
  }, [loading, data, Id]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleApprove = async (approvedOrReject: String) => {
    console.log("Id : ", Id);
  
      try {
        const { data: approvalData } = await approveUser({
          variables: {
            userId: Id * 1,
            input: {
              companyType: selectedCompanyType,
              Approveduser: approvedOrReject,
              industryType: selectedIndustryType,
              state: formData['State'],
              pincode: formData['Pincode'],
              Address: formData['Address'],
              city: formData['City'],
              country: formData['Country'],
              company_reg_no: formData['Company Registration Number'],
              company_name: formData['Company Name'],
              company_pan_no: formData['Company Pan Number'],
              annualTurnover: selectedAnnualTurnover,
              gst_no: formData['GST Number'],
              first_name: formData['Full name'].split(' ')[0],
              last_name: formData['Full name'].split(' ')[1],
              Designation: formData['Designation'],
              mobile: formData['Contact Number'],
              website: formData['Website'],
              email: formData['Email address'],
              // password: formData['Password'],
              userType: userType,
              customerSubType: formData['Customer Type'],
              vendorSubType: formData['Vendor Type'],
              overseasAgentSubType: formData['Overseas Type'],
              remarks: remarks,
            },
          },
        });
        console.log("this is : ", data);
        setName(formData['Full name']);
        setOperation(approvedOrReject)
        onApproveClick();
        isApproved()
      } catch (error: any) {
        if (error.networkError) {
          toast.error('There is network error come after some time', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        else {
          toast.error('Some Error !', {
            position: toast.POSITION.TOP_CENTER,
          });
  
        }
        console.error("error : ", error);
      }
      
  }

  const handleReviw = async () => {
    
      try {
        const { data: approvalData } = await approveUser({
          variables: {
            userId: Id * 1,
            input: {
              remarks: remarks,
            }
          }
        })
  
        const { data: any } = await sendtoreveiwuser({
          variables: {
            id: Id * 1,
          }
        })
  
        console.log("this is : ", data);
        setName(formData['Full name']);
        setOperation("Sended Review")
        onApproveClick();
        isApproved()
      } catch (error: any) {
        console.log("review error ", error);
        if (error.networkError) {
          toast.error('There is network error come after some time', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        else {
  
          toast.error('Some Error !', {
            position: toast.POSITION.TOP_CENTER,
          });
  
        }
      }

  }

  return (
    <div className=' '>
      <ToastContainer />
      <Prompt isPromptOpen={isPromptOpen} remarks={remarks}
       setPromptOpen={setPromptOpen}
        setRemarks={setRemarks}
         handleApprove={() => {handleApprove(whichAction)}}
         handleReviw={() => {handleReviw()}}
         whichAction={whichAction}
         userID = {Id}
         />
      <div className="overflow-hidden relative my-10  lg:my-0 mx-auto bg-white sm:rounded-lg w-full lg:w-full rounded-md shadow-md">
        <div className="px-4 py-3 sm:px-6">
          <div className='w-full flex justify-start lg:justify-between items-center flex-wrap lg:flex-nowrap'>
            <h3 className="text-base  font-semibold leading-7 text-gray-900 items-baseline">Applicant Information</h3>


          </div>
          <p className="mt-1 max-w-2xl text-xs font-medium leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100 grid grid-cols-1 lg:grid-cols-3">
            {Object.entries(formData).map(([label, value]: any[]) => (
              <div className="grid grid-cols-3 items-center py-4 px-6" key={label}>
                <div className="col-span-full">
                  <div className="">
                    <dt className="text-xs pb-2 font-medium text-gray-700">{label}</dt>
                  </div>
                  <div className="">
                    {label === 'Annual Turn Over' ? (
                      <select
                        value={selectedAnnualTurnover}
                        onChange={(e) => setSelectedAnnualTurnover(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-xs font-medium text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Annual Turnover</option>
                        {annualTurnoverLabels.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : label === 'Type of Company' ? (
                      <select
                        value={selectedCompanyType}
                        onChange={(e) => setSelectedCompanyType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-xs font-medium text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Type of Company</option>
                        {companyTypeLabels.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : label === 'User Type' ? (
                      <select
                        value={selectedUserType}
                        onChange={(e) => setSelectedUserType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-xs font-medium text-gray-700 placeholder-gray-400"
                      >
                        <option value="">User Types</option>
                        {userTypes.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === 'Industry' ? (
                      <select
                        value={selectedIndustryType}
                        onChange={(e) => setSelectedIndustryType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-xs font-medium text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Industry</option>
                        {industryTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {getENUMTypeLabel(industryTypeLabels, option)}
                          </option>
                        ))}
                      </select>
                    ) : label === 'Email address' ? (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(label, e.target.value)}
                        disabled={true}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-xs font-medium text-gray-700 placeholder-gray-400"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(label, e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-xs font-medium text-gray-700 placeholder-gray-400"
                      />
                    )
                    }
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
        {/* company contact */}
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />      
        <div className="">
        <h2 className="text-sm  font-semibold leading-7 text-gray-900 items-baseline pl-6">Corporate Address</h2>
          <dl className="divide-y divide-gray-100 grid grid-cols-1 lg:grid-cols-3">
            {Object.entries(corporateAddress).map(([label, value]: any[]) => (
              <div className="grid grid-cols-3 items-center py-4 px-6" key={label}>
                <div className="col-span-full">
                  <div className="">
                    <dt className="text-xs pb-2 font-medium text-gray-700">{label}</dt>
                  </div>
                  <div>
                  <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(label, e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-xs font-medium text-gray-700 placeholder-gray-400"
                      />
                  </div>
                </div>
              </div>
            ))}
           </dl>
        </div> 

        {/* Kyc docs */}
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />      
        <div className="">
        <h2 className="text-sm  font-semibold leading-7 text-gray-900 items-baseline pl-6">KYC Documents</h2>
          <dl className="divide-y divide-gray-100 grid grid-cols-1 lg:grid-cols-2">
          {Object.entries(files).map(([label, value]: any[]) => (
            <>
            {
            files[label].length !== 0 ? (
              <div className="grid grid-cols-3 items-center justify-evenly py-4 px-6" key={label}>
              <div className="col-span-full">
                <div className="">
                  <dt className="text-xs pb-2 font-medium text-gray-700">{label}</dt>
                </div>
                <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => window.open(`https://globextrade.s3.ap-south-1.amazonaws.com/${value}`, '_blank')}
              className="px-1.5 py-2 text-xs rounded-md bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
              type="button"
            >
              Preview
            </button>
            <a
              href={`https://globextrade.s3.ap-south-1.amazonaws.com/${value}`}
              download={getFileNameFromLink(value)}
              target='_blank'
              className="px-4 py-2  text-xs font-normal text-center text-gray-500 hover:bg-sky-200 focus:outline-none focus:bg-sky-600"
            >
              Download {" "+ getFileNameFromLink(value)}
            </a>
          </div>
                </div>
                </div>
            ) : "" 
            
          }
            </>
          ))}
            </dl>
        </div>



        <div className='flex justify-end lg:justify-end  w-full lg:w-11/12 my-6'>
        <button
            onClick={() => {
              setPromptOpen(true)
              setAction("Approved")
              
            }}
            type="button" className="rounded-md bg-sky-500 px-3 mx-1 text-xs font-semibold text-white shadow-sm hover:bg-sky-400">
            Approve<span className="sr-only">, Approve </span>
          </button>
          <button
            onClick={() => {
              setPromptOpen(true)
              setAction("Rejected")
            }}
            type="button" className="rounded-md bg-sky-500 px-3 mx-1 text-xs  font-semibold text-white shadow-sm hover:bg-sky-400">
            Reject<span className="sr-only">, Reject </span>
          </button>
          <button
            onClick={() => {
             
              setPromptOpen(true)
              setAction("Review")
            }}
            type="button" className="rounded-md bg-sky-500 px-3 mx-1 py-2 text-xs  font-semibold text-white shadow-sm hover:bg-sky-400">
            Send for Review<span className="sr-only">, Review </span>
          </button>



        </div>
      </div>
    </div>
  );
}
