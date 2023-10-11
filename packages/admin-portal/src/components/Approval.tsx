import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import { BiErrorCircle } from 'react-icons/bi';

const WAITING_FOR_APPROVAL_QUERY = gql`
  query {
    listInitialRegistrations {
      id
      BillingCode
      userType
      customerSubType
      vendorSubType
      overseasAgentSubType
      email
      password
      companyType
      industryType
      companyName
      state
      pincode
      Adress
      city
      country
      company_reg_no
      company_pan_no
      gst_no
      first_name
      last_name
      annualTurnover
      Designation
      mobile
      website
    }
  }
`;

const APPROVE_USER_MUTATION = gql`
  mutation approveUser($userId: Int!, $input: Updateapproved!) {
    approveUser(userId: $userId, input: $input) {
      id
      BillingCode
      userType
    }
  }
`;

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




export default function Approval({ index, onApproveClick, isApproved }: any) {

  const { loading, error, data } = useQuery(WAITING_FOR_APPROVAL_QUERY);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [userType, setUserType] = useState('');
  const [gst_no, setGstNo] = useState('');
  const [Id, setUserId] = useState<any>('');
  const [showAlert, setShowAlert] = useState(false);

  const [selectedAnnualTurnover, setSelectedAnnualTurnover] = useState('');
  const [selectedCompanyType, setSelectedCompanyType] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('');
  const [selectedIndustryType, setSelectedIndustryType] = useState('');

  const [approveUser] = useMutation(APPROVE_USER_MUTATION);

  useEffect(() => {
    if (!loading && data && data.listInitialRegistrations) {

      const listInitialRegistrations = data.listInitialRegistrations[index * 1];
      console.log("list of intitial users ", listInitialRegistrations.id);
      
      setUserId(listInitialRegistrations.id * 1);
      setUserType(listInitialRegistrations.userType);
      setGstNo(listInitialRegistrations.gst_no);

      if (listInitialRegistrations) {
        setSelectedAnnualTurnover(listInitialRegistrations.annualTurnover);
        setSelectedCompanyType(listInitialRegistrations.companyType);
        setSelectedUserType(listInitialRegistrations.userType);
        setSelectedIndustryType(listInitialRegistrations.industryType)
        setFormData({
          'Company Name': listInitialRegistrations.companyName,
          'GST Number': listInitialRegistrations.gst_no,
          'Full name': listInitialRegistrations.first_name + ' ' + listInitialRegistrations.last_name,
          'Email address': listInitialRegistrations.email,
          'Password': listInitialRegistrations.password,
          'Annual Turn Over': selectedAnnualTurnover,
          'Billing Code of company': listInitialRegistrations.BillingCode,
          'User Type': selectedUserType,
          'Type of Company': selectedCompanyType,
          'Industry': selectedIndustryType,
          'State': listInitialRegistrations.state,
          'Pincode': listInitialRegistrations.pincode,
          'Address': listInitialRegistrations.Adress,
          'City': listInitialRegistrations.city,
          'Country': listInitialRegistrations.country,
          'Company Registration Number': listInitialRegistrations.company_reg_no,
          'Company Pan Number': listInitialRegistrations.company_pan_no,
          'Designation': listInitialRegistrations.Designation,
          'Contact Number': listInitialRegistrations.mobile,
          'Website': listInitialRegistrations.website,
        });


      }
    }
  }, [loading, data, index]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  function Alert() {
    return (
      <div className="rounded-md bg-red-50 p-4 cursor-pointer">
        <div
          onClick={() => {
            setShowAlert(false);
          }}
          className="flex">
          <div className="flex-shrink-0">
            <BiErrorCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error caused in Approve</h3>
            <div className="my-2 text-sm text-red-700">
              <ul role="list" className="list-disc space-y-1 pl-5">
                <li>Some fields are left for filling</li>
                <li>Or you have entered wrong inputs in the fields</li>
              </ul>
            </div>
            <h3 className="text-base font-medium text-green-800">Click On alert and continue Approving</h3>
          </div>
        </div>
      </div>
    )
  }

  const handleApprove = async () => {
    console.log("Id : ", Id);  
    
    try {
      const { data: approvalData } = await approveUser({
        variables: {
          userId: Id * 1,
          input: {
            companyType: selectedCompanyType,
            Approveduser: "Approved",
            industryType: selectedIndustryType,
            state: formData['State'],
            pincode: formData['Pincode'],
            Address: formData['Address'],
            city: formData['City'],
            country: formData['Country'],
            company_reg_no: formData['Company Registration Number'],
            company_name: 'Sample Company Name',
            company_pan_no: formData['Company Pan Number'],
            annualTurnover: selectedAnnualTurnover,
            gst_no: gst_no,
            first_name: formData['Full name'].split(' ')[0],
            last_name: formData['Full name'].split(' ')[1],
            Designation: formData['Designation'],
            mobile: formData['Contact Number'],
            website: formData['Website'],
            email: formData['Email address'],
            password: formData['Password'],
            userType: userType,
            customerSubType: formData['Customer Type'],
            vendorSubType: formData['Vendor Type'],
            overseasAgentSubType: formData['Overseas Type'],
            remarks: 'Sample Remarks',
          },
        },
      });
      console.log("GraphQL Query:", APPROVE_USER_MUTATION?.loc?.source?.body);
      isApproved();
      console.log("this is : ", data);


      onApproveClick();
    } catch (error) {
      setShowAlert(true);
      console.error("error : ",error);
    }
  }

  return (
    <div className=' '>
      {showAlert && <Alert />}
      <div className="overflow-hidden relative my-16 mx-auto bg-white sm:rounded-lg w-3/4 rounded-md shadow-md">
        <div className="px-4 py-6 sm:px-6">
          <div className='w-full flex justify-between items-center'>
            <h3 className="text-base font-semibold leading-7 text-gray-900 items-baseline">Applicant Information</h3>
            <button
              onClick={() => {
                handleApprove()
              }}
              type="button" className="bg-sky-600 hover:bg-sky-700 text-white rounded-md shadow-md py-2 px-2">
              Approve<span className="sr-only">, Approve </span>
            </button>
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
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(label, e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                      />
                    )}
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
