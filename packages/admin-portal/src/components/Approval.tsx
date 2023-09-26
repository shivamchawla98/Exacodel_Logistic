import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { PaperClipIcon } from '@heroicons/react/20/solid';

const WAITING_FOR_APPROVAL_QUERY = gql`
  query {
    waitingforapproval {
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

export default function Example({ index }: any) {
  const { loading, error, data } = useQuery(WAITING_FOR_APPROVAL_QUERY);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [attachments, setAttachments] = useState<any[]>([
    { name: 'GST_certificate.pdf', size: '2.4mb' },
    { name: 'pan_Card.pdf', size: '4.5mb' },
    { name: 'sample.docx', size: '1.8mb' },
    { name: 'sample2.docx', size: '1.8mb' }, // Add more attachments as needed
  ]);

  useEffect(() => {
    if (!loading && data && data.waitingforapproval) {
      const singleApprovalData = data.waitingforapproval[index];

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
    setFormData((prevData) => ({
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

  return (
    <div className=' '>
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
            <button type="button" className="bg-sky-600 hover:bg-sky-700 text-white rounded-md shadow-md py-2 px-2">
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
