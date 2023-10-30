import { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import GET_USER_ID from '@/graphql/query/getUserById';
import APPROVE_USER_MUTATION from '@/graphql/mutation/approveUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SEND_TO_REVIEW_USER from '@/graphql/mutation/sendToReviewUser';

const annualTurnoverOptions = [
  "UP_TO_10000",
  "FROM_10000_TO_50000",
  "FROM_50000_TO_100000",
  "FROM_100000_TO_500000",
  "FROM_500000_TO_1000000",
  "FROM_1000000_TO_1500000",
  "FROM_1500000_TO_2500000",
  "FROM_2500000_TO_5000000",
  "FROM_5000000_TO_10000000",
  "ABOVE_10000000"
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

const companyTypeOptions = [
  "Partnership",
  "private_limited",
  "public_limited",
  "limited_liability_partnership",
  "Non_profit_cooperation",
  "Inc",
  "Cooperation",
  "LLC"
];

const userTypes = [
  "CUSTOMER",
  "VENDOR",
  "OVERSEAS_AGENT"
  // Add more options as needed
];




export default function Approval({ setName, setOperation, Id, onApproveClick, isApproved }: any) {
  const { loading, error, data } = useQuery(GET_USER_ID, {
    variables: {
      id: Id * 1
    },
  });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [userType, setUserType] = useState('');
  const [gst_no, setGstNo] = useState('');
  const [selectedAnnualTurnover, setSelectedAnnualTurnover] = useState('');
  const [selectedCompanyType, setSelectedCompanyType] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('');
  const [selectedIndustryType, setSelectedIndustryType] = useState('');

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
          'Remarks': "",
        });


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
            remarks: formData['Remarks'],
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
            remarks: formData['Remarks']
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
      <div className="overflow-hidden relative my-10  lg:my-16 mx-auto bg-white sm:rounded-lg w-full lg:w-3/4 rounded-md shadow-md">
        <div className="px-4 py-6 sm:px-6">
          <div className='w-full flex justify-start lg:justify-between items-center flex-wrap lg:flex-nowrap'>
            <h3 className="text-base  font-semibold leading-7 text-gray-900 items-baseline">Applicant Information</h3>

            <div className='flex justify-end lg:justify-evenly w-full my-6 lg:w-1/2'>
              <button
                onClick={() => {
                  handleReviw()
                }}
                type="button" className="rounded-md bg-sky-500 px-3 mx-1 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400">
                Send for Review<span className="sr-only">, Review </span>
              </button>
              <button
                onClick={() => {
                  handleApprove("Rejected")
                }}
                type="button" className="rounded-md bg-sky-500 px-3 mx-1 text-sm font-semibold text-white shadow-sm hover:bg-sky-400">
                Reject<span className="sr-only">, Reject </span>
              </button>
              <button
                onClick={() => {
                  handleApprove("Approved")
                }}
                type="button" className="rounded-md bg-sky-500 px-3 mx-1 text-sm font-semibold text-white shadow-sm hover:bg-sky-400">
                Approve<span className="sr-only">, Approve </span>
              </button>

            </div>
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {Object.entries(formData).map(([label, value]: any[]) => (
              <div className="grid grid-cols-12 items-center py-4 px-6" key={label}>
                <>
                  <div className="col-span-4">
                    <dt className="text-sm font-medium text-gray-900">{label}</dt>
                  </div>
                  <div className="col-span-8">
                    {label === 'Annual Turn Over' ? (
                      <select
                        value={selectedAnnualTurnover}
                        onChange={(e) => setSelectedAnnualTurnover(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Annual Turnover</option>
                        {annualTurnoverOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === 'Type of Company' ? (
                      <select
                        value={selectedCompanyType}
                        onChange={(e) => setSelectedCompanyType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Select Type of Company</option>
                        {companyTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === 'User Type' ? (
                      <select
                        value={selectedUserType}
                        onChange={(e) => setSelectedUserType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
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
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      >
                        <option value="">Industry</option>
                        {industryTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : label === 'Email address' ? (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(label, e.target.value)}
                        disabled = {true}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      />
                    ) : (
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleInputChange(label, e.target.value)}
                          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                        />
                      )
                    }
                  </div>
                </>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
