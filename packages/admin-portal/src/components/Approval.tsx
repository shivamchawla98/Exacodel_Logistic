import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { BiErrorCircle } from 'react-icons/bi';

const WAITING_FOR_APPROVAL_QUERY = gql`
  query {
    waitingforapproval {
      id
      email
      userType
      first_name
      last_name
      annualTurnover
      BillingCode
      companyType
      industryType
      companyName
      state
      pincode
      Adress
      gst_no
      city
      country
      company_reg_no
      company_pan_no
      Designation
      mobile
      website
    }
  }
`;

const APPROVE_USER_MUTATION = gql`
mutation ApproveUser($userId: Int!, $input: UpdateapprovedUsertype!) {
  approveUser(userId: $userId, input: $input) {
    id
    BillingCode
    userType
  }
}
`;



export default function Approval({ index, onApproveClick, isApproved }: any) {
  const { loading, error, data } =  useQuery(WAITING_FOR_APPROVAL_QUERY);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData]:any[] = useState({});
  // these are only for adding non null , undefined value to the approval mutation needs refactor in future
  const [userType, setUserType] = useState("");
  const [gst_no, setGstNo] = useState(""); 
  const [Id, setUserId] = useState<any>("");
  const [showAlert, setShowAlert] = useState(false);
  const [attachments, setAttachments] = useState<any[]>([
    { name: 'GST_certificate.pdf', size: '2.4mb' },
    { name: 'pan_Card.pdf', size: '4.5mb' },
    { name: 'sample.docx', size: '1.8mb' },
    { name: 'sample2.docx', size: '1.8mb' }, // Add more attachments as needed
  ]);

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


  const [approveUser] = useMutation(APPROVE_USER_MUTATION);

  useEffect(() => {
    if (!loading && data && data.waitingforapproval) {
      const singleApprovalData = data.waitingforapproval[index];
      setUserId(singleApprovalData.id)
      setUserType(singleApprovalData.userType)
      setGstNo(singleApprovalData.gst_no)
      console.log(Id*1);
      
      
      if (singleApprovalData) {
        setFormData({
          'Full name': singleApprovalData.first_name + ' ' + singleApprovalData.last_name,
          'Email address': singleApprovalData.email,
          'Annual Turn Over': singleApprovalData.annualTurnover,
          'Billing Code of company': singleApprovalData.BillingCode,
          'Type of Company': singleApprovalData.companyType,
          'Industry': singleApprovalData.industryType,
          'Company Name': singleApprovalData.companyName,
          'State': singleApprovalData.state,
          'Pincode': singleApprovalData.pincode,
          'Address': singleApprovalData.Adress,
          'City': singleApprovalData.city,
          'Country': singleApprovalData.country,
          'Company Registration Number': singleApprovalData.company_reg_no,
          'Company Pan Number': singleApprovalData.company_pan_no,
          'Designation': singleApprovalData.Designation,
          'Contact Number': singleApprovalData.mobile,
          'Website': singleApprovalData.website,
        });

        if (singleApprovalData.attachments) {
          setAttachments(singleApprovalData.attachments);
        }
      }
    }
  }, [loading, data, index]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newAttachments = [...attachments];
      newAttachments[index] = {
        name: files[0].name,
        size: (files[0].size / 1024 / 1024).toFixed(2) + 'mb',
      };
      setAttachments(newAttachments);
    }
  };

  const handleApprove = async() => {
    console.log("user id : ", Id*1);
    try {
      const { data: approvalData } = await approveUser({
        variables: {
          userId: (Id*1),
          input: {
              userType: userType,
              companyType: formData['Type of Company'],
              industryType: formData['Industry'],
              state: formData['State'],
              city: formData['City'],
              country: formData['Country'],
              company_reg_no: formData['Company Registration Number'],
              annualTurnover: formData['Annual Turn Over'],
              gst_no: gst_no, // Assuming 'Company Pan Number' corresponds to GST Number
              first_name: formData['Full name'].split(' ')[0], // Extract first name
              last_name: formData['Full name'].split(' ')[1], // Extract last name
              Designation: formData['Designation'],
              mobile: formData['Contact Number'],
              website: formData['Website'],
              // // email: formData['Email address'],
              // BillingCode: formData['Billing Code of company'],
              // companyName: formData['Company Name'],
              // pincode: formData['Pincode'],
              // Address: formData['Address'],
              // company_pan_no: formData['Company Pan Number'], // Assuming it's different from GST Number
          },
        },
      });
      isApproved()
      onApproveClick()
      console.log("aaproval data : ", approvalData);
 

    } catch (error) {
      setShowAlert(true);
      console.error(error);
    }
    console.log("GraphQL Query:", APPROVE_USER_MUTATION?.loc?.source?.body);
  }

  return (
    <div className=' '>
       {showAlert && <Alert />}
      <div className="overflow-hidden relative my-16 mx-auto bg-white sm:rounded-lg w-3/4 rounded-md shadow-md">
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-sky-500 to-sky-600 opacity-40"
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
          />
        </div>
        <div className="px-4 py-6 sm:px-6 ">
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
                <div className="col-span-4">
                  <dt className="text-sm font-medium text-gray-900">{label}</dt>
                </div>
                <div className="col-span-8">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(label, e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-sky-500 text-sm text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>
            ))}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-lg font-medium leading-6 text-gray-900">Attachments</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-300 p-3">
                  {attachments.map((attachment, index) => (
                    <li key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <PaperClipIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                        <div className="ml-3">
                          <p className="text-md font-semibold text-gray-900">{attachment.name}</p>
                          <p className="text-xs text-gray-600">{attachment.size}</p>
                        </div>
                      </div>
                      <label htmlFor={`fileInput${index}`} className="cursor-pointer font-medium text-sky-600 hover:text-sky-500">
                        Update
                      </label>
                      <input
                        id={`fileInput${index}`}
                        type="file"
                        accept=".pdf, .doc, .docx, .xls, .xlsx, .png, .jpg, .jpeg" // Adjust accepted file types as needed
                        className="hidden"
                        onChange={(e) => handleFileChange(index, e)}
                      />
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
